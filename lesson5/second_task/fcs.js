// 'use strict'

function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(10, 0),
        registartionEnds: makeTime(15, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null,
            }
        ],
    }
};

/**
 * Добавление рейса
 * 
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 * 
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 * 
 * Гарантирует что найдет свободное место нужного типа или вернет null
 * 
 * @param {Flight} flight 
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
        case 0: // standart
            const availableSeats = [];

            for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    availableSeats.push(i)

            if (availableSeats.length === 0)
                return null;

            const index = Math.floor(Math.random() * availableSeats.length);
            return availableSeats[index];
        case 1: // business
            for (let i = 1; i <= flight.businessSeats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    seatsOfType++;

            if (seatsOfType === 0)
                return null;

            do {
                seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                exists = flight.tickets.find(item => item.seat === seat);
            } while (exists);

            return seat;
        default:
            throw new Error(`Unknown type`)
    }
}

/**
 * Покупка билета на самолет
 * 
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 * 
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight)
        throw new Error('Flight not found');

    if (flight.tickets.length >= flight.seats)
        throw new Error('No seats available');

    if (buyTime > flight.registartionEnds)
        throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat)
        throw new Error(`No seats of type ${type} available. You can choose another type`);

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        type,
        seat,
    }

    flight.tickets.push(ticket);

    // return Object.assign({}, ticket);
    return {
        ...ticket,
        welcome: 'Nice to choose us',
    };
}

/**
 * Функция пробует произвести электронную регистрацию пассажира
 * 
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 * 
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
    let flight = flights[ticket.split('-')[0]];

    if (!flight) throw new Error('Flight not found');
    if (flight.registrationStarts > nowTime) throw new Error('Вы слишком рано');
    if (flight.registartionEnds < nowTime) throw new Error('Вы опоздали на регистрацию');

    let foundTicket = flight.tickets.find(objTicket => objTicket.id === ticket);

    if (!foundTicket) throw new Error('Нет такого билета!');
    if (foundTicket.fullName !== fullName) throw new Error('Неверное имя');

    foundTicket['registrationTime'] = nowTime;

    return {...foundTicket, valide: 'Регистрация на рейс прошла успешно',};
}

/**
 * Отчет о рейсе на данный момент
 * 
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

 /**
 * Функция генерации отчета по рейсу
 * 
 *  * проверка рейса
 *  * подсчет
 * 
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flightName, nowTime) {
    if (typeof flightName !== 'string') throw new Error('invalid data type in argument');

    let flight = flights[flightName];

    if (!flight) throw new Error('Flight not found');

    let registration = flight.registrationStarts < nowTime && flight.registartionEnds > nowTime,
        complete = flight.registartionEnds <= nowTime,
        countOfSeats = flight['seats'] + flight['businessSeats'],
        reservedSeats = flight['tickets'].length,
        registeredSeats = 0;

    for (let elem of flight.tickets) if (elem.registrationTime != null) registeredSeats += 1;

    return {
        flight: flightName,
        registration: registration,
        complete: complete,
        countOfSeats: countOfSeats,
        reservedSeats: reservedSeats,
        registeredSeats: registeredSeats
    };
}

function flightDetails(flightName) {
    if (typeof flightName !== 'string') throw new Error('invalid data type in argument');

    let flight = flights[flightName];

    if (!flight) throw new Error('Flight not found');

    let div = document.createElement('div');
    div.id = 'flight - details';

    let h2 = document.createElement('h2');
    h2.textContent = 'Отчет по рейсу:';
    div.appendChild(h2);

    for (key in info) {
        let p = document.createElement('p');
        p.textContent = `${key}: ${info[key]}`;
        div.appendChild(p);
    }

    h2 = document.createElement('h2');
    h2.textContent = 'Cписок купленных билетов:';
    div.appendChild(h2);

    let tickets = flight['tickets'];

    for (obj of tickets) {
        let h4 = document.createElement('h4');
        h4.textContent = `Билет №${obj.id}:`;
        div.appendChild(h4);

        for (key in obj) {
            let p = document.createElement('p');
            p.textContent = `${key}: ${obj[key]}`;
            div.appendChild(p);
        }
    }

    document.body.appendChild(div);
}

const form = document.getElementById('e-registration-form');
form.addEventListener('submit', submitHandler);

/**
 * Обработка отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    //прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    // alert('ok')

    //свойство elements хранит всебе все imputы, что есть в форме, elements является коллекцией(псевдо массив)
    // console.log(form.elements);
    // console.log(form.elements.ticket.value);

    const data = {
        ticket: form.elements.ticket.value
    }

    console.log(data)
}

const input = document.getElementsByTagName('input')[0];
// повесим событие клавиатуры на input
input.addEventListener('keydown', handler); // событие нажатия клавиатуры
// input.addEventListener('keypress', handler); // событие удержания кнопки клавиатуры
// input.addEventListener('keyup', handler); //отжатие клавы

const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

/**
 * 
 * @param {KeyboardEvent} event 
 */
function handler(event) {
    // console.log(event.type, event.key, event.code);
    
    if (event.key.length > 1) return; // позволит нам удалить введенное и обновлять даже если выбрано поле ввода
    // теперь можнобудет вводить только строковые числа
    if (!validKeys.includes(event['key'])) {
        event.preventDefault();
        // event.stopPropagation(); // у меня и без доп прерывания работает
    }
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
console.log(a);

const reg = eRegistration('BH118-B50', 'Ivanov I. I.', makeTime(11, 0));
console.log("reg", reg);

const info = flightReport('BH118', makeTime(12, 0));
console.log("info", info);

flightDetails('BH118');


// function displayFlights() {
//     console.log('*** List of all flights ***');
//     console.table(flights);
// }

// function flightDetails2(flightName) {
//     console.log(`*** Details of flight ${flightName} ***`);
//     const flight = flights[flightName];
//     if (!flight) {
//         console.warn('Flight not found');
//         return;
//     }

//     console.table(flight);
//     console.table(flight.tickets);
// }