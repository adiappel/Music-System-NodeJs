const express = require('express');
const router = express.Router();
const db = require('../db_connection');

router.get('/', (req, res)=>{
    res.send('Welcome to our songs section!');
});

//Get songs by CollectionId
router.get('/in_collection/:collectionid', async (req, res)=>{
    let sql = `SELECT songs.name, songs.duration, songs.rate FROM songs JOIN collection_songs ON songs.id=collection_songs.song_id WHERE collection_songs.collection_id=${req.params.collectionid}`;
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get all songs by UserId (use Collection)
router.get('/by_account/:accountid', async (req, res)=>{
    let sql = `SELECT songs.name, songs.duration, songs.rate FROM songs JOIN collection_songs ON songs.id=collection_songs.song_id JOIN collections ON collections.id=collection_songs.collection_id WHERE collections.account_id=${req.params.accountid}`;
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get all songs and for each one - display collection Tittle
router.get('/allwithtitle', async (req, res)=>{
    let sql = `SELECT songs.name, songs.duration, songs.rate, collections.title FROM songs JOIN collection_songs ON songs.id=collection_songs.song_id JOIN collections ON collection_songs.collection_id=collections.id`;
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get all songs
router.get('/all', async (req, res)=>{
    let sql = 'SELECT * FROM songs';
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

module.exports = router;