const sightings = [10, 13, 15, 32, 34, 55, 78, 44, 31, 41];
const temperature = [33, 21, 22, 24, 25, 26, 26, 21, 31, 44];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"];

const lineChartOptions = {
    "chart":{
        "type":"line",
        "height":"100%"
    },
    "series":[
        {
            "name": "sightings",
            "data": sightings
        },
        {
            "name": "temperature",
            "data": temperature
        }
    ],
    "xaxis": {
        "categories": months
    }
}

const lineChart = new ApexCharts(
    document.querySelector('#lineChart'), lineChartOptions
);
lineChart.render();

/// SECOND CHART
const barChartOptions = {
    "chart":{
        "type":"bar",
        "height":"100%"
    },
    "series":[
        {
            "name":"sightings",
            "data": sightings
        },
        {
            "name":"temperature",
            "data": temperature
        }
    ],
    "xaxis":{
        'categories':months
    }
}

const barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions );
barChart.render();
