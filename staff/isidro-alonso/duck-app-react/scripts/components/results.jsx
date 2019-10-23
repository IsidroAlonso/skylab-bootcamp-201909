function Results({ items, itemRender }) {
    return <ul className="results">
        {items.map(item => itemRender(item))}
    </ul>
}