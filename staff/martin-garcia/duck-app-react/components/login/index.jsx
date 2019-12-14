function Login({onLogin, onGoRegister,error}){
    return <section className="login">
    <p className="login__title">Please log in:</p>
    <nav className="login__nav">
        <form className="login__form" onSubmit={function(event){
            event.preventDefault()
            const {mail:{value:mail}, password:{value:password}} = event.target
            onLogin(mail,password)
        }}>
            <input type="text" name="mail" id="mail" placeholder="pepitogrillo@duck.com"/>
            <input type="password" name="password" id="password"/>
            <input type="button" className="login__form__register" value="Register" onClick = {event =>{
                event.preventDefault()
                onGoRegister()
            }}/>
            <button className="login__form__button">Login</button>
        </form>
    </nav>
    {error && < Feedback message = {error}/>}
</section>
}