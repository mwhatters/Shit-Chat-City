class ChatroomsController < ApplicationController

	def index
		@chatrooms = Chatroom.all.order(:id)
		@room_presenter = {chatrooms: @chatrooms}
	end

	def show
		@chatroom = Chatroom.find_by(url: params[:id])
		@comment_presenter = {chatroom: {url: @chatroom.url, name: @chatroom.name}, comments: @chatroom.comments.last(4)}
	end
	
	def create
		@chatroom = Chatroom.new(name: params[:name], password: params[:password])
		@chatroom.save

		$redis.publish 'room-created', Chatroom.all.to_json
		if request.xhr?
			render json: Chatroom.all.to_json
		else
			redirect_to root_path
		end
	end


end
