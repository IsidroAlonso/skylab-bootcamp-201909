function ResultItem(container) {
    this.__container__ = container;
    container.classList.add('results__item');
}

ResultItem.prototype.onClick = function (duck) { console.log('clicked', duck) };

ResultItem.prototype.render = function (duck) {
    var item = document.createElement('a');
    item.classList.add('item');

    item.addEventListener('click', function (event) {
        var id = duck.id;

        retrieveDuck(id, this.onClick);
    }.bind(this));

    var title = document.createElement('h2');
    title.classList.add('item__title');
    title.innerText = duck.title;

    var image = document.createElement('img');
    image.classList.add('item__image');
    image.src = duck.imageUrl;

    var price = document.createElement('span');
    price.classList.add('item__price');
    price.innerText = duck.price;

    item.append(title, image, price);

    this.__container__.append(item);
};