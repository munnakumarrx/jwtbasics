const CustomPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')
class UnAuthenticatedError extends CustomPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthenticatedError