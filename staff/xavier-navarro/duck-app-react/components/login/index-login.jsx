function Login({ onLogin, error, onRegister }) {
    return <section className="view login">
        <form className="login__form" onSubmit={function (event) {
            event.preventDefault()

            const { email: { value: email }, password: { value: password } } = event.target

            onLogin(email, password)
        }}>
            <h1 className="login__title">DuckIn</h1>
            <input type="text" placeholder="Username" className="login__input" name="email"/>
            <input type="password" placeholder="Password" className="login__input" name="password"/>
            <button type="login__submit">Entrar</button>
            <a href="" className="btn__register" onClick={event => {
                event.preventDefault()
                onRegister()
            }}>Create new account</a>
        </form>

        {error && <Feedback message={error} />}
    </section>
}