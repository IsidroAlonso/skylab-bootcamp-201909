describe('logic - Toggle Fav Duck', () => {
    let name, surname, email, password, id, token, fav, duckId

    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        fav = []
        duckId = "5c3853aebd1bde8520e66e2a"

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password, fav }, result => {
            if (result.error) done(new Error(result.error))
            else {
                call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
                    if (result.error) done(new Error(result.error))
                    else {
                        const { data } = result

                        id = data.id
                        token = data.token

                        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
                            if (result.error) done(new Error(result.error))
                            else {
                                let favs = result.data.fav
                                favs.push(duckId)
                                call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { fav: favs }, result => {
                                    if (result.error) done(new Error(result.error))
                                    else 
                                        done()
                                })
                            }
                        })
                    }
                })
            }
        })
    })

    it('should succeed on correct fav update', done => {
        retrieveUser(id, token, (error, data) => {
            expect(error).toBeUndefined()

            expect(data).toBeDefined()
            expect(data.name).toBe(name)
            expect(data.surname).toBe(surname)
            expect(data.username).toBe(email)
            expect(data.fav.length).toBe(1)
            expect(data.fav).toEqual([duckId  ])
            expect(data.password).toBeUndefined()

            done()
        })
    })

    // TODO other cases
})