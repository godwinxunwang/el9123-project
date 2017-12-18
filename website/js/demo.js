var data = [];
var BB = 1013730001;
var day = 0; //monday:0 ~ sunday:6

var marginBar = {top: 40, right: 20, bottom: 20, left: 40},
    widthBar = 500 - marginBar.left - marginBar.right,
    heightBar = 200 - marginBar.top - marginBar.bottom;


var svg1 = d3.select("#bar").append("svg")
    .attr("width", widthBar + marginBar.left + marginBar.right)
    .attr("height", heightBar + marginBar.top + marginBar.bottom)
    .append("g")
    .attr("transform",
        "translate(" + marginBar.left + "," + marginBar.top + ")")

var BBLabel = svg1.append("text")
    .text("Building Block ID: "+BB)
    .style({"font-size": 25, fill: "#ccc"})
    .attr("dx", 50)
    .attr("dy", 10);




//---------------------------------- Manhattan Map ------------------------------------------------------------//

var map = L.map('map').setView([40.758873, -73.973382], 13);
var markers = new L.LayerGroup().addTo(map);
var selectedDay = 'mon';
var ch;
var marker;
var selectedMap = "freq";

var dhour;
var barchartday=parseInt(0);

var geojsons = new L.LayerGroup().addTo(map);
var hour;

//var geojson;



function setMap(map){

    selectedMap=map;
    //console.log(selectedMap)

    setDay("mon")

}

function setDay(day)
{
    selectedDay = day;


    setHour(ch);

}

function setHour(newHour){
    //var hour = newHour;
    ch = newHour;
    // markers.clearLayers();
    geojsons.clearLayers();
    //map.removeLayer(L.geojson);
    //L.geoJson.clearLayers();

    if (selectedDay === 'mon'){
        dhour=parseInt(ch);
    }

    else if (selectedDay === 'tue'){
        dhour=parseInt(24)+parseInt(ch);
    }
    else if (selectedDay === 'wed'){
        dhour=parseInt(48)+parseInt(ch);
    }
    else if (selectedDay === 'thur'){
        dhour=parseInt(72)+parseInt(ch);
    }
    else if (selectedDay === 'fri'){
        dhour=parseInt(96)+parseInt(ch);
    }
    else if (selectedDay === 'sat'){
        dhour=parseInt(120)+parseInt(ch);
    }
    else if (selectedDay === 'sun'){
        dhour=parseInt(144)+parseInt(ch);
    }

    // console.log(selectedMap)

    if(selectedMap ==='freq'){
        render_freq(dhour);
    }
    // if(selectedMap=='tip'){
    //   //  console.log("good tip")
    //     render_tip(newHour);
    // }





    // renderScat();
    // console.log(newHour)
    // console.log(dhour+"this is d hour!!")
}

function render_freq(h){
    hour=h;
    console.log("render"+hour);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.light'
    }).addTo(map);

    var  geojson = L.geoJson(geojson, {
        style: style,
    }).addTo(geojsons);

    $.ajax({
        dataType: "json",
        url: "library/merge.geojson",
        success: function(data) {
            $(data.features).each(function(key, data) {
                geojson.addData(data);
            });
        }
    });
}

function getColor(d) {
    var array = $.map(d, function(value) {
        return [value];
    });

    //console.log(typeof(array))
    console.log(hour);

    var col= array[hour-1];

    //console.log(col)
    return  col > 10  ? '#33a02c' :
        col > 5  ? '#b2df8a' :
            col > 2   ? '#1f78b4' :
                col > 0   ? '#a6cee3' :
                    'white';
}

function style(feature) {
    //console.log(feature)
    return {
        weight: 0.3,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.5,
        fillColor: getColor(feature.properties.pickup_week_count_result_final_PickupFreq)
    };
}