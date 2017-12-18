var relation = {
    "1": {
        "name": "US-AL"
    },
    "2": {
        "name": "US-AK"
    },
    "4": {
        "name": "US-AZ"
    },
    "5": {
        "name": "US-AR"
    },
    "6": {
        "name": "US-CA"
    },
    "8": {
        "name": "US-CO"
    },
    "9": {
        "name": "US-CT"
    },
    "10": {
        "name": "US-DE"
    },
    "11": {
        "name": "US-DC"
    },
    "12": {
        "name": "US-FL"
    },
    "13": {
        "name": "US-GA"
    },
    "15": {
        "name": "US-HI"
    },
    "16": {
        "name": "US-ID"
    },
    "17": {
        "name": "US-IL"
    },
    "18": {
        "name": "US-IN"
    },
    "19": {
        "name": "US-IA"
    },
    "20": {
        "name": "US-KS"
    },
    "21": {
        "name": "US-KY"
    },
    "22": {
        "name": "US-LA"
    },
    "23": {
        "name": "US-ME"
    },
    "24": {
        "name": "US-MD"
    },
    "25": {
        "name": "US-MA"
    },
    "26": {
        "name": "US-MI"
    },
    "27": {
        "name": "US-MN"
    },
    "28": {
        "name": "US-MS"
    },
    "29": {
        "name": "US-MO"
    },
    "30": {
        "name": "US-MT"
    },
    "31": {
        "name": "US-NE"
    },
    "32": {
        "name": "US-NV"
    },
    "33": {
        "name": "US-NH"
    },
    "34": {
        "name": "US-NJ"
    },
    "35": {
        "name": "US-NM"
    },
    "36": {
        "name": "US-NY"
    },
    "37": {
        "name": "US-NC"
    },
    "38": {
        "name": "US-ND"
    },
    "39": {
        "name": "US-OH"
    },
    "40": {
        "name": "US-OK"
    },
    "41": {
        "name": "US-OR"
    },
    "42": {
        "name": "US-PA"
    },
    "44": {
        "name": "US-RI"
    },
    "45": {
        "name": "US-SC"
    },
    "46": {
        "name": "US-SD"
    },
    "47": {
        "name": "US-TN"
    },
    "48": {
        "name": "US-TX"
    },
    "49": {
        "name": "US-UT"
    },
    "50": {
        "name": "US-VT"
    },
    "51": {
        "name": "US-VA"
    },
    "53": {
        "name": "US-WA"
    },
    "54": {
        "name": "US-WV"
    },
    "55": {
        "name": "US-WI"
    },
    "56": {
        "name": "US-WY"
    }
};

