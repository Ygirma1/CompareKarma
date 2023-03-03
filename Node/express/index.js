//const { query } = require("express");
var nodemailer = require('nodemailer');
const express = require("express");
const app = express();
var db = require("./dbService/db");

var nodemailer = require('nodemailer');
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
       
        app.put("/newUser", function(req, res) {
            db.acceptNewBusiness(req)
              .then(user => {


                console.log(JSON.stringify(user));
                res.status(200).json({ status: true, result: "User Added Succesfully!", business_id:user.insertId });
              })
              .catch(err => {

                console.error(err);
                
                res.status(500).json({ status: false, result: "User Not Added." });
              });


   

          });
        
          app.get("/verifyUser", function(req, res) {
            db.verify(req)
              .then(user => {
                  console.log(user);
                    if(user){
               // console.log(JSON.stringify(user));
                res.status(200).json({ status: true, result: "Valid Credentials", business_id: user[0].business_id});

              } else {

                res.status(200).json({ status: false, result: "Invalid Credentials" });

              }

              })
              .catch(err => {

                console.error(err);
                
                res.status(500).json({ status: false, result: "Invalid Credentials" });
              });


   

          });

          app.put("/newBusinessCourse", function(req, res) {
            db.acceptNewBusinessCourse(req)
              .then(course => {

                console.log(JSON.stringify(course));
                res.status(200).json({ status: true, result: "Course Added Succesfully!" });
              })
              .catch(err => {

                console.error(err);
                
                res.status(500).json({ status: false, result: "Course Not Added." });
              });


          });

          app.get("/getBusinessCourses", function(req, res) {
            db.getBusinessCourses(req)
              .then(courses => {


                console.log(JSON.stringify(courses));
                res.send(JSON.stringify(courses));
              })
              .catch(err => {

                console.error(err);
                
                res.status(500).json({ status: false, result: "Bootcamps not retrieved" });
              });


   

          });

app.listen(8080);