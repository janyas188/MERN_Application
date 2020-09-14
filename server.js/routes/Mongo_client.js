var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://rehl01:20021/";
var fs = require('fs');



    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("shop");

        dbo.collection("collection").find({}).project({ "_id": 0 }).toArray(function (err, result) {
            if (err) throw err;
            //console.log(result[0])

            this.data = JSON.stringify(result);

            fs.writeFile("../server.js/public/misc/input.json", this.data, function (err) {
                if (err) throw err;
                console.log('complete');
            });

            db.close();
        });
    });



