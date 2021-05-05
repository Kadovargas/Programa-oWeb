const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb+srv://jefferson:<marrygaganight>@cluster0.jkzpy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
                    { useUnifiedTopology: true}, (error, connection) => {
                        if(error) return console.log(error);
                        global.connection = connection.db("mongo");
                        console.log("Conectado!");
                    });

module.exports = {}                    