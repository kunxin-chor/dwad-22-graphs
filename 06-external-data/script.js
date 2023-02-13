const dataPath = "https://raw.githubusercontent.com/apexcharts/apexcharts.js/master/db.json";

async function loadData() {
    const response = await axios.get(dataPath);
    // updateSeries to update the series of a chart
    // (exactly what it says on the tin)
    return response.data.yearly2;
}

window.addEventListener("DOMContentLoaded", async function(){
    const series = await loadData();
    chart.updateSeries([
        {
            "name":"series",
            // as the it is an array of {x,y}
            // it will work (ApexChart will automatically
            // create the x axis for us)
            "data": series
        }
    ]);
})

// create empty chart (a chart with no data)
const options = {
    "chart": {
        "type":"line",
        "height": "100%"
    },
    series:[  ],  // look ma, no data!!
    noData:{
        "text":"loading"
    }
    
}

const chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);
chart.render();
