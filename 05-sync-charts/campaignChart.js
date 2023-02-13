function createCampaignChart() {
    const chartOptions = {
        "chart": {
            // give this chart an unique identifier (NOTHING TO DO WITH THE HTML ID)
            "id":"campaignChart",
            "type": "line",
            "height": "100%",
            // enable synchronzed charts by putting all
            // charts to be synchronized in the same group
            "group":"marketing"
        },
        "series":[
            {
                "name":"campaigns",
                "data":[3, 5, 1, 8, 4, 10]
            }
        ],
        "xaxis":{
            "categories":["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
    }
    
    const chart = new ApexCharts(
        document.querySelector("#campaignChart"),
        chartOptions
    );
    chart.render();
}