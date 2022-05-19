const express = require('express');
const router = express.Router();
const db = require('../db_connection');

router.get('/', (req, res)=>{
    res.send('Welcome to our accounts section!');
});

//Get all active users
router.get('/allactiveusers', async (req, res)=>{
    let sql = 'SELECT first_name, last_name FROM accounts WHERE is_active=1';
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

//Get all accounts
router.get('/all', async (req, res)=>{
    let sql = 'SELECT * FROM accounts';
    try{
        let [rows, fields] = await db.promise().query(sql);
        res.send(rows);
        console.log(rows);
    }catch(err){
        res.json({Message: err});
    }
});

module.exports = router;