module.exports = function() {
    return `<section className="view register _hide">
        <form>
            <h1 className="register__title">Register</h1>
            <input className="register__field" type="text" name="name" placeholder="name" />
            <input className="register__field" type="text" name="surname" placeholder="surname" />
            <input className="register__field" type="email" name="email" placeholder="e-mail" />
            <input className="register__field" type="password" name="password" placeholder="password" />
            <button className="register__submit">📨</button>
            <a href="#">Go back</a>
        </form>
    </section>`
}