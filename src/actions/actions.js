import axios from "axios";

export const getWays = async (from, to) => {
    try {
        console.debug(from, to)
        // 1. Вызов сетевого запроса на адрес сервера localhost:7777
        // 2. Положить в этот запрос два параметра
        const data = await axios.get(`http://localhost:7777/new/ways`, {
            params: {
                from: from,
                to: to
            }
        })

        console.debug('ОТВЕТ СЕРВЕРЕА, WAYS', { data: data.data })

        // 3. Вернуть из функции ответ сервера в виде JSON
        return data.data;
    } catch (e) {
        console.error('ОТВЕТ СЕРВЕРЕА, ERRORS, WAYS', e)
        return [];
    }
}

export const getCabinetByName = async (cab_name, callback) => {
    // 1. Вызов сетевого запроса на адрес сервера localhost:7777
    // 2. Положить в этот запрос 1 параметр
    try {
        const data = await axios.get(`http://localhost:7777/new/cabinets`, {
            params: {
                cab_name: cab_name
            }
        })
        console.debug('ОТВЕТ СЕРВЕРЕА, CAB', { data: data.data })
         callback(Number(data.data[0].floor)) 

        
        // 3. Вернуть из функции ответ сервера в виде JSON
        return data.data;
    } catch (e) {
        console.error('ОТВЕТ СЕРВЕРЕА, ERRORS, CAB', e)
        return [];
    }
}