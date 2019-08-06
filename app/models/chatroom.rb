class Chatroom < ApplicationRecord
  has_many :comments, dependent: :destroy
  after_create :generate_url

  def to_param
    "#{self.url}"
  end

  def generate_url
    self.update_attributes(url: SecureRandom.hex(6))
  end

  def last_comments(num)
    arr = []
    self.comments.last(num).each do |comment|
      arr.unshift( {id: 				comment.id,
                    author: 		comment.author,
                    content: 		comment.content,
                    created_at: comment.created_at,
                    updated_at: comment.updated_at
                    })
    end
    arr.unshift({url: self.url})
    arr.to_json
  end


end
