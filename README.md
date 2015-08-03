# comment-realtime-architecture


This is an experiment with using a 'flux'-esque architecture to create a real-time app. 

There's a few things going on with this architecture:

1. Rails functioning as an API endpoint for storing comments in a postgresql database
2. Rails publishing its created event to a redis store.
3. Separately, a node server is subscribed to redis and pulls any data published to it from the rails API.
4. The node server takes advantage of socket.io to create a websocket for the transmission of this data to all currently-connected clients through a react-rendered view.
5. React listens for data pushed through this websocket and rerenders the relevant portions of the view anytime a single client submits a comment.

This has been a big challenge, but a really rewarding experience. From this architecture I intend to build my full application -- a multi-room music/chat service, which users can created and destroy.

The musical portion of this application will be a stretch challenge for me given the time constraints.