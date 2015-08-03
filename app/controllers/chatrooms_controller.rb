class ChatroomsController < ApplicationController

	def index
		@chatrooms = Chatroom.all.order(:id)
	end

	def show
		@chatroom = Chatroom.find_by(url: params[:id])
		p "8" * 100
		p params[:id]
		p @chatroom
		p "8" * 100
		@comment_presenter = {chatroom: @chatroom.url, comments: @chatroom.comments.last(4)}
	end


end
