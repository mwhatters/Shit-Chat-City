class ChatroomsController < ApplicationController

	def index
		@chatrooms = Chatroom.all.order(:id)
		@room_presenter = {chatrooms: @chatrooms}
	end

	def show
		@chatroom = Chatroom.find_by(url: params[:id])
		@comment_presenter = {chatroom: {url: @chatroom.url, name: @chatroom.name}, comments: @chatroom.comments.last(4)}
	end


end
