module.exports =function({items, onItemRender}){

    return `<ul class="item-list"> 
        ${items.map(item => onItemRender(item)).join('')} 
    </ul>`    
}

