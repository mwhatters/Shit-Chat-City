class Chatroom < ActiveRecord::Base
	has_many :comments
	after_create :generate_url

	def to_param
		"#{self.url}"
	end

	def generate_url
		self.update_attributes(url: SecureRandom.hex(6))
	end

	def last_four_comments
		arr = []
		arr << {url: self.url}
		self.comments.last(4).each do |comment|
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
