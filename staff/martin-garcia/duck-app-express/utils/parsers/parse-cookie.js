module.exports = function(req) {
    const { headers: { cookie } } = req
    const cookies = {}

    const keyValues = cookie.split(';')

    keyValues.forEach(element => {
        const [key, value] = element.trim().split('=')
        cookies[key] = value
    });
    return cookies
}