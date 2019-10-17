function Component(container) {
    this.__container__ = container;
}

Object.defineProperty(Component.prototype, 'container', {
    get: function() {
        return this.__container__;
    }
});

Component.prototype.add = function(child) {
    if (!(child instanceof Component)) throw TypeError(child + ' is not a Component');

    this.container.append(child.container);
};