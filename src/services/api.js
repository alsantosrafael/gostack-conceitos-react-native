const axios = require('axios')

const api = axios.create({
  baseURL: 'http://192.168.1.72:3333',

})

/**
 * iOS com emulador: localhost
 * iOS com celular: IP da máquina,
 * Android com emulador: localhost (com adb reverse tcp:3333 tcp:3333)
 * Android com celular: IP da máquina
 * http://192.168.1.72:3333
 */

 export default api;