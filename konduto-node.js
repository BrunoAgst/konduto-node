const axios = require('axios');
const url = "https://api.konduto.com/v1/orders";
const urlBlacklist = "https://api.konduto.com/v1/blacklist/email"; 

/*
    Consultar pedido na API da Konduto.

    - order = número pedido.
    
    - secretkey = a chave privada de sua loja.
*/

module.exports.getOrder = function(order, secretkey){
  axios.get(url + `/${order}`,
  { auth: { username: `${secretkey}`,  password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

/*
    Alterar status do pedido na API da Konduto.

    - order = número do pedido.

    - status = novo status do pedido (APPROVED, DECLINED, NOT_AUTHORIZED, CANCELED ou FRAUD).

    - secretkey = a chave privada de sua loja.
*/


module.exports.putOrder = function(order, status ,secretkey){

  let statusJSON = JSON.stringify(status);

  axios.put(url + `/${order}`, statusJSON,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

/*
    Enviar pedido para a API da Konduto.

    - newOrder = novo pedido.

    - secretkey = a chave privada de sua loja.

*/

module.exports.sendOrder = function(newOrder, secretkey){

  let orderJSON = JSON.stringify(newOrder);

  axios.post(url, orderJSON,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

/*
    Consultar e-mail na Blacklist

    - email = endereço do e-mail

    - secretkey = a chave privada de sua loja
*/

module.exports.getBlacklist = function(email, secretkey){
  axios.get(urlBlacklist + `/${email}`,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

/*
    Alterar data de expiração do e-mail

    - email = endereço do e-mail 

    - days = quantidade de dias

    - secretkey = a chave privada de sua loja
*/

module.exports.putBlacklist = function(email, secretkey, days){
  axios.put(urlBlacklist + `/${email}`,{"days_to_expire": days},
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

/*
    Adicionar e-mail na blacklist

    - email = endereço do e-mail 

    - secretkey = a chave privada de sua loja
*/

module.exports.addBlacklist = function(email, secretkey){

  let emailJSON = JSON.stringify(email);

  axios.post(urlBlacklist, emailJSON,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

/*
    Deletar e-mail blacklist

    - email = endereço do e-mail 

    - secretkey = a chave privada de sua loja

*/

module.exports.deleteBlacklist = function(email, secretkey){

  axios.delete(urlBlacklist + `/${email}`,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}


