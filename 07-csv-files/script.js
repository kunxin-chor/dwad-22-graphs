async function loadData() {
    // axios will only convert the data to JSON
    // if the file extension is .json AND
    // it is a valid JSON syntax
    const response = await axios.get("live-births.csv");
    console.log(response.data);
    // response.data will contain the entire content
    // of the csv file
    // use the csvtojson library to convert the 
    // raw CSV data to json
    let json = await csv().fromString(response.data);
    return json;
}

// transform raw population data to just an array of {x,y} objects
function transformData(rawData) {
    let shortlisted = []; // <-- stores the results that have only what we want
    for (let dataPoint of rawData) {
        // only keep datapoint that have ethnicty of "Others"
        if (dataPoint.ethnic_group == "Others") {
            shortlisted.push({
                "x": dataPoint.year,
                "y": Number(dataPoint.live_births)
            })
        }
    }
    return shortlisted;
}

function createChart() {
    const options = {
        "chart":{
            "type":"line",
            "height":"100%"
        },
        "series":[],
        "noData":{
            "text":"Please wait, loading data"
        }
    }
    const chart = new ApexCharts(
        document.querySelector("#chart"),
        options
    );
    chart.render();
    return chart;
}

window.addEventListener("DOMContentLoaded", async function(){
    const chart = createChart();
    const jsonData = await loadData();

    // pass in the JSON and convert it into an array of {x,y} objects
    const series = transformData(jsonData);

    chart.updateSeries([
        {
            "name": "Live Birth",
            "data": series
        }
    ])
})