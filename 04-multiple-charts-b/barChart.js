function drawBarChart(sightings, temperature, months) {
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
    
}