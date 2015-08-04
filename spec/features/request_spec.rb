require 'rails_helper'
require 'database_cleaner'

	def add_window_and_submit_chat(room)
		page.driver.execute_script( "window.open()" )
		new_window = page.driver.browser.window_handles.last 
		page.within_window new_window do
  		visit '/'
  		click_link(room)
  		fill_in "Your name", with: Faker::Name.name
  		fill_in "Say something.", with: Faker::Lorem.paragraph
  		click_button('Send')
  		sleep(1)
		end
	end

	def visit_page_and_make_room(room, user)
		visit "/"
		fill_in "Name", with: room
		fill_in "Password", with: 'ultrasecretpassword'
		click_button('Create Room!')
		sleep(1)
		click_link(room)
		sleep(1)

		fill_in "Your name", with: user
		fill_in "Say something.", with: Faker::Lorem.paragraph
		click_button('Send')
	end

	

describe "the process" do
	it "should visit the homepage" do
		visit '/'
		expect(page).to have_content("SHIT CHAT CITY")
	end
end


describe "making chatrooms" do
	it "should make a new chatroom" do

		visit_page_and_make_room('shitty chat room', 'mr.robot')
		4.times { add_window_and_submit_chat('shitty chat room') }

		click_link('Back to ChatRooms')

		visit_page_and_make_room('lets talk gandhi', 'gandhi')
		4.times { add_window_and_submit_chat('lets talk gandhi') }

		expect(page).to have_content('lets talk gandhi')
	end
end