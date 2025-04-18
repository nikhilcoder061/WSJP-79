const { verifyToken } = require("../helping");

const authAdmin = (req, res, next) => {
    console.log(req?.headers?.authorization);
    if (req?.headers?.authorization) {
        if (verifyToken(req?.headers?.authorization)) {
            next();
        } else {
            res.send({
                msg: "Token not verified",
                status: 0
            });
        }
    } else {
        res.send({
            msg: "Token not available",
            status: 0
        });
    }
}

module.exports = authAdmin;