const Feedback = require('../feedback')

module.exports = function( {item, favPath, backPath}){
    return   `<div class="view detail">
    <section class = "result view">
        <div class ="detail-list">
            <h1 class="detail-list__header">⭐️🐥⭐️DUCK APP⭐️🐥⭐️</h1>  
            <h2 class="detail-list__title" >${item.title}</h2>
            <img class="detail-list__image" src="${item.image}"/>
            <p class="detail-list__description">${item.description}</p>
            <a href=${item.link} class="detail-list__store">GO TO STORE</a>
            <p class="detail-list__price">${item.price}</p>
            <a class="detail-list__button" href="${backPath}">GO BACK</a>
            <span >
            <form method="post" action="${favPath}">
                <input type="hidden" name="id" value="${item.id}">
                <button class="item-list__buttonfav" type="submit"> <img class="item-list__fav" src= ${item.isFav ? 'https://images.emojiterra.com/google/android-pie/512px/2764.png' : 'https://image.flaticon.com/icons/png/512/22/22236.png'} alt="fav" />
                </button>
            </form>
            </span>           
        </div>
    </section>

</div>`
}

