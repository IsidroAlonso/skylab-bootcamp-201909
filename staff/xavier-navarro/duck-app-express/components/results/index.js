module.exports = function ({ items, onItemRender }) {
    return `<main class="main__container main">
                <ul class="results">
                    ${items.map(item => onItemRender(item)).join('')}
                </ul>
            </main>`
}