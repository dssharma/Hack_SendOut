# Hack_SendOut

## Setup MongoDb
Download MongoDb from https://www.mongodb.com/download-center?jmp=nav#community
Goto C:\Program Files\MongoDB\Server\3.4\bin (or equivalent folder) and
```
  mongod --dbpath C:\Codes\Hack\Hack_SendOut\data
```
Goto C:\Program Files\MongoDB\Server\3.4\bin (or equivalent folder) and
```
  mongo
  use NAME_OF_DB_FILE
```
In the app.js file
```
  mongoose.connect('mongodb://localhost/NAME_OF_DB_FILE')
```
