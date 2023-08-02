class Student {

    constructor(rollNo, marks, fName, lName, dateOfBirth) {

        this.roll = rollNo
        this.marks = marks
        this.fName = fName
        this.lName = lName
        this.age
        this.date = dateOfBirth

        this.avgMarks = function () {
            let sum = 0
            console.log(this.marks);
            for (let index = 0; index < this.marks.length; index++) {
                sum = (sum + this.marks[index])
            }
            return sum / this.marks.length
        }

        this.averageMarks = this.avgMarks()

        this.grade = function () {
            let arrayGrade = []
            console.log(this.marks);
            for (let index = 0; index < this.marks.length; index++) {
                if (this.marks[index] >= 80 && this.marks[index] <= 90) {
                    arrayGrade.push("A")
                } else if (this.marks[index] >= 70 && this.marks[index] <= 60) {
                    arrayGrade.push("B")
                } else {
                    arrayGrade.push("C")
                }
            }
            return arrayGrade
        }

        this.finalgrade = function () {
            let finalGrade
            if (this.avgMarks() >= 80 && this.avgMarks() <= 90) {
                finalGrade = "A"
            } else if (this.avgMarks() >= 70 || this.avgMarks() <= 60) {
                finalGrade = "B"
            } else {
                finalGrade = "C"
            }
            return finalGrade
        }
        var birthDate = new Date(this.date)
        this.ageCalculator = function () {
            return 2023 - birthDate.getFullYear();
        }

        this.dob = function () {
            //var birth = new Date(this.date)
            return birthDate.getDate() + '/' + birthDate.getMonth() + '/' + birthDate.getFullYear()
        }

    }


    getFullName() {
        return this.fName + " " + this.lName
    }

}

let s1 = new Student(1, [90, 90, 60], "Siddhant", "Gunjal", "06/14/2001")
console.log("S1 Full Name : ", s1.getFullName());
console.log("S1 Marks : ", s1.marks);
console.log("S1  Average Marks : ", s1.averageMarks);
console.log("S1 Grades :  ", s1.grade());
console.log("S1 Final Grade :  ", s1.finalgrade());
console.log("S1 Date of Birth : ", s1.dob());
console.log("S1 Age : ", s1.ageCalculator());
console.log(s1);




// let s2 = new Student(2, [100, 200, 300], "Shiv", "Parvati")
// console.log("S2 : ", s2.getFullName());

// let s3 = s1
// s1 = s2
// s2 = s3
// console.log("After Swapping");
// console.log("S1 : ", s1.getFullName());
// console.log("S2 : ", s2.getFullName());

