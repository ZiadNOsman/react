var cors = require('cors')
var express = require('express');
var app = express();
var sql = require("mssql");
var bodyParser = require('body-parser')

    // config for the database
var config = {
        user: 'smep',
        password: '!!Zizo!!',
        server: 'smep.database.windows.net', 
        database: 'smep' 
    };



app.use(bodyParser())
app.use(cors());

//InBox
app.get('/api/Inbox', function (req, res) {
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        var Jquery = `SELECT * FROM EMAIL WHERE Name = 'OTHER'`;
        
        request.query(Jquery,function(err,emails){
            if (err) console.log(err)

            // send records as a response
            res.send(emails)
        })
    });
});





// GET Emails for specific project



app.get('/api/Emails', function (req, res) {
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        const Project_Name = "P1"
        var Jquery = `SELECT * FROM EMAIL WHERE Name = '${Project_Name}'`;
        
        request.query(Jquery,function(err,emails){
            if (err) console.log(err)

            // send records as a response
            res.send(emails)
        })
    });
});




/*

//Get projects for a specific user


app.get('/api/projects', function (req, res) {
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        const userEmail = req.body.userEmail;

        request.query(`SELECT * FROM PROJECT WHERE Email_Address = '${userEmail}'`,function(err,project){
            if (err) console.log(err)

            // send records as a response
            res.send(project)
        })
    });
});







//For Drag and Drop 
//Update Project name of dragged email in Db

app.get('/api/Move', function (req, res) {
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        const EmailID = req.body.EmailID;
        const ToProject= req.body.ToProject;

        var Jquery = `UPDATE EMAIL SET Name = '${ToProject}' WHERE Id = '${EmailID}'`;
        
        request.query(Jquery,function(err,emails){
            if (err) console.log(err)

            // send records as a response
            res.send(emails)
        })
    });
});



*/


var server = app.listen(3001, function () {
    console.log('Server is running..');
});


