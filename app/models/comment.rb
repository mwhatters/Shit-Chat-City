class Comment < ActiveRecord::Base
	belongs_to :chatroom

	def serialize_comment
		{author: self.author, content: self.content}.to_json
	end

	def self.last_four_comments
		arr = []
		self.last(4).each do |comment|
			arr << {id: comment.id,
							author: comment.author, 
							content: comment.content, 
							created_at: comment.created_at,
							updated_at: comment.updated_at
						 }
		end
		arr.to_json
	end


end
