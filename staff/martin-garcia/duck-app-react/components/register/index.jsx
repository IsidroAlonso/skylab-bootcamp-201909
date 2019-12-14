function Register ({onRegister, onGoLogin, error}) {
    return <section className="register hide">
    <p className="register__title">Join now:</p>
    <form className="register__form" onSubmit={function(event) {
        event.preventDefault()
        const { name:{value: name}, lastName:{value:lastName}, mail:{value:mail},password:{value:password}, age:{value:age}} = event.target
        onRegister(name, lastName, mail, password, age)
    }}>
        <p className="register__form__p">Name:</p>
        <input type="text" name="name" id="name" placeholder="pepito"/>

        <p className="register__form__p">Last name:</p>
        <input type="text" name="lastName" id="lastName" placeholder="grillo"/>

        <p className="register__form__p">Mail:</p>
        <input type="email" name="mail" id="mail" placeholder="pepitogrillo@duck.com"/>

        <p className="register__form__p">Password:</p>
        <input type="password" name="password" id="password" placeholder="*****"/>

        <p className="register__form__p">Age:</p>
        <input type="number" name="age" id="age" placeholder="18"/>

        <input type="button" className="register__form__login" value="Login" onClick = {event =>{
            event.preventDefault()
            onGoLogin()
        }}/>
        <button className="register__form__register">Register</button>

    </form>

    {error && <Feedback message={error} />}
</section>

}