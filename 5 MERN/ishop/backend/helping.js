require('dotenv').config()
var jwt = require('jsonwebtoken');

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

const accessToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY);
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports = { generateUniqueImageName, encryptPassword, decryptPassword, accessToken, verifyToken };