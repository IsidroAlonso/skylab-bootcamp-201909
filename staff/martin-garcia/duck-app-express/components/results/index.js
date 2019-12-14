module.exports = function({ items, onItemRender }) {
    return ` <main class="search__main main"> 
                ${items.map(item=>onItemRender(item)).join('')}
            </main>
    `
}