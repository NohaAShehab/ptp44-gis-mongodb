/// lecture demo 

// db will be created unless it contatins data 

// to create db
use gis44;

db.students.insertOne({"name":"ahmed", "track":"GIS"}) // insert new document
/// db will be created until it contains data 
db.students.insertOne({name:"noha", age:25})

// show collections //  display collections in this databases 

// get data from collection 
// select * from students;
db.students.find()



// select firstName , lastName from  instructors; 
db.instructors.find(
    {},  /// conditiion

    {firstName:1 , lastName:1 , _id:0}  // projection 
    
    )  // find accept 2 objects 


