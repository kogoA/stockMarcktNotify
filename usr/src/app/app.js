const axios = require('axios');

async function fetchApiData() {
    try {
        const response = await axios.get('https://query2.finance.yahoo.com/v8/finance/chart/voo');
        const result = response.data.chart.result[0].meta;
        let initialPrice = result.regularMarketPrice;
        let finalPrice = result.previousClose;

        let percentageDecrease = ((initialPrice - finalPrice) / initialPrice) * 10000;
        let percentage_result = Math.round(percentageDecrease * 10) / 10

        console.log(percentage_result);
    } catch (error) {
        console.error("APIリクエストに失敗しました:", error);
    }
}

fetchApiData();
