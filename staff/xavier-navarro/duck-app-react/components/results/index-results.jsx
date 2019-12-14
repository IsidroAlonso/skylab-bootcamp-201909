function Results({ items, onItemRender }) {
    return <main className="main__container main">
            <ul className="results">
                {items.map(item => onItemRender(item))}
            </ul>
        </main>
}