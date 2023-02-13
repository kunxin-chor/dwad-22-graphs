function drawLineChart(sightings, temperature, months) {
    const lineChartOptions = {
        "chart": {
            "type": "line",
            "height": "100%"
        },
        "series": [
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
}