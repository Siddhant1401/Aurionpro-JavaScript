class ContactInfo {
    static contactInfoID = 0
    
    constructor(typeOfContactInfo, valueOfContactInfo) {
        this.ID = ContactInfo.contactInfoID++
        this.typeOfContactInfo = typeOfContactInfo
        this.valueOfContactInfo = valueOfContactInfo
    }

    updateContactInfo(parameter, newValue) {
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