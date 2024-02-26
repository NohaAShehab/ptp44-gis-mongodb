/// update documents 



db.instructors.find()

db.instructors.findOne()

/// update 


db.instructors.updateOne()
db.instructors.updateMany()



//***************************************
// update tablename set colnmae=value where condition 


db.instructors.updateOne(

    { _id: 6 }, // condition 
    {
        $set: { firstName: "Noha" }

    } /// update operation

)

/// update existing fields


db.instructors.updateOne(

    { _id: 6 }, // condition 
    {
        $set: { firstName: "Noha", lastName: "Shehab" }

    } /// update operation

)




db.instructors.updateOne(

    { _id: 6 }, // condition 
    {
        $set: { firstName: "Noha", age: 31 }

    } /// update operation

)



db.instructors.updateOne(
    { _id: 6 } // condition

    , {
        $set: { email: "noha@iti.com" }
    } /// update operation


)




/// add email field to all document     


db.instructors.updateMany(
    {} // condition

    , {
        $set: { email: "noha@iti.com" }
    } /// update operation


)


//********** update document that doesn't exists 
/// update if exists --> if not insert it ? 
db.instructors.updateMany(
    { _id: 100 } // condition

    , {
        $set: { firstName: "Nohaaaaaaaaaa" }
    }, /// update operation
    {

        upsert: true // if documents doesn't exist  ---> insert 
    } // options of update operations 
)


///&************* rename fields 

db.instructors.updateMany({},
    {

        $rename: { email: "instructorEmail" }     /// rename field

    }

)



/// *** remove field 


db.instructors.updateMany({},
    {

        $unset: { instructorEmail: false }     /// remove field

    }

)

// *********************************** works on embedded object 


db.instructors.updateOne(
    { _id: 6 },

    {
        $set: { "address.city": "giza" }

    }


)

/// ********************************* $inc operator************************



db.instructors.updateOne({ _id: 6 },

    {
        $inc: { salary: -1000 }
    }


)



//************************ $multuply by 2 ***********************  

db.instructors.updateOne({ _id: 6 },

    {
        $mul: { salary: 2 }
    }


)



/// *************************** $max ********************
db.instructors.updateOne({ _id: 6 }, { $set: { salary: 11 } })

db.instructors.updateOne({ _id: 6 },

    {
        $max: { salary: 10000 }
    }


)

// check if salary less than 10000 will update it to be 10000


//////////////////////////////////////////////////////////////////

//*************************** Array update operators 

/// update element at known index 

db.instructors.updateOne(

    { _id: 6 },
    {
        $set: { "courses.0": "javascript" }


    }

)


// update element at  unknow index in the array 

db.instructors.insertOne({ courses: ["mvc", "js"] })


db.instructors.updateMany(
    { courses: "mvc" }, /// condition, 
    {
        $set: { "courses.$": "design pattern" }


    }

)

///***** add element to the array ?   mongodb to courses 

db.instructors.updateOne({ _id: 6 },

    {


        $push: { courses: "mongodb" }

    }


)



// ************************add to array if not exists 


db.instructors.updateOne({ _id: 6 },

    {


        $addToSet: { courses: "c#" }

    }


)

/// ********** pop element from the array ? 


db.instructors.updateOne({ _id: 6 },

    {


        $pop: { courses: 1 }

    }


)


db.instructors.updateOne({ _id: 6 },

    {


        $pop: { courses: 3 }

    }


)




db.instructors.updateOne({ _id: 6 },

    {


        $pop: { courses: -1 }

    }


)



/// -----> pull 


db.instructors.updateOne({ _id: 6 },

    {


        $pull: { courses: "expressjs" }

    }


)
db.instructors.updateOne({ _id: 6 },

    {


        $pull: { courses: "mongodb" }

    }


)



/// add set of elements to the array 


db.instructors.updateOne({ _id: 6 },

    {


        $push: { courses: ["postgres", "arcGIS"] }

    }


)



/// each operator 


db.instructors.updateOne({ _id: 6 },

    {

        $push: { courses: { $each: ["ml1", "deep learning"] } }

    })




///////////////// **********************************************

db.instructors.deleteOne({ _id: 6 })

db.instructors.deleteMany()





































































































































































































































































































































































