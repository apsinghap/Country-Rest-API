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
            meta: { msg: ".", status: false },
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
        const { filter, sort, sortKey } = req.query;

        const url = `https://restcountries.com/v3.1/all?fields=${filter}`;
        const details = await axios.get(url);

        // Pagination
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.per_page) || 10;
        const startIdx = (page - 1) * perPage;
        const endIdx = startIdx + perPage;

        if (Number(sort) && sortKey == "name") {
            details.data.sort((a, b) => {
                const nameA = a.name.common.toUpperCase();
                const nameB = b.name.common.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        } else if (Number(sort) && sortKey === "population") {
            details.data.sort((a, b) => b.population - a.population);
        }
        return res.json({
            meta: { msg: "Details found", status: false },
            data: details.data.slice(startIdx, endIdx)
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