var linear_data_jsonstring = "[{\"state\":1,\"ViolentCrimesPerPop\":0.5088809915},{\"state\":2,\"ViolentCrimesPerPop\":0.3556279113},{\"state\":4,\"ViolentCrimesPerPop\":0.414382899},{\"state\":5,\"ViolentCrimesPerPop\":0.3814758217},{\"state\":6,\"ViolentCrimesPerPop\":0.4245462481},{\"state\":8,\"ViolentCrimesPerPop\":0.3362007134},{\"state\":9,\"ViolentCrimesPerPop\":0.2956277669},{\"state\":10,\"ViolentCrimesPerPop\":0.3971709634},{\"state\":11,\"ViolentCrimesPerPop\":0.9327131833},{\"state\":12,\"ViolentCrimesPerPop\":0.514712213},{\"state\":13,\"ViolentCrimesPerPop\":0.6829898389},{\"state\":16,\"ViolentCrimesPerPop\":0.1282281663},{\"state\":18,\"ViolentCrimesPerPop\":0.4197065492},{\"state\":19,\"ViolentCrimesPerPop\":0.2094191961},{\"state\":20,\"ViolentCrimesPerPop\":0.356123967},{\"state\":21,\"ViolentCrimesPerPop\":0.4378694571},{\"state\":22,\"ViolentCrimesPerPop\":0.7161236437},{\"state\":23,\"ViolentCrimesPerPop\":0.2027162859},{\"state\":24,\"ViolentCrimesPerPop\":0.9043566063},{\"state\":25,\"ViolentCrimesPerPop\":0.2919863712},{\"state\":27,\"ViolentCrimesPerPop\":0.4735836477},{\"state\":28,\"ViolentCrimesPerPop\":0.5900593035},{\"state\":29,\"ViolentCrimesPerPop\":0.3522280246},{\"state\":32,\"ViolentCrimesPerPop\":0.4492034426},{\"state\":33,\"ViolentCrimesPerPop\":0.1407204048},{\"state\":34,\"ViolentCrimesPerPop\":0.3640367609},{\"state\":35,\"ViolentCrimesPerPop\":0.3849281798},{\"state\":36,\"ViolentCrimesPerPop\":0.5738502956},{\"state\":37,\"ViolentCrimesPerPop\":0.443726897},{\"state\":38,\"ViolentCrimesPerPop\":0.0812482275},{\"state\":39,\"ViolentCrimesPerPop\":0.473278706},{\"state\":40,\"ViolentCrimesPerPop\":0.4043897716},{\"state\":41,\"ViolentCrimesPerPop\":0.3120053046},{\"state\":42,\"ViolentCrimesPerPop\":0.4842530781},{\"state\":44,\"ViolentCrimesPerPop\":0.2454869717},{\"state\":45,\"ViolentCrimesPerPop\":0.5091258898},{\"state\":46,\"ViolentCrimesPerPop\":0.1245304915},{\"state\":47,\"ViolentCrimesPerPop\":0.5714859496},{\"state\":48,\"ViolentCrimesPerPop\":0.4255029296},{\"state\":49,\"ViolentCrimesPerPop\":0.1987692923},{\"state\":50,\"ViolentCrimesPerPop\":0.2058531723},{\"state\":51,\"ViolentCrimesPerPop\":0.452892972},{\"state\":53,\"ViolentCrimesPerPop\":0.3736248263},{\"state\":54,\"ViolentCrimesPerPop\":0.2709751446},{\"state\":55,\"ViolentCrimesPerPop\":0.324492512},{\"state\":56,\"ViolentCrimesPerPop\":0.1609487236}]";
var linear_data = JSON.parse(linear_data_jsonstring);
var map_linear_data = [];

// build data
for (var i=0; i<linear_data.length; i++) {
    var ele = linear_data[i];
    var rate = ele['ViolentCrimesPerPop'];
    var index = ele['state'].toString();
    var state = relation[index]['name'];
    map_linear_data.push({
        'id': state,
        'value': rate
    })
}

var linear_map = AmCharts.makeChart( "linear-data-map", {
    "type": "map",
    "theme": "none",
    "colorSteps": 100,
    "dataProvider": {
        "map": "usaLow",
        "areas": map_linear_data
    },

    "areasSettings": {
        "autoZoom": true
    },
    "valueLegend": {
        "right": 10,
        "minValue": "Low (0)",
        "maxValue": "High (1)"
    },
    "export": {
        "enabled": true
    }

} );

