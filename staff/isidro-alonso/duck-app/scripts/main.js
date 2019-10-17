debugger;
listInitialRandomDucks();

var search = new Search(document.getElementsByClassName('search')[0]);
search.onSubmit(listSearchResults);

function listInitialRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().splice(0, 3);

        paintResults(ducks);
    });
}

function listSearchResults(query) {
    searchDucks(query, paintResults);
}

var results = new Results(document.getElementsByClassName('results')[0]);

results.onItemClick = function(duck) {
    var detail = new Detail(document.getElementsByClassName('detail')[0]);
    detail.render(duck);

    var views = document.getElementsByClassName('view');

    views[0].classList.add('hide');
    views[1].classList.remove('hide');
};

function paintResults(ducks) {
    results.render(ducks);
}
