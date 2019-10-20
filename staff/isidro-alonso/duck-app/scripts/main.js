const xhr = new XMLHttpRequest;

xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search');

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
        let ducks = JSON.parse(xhr.responseText);

        ducks = ducks.shuffle().splice(0, 3);

        const results = document.getElementsByClassName('results')[0];
        results.innerHTML = '';

        ducks.forEach(function (duck) {
            const result = document.createElement('li');
            result.classList.add('results__item');

            const item = document.createElement('a');
            item.classList.add('item');
            item.addEventListener('click', function (event) {

                const id = duck.id;

                const xhr = new XMLHttpRequest;

                xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

                xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 201) {
                        const duck = JSON.parse(xhr.responseText);

                        const detail = document.getElementsByClassName('detail')[0];

                        const title = detail.getElementsByClassName('detail__title')[0];
                        title.innerText = duck.title;

                        const image = detail.getElementsByClassName('detail__image')[0];
                        image.src = duck.imageUrl;

                        const description = detail.getElementsByClassName('detail__description')[0];
                        description.innerText = duck.description;

                        const store = detail.getElementsByClassName('detail__store')[0];
                        store.href = duck.link;

                        const price = detail.getElementsByClassName('detail__price')[0];
                        price.innerText = duck.price;

                        const back = detail.getElementsByClassName('detail__back')[0];
                        back.addEventListener('click', function () {

                            results.classList.remove('hide');
                            detail.classList.add('hide');
                        });

                        results.classList.add('hide');
                        detail.classList.remove('hide');
                    }
                };

                xhr.send();
            });

            result.append(item);

            const title = document.createElement('h2');
            title.classList.add('item__title');
            title.innerText = duck.title;

            const image = document.createElement('img');
            image.classList.add('item__image');
            image.src = duck.imageUrl;

            const price = document.createElement('span');
            price.classList.add('item__price');
            price.innerText = duck.price;

            item.append(title, image, price);

            results.append(result);
        });
    }
};

xhr.send();

const search = document.getElementsByClassName('search')[0];

search.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = this.query.value;

    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            let ducks = JSON.parse(xhr.responseText);

            const results = document.getElementsByClassName('results')[0];
            results.innerHTML = '';

            ducks.forEach(function (duck) {
                const result = document.createElement('li');
                result.classList.add('results__item');

                const item = document.createElement('a');
                item.classList.add('item');
                item.addEventListener('click', function (event) {

                    const id = duck.id;

                    const xhr = new XMLHttpRequest;

                    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

                    xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 201) {
                            const duck = JSON.parse(xhr.responseText);

                            const detail = document.getElementsByClassName('detail')[0];

                            const title = detail.getElementsByClassName('detail__title')[0];
                            title.innerText = duck.title;

                            const image = detail.getElementsByClassName('detail__image')[0];
                            image.src = duck.imageUrl;

                            const description = detail.getElementsByClassName('detail__description')[0];
                            description.innerText = duck.description;

                            const store = detail.getElementsByClassName('detail__store')[0];
                            store.href = duck.link;

                            const price = detail.getElementsByClassName('detail__price')[0];
                            price.innerText = duck.price;

                            const back = detail.getElementsByClassName('detail__back')[0];
                            back.addEventListener('click', function (event) {

                                results.classList.remove('hide');
                                detail.classList.add('hide');
                            });

                            results.classList.add('hide');
                            detail.classList.remove('hide');
                        }
                    };

                    xhr.send();
                });
                result.append(item);

                const title = document.createElement('h2');
                title.classList.add('item__title');
                title.innerText = duck.title;

                const image = document.createElement('img');
                image.classList.add('item__image');
                image.src = duck.imageUrl;

                const price = document.createElement('span');
                price.classList.add('item__price');
                price.innerText = duck.price;

                item.append(title, image, price);

                results.append(result);
            });
        }
    };

    xhr.send();
});