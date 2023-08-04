const ValidationError = require("./Error/ValidationError")

class ContactInfo {
    static contactInfoID = 0

    constructor(typeOfContactInfo, valueOfContactInfo) {
        this.ID = ContactInfo.contactInfoID++
        this.typeOfContactInfo = typeOfContactInfo
        this.valueOfContactInfo = valueOfContactInfo
    }

    updateContactInfo(parameter, newValue) {
        
        try {
            
            switch (parameter) {
                case "typeOfContactInfo":

                    if (typeof newValue != "string") { throw new ValidationError("Invalid Type of Contact Info") }
                    this.typeOfContactInfo = newValue
                    return this

                case "valueOfContactInfo":

                    if (typeof newValue != "string") { throw new ValidationError("Invalid Value of Contact Info") }
                    this.valueOfContactInfo = newValue
                    return this

                default:
                    throw new ValidationError("Invalid Parameter")

            }

        }
        catch (error) {
            throw error
        }
        
    }

}

module.exports = ContactInfo