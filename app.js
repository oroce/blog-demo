"use strict";
var
	express = require( "express" ),
	mongoose = require( "mongoose" ),
	http = require( "http" ),
	path = require( "path" );

mongoose.connect( process.env.MONGODB_URL||"mongodb://localhost:27017/blog" );

var app = express();

var PostModel = require( "./lib/model/post" );

app.configure(function(){
	app.set( "view engine", "html" );
	app.engine("html", require( "hogan-express" ));
	app.set( "views", path.join( __dirname, "/views" ) );
	app.use( express.bodyParser() );
	app.use( express.favicon() );
	app.use( app.router );
});

app.configure('development', function () {
	app.use( express.static( "app" ) );
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
	app.use(express.errorHandler());
});

app.param( "postId", function( req, res, next ){
	PostModel
		.findById( req.param( "postId" ) )
		.exec(function( err, result ){
			if( err ){
				return next( err );
			}
			if( !result ){
				return res.send( 404 );
			}
			req.postItem = result;
			next();
		});
});

app.get( "/", function( req, res, next ){
	res.format({
		html: function(){
			res.render( "index" );
		},
		json: function(){
			PostModel
				.find()
				.exec(function( err, result ){
					if( err ){
						return next( err );
					}
					res.json( result );
				});
		}
	});
});

app.post( "/new", function( req, res, next ){
	var post = new PostModel({
		title: req.param( "title" ),
		body: req.param( "body" )
	});

	post.save(function( err ){
		if( err ){
			err.statusCode = 400;
			return next( err );
		}
		res.format({
			html: function(){
				res.redirect( "/" + post.id );
			},
			json: function(){
				res.json( post );
			}
		});
	});

});

app.get( "/:postId", function( req, res ){
	var post = req.postItem;
	res.formatter({
		html: function(){
			res.render( "post" );
		},
		json: function(){
			res.json( post );
		}
	});
});

app.get( "/:postId/edit", function( req, res ){
	var post = req.postItem;
	res.format({
		html: function(){
			res.render( "post" );
		},
		json: function(){
			res.json( post );
		}
	});
});

app.put( "/:postId/edit", function( req, res, next ){
	var post = req.postItem;

	post
		.update({
			title: req.param( "title" ),
			body: req.param( "title" )
		})
		.exec(function( err, result ){
			if( err ){
				err.statusCode = 400;
				return next( err );
			}
			res.formatter({
				html: function(){
					res.redirect( "/" + post._id );
				},
				json: function(){
					res.json( result );
				}
			});
		});
});

if( !module.parent ){
	var server = http.createServer( app )
		.listen( process.env.PORT||3000, function( err ){
			if( err ){
				return console.log( "cannot bind http server", err );
			}
			console.log( "Server is listening on: ", server.address().port );
		});
}
else{
	module.exports = app;
}
