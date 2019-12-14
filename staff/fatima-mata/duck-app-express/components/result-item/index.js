module.exports= function({item:{ id, title, image, price, isFav} , favPath, detailPath}){

    return `<li class="item-list__li"> 
    <a class="item-list__link" href="${`${detailPath}/${id}`}">    
        <h2 class="item-list__title">${title} </h2>
        <img src=${image} class="item-list__image"/>
        <p class="item-list__price">${price} </p>
        <span >
        <form method="post" action="${favPath}">
            <input type="hidden" name="id" value="${id}">
            <button class="item-list__buttonfav" type="submit"> <img class="item-list__fav" src= ${isFav ? 'https://images.emojiterra.com/google/android-pie/512px/2764.png' : 'https://image.flaticon.com/icons/png/512/22/22236.png'} alt="fav" />
            </button>
        </form>
    </span>
        </a>
    </li>
    `
}