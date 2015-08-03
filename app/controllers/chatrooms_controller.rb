class ChatroomsController < ApplicationController

	def index
		@chatrooms = Chatroom.all
	end

	def show
		@chatroom = Chatroom.find_by(url: params[:id])
		@comment_presenter = {comments: @chatroom.comments.last(4)}
	end


end
