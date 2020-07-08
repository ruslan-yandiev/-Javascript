'use strict'

const someElement = new Div()

someElement.template = `<div>{{output}} {{output2}} {{output3}} {{output4}}</div>`;
someElement.variables = {
    output: () => { return 'Hello' },
    output2: () => { return 'World' },
    output3: 'Hi',
    output4: 'Ruslan'
};

// Цвет текста красный
someElement.styles = {
    color: 'red'
}
someElement.render()
someElement.onClick = () => {
    console.log('click')
}
// Цвет текста синий
someElement.styles = {
    color: 'blue'
}
// someElement.unrender()


const someElement2 = new Input();
someElement2.template = `<input type="text" value={{value}} value2={{value2}} />`;
someElement2.variables = {
    value: () => { return '1986'},
    value2: '2020'
}
someElement2.render();
someElement2.onFocus(() => console.log('focus'));
someElement2.onInput(() => console.log('input'));
// someElement.unrender()
