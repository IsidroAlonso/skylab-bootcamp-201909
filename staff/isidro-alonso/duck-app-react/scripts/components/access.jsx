function Access({userAccess, toRegister}) {
    return <section className="view">
        <form className="access" onSubmit={e => {
            e.preventDefault()
            const {email: {value: email}, password: {value: password}} = e.target
            userAccess(email, password)
        }}>
            <p>Please, login to access to our shop!</p>
            <input className="access__email" type="text" name="email" placeholder="e-mail" />
            <input className="access__password" type="password" name="password" placeholder="password" />
            <button className="access__login">Login</button>
            <a className="access__link" href="" onClick={e => {
                e.preventDefault()
                toRegister()
            }}>Not registered? Sign up now!</a>
        </form>
    </section>
}