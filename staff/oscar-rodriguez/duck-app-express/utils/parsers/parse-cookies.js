/* const { headers: { cookie } } = req
        if (!cookie) return res.redirect('/')

        const [, id] = cookie.split('id=') */

module.exports = function (req) {
    const { headers: { cookie } } = req
    
    const cookies = {}
    if (!cookie) return cookies
    const keyValues = cookie.split(';')

    keyValues.forEach (keyValue => {
            let [key,value] = keyValue.trim().split('=')
            cookies[key]=value
    })

    return cookies
}