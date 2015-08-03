class CreateChatrooms < ActiveRecord::Migration
  def change
    create_table :chatrooms do |t|

      t.timestamps null: false
    end
  end
end
