function Search(container) {
    this.__container__ = container;
}

Search.prototype.onSubmit = function (expression) {
    this.__container__.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        expression(query);
    });
};