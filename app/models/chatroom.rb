class Chatroom < ActiveRecord::Base
	has_many :comments
	after_initialize :generate_url

	def to_param
		"#{self.url}"
	end

	def generate_url
		self.update_attributes(url: SecureRandom.hex(6))
	end

	
	 
end
