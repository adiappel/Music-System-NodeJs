# Music-System-NodeJs

The Music System app includes songs, collections and accounts.
All files are in the master branch.

The app is on http://localhost:3000/

* Get all songs:
   http://localhost:3000/songs/all
    
* Get songs by CollectionId:
   http://localhost:3000/songs/in_collection/:collectionid
    
* Get all songs by UserId (use Collection)
   http://localhost:3000/songs/by_account/:accountid
  
* Get all songs and for each one - display collection Tittle
   http://localhost:3000/songs/allwithtitle

* Get all collections
   http://localhost:3000/collections/all

* Get collections by AccountsId
   http://localhost:3000/collections/by_account/:accountid
   
* Get all empty collections
    http://localhost:3000/collections/allemptycollections

* Get collections by SongId
    http://localhost:3000/collections/with_song/:songid

* Get all accounts
    http://localhost:3000/accounts/all

* Get all active users
    http://localhost:3000/accounts/allactiveusers
 
 
 For testing purposes we have:
 - 4 accounts (3 active and 1 inactive)
 - 5 collections (1 with 4 songs, 2 with 3 songs and 2 empty collections)
 - 9 songs (all of them are in collections, one of them is in two different collections)

check out the collections and who created them, you might know some of our accounts.

Have a great day :)
