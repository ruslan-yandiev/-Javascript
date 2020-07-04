'use strict'

class HtmlElement {

    constructor() {
        this._target;
        this._render = function() { document.body.appendChild(this._target) };
        this._unrender = function() { document.body.removeChild(this._target) };
        this._template;
    }

    set target(element) { 
        const tegsHTML = [
            'div', 'h1', 'h2', 'h3', 'h4', 'br',
            'a', 'p', 'table', 'td', 'th', 'tr',
            'td', 'form', 'input', 'label', 'button'
        ];
        
        if (!tegsHTML.includes(element) || element == '' || element == ' ')
            throw new Error(`Нет такого элемента как ${element}`);

        this._target = document.createElement(element);
    }

    set template(templ) {
        if (typeof templ != 'string')
            throw new Error('Необходимо передать шаблон в виде строки!');

        this._template = templ;

        this.target = this.parsingElement()
    }

    set variables(obj) {
        for (let key in obj) {
            if (typeof obj[key] == 'string') {
                this._template = this._template.replace(new RegExp(`{{${key}}}`, 'g'), obj[key]);
            } else if (typeof obj[key] == 'function') {
                this._template = this._template.replace(new RegExp(`{{${key}}}`, 'g'), obj[key]);
            } else {
                throw new Error('Необходимо передать строку или функцию!')
            };
        }

        this._target.textContent = this._template
    }

    set styles(obj) {
        for (let key in obj) { this._target.style[key] = obj[key] }
    }

    parsingElement() {
        let element = this._template.split('<').join('').split(' ')[0].split('>')[0];
        this._template = this._template.split(`<${element}>`).join('').split(`</${element}>`).join('');
        return element
    }

    render() {
        this._render();
    }

    unrender() {
        this._unrender();
    }
}
