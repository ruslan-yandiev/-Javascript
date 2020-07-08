'use strict'

class Input extends HtmlElement {
    constructor() {
        super();
    }

    onInput(f) {
        this._target.addEventListener('keyup', f);
    }

    onFocus(f) {
        this._target.addEventListener('focus', f)
    }
}
