class CommentsController < ApplicationController
  def create
    @chatroom = Chatroom.find_by(url: params[:id])
  	@comment = Comment.new(author: params[:author], content: params[:content])
  	@comment.save

  	$redis.publish 'comment-created', Comment.last_four_comments
  	if request.xhr?
  		render json: Comment.last(4)
  	else
  		redirect_to root_path
  	end
  end

end

