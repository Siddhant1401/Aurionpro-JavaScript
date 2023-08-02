class ContactInfo {
    static ContactInfoID = 0
    
    constructor(typeOfContactInfo, valueOfContactInfo) {
        this.ID = ContactInfo.ContactInfoID++
        this.typeOfContactInfo = typeOfContactInfo
        this.valueOfContactInfo = valueOfContactInfo
    }

    upateContactInfo(parameter, newValue) {
        switch (parameter) {
            case "typeOfContactInfo":
                if (typeof newValue != "string") {
                    return "Invalid Type"
                }
                this.typeOfContactInfo = newValue
                return this

            case "valueOfContactInfo":
                if(typeof newValue != "string"){
                    return "Invalid Value"
                }
                this.valueOfContactInfo = newValue
                return this
            default:
                return "Invalid Parameter"
        }
    }

}

module.exports = ContactInfo