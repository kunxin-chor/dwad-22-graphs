function createReachChart() {
    const chartOptions = {
        "chart": {
            "type": "line",
            "id": "reachChart",
            "height": "100%",
            "group":"marketing"
        },
        "series":[
            {
                "name": "reach",
                "data":[5000, 17000, 2400, 25000, 14000, 55000]
            },
            // {
            //     "name":"campaigns",
            //     "data":[3, 5, 1, 8, 4, 10]
            // }
        ],
        "xaxis":{
            "categories":["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
    }
    
    const chart = new ApexCharts(
        document.querySelector("#chart"),
        chartOptions
    );
    chart.render();
}