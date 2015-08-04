class CreateChatrooms < ActiveRecord::Migration
  def change
    create_table :chatrooms do |t|
    	t.string :name, null: false
    	t.string :url
    	t.string :password
      t.timestamps null: false
    end
  end
end