var svr_data_jsonstring = "[{\"state\":1,\"ViolentCrimesPerPop\":0.5449155082},{\"state\":2,\"ViolentCrimesPerPop\":0.3222878349},{\"state\":4,\"ViolentCrimesPerPop\":0.343111206},{\"state\":5,\"ViolentCrimesPerPop\":0.3860066542},{\"state\":6,\"ViolentCrimesPerPop\":0.4356426109},{\"state\":8,\"ViolentCrimesPerPop\":0.3321889895},{\"state\":9,\"ViolentCrimesPerPop\":0.3189995505},{\"state\":10,\"ViolentCrimesPerPop\":0.3676176804},{\"state\":11,\"ViolentCrimesPerPop\":0.9899978652},{\"state\":12,\"ViolentCrimesPerPop\":0.5678877926},{\"state\":13,\"ViolentCrimesPerPop\":0.6422041865},{\"state\":16,\"ViolentCrimesPerPop\":0.1284767284},{\"state\":18,\"ViolentCrimesPerPop\":0.4321252049},{\"state\":19,\"ViolentCrimesPerPop\":0.2214468862},{\"state\":20,\"ViolentCrimesPerPop\":0.3536748178},{\"state\":21,\"ViolentCrimesPerPop\":0.4516863477},{\"state\":22,\"ViolentCrimesPerPop\":0.6848180422},{\"state\":23,\"ViolentCrimesPerPop\":0.1744382767},{\"state\":24,\"ViolentCrimesPerPop\":0.796796434},{\"state\":25,\"ViolentCrimesPerPop\":0.3210777995},{\"state\":27,\"ViolentCrimesPerPop\":0.4949927349},{\"state\":28,\"ViolentCrimesPerPop\":0.5600420116},{\"state\":29,\"ViolentCrimesPerPop\":0.37749805},{\"state\":32,\"ViolentCrimesPerPop\":0.446194778},{\"state\":33,\"ViolentCrimesPerPop\":0.1427233543},{\"state\":34,\"ViolentCrimesPerPop\":0.3925430489},{\"state\":35,\"ViolentCrimesPerPop\":0.377095983},{\"state\":36,\"ViolentCrimesPerPop\":0.5807111918},{\"state\":37,\"ViolentCrimesPerPop\":0.4463735934},{\"state\":38,\"ViolentCrimesPerPop\":0.1184772387},{\"state\":39,\"ViolentCrimesPerPop\":0.4783941554},{\"state\":40,\"ViolentCrimesPerPop\":0.3780569995},{\"state\":41,\"ViolentCrimesPerPop\":0.3222630855},{\"state\":42,\"ViolentCrimesPerPop\":0.4423222689},{\"state\":44,\"ViolentCrimesPerPop\":0.2670385719},{\"state\":45,\"ViolentCrimesPerPop\":0.4970664167},{\"state\":46,\"ViolentCrimesPerPop\":0.1341450128},{\"state\":47,\"ViolentCrimesPerPop\":0.5454704701},{\"state\":48,\"ViolentCrimesPerPop\":0.3897351928},{\"state\":49,\"ViolentCrimesPerPop\":0.2271354173},{\"state\":50,\"ViolentCrimesPerPop\":0.1650946813},{\"state\":51,\"ViolentCrimesPerPop\":0.4159840905},{\"state\":53,\"ViolentCrimesPerPop\":0.3805108052},{\"state\":54,\"ViolentCrimesPerPop\":0.2624838945},{\"state\":55,\"ViolentCrimesPerPop\":0.3413014259},{\"state\":56,\"ViolentCrimesPerPop\":0.1503136256}]";
var svr_data = JSON.parse(svr_data_jsonstring);
var map_svr_data = [];
// build data
for (var i=0; i<svr_data.length; i++) {
    var ele = svr_data[i];
    var rate = ele['ViolentCrimesPerPop'];
    var index = ele['state'].toString();
    var state = relation[index]['name'];
    map_svr_data.push({
        'id': state,
        'value': rate
    })
}

var svr_map = AmCharts.makeChart( "svr-data-map", {
    "type": "map",
    "theme": "none",
    "colorSteps": 100,
    "dataProvider": {
        "map": "usaLow",
        "areas": map_linear_data
    },

    "areasSettings": {
        "autoZoom": true
    },
    "valueLegend": {
        "right": 10,
        "minValue": "Low (0)",
        "maxValue": "High (1)"
    },
    "export": {
        "enabled": true
    }
});

