var mysql = require('mysql');
const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "" //put local password to mysql here if you want to test
  });
  con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

 module.exports = {

  search: (req) => {
   // console.log(req);
    var company_name = req.query.companyname;
    console.log(company_name)
   company_name= company_name.replace("_", " ");

    return new Promise((resolve, reject) => {

      con.query("select * from comparekarma.bootcamps where company_name like ?;",
      [company_name], (err, result) => {
        if (err) {
          console.log("source");
        } else {
          console.log(result);
          resolve(result);
        }
      });
    });
  },

  filter: (req) => {
   // console.log(req);
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
   if (cost==null){
      var orderBy =  " 1;";
      }else {
        if (cost=="asc") {

          orderBy = "cost ASC;";

        }
       if(cost=="desc") {

           orderBy ="cost DESC;";     

        }
      }
      console.log("here");
     return new Promise((resolve, reject) => {
       con.query("select * from comparekarma.bootcamps where course_format like ?"+
       " AND length_of_course like ?"+
       " AND  course_type like ? "+
       " order by ? ",
       [course_format,length_of_course,course_type,orderBy],  (err, result) => {
         if (err) {
           console.log("source");
         } else {
           console.log(result);
           resolve(result);
         }
       })
     });
   },
   queryAll: (req) => {
    // console.log(req);
  
 
     return new Promise((resolve, reject) => {
 
       con.query("select * from comparekarma.bootcamps;",
        (err, result) => {
         if (err) {
           
         } else {
           console.log(result);
           resolve(result);
         }
       });
     });
   }

 };




