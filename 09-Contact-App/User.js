const Contact = require("./Contact.js")
//const contactInfo = require("./ContactInfo.js")

class User {

    static allUsers = []
    static userID = 0

    constructor(fullName, isAdmin, gender) {
        this.ID = User.userID++
        this.fullName = fullName
        this.isAdmin = isAdmin
        this.gender = gender
        this.contacts = []
    }

    static newAdmin(fullName, gender, age) {
        if (typeof fullName != "string") {
            return "Invalid Full Name"
        }

        if (typeof gender != "string") {
            return "Invalid Gender"
        }

        if (gender.toLowerCase() != "male" &&  gender.toLowerCase() != "female" && gender.toUpperCase() != "MALE" && gender.toUpperCase() != "FEMALE") {
            return "Invalid Gender! Enter Male or Female"
        }

        if (typeof age != "number") {
            return "Invalid Age"
        }
        return new User(fullName, true, gender, age)
    }

    newUser(fullName, gender, age) {

        if (typeof fullName != "string") {
            return "Invalid Full Name"
        }

        if (typeof gender != "string") {
            return "Invalid Gender"
        }

        if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female" || gender.toUpperCase() != "MALE" && gender.toUpperCase() != "FEMALE") {
            return "Invalid Gender! Enter Male or Female"
        }

        if (typeof age != "number") {
            return "Invalid Age"
        }

        if (!this.isAdmin) {
            return "Not Authorized"
        }
        // let fullName = firstName+ " "+lastName
        let userObj = new User(fullName, false, gender, age)
        User.allUsers.push(userObj)
        return userObj
    }

    getAllUsers() {
        if (!this.isAdmin) {
            return "Not Authorised"
        }
        return User.allUsers
    }

    findUser(ID) {
        for (let index = 0; index < User.allUsers.length; index++) {
            if (User.allUsers[index].ID == ID) {
                return [index, true]
            }
        }
        return [-1, false]
    }

    updateUser(ID, parameter, newValue) {
        if (typeof ID != "number") {
            return "Invalid ID"
        }
        if (!this.isAdmin) {
            return "Not Authorized"
        }

        let [indexOfUser, isUserExist] = this.findUser(ID)
        if (!isUserExist) {
            return "User Not Found"
        }

        switch (parameter) {
            case "fullName":
                if (typeof newValue != "string") {
                    return "Invalid Full Name"
                }
                User.allUsers[indexOfUser].fullName = newValue
                return User.allUsers[indexOfUser]
            case "gender":
                if (typeof newValue != "string") {
                    return "Invalid Full Name"
                }

                if (gender.toLowerCase != "male" || gender.toLowerCase != "female" || gender.toUpperCase != "MALE" || gender.toUpperCase != "FEMALE") {
                    return "Invalid Gender! Enter Male or Female"
                }
                User.allUsers[indexOfUser].gender = newValue
                return User.allUsers[indexOfUser]
            case "age":
                if (typeof newValue != "number") {
                    return "Invalid Full Name"
                }
                User.allUsers[indexOfUser].age = newValue
                return User.allUsers[indexOfUser]
            default:
                return "Invalid Parameter"
        }
    }

    deleteUser(ID) {
        if (!this.isAdmin) {
            return "Not Authorized"
        }

        let [indexOfUser, isUserExist] = this.findUser(ID)
        if (!isUserExist) {
            return "User not Found"
        }

        User.allUsers.splice(indexOfUser, 1)
        return "User Deleted Successfully"
        //return User.allUsers
    }

    createContact(contactName, country) {
        if (typeof contactName != "string") {
            return "Invalid Contact Name"
        }

        if (typeof country != "string") {
            return "Invalid Country Name"
        }

        if (this.isAdmin) {
            return "Admin Cannot create contacts"
        }

        let contactObj = new Contact(contactName, country)
        this.contacts.push(contactObj)
        return contactObj
    }

    getAllContact() {
        if (this.isAdmin) {
            return "Admin does not have contact"
        }
        return this.contacts
    }

    findContact(contactID) {
        if(typeof contactID != "number"){
            return "Invalid Contact ID"
        }
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].ID == contactID) {
                return [index, true]
            }
        }
        return [-1, false]
    }

    updateContact(contactID, parameter, newValue) {
        if (this.isAdmin) {
            return "Admin Connot delete contacts"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact does not exists"
        }
        return this.contacts[indexOfContact].updateContact(parameter, newValue)

    }

    deleteContact(contactID) {
        if (this.isAdmin) {
            return "Admin cannot delete contacts"
        }

        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "contact does not exists"
        }

        this.contacts.splice(indexOfContact, 1)
        //return User.contacts
        return "Contact Deleted Successfully"
    }

    createContactInfo(contactID, typeOfContactInfo, valueOfContactInfo) {
        if (this.isAdmin) {
            return "Admin cannoot create contact info"
        }

        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact does not exit"
        }

        let contactInfoObj = this.contacts[indexOfContact].createContactInfo(typeOfContactInfo, valueOfContactInfo)
        return contactInfoObj
    }

    getContactInfo(contactID) {
        if (this.isAdmin) {
            return "Admin Do not have contact info"
        }

        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact Does not Exists"
        }
        return this.contacts[indexOfContact].contactInfos
    }

    updateContactInfo(contactID, contactInfoID, typeOfContactInfo, valueOfContactInfo) {
        if(this.isAdmin){
            return "Admin does not have contact info"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact Does Not Exist"
        }

        let info = this.contacts[indexOfContact].updateContactInfo(contactInfoID, typeOfContactInfo, valueOfContactInfo)
        return info
    }


    deleteContactInfo(contactID, contactInfoID) {
        if (this.isAdmin) {
            return "Admin cannot delete contact"
        }

        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact Does not Exist"
        }
        return this.contacts[indexOfContact].deleteContactInfo(contactInfoID)

    }

    getUserById(userId) {
        if (!this.isAdmin) {
            return "Only Admin can access"
        }

        let [indexOfContact, isContactExist] = this.findUser(userId)
        if (!isContactExist) {
            return "User Not Found"
        }
        return User.allUsers[indexOfContact]
    }

    getContactById(contactID) {
        if (this.isAdmin) {
            "Admin does not have access"
        }


        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact Not Found"
        }
        return this.contacts[indexOfContact]
    }

    getContactInfoById(contactID,contactInfoID) {
        if (this.isAdmin) {
            return "Only User can access contacts info"
        }

        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if (!isContactExist) {
            return "Contact not found"
        }

        let getInfo = this.contacts[indexOfContact].getContactInfoById(contactInfoID)
        return getInfo
    }

}

