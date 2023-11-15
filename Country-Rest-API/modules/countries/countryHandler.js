const axios = require('axios');

const countryDetails = async (req, res) => {
    try {
        const { countryName } = req.query;

        if (!countryName) {
            return res.status(400).json({
                meta: { msg: "Parameter missing.", status: false },
            });
        }

        const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        const details = await axios.get(url);

        return res.json({
            meta: { msg: "Details found", status: true },
            data: details.data
        });
    } catch (error) {
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}

const countryList = async (req, res) => {
    try {
        const { filter } = req.query;

        const url = `https://restcountries.com/v3.1/all?fields=${filter}`;
        const details = await axios.get(url);

        return res.json({
            meta: { msg: "Details found", status: true },
            data: details.data
        });
    } catch (error) {
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}

module.exports = {
    countryDetails,
    countryList
};