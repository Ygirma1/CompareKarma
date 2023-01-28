//const { query } = require("express");
const express = require("express");
const app = express();
var db = require("./dbService/db");


// for bypassing cors policy
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));




  
app.get("/hello", function(req,res) {

res.send("hello there!!!");

});


app.get("/query", function(req,res) {
    // const { q } = req.query; 

    console.log("we got here");
    
    db.queryAll(req).then(courses=> {

            res.send(JSON.stringify(courses));

    }).catch(err=> 
    
        res.status(500).json({ error: err })
        
    );



   
    });


app.get("/search", function(req,res) {
   
    
    db.search(req).then(courses=> {

            res.send(JSON.stringify(courses));

    }).catch(err=> 
    
        res.status(500).json({ error: err })
    
    );

           
    });

    app.get("/filter", function(req,res) {
    
    db.filter(req).then(courses=> {

        res.send(JSON.stringify(courses));

}).catch(err=> 

    res.status(500).json({ error: err })

);
    
    
        });

     

app.listen(8080);