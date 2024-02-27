// connect to imported database 

db.product.find().count()


db.product.find({ brand_name: "Denny" }).count()


//I need to info about --> how the command is being processed 
db.product.find({ brand_name: "Denny" }).explain("executionStats")

/// use indecies to speed up search process 

// create index on the collection 

db.product.createIndex({ brand_name: 1 })


db.product.find({ brand_name: "Denny" }).explain("executionStats")




















