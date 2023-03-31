//const { query } = require("express");
var nodemailer = require('nodemailer');
const express = require("express");
const app = express();
var db = require("./dbService/db");
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'imgUploadBusiness/')
  },
  filename: (req, file, cb) => {
    cb(null,  Date.now()+ "--"+ file.originalname)
  },
})
const upload = multer({ 
  storage: storage 
})


var nodemailer = require('nodemailer');

// for bypassing cors policy

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use('/getimg/', express.static(path.join(__dirname, 'imgUploadBusiness')));
  
app.get("/hello", function(req,res) {

  res.send("hello there!!!");

});


app.post('/image', upload.single('file'), (req, res) => {


  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})}
    else {

      
          db.imageUploadSQL(req).then(courses=> {

          res.send(JSON.stringify(courses));
      
        }).catch(err => 
        
          res.status(500).json({ error: err })
            
        );
    }



})

app.get("/imagepath", function(req,res) {
  console.log("imgpath here")

  db.getimgpath(req).then((result)=> {
    if (result)
    res.send({
      image:result[0].imgpath
    })

  }).catch(err => 
  
    res.status(500).json({ error: err })
      
  );



})





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
       
app.put("/newUser",function(req, res) {
  db.acceptNewBusiness(req)
    .then(user => {
      console.log(JSON.stringify(user));
    
      res.status(200).json({ status: true, result: "User Added Succesfully!" , business_id:user.insertId });
    })
    .catch(err => {

      console.error(err);
      
      res.status(500).json({ status: false, result: "User Not Added." });
    });
});
        
app.get("/verifyUser", function(req, res) {
  db.verify(req)
    .then(user => {
//        console.log(user);
console.log(user);
          if(user.length>0){
      // console.log(JSON.stringify(user));
      res.status(200).json({ status: true, result: "Valid Credentials", business_id: user[0].business_id  });

    } else {

      res.status(200).json({ status: false, result: "Invalid Credentials" });

    }

    })
    .catch(err => {

      console.error(err);
      
      res.status(500).json({ status: false, result: "Invalid Credentials" });
    });
});

app.get("/getBusinessInformation", function(req, res) {
  db.getBusinessInformation(req)
    .then(user => {
      console.log(JSON.stringify(user));
      res.send(JSON.stringify(user));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ status: false, result: "Business information not retrieved" });
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

app.get("/getBootcamp", function(req, res) {
  db.getBootcamp(req)
    .then(bootcamp => {
      console.log(JSON.stringify(bootcamp));
      res.send(JSON.stringify(bootcamp));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ status: false, result: "Bootcamp not retrieved" });
    })
})

app.delete("/deleteBusinessCourse", function(req, res) {
  db.deleteBusinessCourse(req)
    .then(result => {
      console.log(JSON.stringify(result));
      res.send(JSON.stringify(result));
    })
    .catch(err => {
      console.error(err);

      res.status(500).json({ status: false, result: "Bootcamp not deleted" });
    });
})

app.put("/updateBusinessCourse", function(req, res) {
  db.updateBusinessCourse(req)
    .then(result => {
      console.log(JSON.stringify(result));
      res.status(200).json({ status: true, result: "Bootcamp successfully updated" });
    })
    .catch(err => {
      console.error(err);

      res.status(500).json({ status: false, result: "Bootcamp update unsuccessful" });
    })
})

app.listen(8080);