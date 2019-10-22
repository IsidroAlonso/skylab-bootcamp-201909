function handleGoToAccess () {
    debugger
    // Access.className.remove('hide')
    // Register.className.add('hide')
}

function handleGoToRegister () {
    debugger
    // Register.className.remove('hide')
    // Access.className.add('hide')
}

function handleAccess(email, password) {
    debugger
}

function handleRegister(email, password) {
    debugger
}

ReactDOM.render(<>
    <h1 className="maintitle">Duckle</h1>
    <Access toRegister={handleGoToRegister} userAccess={handleAccess} />
    <Register toAccess={handleGoToAccess} userRegister={handleRegister} />
    <Search />
</>, document.getElementById('root'))