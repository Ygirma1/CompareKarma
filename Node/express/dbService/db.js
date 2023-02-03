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
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

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
   },
   acceptNewBusiness : (req)=> {


    var business_name= req.query.business_name;
    var phone_number = req.query.phone_number;
    var business_desc=req.query.business_desc;

    var verified = false;
    var profit_status= req.query.profit_status;
    var email=req.query.email;
    var business_password = req.query.business_password;
    var course_type= req.query.course_type;
    var salt;
    console.log(business_password);

 var bhash =   bcrypt
  .genSalt(saltRounds)
  .then(salts => {
    salt = salts;
    console.log('Salt: ', salts)
    return bcrypt.hash(business_password, salts)
  })
  .then(hash => {
    console.log('Hash: ', hash)
  })
  .catch(err => console.error(err.message)
)

console.log(bhash.toString()+ "this is bhash");
/// make sure to hash the pasword
    return new Promise((resolve, reject) => {
      con.query("insert  into   comparekarma.business_user (business_name, phone_number, business_desc, verified, profit_status,email,business_password,course_type,salt) "+
      " values (?, ?, ? , ? ,?,?,?,?,?);",
      [business_name,phone_number,business_desc,verified,profit_status,email,"pass",course_type,salt],  (err, result) => {
        if (err) {
          console.error(err.message);
          console.log("failed to insert business user");
        } else {
          console.log(result);
          resolve(result);
        }
      })
    });

 }



 }
