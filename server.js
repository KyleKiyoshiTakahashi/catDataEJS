const path = require("path");

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname+ "/static"));

app.get('/cats', function(req, res){
	var cats=[
		{image:"/images/cat1.jpg", name: "Tom", favorite_food: "burgers", age: "103", sleeping_spots: ["in my bed", "in my cage"]},
		{image:"/images/cat2.jpg", name: "Glom", favorite_food: "spam", age: "15", sleeping_spots: ["in my room", "in my mansion"]}
	];
	
	res.render('cats', {cats: cats});
})

app.get('/:id', function(req, res){

	if(req.params.id === "Tom"){
		console.log(req.params.id)
		var cat=[
		{image:"/images/cat1.jpg", name: "Tom", favorite_food: "burgers", age: "103", sleeping_spots: [" in my bed", " in my cage"]}
		];
		res.render('details', {cat: cat});
	} else if (req.params.id === "Glom"){
		console.log(req.params.id)
		var cat=[
		{image:"/images/cat2.jpg", name: "Glom", favorite_food: "spam", age: "15", sleeping_spots: [" in my room", " in my mansion"]}
		];
		res.render('details', {cat: cat});
	} else {
		res.redirect('/cats');
	}

	
})

app.listen(8000, function() {
  console.log("listening on port 8000");
});