const client = require('./connection.js')
const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors({
    origin: '*'}));
    

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})


client.connect();



app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.get('/rating', (req, res)=>{
    client.query(`Select * from rating`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/history', (req, res)=>{
    client.query(`Select * from history`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.get('/joining', (req, res)=>{
    client.query(`Select * from joining`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.get('/exp', (req, res)=>{
    client.query(`Select * from exp`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/ctc', (req, res)=>{
    client.query(`Select * from ctc`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into users( name, contact, email, currentcompany, location, skill, tower, currentstatus) 
                       values( '${user.name}', '${user.contact}', '${user.email}', '${user.currentcompany}', '${user.location}', '${user.skill}', '${user.tower}', '${user.currentstatus}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})



app.delete('/users/:contact', (req, res)=> {
    let insertQuery = `delete from users where contact=${req.params.contact}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})