///  schema validation 




db.getCollectionInfos({ name: "instructors" }) /// get schema validation rules on this collection



/// you can create collection with schema specification

db.createCollection("students",
    {
        validator: {

            $jsonSchema: {

                bsonType: "object",

                properties: {

                    firstName: { bsonType: "string" },
                    age: { bsonType: "number" }

                }
            } /// json schema 


        } // validator

    }/// schema creation rules 

)



db.students.insertOne({ firstName: "ali", age: 10 }) // success


db.students.insertOne({ firstName: "dfdf", age: "ten" }) // success


db.students.insertOne({ firstName: "ali", age: 10, email: "a@gmail.com" })















/// update collection schema 

db.getCollectionInfos({
    name: "students"
}
)



db.students.runCommand("collMod", {


    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {

                firstName: { bsonType: "string" },
                age: { bsonType: "number" }
            }

        }

    }

})

/// 1- firstName , lastName madatory ?


db.students.runCommand("collMod", {


    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["firstName", "lastName", "age"],
            properties: {

                firstName: { bsonType: "string" },
                age: { bsonType: "number" }
            }

        }

    }

})


db.students.insertOne({ firstName: "ahmed" })

db.students.insertOne({ firstName: "ahmed", age: 10 })

db.students.insertOne({
    firstName: "ahmed", age: 10,

    lastName: 6534
})


db.students.insertOne({
    firstName: "ahmed", age: 10,

    lastName: 6534, email: "ah@gmail.com"
})











//// prevent adding fields 

db.students.runCommand("collMod", {


    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "age"],
            properties: {

                firstName: { bsonType: "string" },
                age: { bsonType: "number" }
            }

        }

    }

})



db.students.insertOne({
    firstName: "ahmed", age: 10,

    lastName: 6534, email: "ah@gmail.com"
})



db.students.insertOne({
    firstName: "ali", age: 10,

    lastName: 6534
})



db.students.insertOne({
    _id: 3, firstName: "ali", age: 10,

    lastName: 6534
})
//////////////////////////


db.students.runCommand("collMod", {


    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "age", "_id"],
            properties: {
                _id: {}, // id object 
                firstName: { bsonType: "string" },
                age: { bsonType: "number" },
                lastName: { bsonType: "string" }
            }

        }

    }

})

db.students.insertOne({
    firstName: "ali", age: 10,

    lastName: "ff"
})




// restrict id --> number 

db.students.runCommand("collMod", {


    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "age", "_id"],
            properties: {
                _id: { bsonType: "number" },
                firstName: { bsonType: "string" },
                age: { bsonType: "number" },
                lastName: { bsonType: "string" }
            }

        }

    }

})


db.students.insertOne({
    firstName: "ali", age: 10,

    lastName: "ff", _id: 100
})


/// age  min 10 , maximum 15


db.students.runCommand("collMod", {


    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "age", "_id"],
            properties: {
                _id: { bsonType: "number" },
                firstName: { bsonType: "string" },
                age: {
                    bsonType: "number",
                    minimum: 10, maximum: 15

                },
                lastName: { bsonType: "string" }
            }

        }

    }

})




db.students.insertOne({
    firstName: "ali", age: 12,

    lastName: "ff", _id: 101
})













