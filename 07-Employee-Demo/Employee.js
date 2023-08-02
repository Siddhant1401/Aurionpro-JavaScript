class Employee {

    constructor(fName, lName, empId, fullName, salaryPM, annualSalary, designation, department, dateOfJoining, dateOfResignation, totalExperienceInCompany, contactNo, personalEmailId, officeEmailId, dateOfBirth, age, address, city, country, office, reportingOfficer, subordinates) {
        this.fName = fName
        this.lName = lName
        this.empId = empId
        this.fullName = fullName
        this.salaryPM = salaryPM
        this.annualSalary = annualSalary
        this.designation = designation
        this.department = department
        this.dateOfJoining = dateOfJoining
        this.dateOfResignation = dateOfResignation
        this.totalExperienceInCompany = totalExperienceInCompany
        this.contactNo = contactNo
        this.personalEmailId = personalEmailId
        this.officeEmailId = officeEmailId
        this.dateOfBirth = dateOfBirth
        this.age = age
        this.address = address
        this.city = city
        this.country = country
        this.office = office
        this.reportingOfficer = reportingOfficer
        this.subordinates = subordinates

    }

    static setReportingOfficer = null

    static newEmployee(fName, lName, empId, salaryPM, designation, department, contactNo, personalEmailId, officeEmailId, dateOfBirth, address, city, country, office) {

        if (typeof fName != "string") {
            return "First Name Inavlid"
        }

        if (typeof lName != "string") {
            return "Last Name Inavlid"
        }

        if (typeof empId != "number") {
            return "Employee ID Inavlid"
        }

        if (typeof salaryPM != "number") {
            return "Salary Inavlid"
        }

        if (typeof designation != "string") {
            return "Designation Inavlid"
        }

        if (typeof department != "string") {
            return "Department Inavlid"
        }

        if (typeof contactNo != "number") {
            return "Contact Number Inavlid"
        }

        if (contactNo.toString().length > 10) {
            return "Contact Number should of 10 digits !!"
        }

        if (contactNo.toString().length < 10) {
            return "Contact Number should of 10 digits !!"
        }

        let fullName = Employee.empfullName(fName, lName)

        let annualSalary = Employee.calculateAnnualSalary(salaryPM)

        let dateOfJoining = Employee.getDate()

        let dateOfResignation = new Date("12/24/2025")

        let dob = new Date(dateOfBirth)
        if (dob == "Invalid Date") {
            return "Invalid Date of Birth"
        }

        let tempDate = new Date()

        let age = Employee.calculateAge(dob, tempDate)

        let totalExperienceInCompany = Employee.calculateTotalExperienceInCompany(dateOfJoining, dateOfResignation)

        let setPeronalEmail = Employee.validateEmail(personalEmailId)
        if (typeof setPeronalEmail != "string") {
            return "Invalid Personal Email"
        }



        let setOfficeEmail = Employee.validateEmail(officeEmailId)
        if (typeof setOfficeEmail != "string") {
            return "Invalid Office Email"
        }




        let formattedDateOfBirth = Employee.formatdate(dob)

        let formattedDateOfJoining = Employee.formatdate(dateOfJoining)

        let formattedDateOfResign = Employee.formatdate(dateOfResignation)

        return new Employee(fName, lName, empId, fullName, salaryPM, annualSalary, designation, department, formattedDateOfJoining, formattedDateOfResign, totalExperienceInCompany, contactNo, setPeronalEmail, setOfficeEmail, formattedDateOfBirth, age, address, city, country, office)


    }

    static empfullName(fName, lName) {
        return fName + " " + lName
    }

    static calculateAnnualSalary(salaryPM) {
        return salaryPM * 12
    }

    static calculateTotalExperienceInCompany(dateOfJoining, dateOfResignation) {
        return Math.floor((dateOfResignation.getTime() - dateOfJoining.getTime()) / (100 * 60 * 60 * 24))
    }

    static getDate() {
        return new Date()
    }

    static calculateAge(dob, tempDate) {
        return tempDate.getFullYear() - dob.getFullYear()
    }

    static validateEmail(email) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (validRegex.test(email)) {
            return email
        }
        return false
    }

    static formatdate(date) {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    setDateOfResign(){
        this.dateOfResignation = new Date()
        this.totalExperienceInCompany = Employee.calculateTotalExperienceInCompany(this.dateOfJoining,this.dateOfResignation)
        Employee.formatdate(this.dateOfJoining)
        this.setDateOfJoining = Employee.formatdate(this.dateOfJoining)
        this.dateOfResignation = Employee.formatdate(this.dateOfResignation)
    }

    setManager(obj){
        if(obj.constructor == Employee){
            this.reportingOfficer = obj
        }else{
            console.log("Invalid Manager Input");
            return "Invalid Manager Input"
        }
    }

    pushSubordinates(obj){
        if(obj.constructor == Employee){
            this.subordinates.push(obj)
        }else{
            console.log("Invalid Subordinate");
            return "Invalid Subordinate"
        }
    }
}

let manager1 = Employee.newEmployee("Ram","Singh",111,500,"Manager","Payments",9005334283,"ram@gmail.com","ram@aurionpro.com","01/02/1990","dhdhdh","Khandeswar","India","aurionpro","7/7/2020")

let e1 = Employee.newEmployee("Siddhant", "Gunjal", 123, 20, "Eng", "Cash Management", 9769252978, "siddhant@gmail.com", "siddhant@aurionpro.com", "05/14/2001", "Khandeshwar,NAVi Mumbai", "Polar Bear", "India")
console.log(e1);

let subordinate1 = Employee.newEmployee("subordinate1", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate1@gmail.com", "subordinate1@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate2 = Employee.newEmployee("subordinate2", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate2@gmail.com", "subordinate2@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate3 = Employee.newEmployee("subordinate3", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate3@gmail.com", "subordinate3@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate4 = Employee.newEmployee("subordinate4", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate4@gmail.com", "subordinate4@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

e1.setManager(manager1)
subordinate1.setManager(manager1)
subordinate1.setDateOfResign()
console.log("Manager setted");
e1.pushSubordinates(subordinate1)
e1.pushSubordinates(subordinate2)
e1.pushSubordinates(subordinate3)
e1.pushSubordinates(subordinate4)
console.log("Subordinates Setted");
e1.setDateOfResign();

e1.reportingOfficer = manager1
// e1.setReportingOfficer() //todo
// e1.subordinates.push("A","B","C")
console.log(e1);
// console.log(manager)