const ContactInfo = require("./ContactInfo")
const NotFoundError = require("./Error/NotFoundError")
const ValidationError = require("./Error/ValidationError")

class Contact {

    static contactID = 0

    constructor(contactName, country) {
        this.ID = Contact.contactID++
        this.contactName = contactName
        this.country = country
        this.contactInfos = []
    }

    updateContact(parameter, newvalue) {

        try {

            switch (parameter) {
                case "contactName":

                    if (typeof newvalue != "String") { throw new ValidationError("Invalid Contact Name") }
                    return this.contactName = newvalue

                case "country":

                    if (typeof newvalue != "string") { throw new ValidationError("Invalid Country Name") }
                    return this.country = newvalue

                default:
                    throw new ValidationError("Invalid Parameter")
            }

        }
        catch (error) {
            throw error
        }

    }

    createContactInfo(typeOfContactInfo, valueOfContactInfo) {
        let contactInfoObj = new ContactInfo(typeOfContactInfo, valueOfContactInfo)
        this.contactInfos.push(contactInfoObj)
        return contactInfoObj
    }

    findContactInfo(contactInfoID) {

        try {

            for (let index = 0; index < this.contactInfos.length; index++) {
                if (this.contactInfos[index].ID == contactInfoID) {
                    return [index, true]
                }
            }
            throw new NotFoundError("Contact Info Not Found")
        }
        catch (error) {
            throw error
        }

    }

    updateContactInfo(contactInfoID, parameter, newValue) {

        try {

            let indexOfContact = this.findContactInfo(contactInfoID)
            let info = this.contactInfos[indexOfContact].updateContactInfo(parameter, newValue)
            return info

        }
        catch (error) {
            throw error
        }
    }

    deleteContactInfo(contactInfoID) {

        try {

            let indexOfContact = this.findContactInfo(contactInfoID)
            let info = this.contactInfos.splice(indexOfContact, 1)
            return info
        }
        catch (error) {
            throw error
        }

    }

    getContactInfoById(contactInfoID) {
        try {

            let indexOfContact = this.findContactInfo(contactInfoID)
            return this.contactInfos[indexOfContact]

        }
        catch (error) {
            throw error
        }

    }
}

module.exports = Contact