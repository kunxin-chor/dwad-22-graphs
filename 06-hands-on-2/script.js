// async function loadMeteors() {
//     const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json");
//     console.log(response.data);
//     return response.data;
// }

// async function loadSightings() {
//     const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json");
//     console.log(response.data);
//     return response.data;
// }

// loadMeteors();
// loadSightings();




const meteorURL = "https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json";
const sightingURL = "https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json";

async function loadData(url) {
    const response = await axios.get(url);
    return response.data;
}

// async function loadAllData() {
//     const meteorResponse = await axios.get(meteorURL);
//     const meteorData = meteorResponse.data;

//     const sightingResponsse = await axios.get(sightingURL);
//     const sightingData = sightingResponse.data;

//     return {
//         "meteor": meteorData,
//         "sighting": sightingData
//     }
// }

window.addEventListener("DOMContentLoaded", async function () {

    const options = {
        "chart": {
            "type": "line",
            "height": "100%"
        },
        "series": [
           
        ],
        "noData":{
            "text":"Loading...."
        }
    }

    const chart = new ApexCharts(
        document.querySelector("#chart"),
        options
    );
    chart.render();

    let meteorData = await loadData(meteorURL);
    let sightingData = await loadData(sightingURL);

    chart.updateSeries([
        {
            "name":"Meteor",
            "data": meteorData
        },
        {
            "name":"Sighting",
            "data":sightingData
        }
    ]);
})

