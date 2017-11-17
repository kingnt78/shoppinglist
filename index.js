var express = require("express"); 
var app = express(); 
var pg = require("pg");
var bodyParser =require('body-parser');
var pool = new pg.Pool({ 
user: "postgres",  
password: "nicki52378",
host: "localhost", 
port: 5432,  
database: "shopping", 
ssl: false 
});

 app.listen(5000, function () {
  console.log("JSON Server is running on 5000"); 
});

app.get("/items/", function(req, res) {
	pool.query("SELECT * FROM shopping_list").then(function(result) { 
	res.send(result.rows); });
 
  });
app.post('/items/', function(req, res){
	var items =req.body;
	pool.connect().then(function(client) {
		 client.query("INSERT INTO Contact(product, price)" + " VALUES($1::text, $2::text);"
							[items.product, items.price].then(function() {
			res.send("SUCCESS");		
		
	

app.delete('/items/:id', function (req,res){
	var id = req.params.id;
	pool.query("DELETE FROM Contact WHERE ID = $1::init", [id]).then(function(){
		// res.send("SUCCESS");
	}).catch(errorCallback);
});





  

