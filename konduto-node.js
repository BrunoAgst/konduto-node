const axios = require('axios');

//GET

module.exports.getOrder = function (order, secretkey){
  axios.get(`https://api.konduto.com/v1/orders/${order}`,
  { auth: { username: `${secretkey}`,  password: ''}})
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