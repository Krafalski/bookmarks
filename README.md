# bookmarks

### To run this app:
-> npm install  
-> npm start  
-> In Chrome: Go to localhost:3993

#### Deliverables

The idea behind this exercise is to develop a simple bookmarking site for personal use.
The user should be able to:
- Look at all current bookmarks
- Add a bookmark (a bookmark for purposes here means a url and a title both that the
user enters)
- Delete a bookmark
Requirements:
- Do not use a database for this. Store everything in a flat text file, sqlite database, etc.
- All server code should be easily reproducible. If the server code is written in Nodejs, for
instance, it should have a complete package.json file so that ‘npm install; npm start’ or similar is all we need to do to get it started. (Make sure you provide whatever command line we need to get it up and running.)
- The application should be designed to work over localhost.
- The server code should be as RESTful as possible.
- On the client side, do not use any external tools. CSS, plain Javascript, and HTML. No
Twitter Bootstrap, jQuery, etc. You  can use a reset stylesheet if you like, because those
things are a pain.
- Client side should still look nice, but you don’t have to go overboard.
- Client should have messaging. “Bookmark added.” “Bookmark deleted.” “Something
happened and can you please push the button again.” Nothing major, but there should be notification that the request has completed.
To make things easier:
- Efficiency is not an issue here. If the server is modifying a flat file containing json and it
starts to choke if it has more than a dozen bookmarks, that’s totally fine and don’t spend
time trying to improve it.
- Assume that this only has to run on a modern version of Chrome. Don’t bother
supporting anything else.
- Nothing about the bookmarks has to be present in the html when it first loads. An empty
page that gets all of its content over XHR is just fine.
- We don’t need any documentation or tests. Just it working.
- If something’s not itemized here, whatever you think is best is fine.
  - For instance, if someone adds a duplicate bookmark? It’s fine if you want to just make a duplicate entry, but it’s also fine if you want to add some error handling and return a message.

In summary: The important thing here is to have something complete and functional. If it behaves a little oddly, that’s fine, as long as it’s not actually broken.
