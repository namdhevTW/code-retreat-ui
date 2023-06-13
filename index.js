import { ping } from './client';
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Request-Method'] = ['POST', 'GET', 'OPTIONS'];

document.getElementById("ping").onclick = async function(){
    const message = document.getElementById("message").value;
    document.getElementById("response").innerText = message;
    await ping(message);
}
