require('dotenv').config()

const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);


const generateUniqueImageName = (imageName) => {
    return Math.floor(Math.random() * 100000) + new Date().getTime() + imageName
}

const encryptPassword = (value) => {
    return cryptr.encrypt(value);
}

const decryptPassword = (value) => {
    return cryptr.decrypt(value);
}



module.exports = { generateUniqueImageName, encryptPassword, decryptPassword };