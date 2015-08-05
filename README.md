### Shit Chat City

This app was built on the premise that people will say some seriously weird shit if introduced to a foreign app that maintains complete anonymity. This premise has already been proven true with the likes of 4chan, reddit, etc..., but I wanted to breed a similar environemnt and see it happen before my very eyes.

It's also an experiment with using a once-foreign application architecture to build a realtime app.

## comment-realtime-architecture

1. Rails functioning as a database, storing comments and chatrooms in a postgresql database
2. Rails publishing its created event to a redis store.
3. Separately, a node server is subscribed to redis and pulls any data published to it from the rails server.
4. The node server takes advantage of socket.io to create a websocket for the transmission of this data to all currently-connected clients through a react-rendered view.
5. React listens for data pushed through this websocket and rerenders the relevant portions of the view anytime a single client submits a comment.

This has been a big challenge, but a really rewarding experience. From this architecture I intend to build my full application -- a multi-room which users can created and destroy. Granted, I didn't get all of this done in the weekend I worked on it, but there's definitely room for growth:

## functionality

Ultimately, ShitChatCity is a chatroom service, in which users can anonymously generate rooms in which they can enter and chat with other users. Anonymity is key here, but adding additional functionality could turn this prototype into a full-fledged, shitty chat service.

## How to contribute:

# Cloning the Project

This project is fronted by Rails and React, using a separate Node.Js application to render client interactions in real-time.
Clone this project into a repo, and clone the node server as well. That can be found here:

```
https://github.com/mwhatters/ssc-node
```

You'll also need to install redis, the data-store used to pass information between these servers. With brew:

```
brew install redis
```

Once you've got these guys ready, boot up your servers to see the project on your local machine, using
```
rails s
redis-server
node index.js
```

This version of the project is currently still in development mode, so all the ports should be properly connected. Double check that both RoomBox.js.jsx and CommentBox.js.jsx are pointing to localhost:5001 and that the node server is listening to the local redis client. Rails has been configured to handle both the development and production environment without problems. This leads us to areas I need to improve:

# Configuring environments

Work needs to be done in configuring our environment variables within our React views and the node server. 

# Refactoring React

This page is not quite single page, and needs a wrapper component to bring our rooms and comments components together.

# Additional Features

There's a lot of basic features a chat app should have that I didn't include, some of them being:

1. Being able to see realtime updates of how many people are in a room, from both the front page and within a specific room
2. Improving UX for individual chat rooms
3. Deleting rooms, provided a correct password.
4. An Analytics tool to see just how awful people are -- perhaps analyzing most popular words, usernames, etc. All data is stored, it's rich.

## Last thoughts

It's fun to see how you can actually make something semi-cool in a weekend with almost no experience. If you actually somehow are reading this, send me comments and suggestions for improvements on my code, I'd be forever grateful.






