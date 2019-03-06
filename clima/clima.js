const axios = required('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e0219df07556546bdf846ace9c5b147&units=metric`)

    return resp.data.main.temp;
}

module.export = {
    getClima
}