function Detail(container) {
    this.__container__ = container;
}

Detail.prototype.render = function (duck) {
    var title = this.__container__.getElementsByClassName('detail__title')[0];
    title.innerText = duck.title;

    var image = this.__container__.getElementsByClassName('detail__image')[0];
    image.src = duck.imageUrl;

    var description = this.__container__.getElementsByClassName('detail__description')[0];
    description.innerText = duck.description;

    var store = this.__container__.getElementsByClassName('detail__store')[0];
    store.href = duck.link;

    var price = this.__container__.getElementsByClassName('detail__price')[0];
    price.innerText = duck.price;

    var back = this.__container__.getElementsByClassName('detail__back')[0];
    back.addEventListener('click', function (event) {
        var views = document.getElementsByClassName('view');

        views[0].classList.remove('hide');
        views[1].classList.add('hide');
    });
};