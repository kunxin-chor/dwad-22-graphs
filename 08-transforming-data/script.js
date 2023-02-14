const dataPath = "https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json";
const monthLookup = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

async function loadData() {
    const response = await axios.get(dataPath);
    return response.data;
}

function transformData(rawData) {
    // 1. mapping: from the raw data we extract the keys
    // that we are interested to keep   
    let mappedData = [];
    for (let dataPoint of rawData){
        let transformedData = {
            // create a new Date object based on the date string
            "date": new Date(dataPoint.completed_at),
            "amount": dataPoint.payment.amount
        }
        mappedData.push(transformedData);
    }
    console.log("after mapping =>", mappedData );

    // 2. filtering
    // we are only interested in data points in 2020
    let filteredData = [];
    for (let dataPoint of mappedData) {
        if (dataPoint.date.getFullYear() == 2020) {
            filteredData.push(dataPoint);
        }
    }
    console.log("filtered data =>", filteredData);

    // 3. group
    // group all the transactions by their months

    // set up twelve "containers", one for each month
    let months = {
        "0":[],  // Jan because month number starts at 0 for JavaScript
        "1":[],
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[]
    }

    for (let dataPoint of filteredData) {
        // find the month number that the data point is in
        let monthNumber = dataPoint.date.getMonth(); // reminder: 0 is january

        // add the data point to that month's container (i.e array)
        months[monthNumber].push(dataPoint)
    }
    
    console.log("months =>", months)

    let series = [];
    // Object.keys(months) will return an array of all the keys
    // => ["0", "1", "2", "3", "4" .... "11"]

    // extract each month from the `months` object
    for (let key of Object.keys(months)) {
        let totalForThisMonth = 0;
        let thisMonthDataPoints = months[key];
        for (let dataPoint of thisMonthDataPoints) {
            totalForThisMonth = totalForThisMonth + dataPoint.amount;
        }

        series.push({
            'x': monthLookup[parseInt(key)],
            'y': totalForThisMonth
        })
    }
    console.log("series=", series);
    return series;
}

function createGraph() {
    const options = {
        "chart":{
            "type":"line",
            "height":"100%"
        },
        "series":[],
        "noData":{
            "text":"Loading"
        }
    }
    const chart = new ApexCharts(
        document.querySelector("#chart"), options
    );
    chart.render();
    return chart;
}

window.addEventListener("DOMContentLoaded", async function(){
    const chart = createGraph();
    const data = await loadData();
    const series = transformData(data);
    console.log(series);
    chart.updateSeries([{
        "name":"Revenue",
        "data": series
    }]);
})