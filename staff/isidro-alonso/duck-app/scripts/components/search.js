function Search(container) {
    Component.call(this, container);
}

Search.extend(Component);

Search.prototype.onSubmit = function (expression) {
    this.__container__.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        expression(query);
    });
};