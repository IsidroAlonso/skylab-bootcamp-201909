class Detail extends Component {
    constructor(container) {debugger;
        super(container)
        this.render = this.render.bind(this)
    }

    
    render(item) {
        this.container.getElementsByClassName('details__title')[0].innerText = item.title
        this.container.getElementsByClassName('details__img')[0].src = item.imageUrl
        this.container.getElementsByClassName('details__description')[0].innerText = item.description
        this.container.getElementsByClassName('details__price-tag')[0].innerText = item.price

        // this.show()
    }
}