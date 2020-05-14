// площадь правильного треугольника'

'use strict'

let side = prompt('Введите сторону треугольника', '');

let result = ((Math.pow(+side, 2)) * Math.sqrt(3)) / 4

alert(`площадь правильного треугольника равна ${result}`)