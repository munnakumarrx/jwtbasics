const CustomPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')
class BadRequestError extends CustomPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError