import React from 'react'
import './index.sass'
// import Feedback from '../Feedback'

export default function ({ title, description, status }) {
    return <li className="task-list__item">
        <a href="#" className="task">
            <h2 className="task__title">{title}</h2>
            <p className="task__description">{description}</p>
            <span className="task__status">{status}</span>
            <span className="task__action">
                <form method="post" action="">
                    <input type="hidden" name="id" />
                    <button type="submit" title="TODO">◼️</button>
                </form>
            </span>
            <span className="task__action">
                <form method="post" action="">
                    <input type="hidden" name="id" />
                    <button type="submit" title="DOING">▶️</button>
                </form>
            </span>
            <span className="task__action">
                <form method="post" action="">
                    <input type="hidden" name="id" />
                    <button type="submit" title="REVIEW">📖</button>
                </form>
            </span>
            <span className="task__action">
                <form method="post" action="">
                    <input type="hidden" name="id" />
                    <button type="submit" title="DONE">👍</button>
                </form>
            </span>
        </a>
    </li>
}