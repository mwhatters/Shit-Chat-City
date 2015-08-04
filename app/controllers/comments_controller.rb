class CommentsController < ApplicationController
  def create
    @chatroom = Chatroom.find_by(url: params[:chatroom_id])
  	@comment  = Comment.new(author: params[:author], content: params[:content], chatroom_id: @chatroom.id)
  	@comment.save

  	Redis.current.publish 'comment-created', @chatroom.last_comments(70)
  	if request.xhr?
  		render json: @chatroom.last_comments(70)
  	else
  		redirect_to root_path
  	end
  end

end

