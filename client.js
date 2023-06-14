import axios from 'axios';

export const ping = async (message = 'test') => {
    const response = axios("http://localhost:5000/ping", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      data: message,
    }).then(function (response) {
      console.log("got response");
      console.log(response.data);
      return response.data;
    }); 
    return response;
  };