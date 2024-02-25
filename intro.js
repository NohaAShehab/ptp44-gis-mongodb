//// 
// 
db.instructors.find()

// insert new instructor 
db.instructors.insertOne({name:"ahmed", track:"GIS"})

// display all instructor 
db.instructors.find()

// insert many instructorsss

let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
				
                ,{
	"_id": 10,
	"firstName": "badr",
	"lastName": "ahmed",
	"age": 22.0,
	"salary": 5550.0,
	"address": {
		"city": "cairo",
		"street": 10.0,
		"building": 8.0
	},
	"courses": [
		"sqlserver",
		"mvc",
		"signalR",
		"asp.net"
	]
},
{
	"_id": 2,
	"firstName": "mona",
	"lastName": "mohammed",
	"age": 21.0,
	"salary": 3600.0,
	"address": {
		"city": "mansoura",
		"street": 20.0,
		"building": 18.0
	},
	"courses": [
		"es6",
		"js",
		"mongodb",
		"expressjs"
	]
},
{
	"_id": 3,
	"firstName": "mazen",
	"lastName": "ali",
	"age": 30.0,
	"salary": 7010.0,
	"address": {
		"city": "cairo",
		"street": 10.0,
		"building": 5.0
	},
	"courses": [
		"asp.net",
		"mvc",
		"EF"
	]
},
{
	"_id":4,
	"firstName": "ebtesam",
	"lastName": "ahmed",
	"age": 28.0,
	"salary": 6200.0,
	"address": {
		"city": "mansoura",
		"street": 14.0,
		"building": 7.0
	},
	"courses": [
		"js",
		"html5",
		"signalR",
		"expressjs",
		"bootstrap",
		"es6"
	]
}];



print(instructorsArray)



// insert many objects in the monogdb 

db.instructors.insertMany(instructorsArray)


//// 


// select * from instructors;

db.instructors.find()


// select specific field 

db.instructors.find({}, {})  // find accept 2 objects 


/// select * from instructors where id = 6;
db.instructors.find(
        {_id: 6},  /// conditiion

        {}  // projection 
        
        )  // find accept 2 objects 




// select firstName , lastName from  instructors; 
db.instructors.find(
        {},  /// conditiion

        {firstName:1 , lastName:1}  // projection 
        
        )  // find accept 2 objects 







// select firstName , lastName from  instructors; 
// db.instructors.find(
//         {},  /// conditiion
// 
//         {firstName:1 , lastName:1, _id:0}  // projection 
//         
//         )  // find accept 2 objects 
// 






db.instructors.find(
     

        {firstName:1 , lastName:1, _id:0}  // projection 
        
        )  // find accept 2 objects ---> mongo consider that is object represent condition not projection 



// create collection 
        
       db.createCollection("subjects")



// to show collections 
 show collections

let minnn = 0
        let maxx = 0 
       
db.instructors.find({}).forEach((document)=>{
 print(document.firstName);
})
































