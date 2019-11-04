const folder = process.argv[2]
const extension = '.' + process.argv[3]

module.exports = () => {
    fs.readdir(folder, (error, list) => {
        if (error) {
            console.log(error)
        } else {
            list.forEach((file) => {
                if (path.extname(file) === extension) {
                    console.log(file)
                }
            })
        }
    callback(null, data)
    })
}