module.exports.auth = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(event),
    }
}