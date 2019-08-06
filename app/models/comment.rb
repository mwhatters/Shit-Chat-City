class Comment < ApplicationRecord
	belongs_to :chatroom

	def serialize_comment
		{author: self.author, content: self.content}.to_json
	end




end
