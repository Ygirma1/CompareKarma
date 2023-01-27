//const { query } = require("express");
const express = require("express");
var mysql = require('mysql');
const app = express();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "" //put local password to mysql here if you want to test
  });


// for bypassing cors policy
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
  
app.get("/hello", function(req,res) {

res.send("hello there!!!");

});


app.get("/query", function(req,res) {
    // const { q } = req.query; 
    con.query("select * from comparekarma.bootcamps;", function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    });


app.get("/search", function(req,res) {
    var company_name = req.query.company_name;
    console.log(company_name)
   company_name= company_name.replace("_", " ");
    con.query("select * from comparekarma.bootcamps where company_name like '" +company_name.toString()+ "';", function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    


    });

    app.get("/filter", function(req,res) {
      //  var filter = req.query.course_format;
      //  console.log(company_name)
        
    //   company_name= company_name.replace("_", " ");
        con.query(filterReader(req), function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
            res.send(JSON.stringify(result));
          });
        
    
    
        });

        function filterReader (req) {
            var course_format;
            var length_of_course;
            var course_type;
            var cost;
                if (req.query.course_format !=null ) {
                    course_format = req.query.course_format;

                }else {
                      
                    course_format = "%";
                }
                if (req.query.length_of_course !=null ) {
                    length_of_course = req.query.length_of_course;

                }else {
                      
                    length_of_course = "%";
                }
                if (req.query.course_type !=null ) {
                    course_type = req.query.course_type;

                }else {
                      
                   course_type = "%";
                }
                if (req.query.cost !=null ) {
                    cost = req.query.cost;

                }else {
                      
                   cost= "%";
                }



                    

     var   query = "select * from comparekarma.bootcamps where course_format like '" + course_format.toString()+
                        "' AND length_of_course like '" + length_of_course.toString()+
                        "' AND  course_type like '"+ course_type.toString()+"'  ";

                        if (req.query.cost !=null ) {
                            cost = req.query.cost;

                                if (cost=="asc") {

                                        query += "order by cost ASC;";

                                      }
                                     if(cost=="desc") {

                                        query += "order by cost DESC;";     

                                      }
                        } else {
                              
                            query += ";";
                        }
                console.log(query);
            return query;
        }

app.listen(8080);