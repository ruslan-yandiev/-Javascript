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
    let checkId = false;
    let checkName = false;
    let flight = flights[ticket.split('-')[0]];

    if (!flight) throw new Error('Flight not found');

    if (flight['registrationStarts'] > nowTime) throw new Error('Вы слишком рано');

    if (flight['registartionEnds'] < nowTime) throw new Error('Вы опоздали на регистрацию');

    let tickets = flight['tickets'];

    for (let tick of tickets) {

        if (tick['id'] == ticket) checkId = true;

        if (tick['fullName'] == fullName) checkName = true;

        if (checkId == true && checkName == true) {
            tick['registrationTime'] = nowTime;
            return {...tick, valide: 'Регистрация на рейс прошла успешно',};
        } else if (checkId == false) {
            throw new Error('Неверный номер билета'); 
        } else { 
            throw new Error('Неверное имя');
        }
    };
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
console.log(a);

const reg = eRegistration('BH118-B50', 'Ivanov I. I.', makeTime(11, 0));
console.log("reg", reg);



function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}
