const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const request = require('supertest');
const fse = require('fs-extra'); // file operation module

const db = require('./public/db.json'); // load a json file

const h2p = require('html2plaintext');

const fname = './public/db.json';

const nodemailer=require('nodemailer');
const fs = require('fs')



var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./public/db.json');
const logger=function(fname, obj) {
    let r = Math.random().toString(36).substring(7);
    obj[0]=r;
    db.push(obj);
      json = JSON.stringify(db);
      fse.writeFile('public/db.json', json)
       

}

// parser for forms undefined problem when submit form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());

// views 
app.set('view engine', 'ejs');
app.set('views', 'views');


// email connection

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'the3cgreen@gmail.com',
      pass: 'Hesoyam123'
    }
  });
  


  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

app.post('/', (req, res) => {

    // verification
    function Store() {
        const body = req.body;
        var FirstName = h2p(req.body.FirstName);
       
        var LastName = h2p(req.body.LastName);
        var Email = h2p(req.body.Email);
        var Comment = h2p(req.body.Comment);
           
        var sub=[];
        var person = {};
      
        person["FirstName"]= FirstName,
        person["LastName"]= LastName,
        person["Email"]= Email,
        person["Comment"]= Comment,
         
        sub.push(person)
        // json_str_new = JSON.stringify(body);
        // res.send(json_str_new); 
       mailOption = {
            from :'the3cgreen@gmail.com', // sender this is your email here
            to : Email, // receiver email2
            subject: "Subscription Newsletter",
            html: `<b>Hi, ${FirstName} ${LastName}</b> <br>Thank you for subscribing.<br><br>
             Here is some more information about us:<br>
             <ul>
             <li>For complaints, comments and copyright information  – Please read our<a href="#"> guidance.</a></li>
             <li>For speaking and event invitations or to contact the Chief Executive, please email <a href = "mailto:privatethe3cgreen@gmail.com">privatethe3cgreen@gmail.com</a><br>
              If your request is urgent, please call +44 (0) 7585 104950 during working hours.</li>
             <li>For press enquiries only, please call +44 (0)20 8026 7793  / +44 (0)20 8720 2368 during working hours or  +44(0) 7940 703911 / +44 (0) 7766 366577 out of hours.
             <br> Please do not call these numbers unless you are a member of the news media.</li>
             </ul>
             <br>
             <p>It has been a remarkable 12 months. Globally, the impacts of the changing climate have become<br>
             increasingly visible. Public protests have led to widespread awareness of the risks of further<br>
             climate change - and the remedies. And we have seen a renewed desire from governments<br>
             around the world to step up their response.</p>
             <p>Here in the UK, there are grounds for optimism. In May, the Committee’s Net Zero report offered<br>
             compelling analysis of the need to reduce greenhouse gas emissions in the UK effectively to<br>
             zero by 2050 – and provided evidence that we could meet this new goal at a cost already agreed<br>
             by Parliament. The net-zero target meets the UK’s obligations under the Paris Agreement and<br>
             responds to the urgent need for action highlighted by the IPCC in last year’s landmark Special<br>
             Report on 1.5°C of global warming. </p>
             <p>We welcome strongly the UK Parliament’s decision to make net zero law – and the<br>
             corresponding decisions of the Welsh Assembly and the Scottish Parliament. These are positive<br>
             steps which are of fundamental consequence for the future path of our economy, our society<br>
             and the climate. Carbon neutrality has now become a mainstream goal.<br>
             </p>
             <p>But tougher targets do not themselves reduce emissions. New plans must be drawn up to<br>
             deliver them. And even if net zero is achieved globally, our climate will continue to warm in the<br>
             short-term, and sea level will continue to rise for centuries. We must plan for this reality. Climate<br>
             change adaptation is a defining challenge for every government, yet there is only limited<br>
             evidence of the present UK Government taking it sufficiently seriously</p>
             `
        }
        // store data 
        transporter.sendMail(mailOption,function(err,info) {
        
        if (err) {
                console.log(err)
            } else {
                logger(fname, person,function(error,res) {
           
                    if(error){
                        console.log(error);
                    }else{
                        console.log('Data Successfully insert');
                        
                    }
                })
               
            }
           
    })

    }

       Store();
       res.redirect('/');
    
})


app.listen(8000, function() {
    console.log('Server running at http://127.0.0.1:8000/');
  });
  