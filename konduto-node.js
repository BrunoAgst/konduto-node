const axios = require('axios');

//GET

module.exports.getOrder = function(order, secretkey){
  axios.get(`https://api.konduto.com/v1/orders/${order}`,
  { auth: { username: `${secretkey}`,  password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

//PUT

module.exports.putOrder = function(order, status ,secretkey){

  let statusJSON = JSON.stringify(status);

  axios.put(`https://api.konduto.com/v1/orders/${order}`, statusJSON,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

//POST

module.exports.sendOrder = function(newOrder, secretkey){

  let orderJSON = JSON.stringify(newOrder);

  axios.post(`https://api.konduto.com/v1/orders`, orderJSON,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

//GET Blacklist

module.exports.getBlacklist = function(email, secretkey){
  axios.get(`https://api.konduto.com/v1/blacklist/email/${email}`,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

//PUT Blacklist

module.exports.putBlacklist = function(email, secretkey, days){
  axios.put(`https://api.konduto.com/v1/blacklist/email/${email}`,{"days_to_expire": days},
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

//POST Blacklist

module.exports.addBlacklist = function(email, secretkey){

  let emailJSON = JSON.stringify(email);

  axios.post(`https://api.konduto.com/v1/blacklist/email`, emailJSON,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}

//DELETE Blacklist

module.exports.deleteBlacklist = function(email, secretkey){

  axios.delete(`https://api.konduto.com/v1/blacklist/email/${email}`,
  {  auth: { username: `${secretkey}`, password: ''}})
  .then(function(response){
      return console.log(response.data);
  })
  .catch(function(error){
      return console.log(error.response);
  })
}


