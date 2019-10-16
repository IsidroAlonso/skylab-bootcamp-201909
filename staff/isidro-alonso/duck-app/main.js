var result = document.getElementsByClassName('result')[0];

var detail = document.getElementsByClassName('detail')[0];

var searchbar = document.getElementsByClassName('searchbar')[0];

var searchbutton = document.getElementsByClassName('searchbutton')[0];

var formulary = document.getElementsByClassName('formulary')[0];

formulary.addEventListener('submit', function (stahp) {

    stahp.preventDefault();

    result.innerHTML = '';

    detail.innerHTML = '';

    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + searchbar.value);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText);

            var ul = document.createElement('ul');
            result.append(ul);

            ducks.forEach(function (duck) {
                var li = document.createElement('li');
                li.addEventListener('click', function () { duckitem(duck.id) });

                var title = document.createElement('title');
                li.classList.add('result__title');
                title = duck.title; //.innerText

                var img = document.createElement('img');
                img.src = duck.imageUrl;

                var price = document.createElement('price');
                // li.classList.remove('result__title'); 
                li.classList.add('result__price');
                price = duck.price;

                li.append(title);
                li.append(img);
                li.append(price);

                ul.append(li);

            });
        }
    };

    xhr.send();

});

function duckitem(id) {

    result.innerHTML = '';

    var xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(xhr.responseText);

            var ul = document.createElement('ul');
            detail.append(ul);

            var li = document.createElement('li');

            var title = document.createElement('title');
            li.classList.add('result__title');
            title = duck.title;

            var img = document.createElement('img');
            img.src = duck.imageUrl;

            var price = document.createElement('price');
            li.classList.add('result__price');
            price = duck.price;

            var description = document.createElement('description');
            li.classList.add('result__description');
            description = duck.description;

            var buttonback = document.createElement('button');
            buttonback.classList.add('buttonback');
            buttonback.innerText = 'Back';
            buttonback.addEventListener('click', function(){ detail.innerHTML = ''; });

            li.append(title);
            li.append(img);
            li.append(price);
            li.append(description);

            li.append(buttonback);

            ul.append(li);

        }
    };

    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

    xhr.send();

};