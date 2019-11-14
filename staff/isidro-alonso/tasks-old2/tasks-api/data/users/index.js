let users

module.exports = {
    load(name = 'index') { // esto significa que name es el valor por defecto
    if (!users)
        users = require(`./${name}.json`)

    return users

    return fs.redFile()
    },
    persist() {
        return fs.writeFile()
    }
}