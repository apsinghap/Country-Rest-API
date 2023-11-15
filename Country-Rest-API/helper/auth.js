const jwt = require("jsonwebtoken");

const jwtToken = async function (body) {
    const token = jwt.sign(body, "#$#@$#tyest!!", { expiresIn: "1w" });
    return token;
};

const isAuthenticatedUSer = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.status(400).json({
                meta: { msg: "Unauthorized access.", status: false },
            });
        }

        const decodedData = jwt.verify(token, "#$#@$#tyest!!");
        if (decodedData) {
            next()
        } else {
            return res.status(400).json({
                meta: { msg: "Unauthorized access.", status: false },
            });
        }
    } catch (error) {
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}


module.exports = {
    jwtToken,
    isAuthenticatedUSer
};