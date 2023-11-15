const { jwtToken } = require("../../helper/auth");
const cred = require("./database")

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const userdata = cred.find(data => data.userName === userName && data.password === password)
        if (userdata) {
            const token = await jwtToken({
                userName: userdata.userName
              });
            return res.json({
                meta: { msg: "User found", status: true },
                data: userdata,
                token
            });
        } else {
            return res.json({
                meta: { msg: "User not found", status: false },
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
    login
};