var expected_data_jsonstring = "[{\"state\":1,\"ViolentCrimesPerPop\":0.5662376238},{\"state\":2,\"ViolentCrimesPerPop\":0.3336585366},{\"state\":4,\"ViolentCrimesPerPop\":0.3337341772},{\"state\":5,\"ViolentCrimesPerPop\":0.5289010989},{\"state\":6,\"ViolentCrimesPerPop\":0.431364},{\"state\":8,\"ViolentCrimesPerPop\":0.3392565056},{\"state\":9,\"ViolentCrimesPerPop\":0.2761403509},{\"state\":10,\"ViolentCrimesPerPop\":0.37},{\"state\":11,\"ViolentCrimesPerPop\":1.0},{\"state\":12,\"ViolentCrimesPerPop\":0.6250687285},{\"state\":13,\"ViolentCrimesPerPop\":0.5597959184},{\"state\":16,\"ViolentCrimesPerPop\":0.13},{\"state\":18,\"ViolentCrimesPerPop\":0.4496167247},{\"state\":19,\"ViolentCrimesPerPop\":0.2915151515},{\"state\":20,\"ViolentCrimesPerPop\":0.36},{\"state\":21,\"ViolentCrimesPerPop\":0.3662068966},{\"state\":22,\"ViolentCrimesPerPop\":0.7085377358},{\"state\":23,\"ViolentCrimesPerPop\":0.1296969697},{\"state\":24,\"ViolentCrimesPerPop\":0.9013114754},{\"state\":25,\"ViolentCrimesPerPop\":0.3822795699},{\"state\":27,\"ViolentCrimesPerPop\":0.69015625},{\"state\":28,\"ViolentCrimesPerPop\":0.3833333333},{\"state\":29,\"ViolentCrimesPerPop\":0.4872881356},{\"state\":32,\"ViolentCrimesPerPop\":0.3261842105},{\"state\":33,\"ViolentCrimesPerPop\":0.0754901961},{\"state\":34,\"ViolentCrimesPerPop\":0.3445771144},{\"state\":35,\"ViolentCrimesPerPop\":0.5958441558},{\"state\":36,\"ViolentCrimesPerPop\":0.5284266667},{\"state\":37,\"ViolentCrimesPerPop\":0.5065490196},{\"state\":38,\"ViolentCrimesPerPop\":0.0424137931},{\"state\":39,\"ViolentCrimesPerPop\":0.435475763},{\"state\":40,\"ViolentCrimesPerPop\":0.4025791855},{\"state\":41,\"ViolentCrimesPerPop\":0.4020858896},{\"state\":42,\"ViolentCrimesPerPop\":0.3485635359},{\"state\":44,\"ViolentCrimesPerPop\":0.1974},{\"state\":45,\"ViolentCrimesPerPop\":0.6806097561},{\"state\":46,\"ViolentCrimesPerPop\":0.1580769231},{\"state\":47,\"ViolentCrimesPerPop\":0.558},{\"state\":48,\"ViolentCrimesPerPop\":0.3617956065},{\"state\":49,\"ViolentCrimesPerPop\":0.1493333333},{\"state\":50,\"ViolentCrimesPerPop\":0.06},{\"state\":51,\"ViolentCrimesPerPop\":0.3056953642},{\"state\":53,\"ViolentCrimesPerPop\":0.3980816327},{\"state\":54,\"ViolentCrimesPerPop\":0.2702941176},{\"state\":55,\"ViolentCrimesPerPop\":0.2080479452},{\"state\":56,\"ViolentCrimesPerPop\":0.11}]";
var expected_data = JSON.parse(svr_data_jsonstring);
var map_expected_data = [];

for (var i=0; i<svr_data.length; i++) {
    var ele = expected_data[i];
    var rate = ele['ViolentCrimesPerPop'];
    var index = ele['state'].toString();
    var state = relation[index]['name'];
    map_expected_data.push({
        'id': state,
        'value': rate
    })
}

var expected_data_map = AmCharts.makeChart( "expected-data-map", {
    "type": "map",
    "theme": "none",
    "colorSteps": 100,
    "dataProvider": {
        "map": "usaLow",
        "areas": map_linear_data
    },

    "areasSettings": {
        "autoZoom": true
    },
    "valueLegend": {
        "right": 10,
        "minValue": "Low (0)",
        "maxValue": "High (1)"
    },
    "export": {
        "enabled": true
    }
});

