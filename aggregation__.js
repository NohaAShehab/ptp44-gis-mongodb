///--- aggregation


db.instructors.aggregate()


db.instructors.aggregate([])
// db.instructor.find()


/// use aggregation pipelines  --> get instructors salary > 3000


db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    }/// stage 1 



])

/// instrucrtors --> salary >= 4000 sorting descending using age 

db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    },/// stage 1   // output of first pipeline as input to the second pipeline
    {
        $sort: { age: -1, firstName: 1 }

    }



])

/// projection 

db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    },/// stage 1   // output of first pipeline as input to the second pipeline
    {
        $sort: { age: -1, firstName: 1 }

    }, // stage 2 sort 
    {

        $project: { firstName: 1, age: 1, salary: 1 }

    }// projection 




])

/// need fullname, salary , age 

db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    },/// stage 1   // output of first pipeline as input to the second pipeline
    {
        $sort: { age: -1, firstName: 1 }

    }, {
        $project: {

            fullname: { $concat: ["$firstName", " ", "$lastName"] },
            age: 1,

        }
    }, ///   project
    {
        $project: {
            "FullName": "$fullname",
            age: 1

        }
    }, {

        $sort: { FullName: 1 }

    }
])

/////////////////////////////////////////////

db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    },/// stage 1   // output of first pipeline as input to the second pipeline
    {
        $sort: { age: -1, firstName: 1 }

    }, {
        $project: {

            firstName: 1,
            lastName: 1,
            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] }

        }
    } ///   project
]
)


//// multiply salary * 10 
db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    },/// stage 1   // output of first pipeline as input to the second pipeline
    {
        $sort: { age: -1, firstName: 1 }

    }, {
        $project: {

            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] },
            salary: 1,
            net_salary: { $multiply: ["$salary", .8] }

        }
    } ///   project
]
)




/// save resullts in new collections
db.instructors.aggregate([
    {
        $match: { salary: { $gte: 4000 } }

    },/// stage 1   // output of first pipeline as input to the second pipeline
    {
        $sort: { age: -1, firstName: 1 }

    }, {
        $project: {

            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] },
            salary: 1,
            net_salary: { $multiply: ["$salary", .8] },
            _id: 0 // don't do that 

        }
    }, ///   project
    {

        $out: "instructor_info"
    }

]
)




////************************ grouping

// get number of instructor ... per each age 
db.instructors.aggregate([
    {
        $match: { age: { $exists: true } }
    },
    {
        $project: {

            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] },
            net_salary: { $multiply: ["$salary", .8] }

        }
    },  ///   project
    {

        $group: {
            _id: "$age",  /// _id ===> contain field of grouping
            no_of_intstructors: { $sum: 1 }  // count number of instructors
        }

    }
]
)


db.instructors.find({ age: 21 }).toArray().length


/// 
db.instructors.aggregate([
    {
        $match: { age: { $exists: true } }
    },
    {
        $project: {

            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] },
            net_salary: { $multiply: ["$salary", .8] },
            address: 1

        }
    },  ///   project
    {

        $group: {
            _id: ["$age", "$address.city"],  /// _id ===> contain field of grouping
            no_of_intstructors: { $sum: 1 }  // count number of instructors
        }

    }
]
)





/// 
db.instructors.aggregate([
    {
        $match: { age: { $exists: true } }
    },
    {
        $project: {

            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] },
            net_salary: { $multiply: ["$salary", .8] },
            address: 1

        }
    },  ///   project
    {

        $group: {
            _id: { "age": "$age", "city": "$address.city" },  /// _id ===> contain field of grouping
            no_of_instructors: { $sum: 1 }  // count number of instructors
        }

    },

    {

        $project: {
            selected_age: "$_id.age",
            selected_city: "$_id.city",
            no_of_instructors: "$no_of_instructors",
            _id: 0


        }


    }
]
)


/// min, max salary 







db.instructors.aggregate([
    {
        $match: { age: { $exists: true } }
    },
    {
        $project: {
            age: 1,
            fullname: { $concat: ["$firstName", "$lastName"] },
            address: 1, salary: 1
        }
    },  ///   project
    {

        $group: {
            _id: { "age": "$age", "city": "$address.city" },  /// _id ===> contain field of grouping
            no_of_instructors: { $sum: 1 }, // count number of instructors
            // GET TOTAL SALARIES
            total_salaries: { $sum: "$salary" },
            min_salary: { $min: "$salary" },
            max_salary: { $max: "$salary" }
        }

    },
    {

        $project: {
            selected_age: "$_id.age",
            selected_city: "$_id.city",
            no_of_instructors: "$no_of_instructors",
            _id: 0,
            total_salaries: "$total_salaries",
            min_salary: "$min_salary",
            max_salary: "$max_salary"
        }

    }
]
)


//// lookup field 

/// relationships 
/// get instructor with department 
db.students.aggregate([
    { $match: { department: { $exists: true } } },

    {

        $lookup: {
            from: "departments",
            localField: "department", // name of local field represent dept
            foreignField: "_id",
            as: "dept_info"

        }
    },
    {
        $project: {
            firstName: 1,
            dept_info: "$dept_info",
            dept_obj: { $arrayElemAt: ["$dept_info", 0] }, /// dept_obj
        }

    }
    , {

        $project: {
            firstName: 1,
            dept_name: "$dept_obj.name"

        }

    }


])


db.students.aggregate([
    { $match: { department: { $exists: true } } },

    {

        $lookup: {
            from: "subjects",
            localField: "subjects", // name of local field represent dept
            foreignField: "_id",
            as: "subjects_info"


        }

    },
    {

        $project: { firstName: 1, subjects_info: "$subjects_info" }
    }


])




























































































































































































