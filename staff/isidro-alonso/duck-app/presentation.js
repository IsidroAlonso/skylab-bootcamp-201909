debugger;
listInitialRandomDucks();

var search = document.getElementsByClassName('search')[0];

search.addEventListener('submit', function (event) {
    event.preventDefault();

    var query = this.query.value;

    listSearchResults(query);
});

function listInitialRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().splice(0, 3);

        paintResults(ducks);
    });
}

function listSearchResults(query) {
    searchDucks(query, paintResults);
}

function paintResults(ducks) {
    var results = document.getElementsByClassName('results')[0];
    results.innerHTML = '';

    ducks.forEach(function (duck) {
        var result = document.createElement('li');
        result.classList.add('results__item');

        var item = document.createElement('a');
        item.classList.add('item');
        item.addEventListener('click', function (event) {
            var id = duck.id;

            retrieveDuck(id, paintDetail);
        });
        result.append(item);

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

        results.append(result);
    });
}

function paintDetail(duck) {
    var detail = document.getElementsByClassName('detail')[0];

    var title = detail.getElementsByClassName('detail__title')[0];
    title.innerText = duck.title;

    var image = detail.getElementsByClassName('detail__image')[0];
    image.src = duck.imageUrl;

    var description = detail.getElementsByClassName('detail__description')[0];
    description.innerText = duck.description;

    var store = detail.getElementsByClassName('detail__store')[0];
    store.href = duck.link;

    var price = detail.getElementsByClassName('detail__price')[0];
    price.innerText = duck.price;

    var back = detail.getElementsByClassName('detail__back')[0];
    back.addEventListener('click', function (event) {
        var views = document.getElementsByClassName('view');

        views[0].classList.remove('hide');
        views[1].classList.add('hide');
    });

    var views = document.getElementsByClassName('view');

    views[0].classList.add('hide');
    views[1].classList.remove('hide');
}