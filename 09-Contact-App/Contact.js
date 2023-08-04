const ContactInfo = require("./ContactInfo")

class Contact {

    static contactID = 0

    constructor(contactName, country) {
        this.ID = Contact.contactID++
        this.contactName = contactName
        this.country = country
        this.contactInfos = []
    }

    updateContact(parameter, newvalue) {
        switch (parameter) {
            case "contactName":
                if (typeof newvalue != "String") {
                    return "Invalid Contact Name"
                }
                return this.contactName = newvalue
            case "country":
                if (typeof newvalue != "string") {
                    return "Invalid Country"
                }
                return this.country = newvalue
            default:
                return "Invalid Parameter"
        }

    }

    createContactInfo(typeOfContactInfo, valueOfContactInfo) {
        let contactInfoObj = new ContactInfo(typeOfContactInfo, valueOfContactInfo)
        this.contactInfos.push(contactInfoObj)
        return contactInfoObj
    }

    findContactInfo(contactInfoID) {
        for (let index = 0; index < this.contactInfos.length; index++) {
            if (this.contactInfos[index].ID == contactInfoID) {
                return [index, true]
            }
        }
        return [-1, false]
    }

    updateContactInfo(contactInfoID, parameter, newValue) {
        let [indexOfContact, isContactExist] = this.findContactInfo(contactInfoID)
        if (!isContactExist) {
            return "Contact Does Not Exist"
        }
        let info = this.contactInfos[indexOfContact].updateContactInfo(parameter, newValue)
        return info
    }

    deleteContactInfo(contactInfoID){
        let [indexOfContact,isContactExist] = this.findContactInfo(contactInfoID)
        if(!isContactExist){
            return "Contact Does Not Exist"
        }
        let info = this.contactInfos.splice(indexOfContact,1)
        return info
    }

    getContactInfoById(contactInfoID){
        let [indexOfContact,isContactExist] = this.findContactInfo(contactInfoID)
        if(!isContactExist){
            return "Contact Does not Exist"
        }
        return this.contactInfos[indexOfContact]
    }
}

module.exports = Contact