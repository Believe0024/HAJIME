const express = require("express");
const app = express();
const PORT = 3010;

app.use(express.json()); //middleware to parse JSON request bodies

app.get("/", (req, res) => {
    res.send("Welcome to HAJIME Student Management");
});

const students = []; // In-memory array to store student data

//create student data
app.post("/createstudents", (req, res) => {  
  const { Name, DateOfBirth,Age, Gender, Class, Address, PhoneNumber, Email, } = req.body;
    
  students.push(students);

const newStudent = {
  id: students.length + 1, // Generate a unique ID for the student
  Name,
  DateOfBirth,
  Age,
  Gender,
  Class,
  Address,
  PhoneNumber,
  Email,
};

 res.status(201).json({
  message: "Student data received successfully",
  student: newStudent
});

    students.push(newStudent);

    res.status(201).json(newStudent);
});

//create a route to handle student data

//get all student data
app.get("/getallstudents", (req, res) => {
    res.json(students);
});

//get a specific student data by ID
app.get("/findstudents/:id", (req, res) => {
    const studentid = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentid);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
});


//get a specific student data by Name
app.get("/locatestudents/name/:name", (req, res) => {
    const studentName = req.params.name;
    const student = students.find((s) => s.Name === studentName);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
});

//update a specific student data by ID
app.put("/updatestudents/:id", (req, res) => {
    const studentid = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentid);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    const { Name, Age, Class, Address, PhoneNumber } = req.body;
    student.Name = Name;
    student.Age = Age;
    student.Class = Class;
    student.Address = Address;
    student.PhoneNumber = PhoneNumber;
    res.json(student);
  
});

//delete a specific student data by ID
app.delete("/deletestudents/:id", (req, res) => {
    const studentid = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentid);
    if (student === -1) {
        return res.status(404).json({ message: "Student not found" });
    }
    students.splice(students.indexOf(student), 1);
    res.json({ message: "Student deleted successfully" });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

