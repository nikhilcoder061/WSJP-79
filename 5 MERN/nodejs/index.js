const otpGenerator = require('otp-generator');

const newOTP = otpGenerator.generate(10, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

console.log(newOTP);
