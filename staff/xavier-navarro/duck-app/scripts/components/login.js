function Login(container){
    Component.call(this, container);
}
Login.extend(Component);

Login.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault()
        const email = this.email.value
        const password = this.password.value
        expression(email, password)        
    });
};