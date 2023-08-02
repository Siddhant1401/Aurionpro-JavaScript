class Student {

    constructor(fName, lName, rollNumber, marks, dateOfBirth, avgMarks, grade, finalGrade, age) {

        this.firstName = fName
        this.lastName = lName
        this.rollNo = rollNumber
        this.marks = marks
        this.dob = dateOfBirth
        this.avgMarks = avgMarks
        this.grade = grade
        this.finalGrade = finalGrade
        this.age = age

    }

    static newStudent(fName, lName, rollNumber, marks, dateOfBirth) {

        if (typeof fName != "string") {
            return "Invalid Firstname"
        }

        if (typeof lName != "string") {
            return "Invalid Lastname"
        }

        if (typeof rollNumber != "number") {
            return "Invalid Roll Number"
        }

        if (!Array.isArray(marks)) {
            return "Marks is not Array"
        }
        for (let index = 0; index < marks.length; index++) {
            if (typeof marks[index] != "number") {
                return "Marks are not number"
            }

        }

        let dob = new Date(dateOfBirth)
        if (dob == "Invalid Date") {
            return "Invalid Date of Birth "
        }

        let fullName = Student.calculateFullName(fName, lName)
        let avgMarks = Student.calculateAvgMarks(marks)
        let grades = Student.calculateGrades(marks);
        let avgGrades = Student.calculateAvgGrades(avgMarks);
        let age = Student.calculateAge(dob)

        return new Student(fName,lName,fullName,rollNumber,marks,dob,avgMarks,grades,avgGrades,age)
    }

    static calculateFullName(firstName, lastName) {
        let fullName = firstName + " " + lastName;
        //console.log(fullName);
        return fullName
    }
    static calculateAvgMarks(marks) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i]
        }
        return sum / marks.length;
    }

    static calculateGrades(marks) {
        let gradeArray = []
        for (let i = 0; i < marks.length; i++) {
            if (marks[i] >= 80) {
                gradeArray.push('A')
            }
            if (marks[i] >= 79 && marks[i] < 70) {
                gradeArray.push("B")
            }
            if (marks[i] >= 69 && marks[i] < 50) {
                gradeArray.push("C")
            }
            if (marks[i] >= 40 && marks[i] < 230) {
                gradeArray.push("D")
            }
        }
        return gradeArray
    }
    static calculateAvgGrades(avgMarks) {
        if (avgMarks >= 90) {
            return 'A'
        }
        if (avgMarks >= 80 && avgMarks < 70) {
            return "B"
        }
        if (avgMarks >= 60 && avgMarks < 50) {
            return "C"
        }
        if (avgMarks >= 40 && avgMarks < 30) {
            return "F"
        }
    }
    static calculateAge(date) {
        let birthYear = date.getFullYear()
        let currentYear = 2023
        let age = currentYear - birthYear
        return age
    }

    static calculateFullName(firstName, lastName) {
        let fullName = firstName + " " + lastName;
        //console.log(fullName);
        return fullName
    }
    
    static calculateAvgMarks(marks) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i]
        }
        return sum / marks.length;
    }

    static calculateGrades(marks) {
        let gradeArray = []
        for (let i = 0; i < marks.length; i++) {
            if (marks[i] >= 8) {
                gradeArray.push('A')
            }
            if (marks[i] >= 5 && marks[i] < 8) {
                gradeArray.push("B")
            }
            if (marks[i] >= 2 && marks[i] < 5) {
                gradeArray.push("C")
            }
            if (marks[i] >= 0 && marks[i] < 2) {
                gradeArray.push("F")
            }
        }
        return gradeArray
    }
    static calculateAvgGrades(avgMarks) {
        if (avgMarks >= 8) {
            return 'A'
        }
        if (avgMarks >= 5 && avgMarks < 8) {
            return "B"
        }
        if (avgMarks >= 2 && avgMarks < 5) {
            return "C"
        }
        if (avgMarks >= 0 && avgMarks < 2) {
            return "F"
        }
    }
    static calculateAge(date) {
        let birthYear = date.getFullYear()
        let currentYear = 2023
        let age = currentYear - birthYear
        return age
    }




}

let s1 = Student.newStudent("Siddhant","Gunjal",1,[90,70,80],"05/14/2001")
console.log(s1);
console.log(s1.age);