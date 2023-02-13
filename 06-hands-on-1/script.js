// create my chart
const options = {
    "chart":{
        "type":"line",
        "height":"100%"
    },
    "series":[], // no data
    "noData":{
        "text":"Please wait, loading data"
    }
}

const chart = new ApexCharts(
    document.querySelector("#chart"), options
);
chart.render();

async function loadData() {
    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fake-graph-data.json");
    return response.data.temperatures;
}

// DOMContentLoaded defintely will run,
// any function calls you put inside there will be called
window.addEventListener("DOMContentLoaded", async function(){
   const data = await loadData();

   // chart.updateSeries will remove all existing series
   // and replace with the one in the parameter
   chart.updateSeries([
        {
            "name":"Temperature",
            "data": data
        }
   ])
});




