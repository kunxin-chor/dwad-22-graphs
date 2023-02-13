// define an ApexChart
// this object stores the definitions
// for the chart we are creating
// all the keys you see here
// are designed by ApexCharts people
const options = {
    "chart": {
        "type":"line"
    },
    // series: each series represents one set of data
    // one object in the array represents one series
    // (the data in the series are for the y-axis)
    series:[
        {
            "name":"sightings",
            "data":[10, 13, 15, 22, 34, 23, 55, 78, 44, 9]
        },
        {
            "name":"temperature",
            "data":[33,21,22,24,25,26,26,21,34]
        }
    ],

    // xaxis
    "xaxis": {
        "categories":["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"]
    }
}

// create the chart by creating a new ApexChart object
// understand `new ApexCharts()` a very werid function name
// parameter 1: the DOM element that the chart will appear in
// parameter 2: the chart options (i.e, the object that defines the chart)

const chartDiv = document.querySelector("#chart");
const chart = new ApexCharts(chartDiv, options);

// render the chart (i.e to draw it)
chart.render();