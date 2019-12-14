function Results({items, onItemRender}) {
    return  <main className="search__main main"> 
                {items.map(item=>onItemRender(item))}
            </main>
}