/// prepare


let departments = [
    { "_id": 1, "name": "opensource", "location": "3rdfloor", "phone": 12345 },

    { "_id": 2, "name": "sd", "location": "2ndfloor", "phone": 12345 },
    { "_id": 3, "name": "ai", "location": "1stfloor", "phone": 12345 },

    { "_id": 4, "name": "cloud", "location": "3rdfloor", "phone": 12345 },
    { "_id": 5, "name": "graphics", "location": "3rdfloor", "phone": 12345 },

]

db.departments.insertMany(departments)

