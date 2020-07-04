'use strict'

class Div extends HtmlElement {
    constructor() {
        super();
    }

    set onClick(f) {
        this._target.addEventListener('click', f);
    }
}