let admin1 = User.newAdmin("Siddhant Gunjal","male",22)
// console.log(admin1);
let user1 = admin1.newUser("Ram Singh","male",20)
let user2 = admin1.newUser("Sita Singh","female",20)
// console.log(user1);
// console.log(admin1.getAllUsers());
// let updateUser1 = admin1.updateUser(2,"fullName","Laxman Singh")
// console.log(updateUser1);


// let deleteUser1 = admin1.deleteUser(2)
// console.log(deleteUser1);

console.log(admin1.getAllUsers());

console.log(user1.createContact("Ramesh", "IND"));
console.log(user1.createContact("Suresh", "USD"));
console.log(user1.createContact("Mahesh", "IND"));

console.log("All Users : ",user1.getAllContact());
console.log("All Users : ",user1.deleteContact(2));
console.log("All Users : ", user1.getAllContact());

console.log("--------------------------------------------------------------------------------------------");

console.log("Index 1 Info",user1.createContactInfo(1,"name","Siddhant"));
console.log("Index 1 Info",user1.createContactInfo(1,"number","9769252978"));
console.log("Index 1 Info",user1.createContactInfo(1,"role","ddveloper"));

console.log("All Info : ",user1.getContactInfo(1));
// console.log(user1.updateContactInfo(0,1,"typeOfContactInfo","Sid"));
console.log(user1.updateContactInfo(1,0,"valueOfContactInfo","Sid"));
console.log("Deleted",user1.deleteContactInfo(1,0));
console.log("all info:",user1.getContactInfo(1));

console.log("INfo by ID",user1.getContactInfoById(1,2));

