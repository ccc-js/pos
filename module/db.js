//db類


var MongoClient = require('mongodb').MongoClient;
var Config = require('./config.js');

class DB{

	static getInstance(){

		if(!DB.instance){

			DB.instance = new DB();

		}
		return DB.instance
	}


	constructor(){
		this.connect();
	}

	//連接數據庫
	connect(){

		return new Promise((resolve, reject)=>{


			MongoClient.connect(Config.db_url, (err, client)=>{

			if(err){
				reject(err)
			}else{

				var db = client.db(Config.db_name);

				resolve(db)

			}

		})


		})
	}

	find(collection_name, json){


		return new Promise((resolve, reject)=>{

			this.connect().then((db)=>{

				var result = db.collection(collection_name).find(json)

				result.toArray(function(err, docs){

					if(err){
						reject(err)
					}else{

						resolve(docs)

					}


				})

			})



		})


	}



	insert(collection_name, json){


		return new Promise((resolve, reject)=>{

			this.connect().then((db)=>{

				db.collection(collection_name).insertOne(json, function(err, result){

					if(err){
						reject(err)
					}else{

						resolve(result)

					}

				})


			})



		})


	}



	remove(collection_name, json){


		return new Promise((resolve, reject)=>{

			this.connect().then((db)=>{

				db.collection(collection_name).removeOne(json, function(err, result){

					if(err){
						reject(err)
					}else{

						resolve(result)

					}

				})


			})



		})


	}

}


module.exports = DB.getInstance();