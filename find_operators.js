
/// find operators 
// get instructors with id > 8

db.instructors.find(
    {
        _id: { $gt: 8 }
    } // condition

    , {} // projection 
)


// salary == 3600 

db.instructors.find(
    {
        salary: 3600
    }, // condition
    {}  // projection 

)



db.instructors.find(
    {
        salary: { $eq: 3600 }
    }, // condition
    {}  // projection 

)

///   $in operator in mongo 

db.instructors.find(
    {
        salary: { $in: [3600, 3500] }
    }, // condition
    {}  // projection 

)

// logical operators 


// and 

db.instructors.find(
    {
        salary: 3600, firstName: "mona"
    }, // condition
    {}  // projection 

)




db.instructors.find({

    firstName: "mona", salary: 3600
}
    }  // condition
, {})


db.instructors.find({ firstName: "noha", salary: 3600 })


// top level operator 

db.instructors.find({

    $and: [{ salary: 3600 }, { firstName: "mona" }]

}, {})


db.instructors.find({

    $or: [{ salary: 3600 }, { firstName: "noha" }]

}, {})


// embbedd objects 
// get instructors city="cairo"



db.instructors.find(
    {
        address: "cairo"
    }, // condition
    {}  // projection 

)



db.instructors.find(
    {
        address: { "city": "cairo" }
    }, // condition
    {}  // projection 

)



db.instructors.find(
    {
        address.city: "cairo"
 }, // condition
    {}  // projection 

)


db.instructors.find(
    {
        "address.city": "cairo"
    }, // condition
    {}  // projection 

)


///****************** Array operators  ***************************/


// array operator :: arrayname: value_inside the Array(/
// mongo will return with document contains this valueOf(//
// in the sepecified array 
db.instructors.find(
    {
        courses: "mvc"
    }, // condition
    {}  // projection 

)


// instructor teaches mvc and EF 

db.instructors.find(
    {
        courses: ["mvc", "EF"]  // courses contains "mvc" and "EF" only
    }, // condition
    {}  // projection 

)

// all operator 

db.instructors.find({

    courses: { $all: ["mvc", "EF"] }

}, {})


/// get documents with courses contains mvc or EF ? 


db.instructors.find({

    courses: { $in: ["mvc", "EF"] }

}, {})



/// ---> get instructor --> teaches 3 courses only 



db.instructors.find({

    courses: { $size: 3 }

}, {})





/// 


db.instructors.insertOne({
    firstName: "Ahmed",
    lastName: "Ali",
    subjects: [
        10,
        11,
        12
    ]


})

/// get object --> subjects ---> element value > 8
// ******************* Apply condition on element on the Array(*******



db.instructors.find({

    subjects: { $elemMatch: { $gt: 3 } }

}, {})



db.instructors.find({

    subjects: { $elemMatch: { $gt: 3, $lt: 5 } }

}, {})


///  exists operator 


db.instructors.insertOne({ name: "noha", "track": "gis" })





db.instructors.find({}, {


}).forEach((document) => {


    print(`${document.firstName} ${document.lastName}`)

})





db.instructors.find({}, {


}).forEach((document) => {

    if (document.firstName && document.lastName) {
        print(`${document.firstName} ${document.lastName}`)
    }

})






db.instructors.find({
    firstName: { $exists: true },
    lastName: { $exists: true }

}, {
    firstName: 1, lastName: 1

}).forEach((document) => {

    print(`${document.firstName} ${document.lastName}`)

})


db.instructors.insertOne({ salary: "89748sd" })

count = 0
total = 0

db.instructors.find({
    salary: { $type: "number" }

}, {
    firstName: 1, lastName: 1, salary: 1

}).forEach((document) => {

    total += document.salary
    print(`${document.firstName} ${document.lastName}`)
    count += 1

})

print(total)
print(total / count)























































































































































































































































