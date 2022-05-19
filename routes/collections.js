const express = require('express');
const router = express.Router();
const db = require('../db_connection');

router.get('/', (req, res)=>{
    res.send('Welcome to our collections section!');
});


//Get all empty collections
router.get('/allemptycollections', async (req, res)=>{
    let sql = 'SELECT * FROM collections WHERE num_of_songs=0';
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get collections by AccountsId
router.get('/by_account/:accountid', async (req, res)=>{
    let sql = `SELECT collections.title, collections.num_of_songs FROM collections WHERE account_id=${req.params.accountid}`;
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get collections by SongId
router.get('/with_song/:songid', async (req, res)=>{
    let sql = `SELECT collections.title, collections.num_of_songs, collections.account_id FROM collections JOIN collection_songs ON collections.id=collection_songs.collection_id WHERE collection_songs.song_id=${req.params.songid}`;
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get all collections
router.get('/all', async (req, res)=>{
    let sql = 'SELECT * FROM collections';
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

module.exports = router;