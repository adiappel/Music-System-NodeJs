const app = require('express')();
const bodyParser = require('body-parser');
const db = require('./db_connection');
const port = process.env.PORT || 3000;

//import routes
const songs_route = require('./routes/songs');
const collections_route = require('./routes/collections');
const accounts_route = require('./routes/accounts');

//middleware
app.use(bodyParser.json());
app.use('/songs', songs_route);
app.use('/collections', collections_route);
app.use('/accounts', accounts_route);

//connect to DB
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("server connected to DB");
});

app.get('/', (req, res)=>{
    res.send('Hello there!');
});

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});