
//// *************** relations 
// **** one to one ? 
// ---> most data on the same place 

// **** one to many 
//// depts: [_id , name ], students:[_id, name, dept_id] ===> fks 




/// *** many to many 

// students [_id ,name ,age]   subjects [_id ,name , max_score ]

/// student_subject  [std_id , sub_id , exam_score, exam_date ]



///////////////////////////////////////////////////////////////


///********************** In mongo there are no relationships 
///--- embedded documents 

// instrucor{_id , name , address:{} } ///  one to one 
/// adv. data in the same place   ---> disadvantage --> document size ---> 

/// one to many  ---> mongo  (relation between student and department )

// depts = [_id , name, location] ,  student = {_id ,name , dept: dept_id }
// adv. ==> document size --> small ...  disadv. ---.> time consuming operation while getting data 

// another solution 
// student = {_id ,name , dept: {_id , name, location} }
// adv. 000> data in one place///student reterival operation faster 
// disadv.===> document size --> duplication in depts data  --> update dept_info --> time consuming process

// get dept_info with its students 
// depts = {_id ,name , students: [{_id , name, }]  , location}

// disadv. --> document size 
//// 
/// another solution
/// depts = [_id , name, location] ,  student = {_id ,name , dept: {dept_id , dept_name } }

/// many to many 



// option one 

// students [_id ,name ,age]   subjects [_id ,name , max_score ]
/// student_subject  [std_id , sub_id , exam_score, exam_date ]

/// option two 
// students [_id ,name ,age , subjects : [{_id , name }, {} , {}] ] /// duplication // update 


// option three 
/// subjects [_id ,name , max_score , students: [{}, {}, {}] ] /// duplication , size 


/// option four 
//students [_id ,name ,age , subjects : [{_id , name }, {} , {}] ]
//subjects [_id ,name , max_score , students: [{}, {}, {}] ]



// option five
// subjects [_id ,name , max_score , students: [{_id ,name }, {}, {}] ]

// option 6 
// students [_id ,name ,age , subjects : [{_id , name }, {} , {}] ]

/// role --> data --> reterive info from it

/// prepare DB  
// let departments = [
//     {"_id":1, "name":"opensource", "location":"3rdfloor", "phone":12345},
// 
//     {"_id":2, "name":"sd", "location":"2ndfloor", "phone":12345},
//     {"_id":3, "name":"ai", "location":"1stfloor", "phone":12345},
// 
//     {"_id":4, "name":"cloud", "location":"3rdfloor", "phone":12345},
//     {"_id":5, "name":"graphics", "location":"3rdfloor", "phone":12345},
// 
// ]
// 
// 
// db.departments.insertMany(departments)
// 



students = [

    {
        "_id": 1, "firstName": "Ahmed",
        "lastName": "Ali",
        "addresses": [
            { "city": "mansoura", "street": 10 },
            { "city": "cairo", "street": 20 }],

        "department": 0,
        "subjects": [1, 2, 5]

    },


    {
        "_id": 2, "firstName": "Mohamed",
        "lastName": "Ali",
        "addresses": [
            { "city": "alex", "street": 10 },
            { "city": "cairo", "street": 30 }],

        "department": 2,
        "subjects": [3, 2, 5]

    },

    {
        "_id": 3, "firstName": "Omar",
        "lastName": "Ahmed",
        "addresses": [
            { "city": "mansoura", "street": 100 }],
        "department": 2,
        "subjects": [3, 2, 5]

    },

    {
        "_id": 4, "firstName": "Mohamed",
        "lastName": "Ahmed",
        "addresses": [
            { "city": "Assuit", "street": 100 }],
        "department": 2,
        "subjects": [3, 4, 5]

    }

]

db.students.insertMany(students)



let subjects = [

    { _id: 1, "name": "js", "maxgrade": 100 },
    { _id: 2, "name": "mongo", "maxgrade": 100 },
    { _id: 3, "name": "jenkins", "maxgrade": 100 },
    { _id: 4, "name": "gcp", "maxgrade": 100 },
    { _id: 5, "name": "aws", "maxgrade": 100 },
    { _id: 6, "name": "terraform", "maxgrade": 100 },
    { _id: 7, "name": "microservice", "maxgrade": 100 },
    { _id: 8, "name": "admin", "maxgrade": 100 },

]


db.subjects.insertMany(subjects)









