import axios from 'axios';

export const ping = async (message = 'test') => {
    const response = axios("http://192.168.0.101:8080/ping", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'text/plain',
        },
        credentials: 'same-origin',
        data: message
      }).then(function(response){
        console.log('got response');
        console.log(response.data);
        return response.data;
      }) 
    return response;
  };