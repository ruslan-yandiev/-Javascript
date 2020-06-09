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

    if (!flight) {
        alert('Неверно указан рейс');
        throw new Error('Flight not found');
    }

    if (flight.tickets.length >= flight.seats) {
        alert('Нет мест');
        throw new Error('No seats available');
    }

    let testing = /^[a-zA-Zа-яА-ЯёЁ']/.test(fullName)

    if (!testing) {
        alert('Введите имя');
        throw new Error('Enter the name');
    }

    if (buyTime > flight.registartionEnds) throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat) {
        alert(`No seats of type ${type} available. You can choose another type`);
        throw new Error(`No seats of type ${type} available. You can choose another type`);
    }

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

    alert(`Ваш билет №${ticket.id}. Место: №${ticket.seat}`);

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

    let dropDiv = document.getElementById('flight - details');
    
    if (dropDiv) document.body.removeChild(dropDiv);

    let div = document.createElement('div');
    div.id = 'flight - details';

    let h2 = document.createElement('h2');
    h2.textContent = 'Отчет по рейсу:';
    div.appendChild(h2);

    let info = flightReport('BH118', makeTime(12, 0));

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

const form = document.getElementById('buy-ticke-form');
form.addEventListener('submit', submitHandler);

/**
 * Обработка отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    event.preventDefault();

    let data = form.elements,
        flightName = data.flightName.value,
        fullName = data.fullName.value,
        type = +data.type.value;

    buyTicket(flightName, makeTime(5, 10), fullName, type);

    data.flightName.value = '';
    fullName = data.fullName.value = '';
    data.type.value = '0';

    flightDetails('BH118');
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
console.log(a);

const reg = eRegistration('BH118-B50', 'Ivanov I. I.', makeTime(11, 0));
console.log("reg", reg);