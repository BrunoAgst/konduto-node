const axios = require('axios');
const url = "https://api.konduto.com/v1/orders";
const urlBlacklist = "https://api.konduto.com/v1/blacklist/email"; 

async function getOrder(order, secretkey){

    try{
        var response = await axios.get(url + `/${order}`,{ auth: { username: `${secretkey}`,  password: ''}});
        return response;

    }catch(err){
        return err.message;
    };
};

async function putOrder(order, status ,secretkey){

    try{
        var response = await axios.put(url + `/${order}`, status, {  auth: { username: `${secretkey}`, password: ''}});
        return response;

    }catch(err){
        return err.message;
    };
};

async function sendOrder(order, secretkey){

    var orderJSON = JSON.stringify(order);

    try{
        var response = await axios.post(url, orderJSON, {  auth: { username: `${secretkey}`, password: ''}});
        return response;
    }catch(err){
        return err.message;
    }  
};

async function getBlacklist(email, secretkey){

    try{
        var response = await axios.get(urlBlacklist + `/${email}`, {  auth: { username: `${secretkey}`, password: ''}});
        return response;

    }catch(err){
        return err.message;
    };
};

async function putBlacklist(email, secretkey, days){

    try{
        var response = await axios.put(urlBlacklist + `/${email}`,{"days_to_expire": days}, {  auth: { username: `${secretkey}`, password: ''}});
        return response;

    }catch(err){
        return err.message;
    };
};


async function addBlacklist(email, secretkey){

    var emailJSON = JSON.stringify(email);

    try{
        var response = await axios.post(urlBlacklist, emailJSON, { auth: { username: `${secretkey}`, password: ''}});
        return response;

    }catch(err){
        return err.message;
    };
};

async function deleteBlacklist(email, secretkey){
    try{
        var response =axios.delete(urlBlacklist + `/${email}`, { auth: { username: `${secretkey}`, password: ''}});
        return response;
    
    }catch(err){
        return err.message;
    
    };
};

module.exports = {
    getOrder,
    putOrder,
    sendOrder,
    getBlacklist,
    putBlacklist,
    addBlacklist,
    deleteBlacklist
};