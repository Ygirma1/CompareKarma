var mysql = require('mysql');
const hbs = require('nodemailer-express-handlebars')
require('dotenv').config({path:'../../.env'})

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.DBPASS //put local password to mysql here if you want to test
  });
  const path = require('path')
  var nodemailer = require('nodemailer');
  con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS
    }
  });

  const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};
transporter.use('compile', hbs(handlebarOptions));
  
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
    } else {
      course_format = "%";
    }

    if (req.query.length_of_course !=null ) {
      length_of_course = req.query.length_of_course;
    } else { 
      length_of_course = "%";
    }

    if (req.query.course_type !=null ) {
      course_type = req.query.course_type;
    } else {  
      course_type = "%";
    }

    if (cost==null){
      var orderBy =  " 1;";
    } else {
      if (cost=="asc") {
        orderBy = "cost ASC;";
      }
      if(cost=="desc") {
        orderBy ="cost DESC;";
      }
    }

    console.log("here");
    return new Promise((resolve, reject) => {
      con.query("select * from comparekarma.bootcamps where course_format like ?"
        + " AND length_of_course like ?"
        + " AND  course_type like ? "
        + " order by ? ",
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
    var verified = false;
    var profit_status = req.query.profit_status;
    var email = req.query.email;
    var business_password = req.query.business_password;
    var course_type = req.query.course_type;
    
    var business_name = req.query.business_name;
    var phone_number = req.query.phone_number;
    var business_desc = req.query.business_desc;

    return new Promise((resolve, reject) => {
      const query = "select email from comparekarma.business_user where email=\"" + email + "\";"; 
      console.log("query: ", query)
      con.query(query, (err, result) => {
        console.log("duplicate email check result: ", result);
        if (err) {
          console.error(err.message);
          console.log("failed to insert business user");
        } else if (result.length > 0) {
          console.error("Error adding user: email already exists");
          reject(false);
          return;
        }
      })

      bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) {
          console.error("Error generating salt: ", err);
          return;
        }
        bcrypt.hash(business_password, salt, function(err, hash) {
          if (err) {
            console.error("Error hashing password: ", err);
            return;
          }
          con.query("insert  into   comparekarma.business_user (business_name, phone_number, business_desc, verified, profit_status,email,business_password,course_type,salt) "+
            " values (?, ?, ? , ? , ?, ?, ?, ?, ?);",
            [business_name,phone_number,business_desc,verified,profit_status,email,hash,course_type,salt],  (err, result) => {
            if (err) {
              console.error(err.message);
    
              console.log("failed to insert business user");
            } else {
              console.log(result);
    
              var mailOptions = {
                from: 'annettepan01@gmail.com',
                to: email.toString(),
                subject: 'Confirmation Email For CompareKarma',
                template: "email",
                context:{
                  business_user:  business_name
    
                }
              };

              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              
              resolve(result);
            }
          })
        });
      
      });
    });
  },

  verify: (req)=> {
    return new Promise((resolve, reject) => {
      var email = req.query.email;
      var password = req.query.password;
      con.query("select business_password,business_id from comparekarma.business_user where email = ? ;", [email], 
        (err, results) => {
        if (err) {
          console.log("business pass error");
          console.log(err);
          resolve(false);
        } else {
          if (results.length>0) {
          //console.log(result[0].business_password);
            bcrypt.compare(password.toString(), results[0].business_password)
              .then(result => {
             
                if (result){
               //   console.log(results);
                  resolve(results);
                }
                else resolve(false);
            })
          } else resolve(false);
        }
    });
    });
  },

  getBusinessCourses: (req)=> {
    // provide me the user ID
    //I pull all from the backend
    console.log("here");
    return new Promise((resolve, reject) => {
      var business_id = req.query.business_id;
      console.log(business_id);
      con.query("select * from comparekarma.bootcamps where business_id = ? ;",[business_id],
        (err, result) => {
        if (err) {
          console.log("Could not retrieve bootcamps");
          console.log(err);
          reject(false);
        }
        if (result.length<1) {
          console.log("result length: " + result.length);
          reject(false); // resolve maybe an empty array?
        }
        console.log(result);
        resolve(result);
      })
    });
  },

  acceptNewBusinessCourse : (req)=> {
    var company_name= req.query.company_name;
    var course_format=req.query.course_format;
    var course_name = req.query.course_name;
    var length_of_course= req.query.length_of_course;
    var cost= req.query.cost;
    var description_of_bootcamp = req.query.description_of_bootcamp;
    var review_score=req.query.review_score;
    var course_type = req.query.course_type;
    var business_id=req.query.business_id;
    var link=req.query.link;
    var sponsored=false;

    return new Promise((resolve, reject) => {
      con.query("insert into comparekarma.bootcamps (company_name, course_format,course_name, length_of_course, cost, description_of_bootcamp,review_score,course_type,business_id,link,sponsored) "+
      " values (?, ?, ? , ? , ?, ?, ?, ?, ?, ?, ?);",
      [company_name, course_format,course_name, length_of_course, cost, description_of_bootcamp,review_score,course_type,business_id,link,sponsored],  (err, result) => {
        if (err) {
          console.error(err.message);

          console.log("failed to insert business courses");
        } else {
          console.log(result);
          resolve(result);
        }
      })

      bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) {
          console.error("Error generating salt: ", err);
          return;
        }
        bcrypt.hash(business_password, salt, function(err, hash) {
          if (err) {
            console.error("Error hashing password: ", err);
            return;
          }
          con.query("insert  into   comparekarma.business_user (business_name, phone_number, business_desc, verified, profit_status,email,business_password,course_type,salt) "
          + " values (?, ?, ? , ? , ?, ?, ?, ?, ?);",
          [business_name,phone_number,business_desc,verified,profit_status,email,hash,course_type,salt],  (err, result) => {
            if (err) {
              console.error(err.message);
    
              console.log("failed to insert business user");
            } else {
              console.log(result);
              var mailOptions = {
                from: 'annettepan01@gmail.com',
                to: email.toString(),
                subject: 'Confirmation Email For CompareKarma',
                template: "email",
                context:{
                  business_user:  business_name
                }
              };
              transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              resolve(result);
            }
          })
        });
      });
    });
  }
}

function comparePassword(plaintextPassword, hash) {
console.log(plaintextPassword);
console.log(hash);

bcrypt.compare(plaintextPassword, hash)
  .then(result => {
    console.log(result);
if (result){
  return Boolean([true]);
}
else return Boolean([false]);
    
  
  })
  .catch(err => {
  console.log(err)
  })


  }
  
