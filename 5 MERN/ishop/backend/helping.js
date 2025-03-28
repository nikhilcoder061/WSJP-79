const generateUniqueImageName = (imageName) => {
    return Math.floor(Math.random() * 100000) + new Date().getTime() + imageName
}

module.exports = generateUniqueImageName;