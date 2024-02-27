// relationship demosss


/// print student firstname, student last name , dept name

db.students.find({},
    { firstName: 1, lastName: 1, department: 1 } // progject 
).forEach((document) => {

    //     print(document.firstName)

})


// 1- check dept_exists 
db.students.find({
    department: { $exists: true }
},
    { firstName: 1, lastName: 1, department: 1 } // progject 
).forEach((document) => {

    //     print(document.firstName, document.department)
    //         print(document.department)
    /// get dept_object

    dept = db.departments.findOne({ _id: document.department })
    //     print(dept.name)
    print(`${document.firstName} ${document.lastName}:  ${dept.name}`)

})




// 


db.students.find({
    department: { $exists: true }
},
    { firstName: 1, lastName: 1, department: 1 } // progject 
).forEach((document) => {


    dept = db.departments.findOne({ _id: document.department }, { name: 1 })
    if (dept) {
        print(`${document.firstName} ${document.lastName}:  ${dept.name}`)
    }

    else {

        print(`${document.firstName} ${document.lastName}: undefiend`)
    }
})



/// /// 1= get depts


all_depts = db.departments.find({}, { name: 1 }).toArray()



db.students.find({
    department: { $exists: true }
},
    { firstName: 1, lastName: 1, department: 1 } // progject 
).forEach((document) => {

    //     print(document)
    depts = all_depts.filter((elem) => (elem._id === document.department)) // return array 
    if (depts.length === 1) {
        selected_dept = depts[0]

        //         print(depts[0])
        print(`${document.firstName} ${document.lastName}:${selected_dept.name}`)

    }
    //     

})


//////////// students and their subjects 

// stdname , subjects names 



all_subjects = db.subjects.find({}, { name: 1 }).toArray()


db.students.find({
    subjects: { $exists: true }
},
    { firstName: 1, lastName: 1, subjects: 1 } // progject 
).forEach((document) => {

    std_subj = ""

    document.subjects.forEach((sub) => {
        sub_name = all_subjects.filter((elem) => (elem._id === sub))
        //             print(sub_name[0].name)
        std_subj += sub_name[0].name + " "

    })

    print(`${document.firstName} : ${std_subj}`)


})



/// get student name and subjects he/ she studies 


all_subjects = db.subjects.find({}, { name: 1 }).toArray()


// get students 

db.students.find(
    { subjects: { $exists: true } }, // condition 
    { firstName: 1, subjects: 1 } // projection 
).forEach((document) => {

    //         print(document.subjects)
    // 1- get subjects names 
    std_subj = ""
    document.subjects.forEach((subjectid) => {

        subname = all_subjects.filter((sub) => sub._id === subjectid)
        //             print(subname[0].name)

        std_subj += subname[0].name + " "


    })

    print(`${document.firstName}, subjects: ${std_subj}`)
})










































































































