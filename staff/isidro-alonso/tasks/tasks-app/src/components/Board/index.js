import React from 'react'
import './index.sass'
import Feedback from '../Feedback'

export default function ({ user, onLogout, error }) {
    return <section className="view board">
        <h1 className="board__title">Task Board</h1>
        <h2 className="board__user">{user}</h2>
        <a href="" className="board__favs">Favorites</a>
        <form className="board__logout" onSubmit={event => { event.preventDefault(); onLogout() }}><button>Logout</button></form>
        <form className="board__form">
            <span className="board__icon">📝</span>
            <input className="board__criteria" type="text" name="query" placeholder="criteria" />
            <button className="board__submit">🔍</button>
        </form>

        {error && <Feedback message={error} />}
    </section>
}