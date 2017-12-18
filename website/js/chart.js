var factors_data = [
    {
        "factor": 1,
        "degree": 0.8,
        "color": '#ff0000'
    },
    {
        "factor": 2,
        "degree": 0.6,
        "color": '#98ff98'
    },
    {
        "factor": 3,
        "degree": 0.45,
        "color": '#000fff'
    }
];

console.log(factors_data);

var pickup_hourly = AmCharts.makeChart("pickup-hourly-chart", {
    "theme": "light",
    "type": "serial",
    "startDuration": 0,
    "dataProvider": factors_data,
    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "degree"
    }],
    "depth3D": 20,
    "angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "factor",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 90
    },
    "export": {
        "enabled": true
    }
}, 0);