function toggleFav(idUser, token, favs, callback) {
    if (typeof idUser !== 'string') throw new TypeError(idUser + ' is not a string')
    if (!idUser.trim().length) throw new ContentError('idUser is empty or blank')
    if (typeof favs !== 'object') throw new TypeError(favs + ' is not a object')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!token.trim().length) throw new ContentError('token is empty or blank')
    if (typeof callback !== 'function') throw new TypeError(callback +  ' is not a function');

    call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${idUser}`, favs, (result) => {
        result.error ? callback(new Error(result.error)) : callback(undefined, result.status)
    })
}