function Register({ userRegister, toAccess }) {
    return <section className="view">
        <form className="register" onSubmit={e => {
            e.preventDefault()
            const { email: { value: email }, password: { value: password } } = e.target
            userRegister(email, password)
        }}>
            <p>Sign up to access to our shop!</p>
            <input className="register__email" type="text" name="email" placeholder="e-mail" />
            <input className="register__password" type="password" name="password" placeholder="password" />
            <button className="register__sign">Sign up</button>
            <a className="register__link" href="" onClick={e => {
                e.preventDefault()
                toAccess()
            }}>Return to login</a>
        </form></section>
}