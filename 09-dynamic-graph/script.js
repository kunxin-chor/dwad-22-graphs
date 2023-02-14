// const dataPath = "https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json";
const dataPath = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json";
const monthLookup = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

async function loadData() {
    const response = await axios.get(dataPath);
    return response.data;
}

function transformData(rawData, year, country) {
 
    let results = rawData.map(function(dataPoint){
        return {
            "date": new Date(dataPoint.completed_at),
            "amount": dataPoint.payment.amount,
            "country": dataPoint.customer.country
        }
    });

    if (year) {
        results = results.filter(function(dataPoint){
            return dataPoint.date.getFullYear() == year;
        })
    }

    if (country) {
        results = results.filter(function(dataPoint){
            return dataPoint.country == country
        })
    }

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

    for (let dataPoint of results) {
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

        function sumLarger(accum, dataPoint) {
            return accum + dataPoint.amount;
        }

        let total = months[key].reduce(sumLarger, 0);

        // let total = months[key].reduce( (a, d)=>a+d.amount, 0);

        // let totalForThisMonth = 0;
        // let thisMonthDataPoints = months[key];
        // for (let dataPoint of thisMonthDataPoints) {
        //     totalForThisMonth = totalForThisMonth + dataPoint.amount;
        // }

        series.push({
            'x': monthLookup[parseInt(key)],
            'y': total
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
    
    document.querySelector("#btnSearch").addEventListener("click", function(){
        const year = document.querySelector("#year").value;
        const country = document.querySelector("#country").value;
        // filter by year when transforming the data
        const series = transformData(data, year, country);
        chart.updateSeries([
            {
                "name":"Revenue",
                "data": series
            }
        ]);
   
    })
    
    const chart = createGraph();
    const data = await loadData();
    const series = transformData(data);

    chart.updateSeries([{
        "name":"Revenue",
        "data": series
    }]);

    

})