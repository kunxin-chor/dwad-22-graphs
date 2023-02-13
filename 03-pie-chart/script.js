const options = {
    "chart":{
        "type":"pie",
        "height":"100%" // 100% of its parent height
                        // 100vh is not recongized syntax
    },
    "labels":["Drink", "Chicken Rice", "Western", "Mixed Rice", "Noodle"],
    "series":[20, 10, 30, 15, 12],
    "colors":["#A2FAA3", "#92C9B1", "#4F759B", "#5D5179", "#571F4E"]
}

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();