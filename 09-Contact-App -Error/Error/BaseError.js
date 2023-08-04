class BaseError extends Error{

    constructor(message, httpStatusCode){
        super(message)
        this.httpStatusCode = httpStatusCode
    }
}

module.exports = BaseError