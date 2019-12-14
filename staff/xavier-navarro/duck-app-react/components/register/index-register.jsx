function Register({ onRegister, error, onLogin }) {
    return <section className="view register">
        <form className="register__form" onSubmit={function (event) {
            event.preventDefault()

            const { name: { value: name }, surname: { value: surname }, email: { value: email }, password: { value: password } } = event.target

            onRegister(name, surname, email, password)
        }}>
            <h1 className="register__title">Register</h1>
            <input className="register__input" type="text" name="name" placeholder="name" />
            <input className="register__input" type="text" name="surname" placeholder="surname" />
            <input className="register__input" type="email" name="email" placeholder="e-mail" />
            <input className="register__input" type="password" name="password" placeholder="password" />
            <button type="login__submit">Entrar</button>
            <a href="" className="btn__register" onClick={event => {
                event.preventDefault()
                onLogin()
            }}>DuckIN</a>
        </form>

        {error && <Feedback message={error} />}
    </section>
}