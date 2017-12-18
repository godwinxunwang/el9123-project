var factors_data = [
    {
        "factor": "'NumStreet'",
        "degree": 0.0014686
    },
    {
        "factor": "'LemasPctOfficDrugUn'",
        "degree": 0.01799249
    },
    {
        "factor": "'PctVacantBoarded'",
        "degree": 0.02082548
    },
    {
        "factor": "'PctWorkMom'",
        "degree": 0.02441547
    },
    {
        "factor": "'PctHousOccup'",
        "degree": 0.03112756
    },
    {
        "factor": "'pctUrban'",
        "degree": 0.03267914
    },
    {
        "factor": "'racepctblack'",
        "degree": 0.0497914
    },
    {
        "factor": "'PctPersDenseHous'",
        "degree": 0.09664344
    },
    {
        "factor": "'MalePctDivorce'",
        "degree": 0.1091951
    },
    {
        "factor": "'HousVacant'",
        "degree": 0.11840741
    },
    {
        "factor": "'racePctWhite'",
        "degree": 0.14262652
    },
    {
        "factor": "'PctIlleg'",
        "degree": 0.20004043
    },
    {
        "factor": "'PctKids2Par'",
        "degree": 0.27092919
    }
];

var factor_chart = AmCharts.makeChart("factor-influence-chart", {
    "theme": "light",
    "type": "serial",
    "startDuration": 1,
    "dataProvider": factors_data.reverse(),
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

var loss_data = [
    {
        'loss': 0.01842,
        'approach': "Linear Regression",
        'color': '#ff1000'
    }, {
        'loss': 0.01593,
        'approach': "SVMR",
        'color': '#008000'
    }, {
        'loss': 0.01910,
        'approach': "Neural Network",
        'color': '#0000ff'

    }
];

var loss_chart = AmCharts.makeChart("loss-chart", {
    "theme": "light",
    "type": "serial",
    "startDuration": 1,
    "dataProvider": loss_data,
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
        "valueField": "loss"
    }],
    "depth3D": 20,
    "angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "approach",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 90
    },
    "export": {
        "enabled": true
    }
}, 0);


// for predicted vs expected charts
var eva_linear_data = [
    {
        "actual": 0.2,
        "predicted": 0.211996809419569
    },
    {
        "actual": 0.67,
        "predicted": 0.34123032329713
    },
    {
        "actual": 0.43,
        "predicted": 0.34069396510952
    },
    {
        "actual": 0.12,
        "predicted": 0.36957295884707
    },
    {
        "actual": 0.03,
        "predicted": 0.007305476311125
    },
    {
        "actual": 0.14,
        "predicted": 0.217319954716925
    },
    {
        "actual": 0.03,
        "predicted": 0.044166461025714
    },
    {
        "actual": 0.55,
        "predicted": 0.387286390885178
    },
    {
        "actual": 0.53,
        "predicted": 0.254825148736301
    },
    {
        "actual": 0.15,
        "predicted": 0.088551249466494
    },
    {
        "actual": 0.24,
        "predicted": 0.398423646684515
    },
    {
        "actual": 0.08,
        "predicted": 0.072748206179392
    },
    {
        "actual": 0.06,
        "predicted": 0.002028045461895
    },
    {
        "actual": 0.09,
        "predicted": 0.021414756763271
    },
    {
        "actual": 0.21,
        "predicted": 0.257695784736308
    },
    {
        "actual": 0.3,
        "predicted": 0.138522683890278
    },
    {
        "actual": 0.49,
        "predicted": 0.497075505327695
    },
    {
        "actual": 0.07,
        "predicted": 0.03637643163227
    },
    {
        "actual": 0.15,
        "predicted": 0.062850128893506
    },
    {
        "actual": 0.03,
        "predicted": 0.096924859000593
    },
    {
        "actual": 0.34,
        "predicted": 0.323448084861159
    },
    {
        "actual": 0.69,
        "predicted": 0.545069530716076
    },
    {
        "actual": 0.21,
        "predicted": 0.232535145863789
    },
    {
        "actual": 0.63,
        "predicted": 0.20793786486046
    },
    {
        "actual": 0.31,
        "predicted": 0.384774189297463
    },
    {
        "actual": 0.12,
        "predicted": 0.172084619941508
    },
    {
        "actual": 0.84,
        "predicted": 0.513387887166241
    },
    {
        "actual": 0.1,
        "predicted": 0.101987910402481
    },
    {
        "actual": 0.49,
        "predicted": 0.330221833346937
    },
    {
        "actual": 0.02,
        "predicted": 0.024035414651647
    },
    {
        "actual": 0.16,
        "predicted": 0.100980797121664
    },
    {
        "actual": 0.19,
        "predicted": 0.297357402769831
    },
    {
        "actual": 0.15,
        "predicted": 0.278973415381569
    },
    {
        "actual": 0.31,
        "predicted": 0.385139030441517
    },
    {
        "actual": 0.08,
        "predicted": 0.143941701435963
    },
    {
        "actual": 0.24,
        "predicted": 0.327329242233148
    },
    {
        "actual": 0.11,
        "predicted": 0.136131224916402
    },
    {
        "actual": 0.22,
        "predicted": 0.231629465242761
    },
    {
        "actual": 0.13,
        "predicted": 0.243842462354277
    },
    {
        "actual": 0.07,
        "predicted": 0.18618646248127
    },
    {
        "actual": 0.11,
        "predicted": 0.132287065560417
    },
    {
        "actual": 0.06,
        "predicted": 0.139930657954196
    },
    {
        "actual": 0.8,
        "predicted": 0.498370075514401
    },
    {
        "actual": 0.22,
        "predicted": 0.389483825067922
    },
    {
        "actual": 0.17,
        "predicted": 0.050843798794802
    },
    {
        "actual": 0.16,
        "predicted": 0.11533063483248
    },
    {
        "actual": 0.2,
        "predicted": 0.24583826130926
    },
    {
        "actual": 0.12,
        "predicted": 0.232171967360727
    },
    {
        "actual": 0.11,
        "predicted": 0.14113881191143
    },
    {
        "actual": 0.12,
        "predicted": 0.16470452137858
    },
    {
        "actual": 0.2,
        "predicted": 0.322134250162591
    },
    {
        "actual": 0.68,
        "predicted": 0.364545175055662
    },
    {
        "actual": 0.23,
        "predicted": 0.22736753872403
    },
    {
        "actual": 0.05,
        "predicted": 0.015450282401198
    },
    {
        "actual": 0.1,
        "predicted": 0.183658933020266
    },
    {
        "actual": 0.28,
        "predicted": 0.30592369456243
    },
    {
        "actual": 0.22,
        "predicted": 0.221140200996503
    },
    {
        "actual": 0.22,
        "predicted": 0.235615789103077
    },
    {
        "actual": 0.55,
        "predicted": 0.346845513422789
    },
    {
        "actual": 0.05,
        "predicted": 0.10194684003022
    },
    {
        "actual": 0.03,
        "predicted": 0.073296475623415
    },
    {
        "actual": 0.07,
        "predicted": 0.235707005164076
    },
    {
        "actual": 0.07,
        "predicted": 0.138782757839352
    },
    {
        "actual": 0.57,
        "predicted": 0.32742844937824
    },
    {
        "actual": 0.37,
        "predicted": 0.376009064651059
    },
    {
        "actual": 0.14,
        "predicted": 0.113166378873893
    },
    {
        "actual": 0.61,
        "predicted": 0.405729235789983
    },
    {
        "actual": 0.03,
        "predicted": 0.115676262164327
    },
    {
        "actual": 0.5,
        "predicted": 0.474998838668792
    },
    {
        "actual": 0.05,
        "predicted": 0.131246550908988
    },
    {
        "actual": 0.04,
        "predicted": 0.035143412186304
    },
    {
        "actual": 0.21,
        "predicted": 0.113028235470146
    },
    {
        "actual": 0.05,
        "predicted": 0.073358095443842
    },
    {
        "actual": 0.02,
        "predicted": 0.012636892790057
    },
    {
        "actual": 0.14,
        "predicted": 0.228176363984519
    },
    {
        "actual": 0.18,
        "predicted": 0.233395853855369
    },
    {
        "actual": 0.12,
        "predicted": 0.337629382002748
    },
    {
        "actual": 0.68,
        "predicted": 0.549979395959761
    },
    {
        "actual": 0.7,
        "predicted": 0.355137386628963
    },
    {
        "actual": 0.75,
        "predicted": 0.331383094336429
    },
    {
        "actual": 0.3,
        "predicted": 0.3989021158036
    },
    {
        "actual": 0.24,
        "predicted": 0.336330119681453
    },
    {
        "actual": 1,
        "predicted": 0.229034536956981
    },
    {
        "actual": 0,
        "predicted": -0.017738207287102
    },
    {
        "actual": 0.03,
        "predicted": 0.080614162451941
    },
    {
        "actual": 0.06,
        "predicted": 0.113849952766121
    },
    {
        "actual": 0.08,
        "predicted": 0.151284625867509
    },
    {
        "actual": 0.1,
        "predicted": 0.124661636640363
    },
    {
        "actual": 0.27,
        "predicted": 0.192961581226318
    },
    {
        "actual": 0.15,
        "predicted": 0.190126393104802
    },
    {
        "actual": 0.63,
        "predicted": 0.305701637801717
    },
    {
        "actual": 0.05,
        "predicted": 0.194558721191247
    },
    {
        "actual": 0.03,
        "predicted": 0.072051872900389
    },
    {
        "actual": 0.12,
        "predicted": 0.096004235325061
    },
    {
        "actual": 0.4,
        "predicted": 0.176053163131887
    },
    {
        "actual": 0.37,
        "predicted": 0.211524697709899
    },
    {
        "actual": 0.45,
        "predicted": 0.286949420887726
    },
    {
        "actual": 0.04,
        "predicted": 0.023314346216757
    },
    {
        "actual": 0.09,
        "predicted": 0.020610095370636
    },
    {
        "actual": 0.09,
        "predicted": 0.222030679528914
    },
    {
        "actual": 0.39,
        "predicted": 0.363507543774262
    },
    {
        "actual": 0.02,
        "predicted": 0.156838128742892
    },
    {
        "actual": 0.34,
        "predicted": 0.437835373087233
    },
    {
        "actual": 0.28,
        "predicted": 0.324502472081442
    },
    {
        "actual": 0.08,
        "predicted": 0.047091029155659
    },
    {
        "actual": 0.44,
        "predicted": 0.502739821522559
    },
    {
        "actual": 0.24,
        "predicted": 0.175540692721784
    },
    {
        "actual": 0.09,
        "predicted": 0.058398204758798
    },
    {
        "actual": 0.26,
        "predicted": 0.233102411422808
    },
    {
        "actual": 0.4,
        "predicted": 0.483941876615238
    },
    {
        "actual": 0.56,
        "predicted": 0.423246969835178
    },
    {
        "actual": 0.05,
        "predicted": 0.021176924917337
    },
    {
        "actual": 0.06,
        "predicted": 0.025685202113864
    },
    {
        "actual": 0.2,
        "predicted": 0.289734830056187
    },
    {
        "actual": 0.51,
        "predicted": 0.43051625562458
    },
    {
        "actual": 0.04,
        "predicted": 0.002405571108433
    },
    {
        "actual": 0.86,
        "predicted": 0.834731527194257
    },
    {
        "actual": 0.05,
        "predicted": 0.026453360752806
    },
    {
        "actual": 0.06,
        "predicted": 0.149649864113168
    },
    {
        "actual": 0.68,
        "predicted": 0.50153612652619
    },
    {
        "actual": 0.22,
        "predicted": 0.236454332591693
    },
    {
        "actual": 0.05,
        "predicted": 0.087360675476826
    },
    {
        "actual": 0.03,
        "predicted": -0.004540518464872
    },
    {
        "actual": 0.09,
        "predicted": 0.116504701272905
    },
    {
        "actual": 0.17,
        "predicted": 0.077635813933005
    },
    {
        "actual": 0.17,
        "predicted": 0.117186302788768
    },
    {
        "actual": 0.17,
        "predicted": 0.100853712896367
    },
    {
        "actual": 0.14,
        "predicted": 0.292340952774202
    },
    {
        "actual": 0.62,
        "predicted": 0.407552142864472
    },
    {
        "actual": 0.03,
        "predicted": 0.058731039116825
    },
    {
        "actual": 0.23,
        "predicted": 0.595168347355528
    },
    {
        "actual": 0.15,
        "predicted": 0.074241339320927
    },
    {
        "actual": 0.13,
        "predicted": 0.160114049485698
    },
    {
        "actual": 0.27,
        "predicted": 0.174152359930441
    },
    {
        "actual": 0.08,
        "predicted": 0.121962576490898
    },
    {
        "actual": 0.06,
        "predicted": 0.075363175874537
    },
    {
        "actual": 0.09,
        "predicted": -0.019928280301113
    },
    {
        "actual": 0.16,
        "predicted": 0.28047845293207
    },
    {
        "actual": 0.38,
        "predicted": 0.257509412890473
    },
    {
        "actual": 0.02,
        "predicted": 0.047977481353863
    },
    {
        "actual": 0.08,
        "predicted": 0.105173801527848
    },
    {
        "actual": 0.09,
        "predicted": 0.090851971286283
    },
    {
        "actual": 0.3,
        "predicted": 0.571166284968807
    },
    {
        "actual": 0.05,
        "predicted": 0.061510680040468
    },
    {
        "actual": 0.17,
        "predicted": 0.204087948629773
    },
    {
        "actual": 0.53,
        "predicted": 0.399144245497506
    },
    {
        "actual": 1,
        "predicted": 0.681863462950898
    },
    {
        "actual": 0.05,
        "predicted": 0.160613461518117
    },
    {
        "actual": 0.63,
        "predicted": 0.456394746767033
    },
    {
        "actual": 1,
        "predicted": 0.375236257610608
    },
    {
        "actual": 0.21,
        "predicted": 0.274300725360134
    },
    {
        "actual": 0.86,
        "predicted": 0.501870778354002
    },
    {
        "actual": 0.03,
        "predicted": 0.078087097633771
    },
    {
        "actual": 0.26,
        "predicted": 0.028990850725539
    },
    {
        "actual": 0.87,
        "predicted": 0.550714436800494
    },
    {
        "actual": 0.44,
        "predicted": 0.608796805967669
    },
    {
        "actual": 0.03,
        "predicted": 0.068111433388738
    },
    {
        "actual": 0.73,
        "predicted": 0.580047211563903
    },
    {
        "actual": 0.48,
        "predicted": 0.382096069251673
    },
    {
        "actual": 0.06,
        "predicted": 0.066698090275776
    },
    {
        "actual": 0.07,
        "predicted": 0.106133391028487
    },
    {
        "actual": 0.03,
        "predicted": 0.130913917409978
    },
    {
        "actual": 0.17,
        "predicted": 0.057657442783052
    },
    {
        "actual": 0.11,
        "predicted": 0.064066856265202
    },
    {
        "actual": 0.05,
        "predicted": 0.028060215520156
    },
    {
        "actual": 0.25,
        "predicted": 0.194847230455975
    },
    {
        "actual": 0.05,
        "predicted": 0.060250276507506
    },
    {
        "actual": 0.15,
        "predicted": 0.191481367431788
    },
    {
        "actual": 0.46,
        "predicted": 0.405945844709285
    },
    {
        "actual": 0.45,
        "predicted": 0.228489552582925
    },
    {
        "actual": 0.23,
        "predicted": 0.308095239191251
    },
    {
        "actual": 0.08,
        "predicted": 0.10334287686005
    },
    {
        "actual": 0.08,
        "predicted": 0.097903452253383
    },
    {
        "actual": 0.2,
        "predicted": 0.37696576745841
    },
    {
        "actual": 0.73,
        "predicted": 0.469200086974315
    },
    {
        "actual": 0.17,
        "predicted": 0.139161179345787
    },
    {
        "actual": 0.07,
        "predicted": 0.028358203741976
    },
    {
        "actual": 0.83,
        "predicted": 0.798231192523694
    },
    {
        "actual": 0.1,
        "predicted": 0.183045588284673
    },
    {
        "actual": 0.25,
        "predicted": 0.170189870301949
    },
    {
        "actual": 0.12,
        "predicted": 0.32361649114584
    },
    {
        "actual": 0.25,
        "predicted": 0.234025588322125
    },
    {
        "actual": 0.3,
        "predicted": 0.267909884826886
    },
    {
        "actual": 0.02,
        "predicted": 0.014672253113797
    },
    {
        "actual": 0.19,
        "predicted": 0.135131695171936
    },
    {
        "actual": 0.36,
        "predicted": 0.420129348658508
    },
    {
        "actual": 0.12,
        "predicted": 0.155104797902246
    },
    {
        "actual": 0.01,
        "predicted": 0.07233661349018
    },
    {
        "actual": 0.06,
        "predicted": 0.070228396760454
    },
    {
        "actual": 0.1,
        "predicted": 0.057640440997345
    },
    {
        "actual": 0.1,
        "predicted": 0.302233188753352
    },
    {
        "actual": 0.21,
        "predicted": 0.147945542195066
    },
    {
        "actual": 0.1,
        "predicted": 0.100041811965337
    },
    {
        "actual": 0.07,
        "predicted": 0.0760339181915
    },
    {
        "actual": 0.02,
        "predicted": 0.01249794002931
    },
    {
        "actual": 0.03,
        "predicted": 0.019210990632834
    },
    {
        "actual": 0.01,
        "predicted": 0.120990210487795
    },
    {
        "actual": 0.41,
        "predicted": 0.692699125205523
    },
    {
        "actual": 0.26,
        "predicted": 0.382993428034968
    },
    {
        "actual": 0.42,
        "predicted": 0.431274146193188
    },
    {
        "actual": 0.18,
        "predicted": 0.302055637685982
    },
    {
        "actual": 0.13,
        "predicted": 0.072519621465481
    },
    {
        "actual": 0.29,
        "predicted": 0.262766338445986
    },
    {
        "actual": 0.68,
        "predicted": 0.378620554899548
    },
    {
        "actual": 0.05,
        "predicted": 0.047436485853318
    },
    {
        "actual": 0.16,
        "predicted": 0.241044259295954
    },
    {
        "actual": 0.26,
        "predicted": 0.225919370987597
    },
    {
        "actual": 0.19,
        "predicted": 0.069093916951398
    },
    {
        "actual": 0.03,
        "predicted": 0.042788120243441
    },
    {
        "actual": 0.15,
        "predicted": 0.075181334968974
    },
    {
        "actual": 0.29,
        "predicted": 0.433845499754038
    },
    {
        "actual": 0.01,
        "predicted": 0.055947122766191
    },
    {
        "actual": 0.66,
        "predicted": 0.461268566489997
    },
    {
        "actual": 0.05,
        "predicted": 0.100696851613511
    },
    {
        "actual": 0.27,
        "predicted": 0.093774695432697
    },
    {
        "actual": 0.49,
        "predicted": 0.298550165658616
    },
    {
        "actual": 0.08,
        "predicted": 0.144520591563007
    },
    {
        "actual": 0.04,
        "predicted": 0.035684625217668
    },
    {
        "actual": 0.16,
        "predicted": 0.473020260962412
    },
    {
        "actual": 0.06,
        "predicted": 0.118886550996569
    },
    {
        "actual": 0.04,
        "predicted": 0.033281878506269
    },
    {
        "actual": 0.31,
        "predicted": 0.416852895276976
    },
    {
        "actual": 0.36,
        "predicted": 0.538213088081504
    },
    {
        "actual": 0.05,
        "predicted": 0.034234431430915
    },
    {
        "actual": 0.16,
        "predicted": 0.065892901453163
    },
    {
        "actual": 0.1,
        "predicted": 0.384122997455787
    },
    {
        "actual": 0.74,
        "predicted": 0.386867503321744
    },
    {
        "actual": 0.19,
        "predicted": 0.26653713104342
    },
    {
        "actual": 0.63,
        "predicted": 0.496239806685697
    },
    {
        "actual": 0.42,
        "predicted": 0.60364471951525
    },
    {
        "actual": 0.04,
        "predicted": 0.186076779152123
    },
    {
        "actual": 0.06,
        "predicted": 0.093060286325812
    },
    {
        "actual": 0.2,
        "predicted": 0.178330787410305
    },
    {
        "actual": 0.88,
        "predicted": 0.705281002515243
    },
    {
        "actual": 0.12,
        "predicted": 0.058603119269047
    },
    {
        "actual": 0.11,
        "predicted": 0.28529011303559
    },
    {
        "actual": 0.27,
        "predicted": 0.277865555568417
    },
    {
        "actual": 0.02,
        "predicted": 0.026565798643714
    },
    {
        "actual": 0.37,
        "predicted": 0.126461951441341
    },
    {
        "actual": 0.18,
        "predicted": 0.290202727250558
    },
    {
        "actual": 0.04,
        "predicted": 0.021252636328787
    },
    {
        "actual": 0.12,
        "predicted": 0.222969339695246
    },
    {
        "actual": 0.32,
        "predicted": 0.286807412353007
    },
    {
        "actual": 0.54,
        "predicted": 0.602709741051465
    },
    {
        "actual": 0.18,
        "predicted": 0.219489800006679
    },
    {
        "actual": 0.25,
        "predicted": 0.211461452676137
    },
    {
        "actual": 0.7,
        "predicted": 0.425447553945272
    },
    {
        "actual": 0.22,
        "predicted": 0.268605575920087
    },
    {
        "actual": 1,
        "predicted": 0.646267137742002
    },
    {
        "actual": 0.03,
        "predicted": 0.162343557769324
    },
    {
        "actual": 0.74,
        "predicted": 0.519358201918352
    },
    {
        "actual": 0.63,
        "predicted": 0.449467140617527
    },
    {
        "actual": 0.05,
        "predicted": 0.012776925572313
    },
    {
        "actual": 0.09,
        "predicted": 0.27691541387312
    },
    {
        "actual": 0.04,
        "predicted": 0.010115061334997
    },
    {
        "actual": 0.93,
        "predicted": 0.569922782487611
    },
    {
        "actual": 0.19,
        "predicted": 0.290953531161832
    },
    {
        "actual": 0.06,
        "predicted": 0.053582924798709
    },
    {
        "actual": 0.03,
        "predicted": 0.192968503717507
    },
    {
        "actual": 0.1,
        "predicted": 0.266124948989987
    },
    {
        "actual": 0.53,
        "predicted": 0.14915134361039
    },
    {
        "actual": 0.59,
        "predicted": 0.429506744508116
    },
    {
        "actual": 0.67,
        "predicted": 0.780148445406352
    },
    {
        "actual": 0.01,
        "predicted": 0.01428790993031
    },
    {
        "actual": 0.05,
        "predicted": 0.066962716829854
    },
    {
        "actual": 0.14,
        "predicted": 0.151444795343642
    },
    {
        "actual": 0.35,
        "predicted": 0.54845152802726
    },
    {
        "actual": 0.17,
        "predicted": 0.197619466812182
    },
    {
        "actual": 0.05,
        "predicted": 0.010691931433274
    },
    {
        "actual": 0.69,
        "predicted": 0.17757557589349
    },
    {
        "actual": 0.11,
        "predicted": 0.095272449599865
    },
    {
        "actual": 0.24,
        "predicted": 0.224914628344431
    },
    {
        "actual": 0.35,
        "predicted": 0.342498602918604
    },
    {
        "actual": 0.27,
        "predicted": 0.408981556226185
    },
    {
        "actual": 0.13,
        "predicted": 0.035720653618667
    },
    {
        "actual": 0.36,
        "predicted": 0.431918138869228
    },
    {
        "actual": 0.34,
        "predicted": 0.545904238975202
    },
    {
        "actual": 0.08,
        "predicted": 0.163616433670445
    },
    {
        "actual": 0.05,
        "predicted": 0.114355892232106
    },
    {
        "actual": 0.03,
        "predicted": 0.051529358561963
    },
    {
        "actual": 0.03,
        "predicted": 0.136046980558524
    },
    {
        "actual": 0.12,
        "predicted": 0.236551572220525
    },
    {
        "actual": 0.06,
        "predicted": 0.076733998608614
    },
    {
        "actual": 0.32,
        "predicted": 0.265118595670457
    },
    {
        "actual": 0.19,
        "predicted": 0.241265994987656
    },
    {
        "actual": 0.14,
        "predicted": 0.402334284237561
    },
    {
        "actual": 0.51,
        "predicted": 0.458541865407889
    },
    {
        "actual": 0.01,
        "predicted": -0.070794901845853
    },
    {
        "actual": 0.59,
        "predicted": 0.305755301284762
    },
    {
        "actual": 0.09,
        "predicted": 0.074181608788939
    },
    {
        "actual": 0.1,
        "predicted": 0.167486103235001
    },
    {
        "actual": 0.09,
        "predicted": 0.311433176960547
    },
    {
        "actual": 0.03,
        "predicted": -0.011224705430981
    },
    {
        "actual": 0.28,
        "predicted": 0.344104968896922
    },
    {
        "actual": 0.1,
        "predicted": 0.146656522701311
    },
    {
        "actual": 0.12,
        "predicted": 0.098927657385805
    },
    {
        "actual": 0.67,
        "predicted": 0.616506863357973
    },
    {
        "actual": 0.02,
        "predicted": 0.018302379346112
    },
    {
        "actual": 0.29,
        "predicted": 0.259416115078349
    },
    {
        "actual": 0.36,
        "predicted": 0.367843063379235
    },
    {
        "actual": 0.11,
        "predicted": 0.130936850772408
    },
    {
        "actual": 0.03,
        "predicted": 0.129276995507208
    },
    {
        "actual": 0.35,
        "predicted": 0.291371095646225
    },
    {
        "actual": 0.25,
        "predicted": 0.266597374119148
    },
    {
        "actual": 0.06,
        "predicted": 0.180950468843983
    },
    {
        "actual": 0.45,
        "predicted": 0.214309485826883
    },
    {
        "actual": 0.23,
        "predicted": 0.38438318792556
    },
    {
        "actual": 0.32,
        "predicted": 0.319573397160338
    },
    {
        "actual": 0.04,
        "predicted": 0.083746997534889
    },
    {
        "actual": 0.02,
        "predicted": 0.045838361654488
    },
    {
        "actual": 0.16,
        "predicted": 0.109406065799367
    },
    {
        "actual": 0.12,
        "predicted": 0.161793531168228
    },
    {
        "actual": 0.2,
        "predicted": 0.213628018318345
    },
    {
        "actual": 0.51,
        "predicted": 0.430730803348739
    },
    {
        "actual": 0.18,
        "predicted": 0.159521635519446
    },
    {
        "actual": 0.3,
        "predicted": 0.424056991566303
    },
    {
        "actual": 0.37,
        "predicted": 0.539907662582296
    },
    {
        "actual": 0.31,
        "predicted": 0.359072911879353
    },
    {
        "actual": 0.04,
        "predicted": 0.104554753869084
    },
    {
        "actual": 0.18,
        "predicted": 0.275331923371737
    },
    {
        "actual": 0.48,
        "predicted": 0.195975073905877
    },
    {
        "actual": 0.09,
        "predicted": 0.160841626920402
    },
    {
        "actual": 0.07,
        "predicted": 0.142303520888509
    },
    {
        "actual": 0.27,
        "predicted": 0.42025221494876
    },
    {
        "actual": 0.3,
        "predicted": 0.260798558919935
    },
    {
        "actual": 0.34,
        "predicted": 0.377807216528418
    },
    {
        "actual": 0.07,
        "predicted": 0.114102137430063
    },
    {
        "actual": 0.17,
        "predicted": 0.092643802797955
    },
    {
        "actual": 0.17,
        "predicted": 0.319422105905816
    },
    {
        "actual": 0.34,
        "predicted": 0.38364590393907
    },
    {
        "actual": 0.07,
        "predicted": 0.117781819241044
    },
    {
        "actual": 0.35,
        "predicted": 0.163309463447617
    },
    {
        "actual": 0.04,
        "predicted": 0.026588341970056
    },
    {
        "actual": 1,
        "predicted": 0.886803606265083
    },
    {
        "actual": 0.48,
        "predicted": 0.318683685226632
    },
    {
        "actual": 0.03,
        "predicted": 0.015940270410468
    },
    {
        "actual": 0.07,
        "predicted": 0.144099998018481
    },
    {
        "actual": 0.05,
        "predicted": 0.019842036284531
    },
    {
        "actual": 0.12,
        "predicted": 0.258553080523073
    },
    {
        "actual": 0.04,
        "predicted": 0.125289702519684
    },
    {
        "actual": 0.08,
        "predicted": 0.164290047525723
    },
    {
        "actual": 0.1,
        "predicted": 0.09467487167129
    },
    {
        "actual": 0,
        "predicted": 0.048764671093051
    },
    {
        "actual": 0.04,
        "predicted": 0.085220616292701
    },
    {
        "actual": 0.02,
        "predicted": 0.127649837931513
    },
    {
        "actual": 0.18,
        "predicted": 0.170702709294985
    },
    {
        "actual": 0.58,
        "predicted": 0.542558067874692
    },
    {
        "actual": 0.08,
        "predicted": 0.199037817080824
    },
    {
        "actual": 0.04,
        "predicted": 0.067171019805053
    },
    {
        "actual": 0.09,
        "predicted": 0.038996042882585
    },
    {
        "actual": 0.06,
        "predicted": 0.064149795868119
    },
    {
        "actual": 0.08,
        "predicted": 0.127976012398253
    },
    {
        "actual": 0.08,
        "predicted": 0.045166178334868
    },
    {
        "actual": 0.1,
        "predicted": 0.097511982338936
    },
    {
        "actual": 0.03,
        "predicted": 0.052727585389387
    },
    {
        "actual": 0.28,
        "predicted": 0.193561870803975
    },
    {
        "actual": 0.06,
        "predicted": 0.103784829679526
    },
    {
        "actual": 0.04,
        "predicted": 0.071053284624735
    },
    {
        "actual": 0.03,
        "predicted": 0.165646932969728
    },
    {
        "actual": 0.07,
        "predicted": 0.060532293599253
    },
    {
        "actual": 0.41,
        "predicted": 0.237494740541086
    },
    {
        "actual": 0.22,
        "predicted": 0.304774019036297
    },
    {
        "actual": 1,
        "predicted": 0.804193823954583
    },
    {
        "actual": 0.1,
        "predicted": 0.118561623502554
    },
    {
        "actual": 0.06,
        "predicted": 0.159580999424806
    },
    {
        "actual": 0.45,
        "predicted": 0.411194482790132
    },
    {
        "actual": 0.32,
        "predicted": 0.374761040895103
    },
    {
        "actual": 0.14,
        "predicted": 0.289118767126216
    },
    {
        "actual": 0.09,
        "predicted": 0.160830438217829
    },
    {
        "actual": 0.07,
        "predicted": 0.091835358268902
    },
    {
        "actual": 0.6,
        "predicted": 0.503472243515842
    },
    {
        "actual": 0.18,
        "predicted": 0.321369883125359
    },
    {
        "actual": 0.03,
        "predicted": 0.029816801107934
    },
    {
        "actual": 0.04,
        "predicted": 0.038820570445723
    },
    {
        "actual": 0.51,
        "predicted": 0.431032001051174
    },
    {
        "actual": 0.83,
        "predicted": 0.060327815078202
    },
    {
        "actual": 0.02,
        "predicted": 0.022234427800731
    },
    {
        "actual": 0.08,
        "predicted": 0.138468230845147
    },
    {
        "actual": 0.26,
        "predicted": 0.47954354444771
    },
    {
        "actual": 0.23,
        "predicted": 0.283745407235779
    },
    {
        "actual": 0.49,
        "predicted": 0.492954587899352
    },
    {
        "actual": 0.03,
        "predicted": 0.086026136985505
    },
    {
        "actual": 0.04,
        "predicted": 0.031450711925262
    },
    {
        "actual": 0.15,
        "predicted": 0.115758235644932
    },
    {
        "actual": 0.54,
        "predicted": 0.566467623440394
    },
    {
        "actual": 0.31,
        "predicted": 0.275307726695943
    },
    {
        "actual": 0.39,
        "predicted": 0.26834868210259
    },
    {
        "actual": 0.43,
        "predicted": 0.240284242808277
    },
    {
        "actual": 0.5,
        "predicted": 0.289203854321967
    },
    {
        "actual": 0.03,
        "predicted": 0.047526352042441
    },
    {
        "actual": 0.08,
        "predicted": 0.077839442632559
    },
    {
        "actual": 0.04,
        "predicted": 0.080224030225211
    },
    {
        "actual": 0.22,
        "predicted": 0.301166844026404
    },
    {
        "actual": 0.58,
        "predicted": 0.35198946864727
    },
    {
        "actual": 0.01,
        "predicted": 0.014223497986049
    },
    {
        "actual": 0.1,
        "predicted": 0.093517433152738
    },
    {
        "actual": 0.39,
        "predicted": 0.45069382978528
    },
    {
        "actual": 0.09,
        "predicted": 0.190525674625226
    },
    {
        "actual": 0.18,
        "predicted": 0.420934228354583
    },
    {
        "actual": 0.8,
        "predicted": 0.526746715460765
    },
    {
        "actual": 1,
        "predicted": 0.375719307810558
    },
    {
        "actual": 0.4,
        "predicted": 0.678345426229471
    },
    {
        "actual": 0.05,
        "predicted": 0.340570627679051
    },
    {
        "actual": 0.21,
        "predicted": 0.384872787049429
    },
    {
        "actual": 0.68,
        "predicted": 0.288457914229803
    },
    {
        "actual": 0.32,
        "predicted": 0.46009703468067
    },
    {
        "actual": 0.2,
        "predicted": 0.176550046332888
    },
    {
        "actual": 0.62,
        "predicted": 0.411017661574823
    },
    {
        "actual": 0.53,
        "predicted": 0.565265761779811
    },
    {
        "actual": 0.25,
        "predicted": 0.314280988835902
    },
    {
        "actual": 1,
        "predicted": 0.762571300760033
    },
    {
        "actual": 0.2,
        "predicted": 0.308107225088953
    },
    {
        "actual": 0.21,
        "predicted": 0.244023770718855
    },
    {
        "actual": 1,
        "predicted": 1.01603451752629
    },
    {
        "actual": 0.1,
        "predicted": 0.162435788391192
    },
    {
        "actual": 0.14,
        "predicted": 0.103022223002448
    },
    {
        "actual": 0.01,
        "predicted": 0.074664788782519
    },
    {
        "actual": 0.13,
        "predicted": 0.193565907305755
    },
    {
        "actual": 0.22,
        "predicted": 0.076663169971988
    },
    {
        "actual": 0.1,
        "predicted": 0.194608756597279
    },
    {
        "actual": 1,
        "predicted": 0.557875940196808
    },
    {
        "actual": 0.69,
        "predicted": 0.211947066714903
    },
    {
        "actual": 0.06,
        "predicted": 0.093000780288871
    },
    {
        "actual": 0.66,
        "predicted": 0.429068375957743
    },
    {
        "actual": 0.03,
        "predicted": 0.031008702420844
    },
    {
        "actual": 0.16,
        "predicted": 0.273345926565691
    },
    {
        "actual": 0,
        "predicted": -0.001269962194769
    },
    {
        "actual": 0.76,
        "predicted": 0.486232340212344
    },
    {
        "actual": 0.71,
        "predicted": 0.156689671415592
    },
    {
        "actual": 0.42,
        "predicted": 0.51187632089105
    },
    {
        "actual": 0.03,
        "predicted": 0.110720831682049
    },
    {
        "actual": 0.53,
        "predicted": 0.625023833407965
    },
    {
        "actual": 0.06,
        "predicted": 0.05909285519528
    },
    {
        "actual": 0.18,
        "predicted": 0.562376001117085
    },
    {
        "actual": 0.04,
        "predicted": 0.100553530811303
    },
    {
        "actual": 0.1,
        "predicted": 0.12333861175952
    },
    {
        "actual": 0.06,
        "predicted": 0.198186160089673
    },
    {
        "actual": 0.04,
        "predicted": 0.107808918959225
    },
    {
        "actual": 0.16,
        "predicted": 0.33545021821628
    },
    {
        "actual": 0.24,
        "predicted": 0.301754164323686
    },
    {
        "actual": 0.2,
        "predicted": 0.153862437383335
    },
    {
        "actual": 0.35,
        "predicted": 0.312290868224129
    },
    {
        "actual": 0.04,
        "predicted": 0.115326946636453
    },
    {
        "actual": 0.05,
        "predicted": 0.088663119223041
    },
    {
        "actual": 0.72,
        "predicted": 0.633044315398525
    },
    {
        "actual": 0.06,
        "predicted": 0.14922762255718
    },
    {
        "actual": 0.62,
        "predicted": 0.277169067763139
    },
    {
        "actual": 1,
        "predicted": 0.739743223606278
    },
    {
        "actual": 0.03,
        "predicted": 0.066752085651701
    },
    {
        "actual": 0.05,
        "predicted": 0.046893253193386
    },
    {
        "actual": 0.63,
        "predicted": 0.544298810565259
    },
    {
        "actual": 0.05,
        "predicted": 0.050644194322484
    },
    {
        "actual": 0.2,
        "predicted": 0.315052522749886
    },
    {
        "actual": 0.07,
        "predicted": 0.269697068528427
    },
    {
        "actual": 0.64,
        "predicted": 0.476427805895787
    },
    {
        "actual": 0.1,
        "predicted": 0.082295779768743
    },
    {
        "actual": 0.11,
        "predicted": 0.113423050201885
    },
    {
        "actual": 1,
        "predicted": 0.721622136519824
    },
    {
        "actual": 0.07,
        "predicted": 0.190223356715934
    },
    {
        "actual": 0.02,
        "predicted": -0.008244616358185
    },
    {
        "actual": 0.55,
        "predicted": 0.58955308523098
    },
    {
        "actual": 0.04,
        "predicted": 0.002078191669857
    },
    {
        "actual": 1,
        "predicted": 0.468647871242779
    },
    {
        "actual": 0.37,
        "predicted": 0.151841522311784
    },
    {
        "actual": 0.33,
        "predicted": 0.344786599859534
    },
    {
        "actual": 0.09,
        "predicted": 0.181544850993972
    },
    {
        "actual": 0.28,
        "predicted": 0.119701015406769
    },
    {
        "actual": 0.12,
        "predicted": 0.165242639613214
    },
    {
        "actual": 0.15,
        "predicted": 0.198437539897271
    },
    {
        "actual": 0.03,
        "predicted": 0.151036505484992
    },
    {
        "actual": 0.22,
        "predicted": 0.369997363748085
    },
    {
        "actual": 0.05,
        "predicted": 0.020493507868667
    },
    {
        "actual": 0.78,
        "predicted": 0.455892622999585
    },
    {
        "actual": 0.46,
        "predicted": 0.334757858084353
    },
    {
        "actual": 0.34,
        "predicted": 0.553661538381316
    },
    {
        "actual": 0.22,
        "predicted": 0.293001890937519
    },
    {
        "actual": 0.14,
        "predicted": 0.366845484215202
    },
    {
        "actual": 0.37,
        "predicted": 0.380085630263055
    },
    {
        "actual": 0.06,
        "predicted": -0.00072886083822
    },
    {
        "actual": 0.24,
        "predicted": 0.308889975885643
    },
    {
        "actual": 0.4,
        "predicted": 0.174886993504816
    },
    {
        "actual": 0.22,
        "predicted": 0.133000987873472
    },
    {
        "actual": 0.69,
        "predicted": 0.376704999217595
    },
    {
        "actual": 0.11,
        "predicted": 0.229475379890977
    },
    {
        "actual": 0.02,
        "predicted": 0.031086509755446
    },
    {
        "actual": 0.25,
        "predicted": 0.473453249259287
    },
    {
        "actual": 0.1,
        "predicted": 0.148362864044619
    },
    {
        "actual": 0.05,
        "predicted": 0.211269386744791
    },
    {
        "actual": 0.16,
        "predicted": 0.269004550055831
    },
    {
        "actual": 0.04,
        "predicted": 0.110313518688013
    },
    {
        "actual": 0.01,
        "predicted": 0.019698011066352
    },
    {
        "actual": 0.29,
        "predicted": 0.664777236772106
    },
    {
        "actual": 0.1,
        "predicted": -0.011869377231371
    },
    {
        "actual": 0.05,
        "predicted": 0.046201209578089
    },
    {
        "actual": 0.36,
        "predicted": 0.523083906156997
    },
    {
        "actual": 0.22,
        "predicted": 0.355320137829549
    },
    {
        "actual": 0.17,
        "predicted": 0.311730866594592
    },
    {
        "actual": 0.15,
        "predicted": 0.308977996210083
    },
    {
        "actual": 0.14,
        "predicted": 0.050489647687011
    },
    {
        "actual": 1,
        "predicted": 0.653065899058885
    },
    {
        "actual": 0.1,
        "predicted": 0.104919752761524
    },
    {
        "actual": 0.24,
        "predicted": 0.157757773622285
    },
    {
        "actual": 0.12,
        "predicted": 0.073565699031445
    },
    {
        "actual": 0.04,
        "predicted": 0.023212499774462
    },
    {
        "actual": 0.21,
        "predicted": 0.345184177645526
    },
    {
        "actual": 0.7,
        "predicted": 0.478269568934934
    },
    {
        "actual": 0.13,
        "predicted": 0.367193376300283
    },
    {
        "actual": 0.13,
        "predicted": 0.17481945325551
    },
    {
        "actual": 0.24,
        "predicted": 0.453626804199068
    },
    {
        "actual": 0.04,
        "predicted": 0.092446303033294
    },
    {
        "actual": 0.14,
        "predicted": 0.141704361475262
    },
    {
        "actual": 0.22,
        "predicted": 0.264907525382041
    },
    {
        "actual": 0.17,
        "predicted": 0.228397058077148
    },
    {
        "actual": 0.22,
        "predicted": 0.245254400503944
    },
    {
        "actual": 0.21,
        "predicted": 0.123228774107286
    },
    {
        "actual": 0.03,
        "predicted": 0.087432901229571
    },
    {
        "actual": 0.2,
        "predicted": 0.194136258010274
    },
    {
        "actual": 0.09,
        "predicted": 0.11941032938411
    },
    {
        "actual": 0.11,
        "predicted": 0.170901861546945
    },
    {
        "actual": 0,
        "predicted": 0.021467948561432
    },
    {
        "actual": 0.13,
        "predicted": 0.158440796660176
    },
    {
        "actual": 0.17,
        "predicted": 0.138609613709649
    },
    {
        "actual": 0.46,
        "predicted": 0.51626588944328
    },
    {
        "actual": 0.24,
        "predicted": 0.313492549142421
    },
    {
        "actual": 0.08,
        "predicted": 0.208421743525457
    },
    {
        "actual": 0.66,
        "predicted": 0.403582765617052
    },
    {
        "actual": 0.25,
        "predicted": 0.661790372728791
    },
    {
        "actual": 0.07,
        "predicted": 0.18952949644067
    },
    {
        "actual": 0.56,
        "predicted": 0.432007453217205
    },
    {
        "actual": 0,
        "predicted": 0.089205032418176
    },
    {
        "actual": 0.04,
        "predicted": 0.118912374222878
    },
    {
        "actual": 0.15,
        "predicted": 0.067055383486834
    },
    {
        "actual": 0.41,
        "predicted": 0.47610226685878
    },
    {
        "actual": 0.2,
        "predicted": 0.176126782469157
    },
    {
        "actual": 0.06,
        "predicted": 0.166458878968527
    },
    {
        "actual": 0.2,
        "predicted": 0.21794017636944
    },
    {
        "actual": 0.05,
        "predicted": 0.015785124582075
    },
    {
        "actual": 0.18,
        "predicted": 0.318365352620873
    },
    {
        "actual": 0.07,
        "predicted": 0.110016355168522
    },
    {
        "actual": 0.91,
        "predicted": 0.527250314467604
    },
    {
        "actual": 0.15,
        "predicted": 0.202645735078569
    },
    {
        "actual": 0.13,
        "predicted": 0.185110208055213
    },
    {
        "actual": 0.03,
        "predicted": 0.109202121803469
    },
    {
        "actual": 0.05,
        "predicted": 0.02205133897274
    },
    {
        "actual": 0.36,
        "predicted": 0.558592638856315
    },
    {
        "actual": 0.86,
        "predicted": 0.421563586605818
    },
    {
        "actual": 0.11,
        "predicted": 0.143838737406068
    },
    {
        "actual": 0.18,
        "predicted": 0.109340286180957
    },
    {
        "actual": 0.06,
        "predicted": 0.052778963802999
    },
    {
        "actual": 0.28,
        "predicted": 0.249676615089842
    },
    {
        "actual": 0.01,
        "predicted": 0.017811119719282
    },
    {
        "actual": 0.05,
        "predicted": 0.171723414783929
    },
    {
        "actual": 0.52,
        "predicted": 0.463422357645561
    },
    {
        "actual": 0.21,
        "predicted": 0.353394204751284
    },
    {
        "actual": 0.04,
        "predicted": 0.094749845108387
    },
    {
        "actual": 0.55,
        "predicted": 0.540398694936825
    },
    {
        "actual": 0.01,
        "predicted": 0.123809533169206
    },
    {
        "actual": 0.36,
        "predicted": 0.35325837140741
    },
    {
        "actual": 0.36,
        "predicted": 0.208720874549178
    },
    {
        "actual": 0.07,
        "predicted": 0.133372801869226
    },
    {
        "actual": 0.85,
        "predicted": 0.807739721145314
    },
    {
        "actual": 0.08,
        "predicted": 0.029892222657847
    },
    {
        "actual": 0.12,
        "predicted": 0.100325284195964
    },
    {
        "actual": 0.25,
        "predicted": 0.269758387633985
    },
    {
        "actual": 1,
        "predicted": 0.854953540592968
    },
    {
        "actual": 0.04,
        "predicted": 0.085649663462597
    },
    {
        "actual": 0.36,
        "predicted": 0.195475463356552
    },
    {
        "actual": 0.41,
        "predicted": 0.197034426451238
    },
    {
        "actual": 0.33,
        "predicted": 0.396628242435126
    },
    {
        "actual": 0.33,
        "predicted": 0.271860403667246
    },
    {
        "actual": 0.19,
        "predicted": 0.150264187011049
    },
    {
        "actual": 0.14,
        "predicted": 0.147841015057106
    },
    {
        "actual": 0.07,
        "predicted": 0.139658444744383
    },
    {
        "actual": 0.15,
        "predicted": 0.233328533608583
    },
    {
        "actual": 0.08,
        "predicted": 0.07985037102061
    },
    {
        "actual": 0.1,
        "predicted": 0.091252009537788
    },
    {
        "actual": 0.04,
        "predicted": 0.111974891314964
    },
    {
        "actual": 0.04,
        "predicted": -0.006588255526762
    },
    {
        "actual": 0.08,
        "predicted": 0.163500709043729
    },
    {
        "actual": 0.14,
        "predicted": 0.21914644237877
    },
    {
        "actual": 0.04,
        "predicted": 0.073883878023577
    },
    {
        "actual": 0.16,
        "predicted": 0.023164749580116
    },
    {
        "actual": 0.27,
        "predicted": 0.185691860181468
    },
    {
        "actual": 0.13,
        "predicted": 0.211603776402849
    },
    {
        "actual": 0.09,
        "predicted": 0.065847015729514
    },
    {
        "actual": 0.09,
        "predicted": 0.076024634283639
    },
    {
        "actual": 0.56,
        "predicted": 0.696782945783929
    },
    {
        "actual": 0.52,
        "predicted": 0.381251042968331
    },
    {
        "actual": 0.12,
        "predicted": 0.134009806094359
    },
    {
        "actual": 0.12,
        "predicted": 0.110926347257681
    },
    {
        "actual": 0.41,
        "predicted": 0.418839510461711
    },
    {
        "actual": 0.87,
        "predicted": 0.79814186161953
    },
    {
        "actual": 0.01,
        "predicted": 0.009239473719211
    },
    {
        "actual": 0.06,
        "predicted": 0.064909138291751
    },
    {
        "actual": 0.03,
        "predicted": 0.017493233834271
    },
    {
        "actual": 0.11,
        "predicted": 0.261488424808588
    },
    {
        "actual": 0.15,
        "predicted": 0.359764046250673
    },
    {
        "actual": 0.24,
        "predicted": 0.218112756766324
    },
    {
        "actual": 0.21,
        "predicted": 0.381122557093978
    },
    {
        "actual": 0.03,
        "predicted": 0.407860674900997
    },
    {
        "actual": 0.87,
        "predicted": 0.893865781874642
    },
    {
        "actual": 0.39,
        "predicted": 0.437515448832642
    },
    {
        "actual": 0.23,
        "predicted": 0.174479741272483
    },
    {
        "actual": 0.1,
        "predicted": 0.160534665768374
    },
    {
        "actual": 0.59,
        "predicted": 0.559006283938819
    },
    {
        "actual": 0.24,
        "predicted": 0.098217273572239
    },
    {
        "actual": 0.13,
        "predicted": 0.29913146438475
    },
    {
        "actual": 0.11,
        "predicted": 0.149985011160779
    },
    {
        "actual": 0.59,
        "predicted": 0.31688987052762
    },
    {
        "actual": 0.01,
        "predicted": 0.001891829673149
    },
    {
        "actual": 0.41,
        "predicted": 0.254958894044017
    },
    {
        "actual": 0.13,
        "predicted": 0.317768947529745
    },
    {
        "actual": 0.24,
        "predicted": 0.183779403289573
    },
    {
        "actual": 0.1,
        "predicted": 0.234364903250237
    },
    {
        "actual": 0.4,
        "predicted": 0.289818393959353
    },
    {
        "actual": 0.82,
        "predicted": 0.177859224207565
    },
    {
        "actual": 0.09,
        "predicted": 0.080497088225678
    },
    {
        "actual": 0.18,
        "predicted": 0.176326030310044
    },
    {
        "actual": 0.16,
        "predicted": 0.50708418702121
    },
    {
        "actual": 0.13,
        "predicted": 0.111000086611909
    },
    {
        "actual": 0.33,
        "predicted": 0.498575905540231
    },
    {
        "actual": 0.06,
        "predicted": 0.111620678223264
    },
    {
        "actual": 0.1,
        "predicted": 0.073717672917964
    },
    {
        "actual": 0.04,
        "predicted": 0.121832931304503
    },
    {
        "actual": 0.23,
        "predicted": 0.413799207060854
    },
    {
        "actual": 0.08,
        "predicted": 0.189744648450946
    },
    {
        "actual": 0.1,
        "predicted": 0.130819791869326
    },
    {
        "actual": 0.01,
        "predicted": 0.064840496135115
    },
    {
        "actual": 0.1,
        "predicted": 0.230596828941718
    },
    {
        "actual": 0.17,
        "predicted": 0.073468739265929
    },
    {
        "actual": 0.89,
        "predicted": 0.855679550948523
    },
    {
        "actual": 0.85,
        "predicted": 0.772721577140166
    },
    {
        "actual": 0.14,
        "predicted": 0.206381033248672
    },
    {
        "actual": 0.32,
        "predicted": 0.603428444561846
    },
    {
        "actual": 0.03,
        "predicted": 0.209902447336869
    },
    {
        "actual": 0.09,
        "predicted": 0.108060930606027
    },
    {
        "actual": 0.2,
        "predicted": 0.3999671886448
    },
    {
        "actual": 0.54,
        "predicted": 0.379371889889964
    },
    {
        "actual": 0.15,
        "predicted": 0.222328428846813
    },
    {
        "actual": 0.18,
        "predicted": 0.121510579005848
    },
    {
        "actual": 0.24,
        "predicted": 0.322587391757507
    },
    {
        "actual": 0.94,
        "predicted": 0.80629926782246
    },
    {
        "actual": 0.65,
        "predicted": 0.127604127971687
    },
    {
        "actual": 0.06,
        "predicted": 0.037522857784522
    },
    {
        "actual": 0.05,
        "predicted": -0.014418170000451
    },
    {
        "actual": 0.26,
        "predicted": 0.138276699126556
    },
    {
        "actual": 0.12,
        "predicted": 0.434362995690234
    },
    {
        "actual": 0.03,
        "predicted": 0.023155370402667
    },
    {
        "actual": 0.41,
        "predicted": 0.40132686150173
    },
    {
        "actual": 0.01,
        "predicted": 0.117461302719765
    },
    {
        "actual": 0.15,
        "predicted": 0.074771960536487
    },
    {
        "actual": 0.15,
        "predicted": 0.148521038310291
    },
    {
        "actual": 0.04,
        "predicted": -0.002645272309272
    },
    {
        "actual": 0.03,
        "predicted": 0.0445569348876
    },
    {
        "actual": 0.06,
        "predicted": 0.169956688188178
    },
    {
        "actual": 0.09,
        "predicted": 0.076748772050629
    },
    {
        "actual": 0.28,
        "predicted": 0.191284765072008
    },
    {
        "actual": 0.07,
        "predicted": 0.047798335367495
    },
    {
        "actual": 0.16,
        "predicted": 0.192273760902418
    },
    {
        "actual": 0.41,
        "predicted": 0.085090964099998
    },
    {
        "actual": 0.22,
        "predicted": 0.409346780124594
    },
    {
        "actual": 0.03,
        "predicted": 0.019013772743522
    },
    {
        "actual": 0.35,
        "predicted": 0.39021189396416
    },
    {
        "actual": 0.63,
        "predicted": 0.701350488878393
    },
    {
        "actual": 0.09,
        "predicted": 0.213893882686099
    },
    {
        "actual": 0.25,
        "predicted": 0.285342226411358
    },
    {
        "actual": 0.22,
        "predicted": 0.165783332380995
    },
    {
        "actual": 1,
        "predicted": 0.93594521734532
    },
    {
        "actual": 0.36,
        "predicted": 0.564337718500791
    },
    {
        "actual": 0.81,
        "predicted": 0.752750282444439
    },
    {
        "actual": 0.27,
        "predicted": 0.354809631193993
    },
    {
        "actual": 0.07,
        "predicted": 0.071841754518391
    },
    {
        "actual": 0.04,
        "predicted": 0.087873379013443
    },
    {
        "actual": 0.61,
        "predicted": 0.448105990533369
    },
    {
        "actual": 0.24,
        "predicted": 0.461262273307089
    },
    {
        "actual": 0.95,
        "predicted": 0.608611355727668
    },
    {
        "actual": 0.81,
        "predicted": 0.559020062741906
    },
    {
        "actual": 0.12,
        "predicted": 0.220895680829436
    },
    {
        "actual": 1,
        "predicted": 0.709961938756865
    },
    {
        "actual": 0.05,
        "predicted": -0.009263626326386
    },
    {
        "actual": 0.38,
        "predicted": 0.583369471171229
    },
    {
        "actual": 0.37,
        "predicted": 0.366338973030696
    },
    {
        "actual": 0.53,
        "predicted": 0.915526979880194
    },
    {
        "actual": 0.23,
        "predicted": 0.196738356168413
    },
    {
        "actual": 0.26,
        "predicted": 0.311288472928211
    },
    {
        "actual": 0.04,
        "predicted": 0.063451070794026
    },
    {
        "actual": 0.18,
        "predicted": 0.172313747107981
    },
    {
        "actual": 0.62,
        "predicted": 0.517521908763985
    },
    {
        "actual": 0.5,
        "predicted": 0.325664691132163
    },
    {
        "actual": 0.14,
        "predicted": 0.137310618771902
    },
    {
        "actual": 0.06,
        "predicted": 0.036182796308215
    },
    {
        "actual": 0.54,
        "predicted": 0.61627920093103
    },
    {
        "actual": 0.61,
        "predicted": 0.519153884949741
    },
    {
        "actual": 0.35,
        "predicted": 0.831292812566909
    },
    {
        "actual": 0.38,
        "predicted": 0.283794705288716
    },
    {
        "actual": 0.72,
        "predicted": 0.779635686442092
    },
    {
        "actual": 0.04,
        "predicted": 0.022960341562857
    },
    {
        "actual": 0.09,
        "predicted": 0.226210518519331
    },
    {
        "actual": 0.51,
        "predicted": 0.361869120644996
    },
    {
        "actual": 0.54,
        "predicted": 0.501286908565979
    },
    {
        "actual": 0.45,
        "predicted": 0.474296339812798
    },
    {
        "actual": 0.1,
        "predicted": 0.227241897571282
    },
    {
        "actual": 0.07,
        "predicted": 0.246094244517735
    },
    {
        "actual": 0.01,
        "predicted": 0.028480141529454
    },
    {
        "actual": 0.16,
        "predicted": 0.22884401807461
    },
    {
        "actual": 0.29,
        "predicted": 0.186801873500835
    },
    {
        "actual": 0.42,
        "predicted": 0.277252258722041
    },
    {
        "actual": 0.18,
        "predicted": 0.252609588915147
    },
    {
        "actual": 0.36,
        "predicted": 0.29676711626425
    },
    {
        "actual": 0.1,
        "predicted": 0.094208693054082
    },
    {
        "actual": 0.03,
        "predicted": 0.019186515050806
    },
    {
        "actual": 0.62,
        "predicted": 0.408879120995542
    },
    {
        "actual": 0.08,
        "predicted": 0.005714041707681
    },
    {
        "actual": 0.12,
        "predicted": 0.148569537705302
    },
    {
        "actual": 0.23,
        "predicted": 0.19849832929149
    },
    {
        "actual": 0.18,
        "predicted": 0.306412668772012
    },
    {
        "actual": 0.28,
        "predicted": 0.26908384711076
    },
    {
        "actual": 0.09,
        "predicted": 0.073168159631003
    },
    {
        "actual": 0.2,
        "predicted": 0.173183737382035
    },
    {
        "actual": 0.09,
        "predicted": 0.110127430646412
    },
    {
        "actual": 0.16,
        "predicted": 0.173149710812845
    },
    {
        "actual": 0.06,
        "predicted": 0.090111572100901
    },
    {
        "actual": 0.23,
        "predicted": 0.208889292863002
    },
    {
        "actual": 0.82,
        "predicted": 0.504883088505922
    },
    {
        "actual": 0.15,
        "predicted": 0.13661644165785
    },
    {
        "actual": 0.02,
        "predicted": 0.04887364275698
    },
    {
        "actual": 0.9,
        "predicted": 0.880092032913575
    },
    {
        "actual": 0.34,
        "predicted": 0.739124867889227
    },
    {
        "actual": 0.01,
        "predicted": 0.136903943287252
    },
    {
        "actual": 0.21,
        "predicted": 0.357875114324167
    },
    {
        "actual": 0.06,
        "predicted": 0.140835540368242
    },
    {
        "actual": 0.59,
        "predicted": 0.273620676708661
    },
    {
        "actual": 0.66,
        "predicted": 0.676337444826893
    },
    {
        "actual": 0.2,
        "predicted": 0.259704673936842
    },
    {
        "actual": 0.1,
        "predicted": 0.123796264409657
    },
    {
        "actual": 0.4,
        "predicted": 0.437864866264178
    },
    {
        "actual": 0.17,
        "predicted": 0.256453759137209
    },
    {
        "actual": 0.04,
        "predicted": 0.054051434474703
    },
    {
        "actual": 0.28,
        "predicted": 0.307715359936383
    },
    {
        "actual": 0.13,
        "predicted": 0.111053418092762
    },
    {
        "actual": 0.27,
        "predicted": 0.469447349827321
    },
    {
        "actual": 0.23,
        "predicted": 0.119454763084883
    },
    {
        "actual": 0.59,
        "predicted": 0.535320872127544
    },
    {
        "actual": 0.12,
        "predicted": 0.275507694509382
    },
    {
        "actual": 0.01,
        "predicted": 0.04954642749118
    },
    {
        "actual": 0.23,
        "predicted": 0.290557828347539
    },
    {
        "actual": 0.02,
        "predicted": 0.041661466595826
    },
    {
        "actual": 0.17,
        "predicted": 0.104924473543006
    },
    {
        "actual": 0.07,
        "predicted": 0.07309211203257
    },
    {
        "actual": 0.05,
        "predicted": 0.097991838665432
    },
    {
        "actual": 0.12,
        "predicted": 0.353341230066479
    },
    {
        "actual": 0.1,
        "predicted": 0.261206455472789
    },
    {
        "actual": 0.11,
        "predicted": 0.241595748816941
    },
    {
        "actual": 0.1,
        "predicted": 0.060944032420243
    },
    {
        "actual": 0.11,
        "predicted": 0.086507459978816
    },
    {
        "actual": 0.16,
        "predicted": 0.235776989588118
    },
    {
        "actual": 0.05,
        "predicted": 0.10216149891237
    },
    {
        "actual": 0.24,
        "predicted": 0.325836922103414
    },
    {
        "actual": 0.33,
        "predicted": 0.342582836571135
    },
    {
        "actual": 0.19,
        "predicted": 0.071847296118031
    },
    {
        "actual": 0.19,
        "predicted": 0.257442752909202
    },
    {
        "actual": 0.21,
        "predicted": 0.163099783783078
    },
    {
        "actual": 0.16,
        "predicted": 0.115756273138706
    },
    {
        "actual": 0.19,
        "predicted": 0.299508391523036
    },
    {
        "actual": 0.04,
        "predicted": 0.100650387036048
    },
    {
        "actual": 0.05,
        "predicted": 0.102691263853487
    },
    {
        "actual": 0.34,
        "predicted": 0.330120225658112
    },
    {
        "actual": 0.23,
        "predicted": 0.311683029981254
    },
    {
        "actual": 0.1,
        "predicted": 0.110787724557085
    },
    {
        "actual": 0.24,
        "predicted": 0.352274968412465
    },
    {
        "actual": 0.52,
        "predicted": 0.367600912323703
    },
    {
        "actual": 0.03,
        "predicted": -0.013476863492338
    },
    {
        "actual": 0.36,
        "predicted": 0.407979983328833
    },
    {
        "actual": 0,
        "predicted": 0.150193524078681
    },
    {
        "actual": 0.24,
        "predicted": 0.163016654662922
    },
    {
        "actual": 0.3,
        "predicted": 0.22562044207225
    },
    {
        "actual": 1,
        "predicted": 0.824572232012257
    },
    {
        "actual": 0.43,
        "predicted": 0.361867123982185
    },
    {
        "actual": 0.11,
        "predicted": 0.15164015528585
    },
    {
        "actual": 0.41,
        "predicted": 0.201235582371479
    },
    {
        "actual": 0.22,
        "predicted": 0.419654138196693
    },
    {
        "actual": 0.7,
        "predicted": 0.503405401444906
    },
    {
        "actual": 0.1,
        "predicted": 0.240745658979979
    },
    {
        "actual": 0.61,
        "predicted": 0.61462846024727
    },
    {
        "actual": 0.06,
        "predicted": 0.104664712100001
    },
    {
        "actual": 0.12,
        "predicted": 0.115352003914264
    },
    {
        "actual": 0.41,
        "predicted": 0.362619947728032
    },
    {
        "actual": 0.04,
        "predicted": 0.089264262258583
    },
    {
        "actual": 0.01,
        "predicted": 0.027912785769092
    },
    {
        "actual": 0.04,
        "predicted": 0.001067313672677
    },
    {
        "actual": 0.18,
        "predicted": 0.489524625459658
    },
    {
        "actual": 0.47,
        "predicted": 0.527441261010661
    },
    {
        "actual": 0.03,
        "predicted": 0.009208703511735
    },
    {
        "actual": 0.21,
        "predicted": 0.182498897380515
    },
    {
        "actual": 0.13,
        "predicted": 0.220305474310905
    },
    {
        "actual": 0.25,
        "predicted": 0.204012173126337
    },
    {
        "actual": 0.02,
        "predicted": 0.022765522604778
    },
    {
        "actual": 0.08,
        "predicted": 0.20727645378279
    },
    {
        "actual": 0.05,
        "predicted": 0.135129355534551
    },
    {
        "actual": 0.05,
        "predicted": 0.185668611342961
    },
    {
        "actual": 0.02,
        "predicted": 0.057027621258232
    },
    {
        "actual": 0.27,
        "predicted": 0.397171046650776
    },
    {
        "actual": 0.06,
        "predicted": 0.149613378983245
    },
    {
        "actual": 0.5,
        "predicted": 0.352380668093103
    },
    {
        "actual": 0.28,
        "predicted": 0.346360559356979
    },
    {
        "actual": 0.12,
        "predicted": 0.176107821239871
    },
    {
        "actual": 0.1,
        "predicted": 0.17157523296963
    },
    {
        "actual": 0.09,
        "predicted": 0.149250162924971
    },
    {
        "actual": 0.21,
        "predicted": 0.309120466147806
    },
    {
        "actual": 0.02,
        "predicted": 0.113396372573344
    },
    {
        "actual": 1,
        "predicted": 0.649481428793175
    },
    {
        "actual": 0.24,
        "predicted": 0.319331621000016
    },
    {
        "actual": 0.13,
        "predicted": 0.231322553077656
    },
    {
        "actual": 0.1,
        "predicted": 0.152335087479183
    },
    {
        "actual": 0.12,
        "predicted": 0.240881923127735
    },
    {
        "actual": 0.06,
        "predicted": 0.118523382753441
    },
    {
        "actual": 0.12,
        "predicted": 0.189374771353521
    },
    {
        "actual": 0.06,
        "predicted": 0.074124606377549
    },
    {
        "actual": 0.22,
        "predicted": -0.015082547200713
    },
    {
        "actual": 0.15,
        "predicted": 0.377027478988366
    },
    {
        "actual": 0.03,
        "predicted": 0.092458382929604
    },
    {
        "actual": 0.3,
        "predicted": 0.596368884460267
    },
    {
        "actual": 0.02,
        "predicted": 0.190356712844315
    },
    {
        "actual": 0.05,
        "predicted": 0.143656606977066
    },
    {
        "actual": 0.02,
        "predicted": 0.086448629247548
    },
    {
        "actual": 0.02,
        "predicted": 0.075333329338156
    },
    {
        "actual": 0.07,
        "predicted": 0.132497766639088
    },
    {
        "actual": 0.26,
        "predicted": 0.265009032409398
    },
    {
        "actual": 1,
        "predicted": 0.627071793478594
    },
    {
        "actual": 0.35,
        "predicted": 0.238840827771689
    },
    {
        "actual": 0.08,
        "predicted": 0.136018749289903
    },
    {
        "actual": 0.03,
        "predicted": 0.051444582457864
    },
    {
        "actual": 0.02,
        "predicted": 0.038433032200503
    },
    {
        "actual": 0.03,
        "predicted": 0.002323743100628
    },
    {
        "actual": 0.11,
        "predicted": 0.12616239500028
    },
    {
        "actual": 0.29,
        "predicted": 0.240438350026234
    },
    {
        "actual": 0.79,
        "predicted": 0.381486567832841
    },
    {
        "actual": 0.13,
        "predicted": 0.204774290583894
    },
    {
        "actual": 0.02,
        "predicted": 0.125766030297832
    },
    {
        "actual": 0.01,
        "predicted": -0.028917917642226
    },
    {
        "actual": 0.23,
        "predicted": 0.224590818189609
    },
    {
        "actual": 1,
        "predicted": 0.626420387899037
    },
    {
        "actual": 0.33,
        "predicted": 0.226867479624614
    },
    {
        "actual": 0.58,
        "predicted": 0.343649790879713
    },
    {
        "actual": 0.18,
        "predicted": 0.204640203335865
    },
    {
        "actual": 0.5,
        "predicted": 0.463846771168435
    },
    {
        "actual": 0.4,
        "predicted": 0.3040740465997
    },
    {
        "actual": 0.34,
        "predicted": 0.216866582518256
    },
    {
        "actual": 0.05,
        "predicted": 0.095596660280015
    },
    {
        "actual": 0.04,
        "predicted": 0.020740968848224
    },
    {
        "actual": 0.06,
        "predicted": 0.137809844599579
    },
    {
        "actual": 0.04,
        "predicted": 0.029188190396242
    },
    {
        "actual": 0.05,
        "predicted": 0.170601029360615
    },
    {
        "actual": 0.01,
        "predicted": 0.01185478018916
    },
    {
        "actual": 0.31,
        "predicted": 0.339122496160086
    },
    {
        "actual": 0.62,
        "predicted": 0.632062040988998
    },
    {
        "actual": 0.2,
        "predicted": 0.222481362186194
    },
    {
        "actual": 0.6,
        "predicted": 0.552249956900595
    },
    {
        "actual": 0.97,
        "predicted": 0.505998174453241
    },
    {
        "actual": 0.28,
        "predicted": 0.26822557315683
    },
    {
        "actual": 0.13,
        "predicted": 0.097273168993525
    },
    {
        "actual": 0.07,
        "predicted": 0.381089591281626
    },
    {
        "actual": 0.26,
        "predicted": 0.250819870183949
    },
    {
        "actual": 0.07,
        "predicted": 0.093218892029134
    },
    {
        "actual": 0.29,
        "predicted": 0.353920064168514
    },
    {
        "actual": 0.04,
        "predicted": 0.188174012485164
    },
    {
        "actual": 0.85,
        "predicted": 0.49929467051525
    },
    {
        "actual": 0.76,
        "predicted": 0.484675958593018
    },
    {
        "actual": 0.17,
        "predicted": 0.341902547944147
    },
    {
        "actual": 0.65,
        "predicted": 0.435670218475366
    },
    {
        "actual": 0.54,
        "predicted": 0.581579911364973
    },
    {
        "actual": 0.36,
        "predicted": 0.34621774086181
    },
    {
        "actual": 0.13,
        "predicted": 0.029506198466767
    },
    {
        "actual": 0.18,
        "predicted": 0.043377883927068
    },
    {
        "actual": 0.35,
        "predicted": 0.423459738691709
    },
    {
        "actual": 0.06,
        "predicted": 0.106319262291356
    },
    {
        "actual": 0.28,
        "predicted": 0.380435640518696
    },
    {
        "actual": 0.28,
        "predicted": 0.193434946630446
    },
    {
        "actual": 0.08,
        "predicted": 0.128542826867536
    },
    {
        "actual": 0.14,
        "predicted": 0.09569014305158
    },
    {
        "actual": 0.1,
        "predicted": 0.152084869289738
    },
    {
        "actual": 0.06,
        "predicted": 0.13691405967661
    },
    {
        "actual": 0.06,
        "predicted": 0.089364538456581
    },
    {
        "actual": 0.48,
        "predicted": 0.358830782513991
    },
    {
        "actual": 0.09,
        "predicted": 0.195279979341087
    },
    {
        "actual": 0.19,
        "predicted": 0.290704908020658
    },
    {
        "actual": 0.26,
        "predicted": 0.352425610537478
    },
    {
        "actual": 0.02,
        "predicted": 0.04984906698985
    },
    {
        "actual": 0.08,
        "predicted": -0.01049399515523
    },
    {
        "actual": 0.22,
        "predicted": 0.189175694161415
    },
    {
        "actual": 0.2,
        "predicted": 0.141529491285717
    },
    {
        "actual": 0.03,
        "predicted": 0.049396611749083
    },
    {
        "actual": 0.03,
        "predicted": 0.015698524922533
    },
    {
        "actual": 0.02,
        "predicted": 0.011942908858497
    },
    {
        "actual": 0.11,
        "predicted": 0.131940745071306
    },
    {
        "actual": 0.08,
        "predicted": 0.155595535154629
    },
    {
        "actual": 0.24,
        "predicted": 0.138432996787003
    },
    {
        "actual": 0.22,
        "predicted": 0.262340780185408
    },
    {
        "actual": 0.5,
        "predicted": 0.213611643084415
    },
    {
        "actual": 0.26,
        "predicted": 0.357210737434519
    },
    {
        "actual": 0.09,
        "predicted": 0.086018015834687
    },
    {
        "actual": 0.02,
        "predicted": 0.074399260933449
    },
    {
        "actual": 0.55,
        "predicted": 0.126221004565164
    },
    {
        "actual": 0.18,
        "predicted": 0.102881541586827
    },
    {
        "actual": 0.09,
        "predicted": 0.085100767983821
    },
    {
        "actual": 0.09,
        "predicted": 0.072973339773112
    },
    {
        "actual": 0.46,
        "predicted": 0.395781535143872
    },
    {
        "actual": 0.04,
        "predicted": 0.153591838843338
    },
    {
        "actual": 0.07,
        "predicted": 0.014508574420994
    },
    {
        "actual": 1,
        "predicted": 0.619897292318719
    },
    {
        "actual": 0.04,
        "predicted": 0.011227646708203
    },
    {
        "actual": 0.04,
        "predicted": 0.094399675651892
    },
    {
        "actual": 0.13,
        "predicted": 0.059896515207038
    },
    {
        "actual": 0.16,
        "predicted": 0.303151823729702
    },
    {
        "actual": 0.04,
        "predicted": 0.087282447406434
    },
    {
        "actual": 0.12,
        "predicted": 0.024107718783742
    },
    {
        "actual": 0.09,
        "predicted": 0.064610761335473
    },
    {
        "actual": 0.53,
        "predicted": 0.650472665727756
    },
    {
        "actual": 0.14,
        "predicted": 0.150901491813279
    },
    {
        "actual": 0.1,
        "predicted": 0.245497878089484
    },
    {
        "actual": 0.45,
        "predicted": 0.388172546860413
    },
    {
        "actual": 0.03,
        "predicted": 0.046227700245341
    },
    {
        "actual": 0.28,
        "predicted": 0.091271337786362
    },
    {
        "actual": 0.15,
        "predicted": 0.120405144110873
    },
    {
        "actual": 0.39,
        "predicted": 0.219671710869611
    },
    {
        "actual": 0.03,
        "predicted": 0.111513445162959
    },
    {
        "actual": 0.23,
        "predicted": 0.272067006466413
    },
    {
        "actual": 0.1,
        "predicted": 0.219282152627224
    },
    {
        "actual": 0.22,
        "predicted": 0.241328355042015
    },
    {
        "actual": 0.26,
        "predicted": 0.204303388550121
    },
    {
        "actual": 0.03,
        "predicted": 0.020746546690702
    },
    {
        "actual": 0.43,
        "predicted": 0.36121154422636
    },
    {
        "actual": 0.11,
        "predicted": 0.178810675983651
    },
    {
        "actual": 0.1,
        "predicted": 0.06960674707577
    },
    {
        "actual": 0.03,
        "predicted": 0.083605356104234
    },
    {
        "actual": 0.07,
        "predicted": 0.039994487583058
    },
    {
        "actual": 0.16,
        "predicted": 0.190988682280976
    },
    {
        "actual": 0.06,
        "predicted": 0.031663449569619
    },
    {
        "actual": 0.18,
        "predicted": 0.113606670103422
    },
    {
        "actual": 0.06,
        "predicted": 0.097804145097196
    },
    {
        "actual": 0.2,
        "predicted": 0.172191819053055
    },
    {
        "actual": 0.14,
        "predicted": 0.234173574508713
    },
    {
        "actual": 0.15,
        "predicted": 0.150688439731193
    },
    {
        "actual": 0.04,
        "predicted": 0.064281339678331
    },
    {
        "actual": 0.16,
        "predicted": 0.285344310827442
    },
    {
        "actual": 0.64,
        "predicted": 0.721133860401406
    },
    {
        "actual": 0.2,
        "predicted": 0.145171350708837
    },
    {
        "actual": 0.65,
        "predicted": 0.450851352847989
    },
    {
        "actual": 0.17,
        "predicted": 0.210938963317617
    },
    {
        "actual": 0.14,
        "predicted": 0.165158791636125
    },
    {
        "actual": 0.27,
        "predicted": 0.043145181031485
    },
    {
        "actual": 0.12,
        "predicted": 0.196559497530176
    },
    {
        "actual": 0.74,
        "predicted": 0.499238646036445
    },
    {
        "actual": 0.73,
        "predicted": 0.586437311345959
    },
    {
        "actual": 0.24,
        "predicted": 0.25681960346243
    },
    {
        "actual": 1,
        "predicted": 0.808586445877364
    },
    {
        "actual": 0.03,
        "predicted": 0.087742620681069
    },
    {
        "actual": 1,
        "predicted": 0.384838564344726
    },
    {
        "actual": 0.21,
        "predicted": 0.274466922162865
    },
    {
        "actual": 0.25,
        "predicted": 0.509564426138333
    },
    {
        "actual": 0.26,
        "predicted": 0.250271825002577
    },
    {
        "actual": 0.51,
        "predicted": 0.481552943330696
    },
    {
        "actual": 0.01,
        "predicted": 0.011128465554623
    },
    {
        "actual": 0.03,
        "predicted": 0.005462165166371
    },
    {
        "actual": 0.01,
        "predicted": 0.005054254836741
    },
    {
        "actual": 0.16,
        "predicted": 0.230685095777156
    },
    {
        "actual": 0.52,
        "predicted": 0.546564277576438
    },
    {
        "actual": 0.1,
        "predicted": 0.135940176338139
    },
    {
        "actual": 0.24,
        "predicted": 0.208438685583533
    },
    {
        "actual": 0.3,
        "predicted": 0.268049659983948
    },
    {
        "actual": 0.69,
        "predicted": 0.88307602073789
    },
    {
        "actual": 0.09,
        "predicted": 0.014787668908892
    },
    {
        "actual": 0.22,
        "predicted": 0.127003618487656
    },
    {
        "actual": 0.65,
        "predicted": 0.697017122757132
    },
    {
        "actual": 0.17,
        "predicted": 0.122329586940324
    },
    {
        "actual": 0.09,
        "predicted": 0.093706490163666
    },
    {
        "actual": 0.77,
        "predicted": 0.791117055759633
    },
    {
        "actual": 0.33,
        "predicted": 0.48166440205497
    },
    {
        "actual": 0.38,
        "predicted": 0.578144864580587
    },
    {
        "actual": 0.07,
        "predicted": 0.154867377642436
    },
    {
        "actual": 0.19,
        "predicted": 0.197930693123381
    },
    {
        "actual": 0.09,
        "predicted": 0.162350953755737
    },
    {
        "actual": 0.21,
        "predicted": 0.230283761087366
    },
    {
        "actual": 0.08,
        "predicted": 0.126936555434354
    },
    {
        "actual": 0.1,
        "predicted": 0.10490243357137
    },
    {
        "actual": 0.05,
        "predicted": 0.012685827990657
    },
    {
        "actual": 0.23,
        "predicted": 0.29856430222194
    },
    {
        "actual": 0.08,
        "predicted": 0.040736747171111
    },
    {
        "actual": 0.02,
        "predicted": 0.01426285501952
    },
    {
        "actual": 0.08,
        "predicted": 0.030236326938826
    },
    {
        "actual": 0.12,
        "predicted": 0.150758410053264
    },
    {
        "actual": 0.4,
        "predicted": 0.521679323461966
    },
    {
        "actual": 0.45,
        "predicted": 0.268483280404927
    },
    {
        "actual": 0.05,
        "predicted": 0.084028575103804
    },
    {
        "actual": 0.03,
        "predicted": 0.136353928209451
    },
    {
        "actual": 0.36,
        "predicted": 0.407291597964459
    },
    {
        "actual": 0.08,
        "predicted": 0.073859045865586
    },
    {
        "actual": 0.07,
        "predicted": 0.142613705812506
    },
    {
        "actual": 1,
        "predicted": 0.623289253551302
    },
    {
        "actual": 0.04,
        "predicted": 0.05386659885389
    },
    {
        "actual": 0.06,
        "predicted": 0.114201424210705
    },
    {
        "actual": 1,
        "predicted": 0.466224989947823
    },
    {
        "actual": 0.2,
        "predicted": 0.250101702638768
    },
    {
        "actual": 0.14,
        "predicted": 0.207827213232572
    },
    {
        "actual": 0.48,
        "predicted": 0.534184786919234
    },
    {
        "actual": 0.13,
        "predicted": 0.166454372727295
    },
    {
        "actual": 0.67,
        "predicted": 0.72947266669664
    },
    {
        "actual": 0.04,
        "predicted": 0.06074660603018
    },
    {
        "actual": 0.49,
        "predicted": 0.324936723415476
    },
    {
        "actual": 0.05,
        "predicted": 0.165826435188269
    },
    {
        "actual": 0.02,
        "predicted": 0.035125604804408
    },
    {
        "actual": 0.39,
        "predicted": 0.510485306938295
    },
    {
        "actual": 0.29,
        "predicted": 0.450296831799347
    },
    {
        "actual": 0.02,
        "predicted": -0.023420203520002
    },
    {
        "actual": 0.25,
        "predicted": 0.259735793570951
    },
    {
        "actual": 0.23,
        "predicted": 0.298333298219181
    },
    {
        "actual": 0.01,
        "predicted": 0.085138754717152
    },
    {
        "actual": 0.12,
        "predicted": 0.159360788203396
    },
    {
        "actual": 0.1,
        "predicted": 0.281299350364995
    },
    {
        "actual": 0.04,
        "predicted": 0.073210753163395
    },
    {
        "actual": 0.14,
        "predicted": 0.459917066204053
    },
    {
        "actual": 0.2,
        "predicted": 0.323102100521921
    },
    {
        "actual": 0.13,
        "predicted": 0.151080188587391
    },
    {
        "actual": 0.03,
        "predicted": 0.048650776436677
    },
    {
        "actual": 0.11,
        "predicted": 0.12356424065042
    },
    {
        "actual": 1,
        "predicted": 0.567950272936347
    },
    {
        "actual": 0.28,
        "predicted": 0.071917288159866
    },
    {
        "actual": 0.01,
        "predicted": -0.008636038145097
    },
    {
        "actual": 0.24,
        "predicted": 0.248760315583666
    },
    {
        "actual": 0.43,
        "predicted": 0.447406961156218
    },
    {
        "actual": 0.2,
        "predicted": 0.334378156950263
    },
    {
        "actual": 0.08,
        "predicted": 0.029427058638733
    },
    {
        "actual": 0.04,
        "predicted": 0.077251531259902
    },
    {
        "actual": 0.07,
        "predicted": 0.16043693236396
    },
    {
        "actual": 0.05,
        "predicted": 0.39685506011666
    },
    {
        "actual": 0.04,
        "predicted": 0.019218401827279
    },
    {
        "actual": 0.02,
        "predicted": -0.001912354961952
    },
    {
        "actual": 0.4,
        "predicted": 0.17401921555896
    },
    {
        "actual": 0.16,
        "predicted": 0.180063339272733
    },
    {
        "actual": 0.57,
        "predicted": 0.392936645133505
    },
    {
        "actual": 0.2,
        "predicted": 0.289553223655041
    },
    {
        "actual": 1,
        "predicted": 0.703984786575543
    },
    {
        "actual": 0.02,
        "predicted": 0.041337569201611
    },
    {
        "actual": 0.08,
        "predicted": 0.08520401112916
    },
    {
        "actual": 1,
        "predicted": 0.936125765776521
    },
    {
        "actual": 0.06,
        "predicted": 0.056731449635272
    },
    {
        "actual": 0.07,
        "predicted": 0.003847675071497
    },
    {
        "actual": 0.08,
        "predicted": 0.100809682063445
    },
    {
        "actual": 0.05,
        "predicted": 0.023180311010288
    },
    {
        "actual": 0.02,
        "predicted": 0.224385127398706
    },
    {
        "actual": 0.13,
        "predicted": 0.174645129022201
    },
    {
        "actual": 0.45,
        "predicted": 0.429004562609738
    },
    {
        "actual": 0.44,
        "predicted": 0.628937912616886
    },
    {
        "actual": 0.45,
        "predicted": 0.431686401356423
    },
    {
        "actual": 0.39,
        "predicted": 0.293255182044432
    },
    {
        "actual": 0.26,
        "predicted": 0.306324891924521
    },
    {
        "actual": 1,
        "predicted": 0.649901955677351
    },
    {
        "actual": 0.32,
        "predicted": 0.104043784856784
    },
    {
        "actual": 0.3,
        "predicted": 0.322660926356496
    },
    {
        "actual": 0.31,
        "predicted": 0.28804603608395
    },
    {
        "actual": 0.27,
        "predicted": 0.451958558796723
    },
    {
        "actual": 0.11,
        "predicted": 0.033738642064696
    },
    {
        "actual": 0.07,
        "predicted": 0.064935755457009
    },
    {
        "actual": 0.09,
        "predicted": 0.179906060160702
    },
    {
        "actual": 0.26,
        "predicted": 0.367183235505986
    },
    {
        "actual": 0.17,
        "predicted": 0.418767944039077
    },
    {
        "actual": 0.07,
        "predicted": 0.061397444017545
    },
    {
        "actual": 0.31,
        "predicted": 0.297433946108679
    },
    {
        "actual": 0.07,
        "predicted": 0.116951639440624
    },
    {
        "actual": 0.33,
        "predicted": 0.39420257177034
    },
    {
        "actual": 0.15,
        "predicted": 0.226593989551341
    },
    {
        "actual": 0.21,
        "predicted": 0.278163054591788
    },
    {
        "actual": 0.1,
        "predicted": 0.159558746965868
    },
    {
        "actual": 0.51,
        "predicted": 0.432881628179543
    },
    {
        "actual": 0.17,
        "predicted": 0.145156339269399
    },
    {
        "actual": 0.09,
        "predicted": 0.123507801596363
    },
    {
        "actual": 0.03,
        "predicted": 0.033682206564439
    },
    {
        "actual": 0.15,
        "predicted": 0.13734084304593
    },
    {
        "actual": 0.17,
        "predicted": 0.208052688777322
    },
    {
        "actual": 0.14,
        "predicted": 0.190126447471765
    },
    {
        "actual": 0.03,
        "predicted": 0.138648785578352
    },
    {
        "actual": 0.34,
        "predicted": 0.182950733232783
    },
    {
        "actual": 0.05,
        "predicted": -0.000187770474196
    },
    {
        "actual": 0.24,
        "predicted": 0.161582391270397
    },
    {
        "actual": 0.07,
        "predicted": 0.035119291310179
    },
    {
        "actual": 0.33,
        "predicted": 0.26214798849743
    },
    {
        "actual": 0.09,
        "predicted": 0.1817687759448
    },
    {
        "actual": 0.11,
        "predicted": 0.116728489766938
    },
    {
        "actual": 0.1,
        "predicted": 0.126810560120568
    },
    {
        "actual": 0.02,
        "predicted": 0.011737215916958
    },
    {
        "actual": 0.25,
        "predicted": 0.274716151482576
    },
    {
        "actual": 0.37,
        "predicted": 0.368768994727007
    },
    {
        "actual": 0.07,
        "predicted": 0.064855432960921
    },
    {
        "actual": 0.71,
        "predicted": 0.716864565509981
    },
    {
        "actual": 0.18,
        "predicted": 0.193134208666641
    },
    {
        "actual": 0.28,
        "predicted": 0.434287083084282
    },
    {
        "actual": 0.44,
        "predicted": 0.145441381763085
    },
    {
        "actual": 0.09,
        "predicted": 0.120795548029313
    },
    {
        "actual": 0.19,
        "predicted": 0.17513542376787
    },
    {
        "actual": 0.28,
        "predicted": 0.490419099805503
    },
    {
        "actual": 0.03,
        "predicted": 0.028896796564818
    },
    {
        "actual": 0.04,
        "predicted": -0.006592782432337
    },
    {
        "actual": 0.32,
        "predicted": 0.090669521874345
    },
    {
        "actual": 0.19,
        "predicted": 0.405802972140956
    },
    {
        "actual": 0.16,
        "predicted": 0.261981241976848
    },
    {
        "actual": 0.09,
        "predicted": 0.220743228424728
    },
    {
        "actual": 0.05,
        "predicted": 0.158689998977367
    },
    {
        "actual": 0.11,
        "predicted": 0.134945519942881
    },
    {
        "actual": 0.36,
        "predicted": 0.443845568794604
    },
    {
        "actual": 0.09,
        "predicted": 0.026360608606463
    },
    {
        "actual": 0.03,
        "predicted": 0.089195042638505
    },
    {
        "actual": 0.05,
        "predicted": 0.053507196809529
    },
    {
        "actual": 0.05,
        "predicted": 0.038243884649229
    },
    {
        "actual": 0.13,
        "predicted": 0.035215731956818
    },
    {
        "actual": 0.05,
        "predicted": 0.084993873642453
    },
    {
        "actual": 0.12,
        "predicted": 0.182059814590988
    },
    {
        "actual": 0.47,
        "predicted": 0.26658844718784
    },
    {
        "actual": 0.17,
        "predicted": 0.191656125357842
    },
    {
        "actual": 0.17,
        "predicted": 0.116407861655689
    },
    {
        "actual": 1,
        "predicted": 0.686509953492003
    },
    {
        "actual": 0.2,
        "predicted": 0.21684386797931
    },
    {
        "actual": 0.08,
        "predicted": 0.055840444944773
    },
    {
        "actual": 0.09,
        "predicted": 0.20041049487069
    },
    {
        "actual": 0.1,
        "predicted": 0.184182653810555
    },
    {
        "actual": 0.03,
        "predicted": 0.079300851402028
    },
    {
        "actual": 0.71,
        "predicted": 0.551135412758595
    },
    {
        "actual": 0.17,
        "predicted": 0.298635831229443
    },
    {
        "actual": 0.02,
        "predicted": 0.05986363916891
    },
    {
        "actual": 0.2,
        "predicted": 0.330146151033887
    },
    {
        "actual": 0.38,
        "predicted": 0.211856811939021
    },
    {
        "actual": 0.09,
        "predicted": 0.204882276218516
    },
    {
        "actual": 0.06,
        "predicted": 0.168377239006238
    },
    {
        "actual": 0.05,
        "predicted": 0.096021184084997
    },
    {
        "actual": 0.05,
        "predicted": 0.046038693062235
    },
    {
        "actual": 1,
        "predicted": 1.00049394672747
    },
    {
        "actual": 0.21,
        "predicted": 0.224305290408453
    },
    {
        "actual": 0.29,
        "predicted": 0.251395320696522
    },
    {
        "actual": 0.04,
        "predicted": 0.124476099188454
    },
    {
        "actual": 0.12,
        "predicted": 0.238271376229471
    },
    {
        "actual": 0.06,
        "predicted": 0.137277539844387
    },
    {
        "actual": 0.21,
        "predicted": 0.262022477965825
    },
    {
        "actual": 0.06,
        "predicted": 0.119563401610341
    },
    {
        "actual": 0.51,
        "predicted": 0.436280989467979
    },
    {
        "actual": 0.07,
        "predicted": 0.108657182236631
    },
    {
        "actual": 0.21,
        "predicted": 0.250468047341957
    },
    {
        "actual": 0.39,
        "predicted": 0.192100009804422
    },
    {
        "actual": 0.66,
        "predicted": 0.565106228418827
    },
    {
        "actual": 0.03,
        "predicted": 0.081656459371932
    },
    {
        "actual": 0.06,
        "predicted": -0.003121908162107
    },
    {
        "actual": 0.53,
        "predicted": 0.570783952264561
    },
    {
        "actual": 0.08,
        "predicted": 0.121239170501129
    },
    {
        "actual": 0.59,
        "predicted": 0.355044708924342
    },
    {
        "actual": 0.12,
        "predicted": 0.140144295220935
    },
    {
        "actual": 0.29,
        "predicted": 0.354023530200509
    },
    {
        "actual": 1,
        "predicted": 0.772804341074483
    },
    {
        "actual": 0.03,
        "predicted": 0.084670077114348
    },
    {
        "actual": 0.29,
        "predicted": 0.256503346594183
    },
    {
        "actual": 0.38,
        "predicted": 0.320919210865205
    },
    {
        "actual": 0.06,
        "predicted": 0.065241043542659
    },
    {
        "actual": 1,
        "predicted": 0.89776024115633
    },
    {
        "actual": 0.3,
        "predicted": 0.329106626655831
    },
    {
        "actual": 0.16,
        "predicted": 0.151706858134491
    },
    {
        "actual": 0.29,
        "predicted": 0.113518365540542
    },
    {
        "actual": 0.02,
        "predicted": -0.010281651937672
    },
    {
        "actual": 0.19,
        "predicted": 0.418413230431057
    },
    {
        "actual": 0.38,
        "predicted": 0.443060228962501
    },
    {
        "actual": 0.31,
        "predicted": 0.269777237839972
    },
    {
        "actual": 0.07,
        "predicted": 0.145984848281497
    },
    {
        "actual": 0.11,
        "predicted": 0.221960263686982
    },
    {
        "actual": 0.6,
        "predicted": 0.399187020423753
    },
    {
        "actual": 0.54,
        "predicted": 0.281001207855462
    },
    {
        "actual": 0.45,
        "predicted": 0.448776003880671
    },
    {
        "actual": 0.22,
        "predicted": 0.206017345908735
    },
    {
        "actual": 0.02,
        "predicted": 0.020526188881315
    },
    {
        "actual": 0,
        "predicted": -0.026018450089616
    },
    {
        "actual": 0.22,
        "predicted": 0.23573303185693
    },
    {
        "actual": 0.13,
        "predicted": 0.107677199880841
    },
    {
        "actual": 0.06,
        "predicted": 0.035786664990808
    },
    {
        "actual": 0.11,
        "predicted": 0.076212940736451
    },
    {
        "actual": 0.03,
        "predicted": 0.047767504768946
    },
    {
        "actual": 0.69,
        "predicted": 0.524872085849036
    },
    {
        "actual": 0.19,
        "predicted": 0.17215703757149
    },
    {
        "actual": 0.69,
        "predicted": 0.548968179296592
    },
    {
        "actual": 0.41,
        "predicted": 0.423122147147417
    },
    {
        "actual": 0.08,
        "predicted": 0.050502466096904
    },
    {
        "actual": 0.31,
        "predicted": 0.274792435583913
    },
    {
        "actual": 0.08,
        "predicted": 0.0086595882468
    },
    {
        "actual": 0.45,
        "predicted": 0.551945533690105
    },
    {
        "actual": 0.2,
        "predicted": 0.056355737031497
    },
    {
        "actual": 0.19,
        "predicted": 0.149842887680713
    },
    {
        "actual": 0.03,
        "predicted": 0.16341891627807
    },
    {
        "actual": 0.15,
        "predicted": 0.136512047379389
    },
    {
        "actual": 0.54,
        "predicted": 0.334418895972004
    },
    {
        "actual": 0.02,
        "predicted": 0.043909495377973
    },
    {
        "actual": 0.1,
        "predicted": 0.257720283752032
    },
    {
        "actual": 0.31,
        "predicted": 0.112784501013053
    },
    {
        "actual": 0.65,
        "predicted": 0.666196041954761
    },
    {
        "actual": 0.06,
        "predicted": 0.1129161989818
    },
    {
        "actual": 0.02,
        "predicted": -0.005367407965916
    },
    {
        "actual": 0.06,
        "predicted": 0.128688976853963
    },
    {
        "actual": 0.82,
        "predicted": 0.463176579506998
    },
    {
        "actual": 0.02,
        "predicted": 0.089198168077321
    },
    {
        "actual": 0.14,
        "predicted": 0.263865107914076
    },
    {
        "actual": 0.03,
        "predicted": 0.008801166037904
    },
    {
        "actual": 0.4,
        "predicted": 0.23543088180025
    },
    {
        "actual": 0.05,
        "predicted": 0.089159387988871
    },
    {
        "actual": 0.12,
        "predicted": 0.157417662660947
    },
    {
        "actual": 0.61,
        "predicted": 0.408202664530476
    },
    {
        "actual": 1,
        "predicted": 0.735074517481419
    },
    {
        "actual": 0.15,
        "predicted": 0.072743892493673
    },
    {
        "actual": 0.09,
        "predicted": 0.119271839281197
    },
    {
        "actual": 0.76,
        "predicted": 0.449407783215863
    },
    {
        "actual": 0.02,
        "predicted": 0.05155799228212
    },
    {
        "actual": 0.06,
        "predicted": 0.072893688858977
    },
    {
        "actual": 0.03,
        "predicted": 0.028259705705755
    },
    {
        "actual": 0.06,
        "predicted": 0.035842603361102
    },
    {
        "actual": 0.2,
        "predicted": 0.339802191402135
    },
    {
        "actual": 0.25,
        "predicted": 0.404022142812628
    },
    {
        "actual": 0.07,
        "predicted": -0.020821197918069
    },
    {
        "actual": 0.06,
        "predicted": 0.096421591330951
    },
    {
        "actual": 0.19,
        "predicted": 0.431286991593945
    },
    {
        "actual": 0.06,
        "predicted": 0.004383308958661
    },
    {
        "actual": 0.16,
        "predicted": 0.215410933296391
    },
    {
        "actual": 0.19,
        "predicted": 0.301179109610353
    },
    {
        "actual": 0.14,
        "predicted": 0.173024779820174
    },
    {
        "actual": 0.18,
        "predicted": 0.165756682148301
    },
    {
        "actual": 0.11,
        "predicted": 0.16733501309512
    },
    {
        "actual": 0.22,
        "predicted": 0.13360156833241
    },
    {
        "actual": 0.03,
        "predicted": 0.040242876671836
    },
    {
        "actual": 0.33,
        "predicted": 0.285871351863106
    },
    {
        "actual": 0,
        "predicted": 0.171720514832646
    },
    {
        "actual": 0.01,
        "predicted": 0.099526312298437
    },
    {
        "actual": 0.37,
        "predicted": 0.291005624034105
    },
    {
        "actual": 0.15,
        "predicted": 0.260396392748934
    },
    {
        "actual": 0.04,
        "predicted": 0.06141433292262
    },
    {
        "actual": 0.35,
        "predicted": 0.246712281770086
    },
    {
        "actual": 0.1,
        "predicted": 0.141074670744355
    },
    {
        "actual": 0.46,
        "predicted": 0.428633059069513
    },
    {
        "actual": 0.04,
        "predicted": 0.041456119262018
    },
    {
        "actual": 0.18,
        "predicted": 0.22386494051345
    },
    {
        "actual": 0.4,
        "predicted": 0.407344384538854
    },
    {
        "actual": 0.06,
        "predicted": 0.112234164800125
    },
    {
        "actual": 0.01,
        "predicted": 0.04899731783247
    },
    {
        "actual": 0.03,
        "predicted": 0.051466354178248
    },
    {
        "actual": 0.52,
        "predicted": 0.613078793385619
    },
    {
        "actual": 0.03,
        "predicted": -0.016208494725707
    },
    {
        "actual": 0.27,
        "predicted": 0.299677504026456
    },
    {
        "actual": 0.11,
        "predicted": 0.253168866277572
    },
    {
        "actual": 0.03,
        "predicted": 0.003855385741514
    },
    {
        "actual": 0.17,
        "predicted": 0.063793262780314
    },
    {
        "actual": 0.47,
        "predicted": 0.414312827767509
    },
    {
        "actual": 0.22,
        "predicted": 0.167703676087257
    },
    {
        "actual": 0.06,
        "predicted": 0.11313174041117
    },
    {
        "actual": 0.39,
        "predicted": 0.448530232730557
    },
    {
        "actual": 0.12,
        "predicted": 0.13774874635048
    },
    {
        "actual": 0.02,
        "predicted": 0.036352363074369
    },
    {
        "actual": 0.26,
        "predicted": 0.114570369076337
    },
    {
        "actual": 0.55,
        "predicted": 0.400141391650586
    },
    {
        "actual": 0.21,
        "predicted": 0.271151492065565
    },
    {
        "actual": 0.12,
        "predicted": 0.221892570672019
    },
    {
        "actual": 0.1,
        "predicted": 0.134647864221347
    },
    {
        "actual": 0.41,
        "predicted": 0.538346750907168
    },
    {
        "actual": 0.84,
        "predicted": 0.926865779882657
    },
    {
        "actual": 0.18,
        "predicted": 0.307105062075491
    },
    {
        "actual": 0.04,
        "predicted": 0.094733135644323
    },
    {
        "actual": 0.34,
        "predicted": 0.361516320662014
    },
    {
        "actual": 0.07,
        "predicted": 0.044191765209424
    },
    {
        "actual": 0.05,
        "predicted": 0.17001056426132
    },
    {
        "actual": 0.02,
        "predicted": 0.019957858972149
    },
    {
        "actual": 0.31,
        "predicted": 0.474024522274091
    },
    {
        "actual": 0.97,
        "predicted": 0.771754418545183
    },
    {
        "actual": 0.33,
        "predicted": 0.350741261803771
    },
    {
        "actual": 0.12,
        "predicted": 0.166540756850526
    },
    {
        "actual": 1,
        "predicted": 0.651710360238475
    },
    {
        "actual": 0.96,
        "predicted": 0.527906488597037
    },
    {
        "actual": 0.25,
        "predicted": 0.23900270541877
    },
    {
        "actual": 0.03,
        "predicted": 0.022416253188875
    },
    {
        "actual": 0.12,
        "predicted": 0.051182042041241
    },
    {
        "actual": 0.14,
        "predicted": 0.233027223142876
    },
    {
        "actual": 0.52,
        "predicted": 0.45608020419088
    },
    {
        "actual": 0.05,
        "predicted": 0.155714112506758
    },
    {
        "actual": 0.09,
        "predicted": 0.072482828490967
    },
    {
        "actual": 0.14,
        "predicted": 0.220423414048329
    },
    {
        "actual": 0.36,
        "predicted": 0.350932388408942
    },
    {
        "actual": 0.04,
        "predicted": 0.107781467102833
    },
    {
        "actual": 0.59,
        "predicted": 0.557840548067932
    },
    {
        "actual": 0.49,
        "predicted": 0.166751694182941
    },
    {
        "actual": 0.53,
        "predicted": 0.365487155609057
    },
    {
        "actual": 0.06,
        "predicted": 0.153272800215778
    },
    {
        "actual": 0.19,
        "predicted": 0.138196281516162
    },
    {
        "actual": 0.28,
        "predicted": 0.309452982091459
    },
    {
        "actual": 0.14,
        "predicted": 0.228227082943258
    },
    {
        "actual": 0.9,
        "predicted": 0.500323916367921
    },
    {
        "actual": 0.05,
        "predicted": 0.198724766609117
    },
    {
        "actual": 0.15,
        "predicted": 0.183144994684266
    },
    {
        "actual": 1,
        "predicted": 0.654402464807558
    },
    {
        "actual": 0.21,
        "predicted": 0.3529249608364
    },
    {
        "actual": 0.02,
        "predicted": -0.00406062752912
    },
    {
        "actual": 0.07,
        "predicted": 0.05019925708361
    },
    {
        "actual": 0.21,
        "predicted": 0.452746777610916
    },
    {
        "actual": 0.21,
        "predicted": 0.303134909745144
    },
    {
        "actual": 0.4,
        "predicted": 0.334651144687321
    },
    {
        "actual": 0.04,
        "predicted": -0.024604696763845
    },
    {
        "actual": 0.31,
        "predicted": 0.380775205149449
    },
    {
        "actual": 0.2,
        "predicted": 0.100781031516691
    },
    {
        "actual": 0.05,
        "predicted": 0.158845478746163
    },
    {
        "actual": 0.54,
        "predicted": 0.482271704850769
    },
    {
        "actual": 0.54,
        "predicted": 0.435467502716625
    },
    {
        "actual": 0.11,
        "predicted": 0.167576654659592
    },
    {
        "actual": 0.13,
        "predicted": 0.135916106036058
    },
    {
        "actual": 0.42,
        "predicted": 0.475711534346681
    },
    {
        "actual": 0.06,
        "predicted": 0.151602178575928
    },
    {
        "actual": 0.7,
        "predicted": 0.438964515197329
    },
    {
        "actual": 0.45,
        "predicted": 0.549681681720304
    },
    {
        "actual": 0.15,
        "predicted": 0.040374393927556
    },
    {
        "actual": 0.15,
        "predicted": 0.118766597569587
    },
    {
        "actual": 0.12,
        "predicted": 0.150166403352716
    },
    {
        "actual": 0.11,
        "predicted": 0.07994708106032
    },
    {
        "actual": 0.03,
        "predicted": 0.020551529837129
    },
    {
        "actual": 0.09,
        "predicted": 0.206507773568313
    },
    {
        "actual": 0.3,
        "predicted": 0.306146196219657
    },
    {
        "actual": 0.39,
        "predicted": 0.296923161287803
    },
    {
        "actual": 0.05,
        "predicted": 0.052470004275314
    },
    {
        "actual": 0.03,
        "predicted": 0.091247105142061
    },
    {
        "actual": 0.22,
        "predicted": 0.243417974664406
    },
    {
        "actual": 0.33,
        "predicted": 0.235501499976286
    },
    {
        "actual": 0.83,
        "predicted": 0.357014495881508
    },
    {
        "actual": 0.11,
        "predicted": 0.268291116594416
    },
    {
        "actual": 0.07,
        "predicted": 0.092452273686082
    },
    {
        "actual": 0.28,
        "predicted": 0.3325688152366
    },
    {
        "actual": 0.02,
        "predicted": 0.025122805344558
    },
    {
        "actual": 0.41,
        "predicted": 0.299017258942715
    },
    {
        "actual": 0.12,
        "predicted": 0.305968077822703
    },
    {
        "actual": 0.34,
        "predicted": 0.327001365048676
    },
    {
        "actual": 0.07,
        "predicted": 0.087259884086463
    },
    {
        "actual": 0.05,
        "predicted": 0.055692576968429
    },
    {
        "actual": 0.12,
        "predicted": 0.154358277456435
    },
    {
        "actual": 0.04,
        "predicted": 0.042392877825069
    },
    {
        "actual": 0.3,
        "predicted": 0.296930083950023
    },
    {
        "actual": 0.06,
        "predicted": 0.13364011685766
    },
    {
        "actual": 0.09,
        "predicted": 0.161232773420298
    },
    {
        "actual": 0.42,
        "predicted": 0.56569700577071
    },
    {
        "actual": 0.02,
        "predicted": 0.111533445865204
    },
    {
        "actual": 0.1,
        "predicted": 0.261075915986298
    },
    {
        "actual": 0.07,
        "predicted": 0.077563422475814
    },
    {
        "actual": 0.11,
        "predicted": 0.126574825005613
    },
    {
        "actual": 0.03,
        "predicted": 0.144911955324257
    },
    {
        "actual": 0.06,
        "predicted": 0.05215841037154
    },
    {
        "actual": 0.03,
        "predicted": 0.132600107805127
    },
    {
        "actual": 0.11,
        "predicted": 0.041780340918054
    },
    {
        "actual": 0.52,
        "predicted": 0.422795579924576
    },
    {
        "actual": 0.25,
        "predicted": 0.384274469844009
    },
    {
        "actual": 0.11,
        "predicted": 0.123384487122505
    },
    {
        "actual": 0.82,
        "predicted": 0.624758656906289
    },
    {
        "actual": 0.14,
        "predicted": 0.421319940569456
    },
    {
        "actual": 0.08,
        "predicted": 0.104206857213041
    },
    {
        "actual": 0.02,
        "predicted": 0.031704863420521
    },
    {
        "actual": 0.27,
        "predicted": 0.15113695314277
    },
    {
        "actual": 0.15,
        "predicted": 0.402522394664409
    },
    {
        "actual": 0.16,
        "predicted": 0.264709124356724
    },
    {
        "actual": 0.47,
        "predicted": 0.276393652322699
    },
    {
        "actual": 0.12,
        "predicted": 0.283807289783951
    },
    {
        "actual": 0.26,
        "predicted": 0.250107110023645
    },
    {
        "actual": 0.02,
        "predicted": 0.015275975095822
    },
    {
        "actual": 1,
        "predicted": 0.938946074076032
    },
    {
        "actual": 0.06,
        "predicted": 0.12887002491918
    },
    {
        "actual": 0.31,
        "predicted": 0.225992341459237
    },
    {
        "actual": 0.19,
        "predicted": 0.255101105414853
    },
    {
        "actual": 0.06,
        "predicted": 0.065332538958699
    },
    {
        "actual": 0.14,
        "predicted": 0.33699342286545
    },
    {
        "actual": 0.35,
        "predicted": 0.506903035453866
    },
    {
        "actual": 0.02,
        "predicted": 0.052187969740287
    },
    {
        "actual": 0.36,
        "predicted": 0.314709418698517
    },
    {
        "actual": 0.39,
        "predicted": 0.289137554608913
    },
    {
        "actual": 0.12,
        "predicted": 0.059808814046349
    },
    {
        "actual": 0.13,
        "predicted": 0.212423305735852
    },
    {
        "actual": 0.57,
        "predicted": 0.415015774848335
    },
    {
        "actual": 0.07,
        "predicted": 0.122962247218304
    },
    {
        "actual": 0.59,
        "predicted": 0.666114026492987
    },
    {
        "actual": 0.31,
        "predicted": 0.563661794020212
    },
    {
        "actual": 0.34,
        "predicted": 0.534214405656806
    },
    {
        "actual": 0.02,
        "predicted": 0.027041457477856
    },
    {
        "actual": 0.47,
        "predicted": 0.164256850040812
    },
    {
        "actual": 0.16,
        "predicted": 0.235028152491392
    },
    {
        "actual": 0.15,
        "predicted": 0.168808844262178
    },
    {
        "actual": 0.05,
        "predicted": 0.052283459995847
    },
    {
        "actual": 0.15,
        "predicted": 0.218967760058996
    },
    {
        "actual": 0.04,
        "predicted": 0.029373526189026
    },
    {
        "actual": 0.12,
        "predicted": 0.302026521099302
    },
    {
        "actual": 0.39,
        "predicted": 0.413703290782758
    },
    {
        "actual": 0.18,
        "predicted": 0.101104820722177
    },
    {
        "actual": 0.1,
        "predicted": -0.018760605572926
    },
    {
        "actual": 0.86,
        "predicted": 0.614152595121639
    },
    {
        "actual": 0.29,
        "predicted": 0.411909763672675
    },
    {
        "actual": 0.07,
        "predicted": 0.110516974233265
    },
    {
        "actual": 0.06,
        "predicted": 0.070046811328789
    },
    {
        "actual": 0.2,
        "predicted": 0.390003485382605
    },
    {
        "actual": 0.6,
        "predicted": 0.431332277161033
    },
    {
        "actual": 0.14,
        "predicted": 0.18763004932356
    },
    {
        "actual": 0.12,
        "predicted": 0.16091789507219
    },
    {
        "actual": 0.04,
        "predicted": -0.008896317781119
    },
    {
        "actual": 0.12,
        "predicted": 0.152699788993647
    },
    {
        "actual": 0.36,
        "predicted": 0.479974817462066
    },
    {
        "actual": 0.1,
        "predicted": 0.127713976167403
    },
    {
        "actual": 0.27,
        "predicted": 0.298758894055487
    },
    {
        "actual": 0.02,
        "predicted": -0.02962830061599
    },
    {
        "actual": 0.01,
        "predicted": 0.089402899115718
    },
    {
        "actual": 0.04,
        "predicted": 0.057094852240233
    },
    {
        "actual": 0.03,
        "predicted": 0.019410605133045
    },
    {
        "actual": 0.11,
        "predicted": 0.177099142692058
    },
    {
        "actual": 0.26,
        "predicted": 0.242506827157187
    },
    {
        "actual": 0.15,
        "predicted": 0.06906243626223
    },
    {
        "actual": 0.08,
        "predicted": 0.169549401207551
    },
    {
        "actual": 0.47,
        "predicted": 0.441089460998471
    },
    {
        "actual": 0.1,
        "predicted": 0.090474908166484
    },
    {
        "actual": 0.07,
        "predicted": 0.158129379873953
    },
    {
        "actual": 0.15,
        "predicted": 0.128034433840681
    },
    {
        "actual": 0.21,
        "predicted": 0.008511285799776
    },
    {
        "actual": 0.13,
        "predicted": 0.182312327561445
    },
    {
        "actual": 0.12,
        "predicted": 0.057755436019902
    },
    {
        "actual": 0.59,
        "predicted": 0.318907455126182
    },
    {
        "actual": 0.7,
        "predicted": 0.318295916483794
    },
    {
        "actual": 0.03,
        "predicted": 0.104372528974572
    },
    {
        "actual": 0.06,
        "predicted": 0.095094851999293
    },
    {
        "actual": 0.1,
        "predicted": 0.089568306262053
    },
    {
        "actual": 0.08,
        "predicted": 0.130272258665705
    },
    {
        "actual": 0.11,
        "predicted": 0.102658597871575
    },
    {
        "actual": 0.15,
        "predicted": 0.289015662623188
    },
    {
        "actual": 0.51,
        "predicted": 0.426816443135463
    },
    {
        "actual": 0.02,
        "predicted": -0.005753400777927
    },
    {
        "actual": 0.06,
        "predicted": 0.067115230178031
    },
    {
        "actual": 0.51,
        "predicted": 0.28601042784014
    },
    {
        "actual": 0.58,
        "predicted": 0.500241943378854
    },
    {
        "actual": 0.05,
        "predicted": 0.0119195991767
    },
    {
        "actual": 0.05,
        "predicted": 0.029329605076573
    },
    {
        "actual": 0.21,
        "predicted": 0.161654799513068
    },
    {
        "actual": 0.65,
        "predicted": 0.525557555024589
    },
    {
        "actual": 0.1,
        "predicted": 0.187197738730598
    },
    {
        "actual": 0.23,
        "predicted": 0.267407101777694
    },
    {
        "actual": 0.05,
        "predicted": 0.094885791511003
    },
    {
        "actual": 0.13,
        "predicted": 0.257137720409603
    },
    {
        "actual": 0.48,
        "predicted": 0.681958586252079
    },
    {
        "actual": 0.06,
        "predicted": 0.143894414625087
    },
    {
        "actual": 0.14,
        "predicted": 0.226979915503142
    },
    {
        "actual": 0.54,
        "predicted": 0.339764995496526
    },
    {
        "actual": 0.21,
        "predicted": 0.301314780947751
    },
    {
        "actual": 0.25,
        "predicted": 0.248994537766545
    },
    {
        "actual": 0.09,
        "predicted": 0.082632481967613
    },
    {
        "actual": 0.04,
        "predicted": 0.00215274393566
    },
    {
        "actual": 0.12,
        "predicted": 0.307579002463238
    },
    {
        "actual": 0.44,
        "predicted": 0.557663355649112
    },
    {
        "actual": 0.6,
        "predicted": 0.449964966837594
    },
    {
        "actual": 0.34,
        "predicted": 0.184283349048002
    },
    {
        "actual": 0.13,
        "predicted": 0.323600270519428
    },
    {
        "actual": 0.15,
        "predicted": 0.093365266067226
    },
    {
        "actual": 0.11,
        "predicted": 0.152197642174937
    },
    {
        "actual": 0.32,
        "predicted": 0.468757382170352
    },
    {
        "actual": 0.38,
        "predicted": 0.360030343213822
    },
    {
        "actual": 0.12,
        "predicted": 0.017963204453059
    },
    {
        "actual": 0.37,
        "predicted": 0.245469817743852
    },
    {
        "actual": 0.08,
        "predicted": 0.054709861429291
    },
    {
        "actual": 0.04,
        "predicted": 0.086884556199946
    },
    {
        "actual": 0,
        "predicted": 0.010589326055227
    },
    {
        "actual": 0.02,
        "predicted": 0.006440373701142
    },
    {
        "actual": 0.03,
        "predicted": 0.066528700775952
    },
    {
        "actual": 0.36,
        "predicted": 0.368332168533178
    },
    {
        "actual": 0.25,
        "predicted": 0.189329260274815
    },
    {
        "actual": 0.33,
        "predicted": 0.416004039815596
    },
    {
        "actual": 0.04,
        "predicted": 0.016957829869541
    },
    {
        "actual": 0.48,
        "predicted": 0.368745366565132
    },
    {
        "actual": 0.13,
        "predicted": 0.359098705157309
    },
    {
        "actual": 0.01,
        "predicted": 0.122458149724664
    },
    {
        "actual": 0.29,
        "predicted": 0.262766643976735
    },
    {
        "actual": 0.02,
        "predicted": 0.124115395935384
    },
    {
        "actual": 0.03,
        "predicted": 0.019545384491321
    },
    {
        "actual": 0.21,
        "predicted": 0.302430184776031
    },
    {
        "actual": 0.12,
        "predicted": 0.209289045083234
    },
    {
        "actual": 0.41,
        "predicted": 0.444658926064462
    },
    {
        "actual": 0.06,
        "predicted": 0.091792855256952
    },
    {
        "actual": 0.57,
        "predicted": 0.373674145830391
    },
    {
        "actual": 0.37,
        "predicted": 0.242564869382898
    },
    {
        "actual": 0.67,
        "predicted": 0.849208693971013
    },
    {
        "actual": 0.11,
        "predicted": 0.27294700791069
    },
    {
        "actual": 0.03,
        "predicted": 0.127953697719801
    },
    {
        "actual": 0.1,
        "predicted": 0.112642958017434
    },
    {
        "actual": 0.03,
        "predicted": 0.008224120087234
    },
    {
        "actual": 0.81,
        "predicted": 0.751578660734206
    },
    {
        "actual": 0.51,
        "predicted": 0.281946730182567
    },
    {
        "actual": 0.09,
        "predicted": 0.19235034856977
    },
    {
        "actual": 0.01,
        "predicted": 0.024820775562247
    },
    {
        "actual": 0.03,
        "predicted": 0.055796657039421
    },
    {
        "actual": 0.2,
        "predicted": 0.261041830642969
    },
    {
        "actual": 0.3,
        "predicted": 0.575243940914198
    },
    {
        "actual": 0.03,
        "predicted": 0.034220577064857
    },
    {
        "actual": 0.23,
        "predicted": 0.474421262976341
    },
    {
        "actual": 0.12,
        "predicted": 0.190526421491191
    },
    {
        "actual": 0.11,
        "predicted": 0.123849112329968
    },
    {
        "actual": 0.12,
        "predicted": 0.253026352451168
    },
    {
        "actual": 0.06,
        "predicted": 0.117450160825064
    },
    {
        "actual": 0.12,
        "predicted": 0.190829730773606
    },
    {
        "actual": 0.04,
        "predicted": 0.046410589356386
    },
    {
        "actual": 0.25,
        "predicted": 0.217539243109963
    },
    {
        "actual": 0.76,
        "predicted": 0.417918516111372
    },
    {
        "actual": 0.15,
        "predicted": 0.115332691897462
    },
    {
        "actual": 0.14,
        "predicted": 0.295150517799314
    },
    {
        "actual": 0.23,
        "predicted": 0.220062397922283
    },
    {
        "actual": 0.55,
        "predicted": 0.420580477519823
    },
    {
        "actual": 0.37,
        "predicted": 0.219538930161997
    },
    {
        "actual": 0.61,
        "predicted": 0.546790457089852
    },
    {
        "actual": 0.37,
        "predicted": 0.534909972065015
    },
    {
        "actual": 0.14,
        "predicted": 0.294607897177854
    },
    {
        "actual": 0.32,
        "predicted": 0.478769501151095
    },
    {
        "actual": 0.35,
        "predicted": 0.567584750596806
    },
    {
        "actual": 0.21,
        "predicted": 0.194194968782483
    },
    {
        "actual": 0.37,
        "predicted": 0.394562528708585
    },
    {
        "actual": 0.05,
        "predicted": 0.01709735843802
    },
    {
        "actual": 0.03,
        "predicted": 0.064483203538043
    },
    {
        "actual": 0.14,
        "predicted": 0.264604828913508
    },
    {
        "actual": 0.34,
        "predicted": 0.18777277227688
    },
    {
        "actual": 0.03,
        "predicted": -0.001352019759908
    },
    {
        "actual": 0.03,
        "predicted": -0.006573473536621
    },
    {
        "actual": 0.03,
        "predicted": 0.080064206520407
    },
    {
        "actual": 0.04,
        "predicted": 0.047782804115264
    },
    {
        "actual": 0.29,
        "predicted": 0.406558894851468
    },
    {
        "actual": 0.93,
        "predicted": 0.63044479096517
    },
    {
        "actual": 0.05,
        "predicted": 0.124273020054722
    },
    {
        "actual": 0.26,
        "predicted": 0.201086306093492
    },
    {
        "actual": 0.28,
        "predicted": 0.230779760744451
    },
    {
        "actual": 0.22,
        "predicted": 0.211727158949023
    },
    {
        "actual": 0.12,
        "predicted": 0.1251711280411
    },
    {
        "actual": 0.13,
        "predicted": 0.088615035551526
    },
    {
        "actual": 0.01,
        "predicted": 0.00266042831794
    },
    {
        "actual": 0.49,
        "predicted": 0.292008953328217
    },
    {
        "actual": 0.18,
        "predicted": 0.199738234148547
    },
    {
        "actual": 0.25,
        "predicted": 0.362376051380457
    },
    {
        "actual": 0.05,
        "predicted": 0.206363632863
    },
    {
        "actual": 0.53,
        "predicted": 0.717328472549554
    },
    {
        "actual": 0.32,
        "predicted": 0.230996621476019
    },
    {
        "actual": 0.36,
        "predicted": 0.43064652641228
    },
    {
        "actual": 0.34,
        "predicted": 0.391714295930835
    },
    {
        "actual": 0.18,
        "predicted": 0.359591333552127
    },
    {
        "actual": 0.21,
        "predicted": 0.361542900561712
    },
    {
        "actual": 0.22,
        "predicted": 0.312694815503048
    },
    {
        "actual": 0.35,
        "predicted": 0.614606216167088
    },
    {
        "actual": 0.75,
        "predicted": 0.512780297461125
    },
    {
        "actual": 0.19,
        "predicted": 0.123590382179835
    },
    {
        "actual": 0.05,
        "predicted": 0.108231309720606
    },
    {
        "actual": 0.2,
        "predicted": 0.268581222954258
    },
    {
        "actual": 0.08,
        "predicted": 0.038695068198786
    },
    {
        "actual": 0.03,
        "predicted": 0.132301908448145
    },
    {
        "actual": 0.03,
        "predicted": 0.136699519224616
    },
    {
        "actual": 0.19,
        "predicted": 0.140450141424544
    },
    {
        "actual": 0.03,
        "predicted": 0.180508892846043
    },
    {
        "actual": 0.11,
        "predicted": 0.224983510491694
    },
    {
        "actual": 0.78,
        "predicted": 0.337552207992884
    },
    {
        "actual": 0.32,
        "predicted": 0.113557905466718
    },
    {
        "actual": 0.37,
        "predicted": 0.191017766091865
    },
    {
        "actual": 0.33,
        "predicted": 0.182108608741195
    },
    {
        "actual": 0.19,
        "predicted": 0.114883323811611
    },
    {
        "actual": 0.11,
        "predicted": 0.089556160810696
    },
    {
        "actual": 0.29,
        "predicted": 0.213238010618424
    },
    {
        "actual": 0.08,
        "predicted": 0.054278586948103
    },
    {
        "actual": 0.1,
        "predicted": 0.12194393692779
    },
    {
        "actual": 1,
        "predicted": 0.742750144537063
    },
    {
        "actual": 0.24,
        "predicted": 0.350089717993675
    },
    {
        "actual": 0.04,
        "predicted": 0.117577324801818
    },
    {
        "actual": 0.27,
        "predicted": 0.328535623470831
    },
    {
        "actual": 0.5,
        "predicted": 0.373485781223968
    },
    {
        "actual": 0.06,
        "predicted": 0.150243797662131
    },
    {
        "actual": 0.53,
        "predicted": 0.467469544177695
    },
    {
        "actual": 0.53,
        "predicted": 0.232719658657098
    },
    {
        "actual": 0.07,
        "predicted": 0.105251834343004
    },
    {
        "actual": 0.11,
        "predicted": 0.048213909340766
    },
    {
        "actual": 0.31,
        "predicted": 0.386001155727956
    },
    {
        "actual": 0.34,
        "predicted": 0.28616393711403
    },
    {
        "actual": 0.18,
        "predicted": 0.332148819263922
    },
    {
        "actual": 0.14,
        "predicted": 0.215983030166322
    },
    {
        "actual": 0.14,
        "predicted": 0.125347759549194
    },
    {
        "actual": 0.03,
        "predicted": 0.045342588952467
    },
    {
        "actual": 0.14,
        "predicted": 0.103491719755679
    },
    {
        "actual": 0.45,
        "predicted": 0.555993842453506
    },
    {
        "actual": 0.12,
        "predicted": 0.028839577256209
    },
    {
        "actual": 0.66,
        "predicted": 0.366289006097171
    },
    {
        "actual": 0.07,
        "predicted": 0.078359718914412
    },
    {
        "actual": 0.26,
        "predicted": 0.29532050057682
    },
    {
        "actual": 0.07,
        "predicted": 0.381336619215237
    },
    {
        "actual": 0.06,
        "predicted": 0.104885817796499
    },
    {
        "actual": 0.1,
        "predicted": 0.254924524194469
    },
    {
        "actual": 0.04,
        "predicted": 0.102068382009354
    },
    {
        "actual": 0.11,
        "predicted": 0.179287622344709
    },
    {
        "actual": 0.29,
        "predicted": 0.382682977815519
    },
    {
        "actual": 0.13,
        "predicted": 0.30458106960049
    },
    {
        "actual": 0.11,
        "predicted": 0.115667699396959
    },
    {
        "actual": 0.02,
        "predicted": 0.000143179509268
    },
    {
        "actual": 0.24,
        "predicted": 0.292980743183448
    },
    {
        "actual": 0.87,
        "predicted": 0.611090749692006
    },
    {
        "actual": 0.14,
        "predicted": 0.066144016269471
    },
    {
        "actual": 0.46,
        "predicted": 0.305546815342293
    },
    {
        "actual": 0.25,
        "predicted": 0.266287306178763
    },
    {
        "actual": 0.08,
        "predicted": 0.067180569335462
    },
    {
        "actual": 0.04,
        "predicted": 0.039358205819531
    },
    {
        "actual": 0.54,
        "predicted": 0.604070976671567
    },
    {
        "actual": 0.09,
        "predicted": 0.218964403262496
    },
    {
        "actual": 0.2,
        "predicted": 0.227439810022332
    },
    {
        "actual": 0.02,
        "predicted": 0.194411232931116
    },
    {
        "actual": 0.04,
        "predicted": 0.154201410814722
    },
    {
        "actual": 0.1,
        "predicted": 0.083275723632108
    },
    {
        "actual": 0.69,
        "predicted": 0.456894613377785
    },
    {
        "actual": 0.13,
        "predicted": 0.334928876859422
    },
    {
        "actual": 0.06,
        "predicted": 0.041922660877275
    },
    {
        "actual": 0.91,
        "predicted": 0.438771002471022
    },
    {
        "actual": 0.04,
        "predicted": 0.025550480878413
    },
    {
        "actual": 0.81,
        "predicted": 0.560029614092596
    },
    {
        "actual": 0.15,
        "predicted": 0.045994740495545
    },
    {
        "actual": 0.07,
        "predicted": 0.036540645626008
    },
    {
        "actual": 0.06,
        "predicted": 0.061903432810246
    },
    {
        "actual": 0.02,
        "predicted": 0.043680881551832
    },
    {
        "actual": 0.31,
        "predicted": 0.320163914827587
    },
    {
        "actual": 0.03,
        "predicted": 0.007053330206391
    },
    {
        "actual": 0.27,
        "predicted": 0.456786469649596
    },
    {
        "actual": 0.11,
        "predicted": 0.208584515900819
    },
    {
        "actual": 0.09,
        "predicted": 0.124678087970559
    },
    {
        "actual": 0.01,
        "predicted": -0.014959174709529
    },
    {
        "actual": 0.5,
        "predicted": 0.336001083795054
    },
    {
        "actual": 0.32,
        "predicted": 0.319661131911004
    },
    {
        "actual": 0.43,
        "predicted": 0.566882928954425
    },
    {
        "actual": 0.3,
        "predicted": 0.374111253407208
    },
    {
        "actual": 0.02,
        "predicted": 0.037317706484653
    },
    {
        "actual": 0.38,
        "predicted": 0.285629877547848
    },
    {
        "actual": 0.01,
        "predicted": 0.127046401912881
    },
    {
        "actual": 0.02,
        "predicted": 0.110590210170193
    },
    {
        "actual": 0.04,
        "predicted": 0.075553639508624
    },
    {
        "actual": 0.3,
        "predicted": 0.36031311664428
    },
    {
        "actual": 0.8,
        "predicted": 0.65786806786964
    },
    {
        "actual": 0.03,
        "predicted": 0.071910907858934
    },
    {
        "actual": 0.11,
        "predicted": 0.011924173766285
    },
    {
        "actual": 0.9,
        "predicted": 0.422172478896513
    },
    {
        "actual": 0.09,
        "predicted": 0.267423483328304
    },
    {
        "actual": 0.17,
        "predicted": 0.290569248472862
    },
    {
        "actual": 0.07,
        "predicted": 0.088576158668106
    },
    {
        "actual": 0.79,
        "predicted": 0.650105393175461
    },
    {
        "actual": 0.28,
        "predicted": 0.439157727841091
    },
    {
        "actual": 0.02,
        "predicted": 0.004930130746135
    },
    {
        "actual": 0.03,
        "predicted": 0.153873154495734
    },
    {
        "actual": 0.15,
        "predicted": 0.24037656755049
    },
    {
        "actual": 0.07,
        "predicted": 0.228973797880829
    },
    {
        "actual": 0.08,
        "predicted": 0.083651709289829
    },
    {
        "actual": 0.33,
        "predicted": 0.351635933236472
    },
    {
        "actual": 0.05,
        "predicted": 0.094749286927727
    },
    {
        "actual": 0.25,
        "predicted": 0.327705216454947
    },
    {
        "actual": 0.09,
        "predicted": 0.170796419175489
    },
    {
        "actual": 0.23,
        "predicted": 0.225061699233718
    },
    {
        "actual": 0.06,
        "predicted": -0.00320098586904
    },
    {
        "actual": 0.07,
        "predicted": 0.277115377035357
    },
    {
        "actual": 0.08,
        "predicted": 0.198810425381478
    },
    {
        "actual": 0.42,
        "predicted": 0.335393444547638
    },
    {
        "actual": 0,
        "predicted": -0.010338952527506
    },
    {
        "actual": 0.05,
        "predicted": 0.079450656967998
    },
    {
        "actual": 0.05,
        "predicted": 0.100277410664892
    },
    {
        "actual": 0.03,
        "predicted": 0.094203106487007
    },
    {
        "actual": 0.06,
        "predicted": 0.091477359233566
    },
    {
        "actual": 0.59,
        "predicted": 0.563650719409744
    },
    {
        "actual": 0.33,
        "predicted": 0.615253142747972
    },
    {
        "actual": 0.75,
        "predicted": 0.239465174860832
    },
    {
        "actual": 0.43,
        "predicted": 0.242013717304163
    },
    {
        "actual": 0.02,
        "predicted": 0.299501929194306
    },
    {
        "actual": 0.09,
        "predicted": 0.122828026759691
    },
    {
        "actual": 0.03,
        "predicted": -0.013029179631872
    },
    {
        "actual": 0.07,
        "predicted": 0.028583170731817
    },
    {
        "actual": 0.25,
        "predicted": 0.464726862202569
    },
    {
        "actual": 0.48,
        "predicted": 0.562847557329242
    },
    {
        "actual": 0.22,
        "predicted": 0.207154949881324
    },
    {
        "actual": 0.04,
        "predicted": 0.020842804355731
    },
    {
        "actual": 0.16,
        "predicted": 0.103287460731734
    },
    {
        "actual": 0.11,
        "predicted": 0.172429277486603
    },
    {
        "actual": 0.18,
        "predicted": 0.019411066605259
    },
    {
        "actual": 0.28,
        "predicted": 0.380975967648744
    },
    {
        "actual": 0.57,
        "predicted": 0.507850398348948
    },
    {
        "actual": 0.39,
        "predicted": 0.557027262140055
    },
    {
        "actual": 0.01,
        "predicted": 0.07429398246479
    },
    {
        "actual": 0.14,
        "predicted": 0.171261241717857
    },
    {
        "actual": 0.12,
        "predicted": 0.109501034074012
    },
    {
        "actual": 0.06,
        "predicted": 0.056072745732608
    },
    {
        "actual": 0.37,
        "predicted": 0.189376024785512
    },
    {
        "actual": 1,
        "predicted": 0.670567556693112
    },
    {
        "actual": 0.09,
        "predicted": 0.191664596260319
    },
    {
        "actual": 0.65,
        "predicted": 0.318263379886291
    },
    {
        "actual": 0.02,
        "predicted": 0.004774252408477
    },
    {
        "actual": 0.08,
        "predicted": 0.069680684327873
    },
    {
        "actual": 0.34,
        "predicted": 0.224801986048394
    },
    {
        "actual": 0.39,
        "predicted": 0.387957188988735
    },
    {
        "actual": 0.29,
        "predicted": 0.302167061842545
    },
    {
        "actual": 0.2,
        "predicted": 0.384350934868547
    },
    {
        "actual": 0.13,
        "predicted": 0.194416596521967
    },
    {
        "actual": 0.02,
        "predicted": 0.04060819732734
    },
    {
        "actual": 0.32,
        "predicted": 0.294335251803902
    },
    {
        "actual": 0.13,
        "predicted": 0.066833742362108
    },
    {
        "actual": 0.04,
        "predicted": 0.114939862168804
    },
    {
        "actual": 0.59,
        "predicted": 0.898160681101754
    },
    {
        "actual": 0.33,
        "predicted": 0.261237735467218
    },
    {
        "actual": 0.5,
        "predicted": 0.316977368084505
    },
    {
        "actual": 0.1,
        "predicted": 0.094262348400406
    },
    {
        "actual": 0.09,
        "predicted": 0.17693722214275
    },
    {
        "actual": 0.52,
        "predicted": 0.478903307010633
    },
    {
        "actual": 0.04,
        "predicted": 0.072004466322811
    },
    {
        "actual": 0.05,
        "predicted": 0.000930457099892
    },
    {
        "actual": 0.05,
        "predicted": 0.097874068917893
    },
    {
        "actual": 0.38,
        "predicted": 0.500484409797988
    },
    {
        "actual": 0.02,
        "predicted": 0.081737585032085
    },
    {
        "actual": 0.22,
        "predicted": 0.226633942662292
    },
    {
        "actual": 0.28,
        "predicted": 0.391003622851878
    },
    {
        "actual": 0.28,
        "predicted": 0.371497092143243
    },
    {
        "actual": 0.18,
        "predicted": 0.212527425810713
    },
    {
        "actual": 0.02,
        "predicted": 0.043718975659476
    },
    {
        "actual": 0.11,
        "predicted": 0.174841199496663
    },
    {
        "actual": 0.08,
        "predicted": 0.14073225471079
    },
    {
        "actual": 0.12,
        "predicted": 0.261053512768754
    },
    {
        "actual": 0.19,
        "predicted": 0.185344591022434
    },
    {
        "actual": 0.21,
        "predicted": 0.448696626965044
    },
    {
        "actual": 0.23,
        "predicted": 0.202595037245107
    },
    {
        "actual": 0.11,
        "predicted": 0.354833932615762
    },
    {
        "actual": 1,
        "predicted": 0.667411336158512
    },
    {
        "actual": 0.04,
        "predicted": 0.144400903702516
    },
    {
        "actual": 0.11,
        "predicted": 0.082048128076106
    },
    {
        "actual": 0.19,
        "predicted": 0.336709514209713
    },
    {
        "actual": 0.04,
        "predicted": -0.007113199467256
    },
    {
        "actual": 0.32,
        "predicted": 0.346498589559784
    },
    {
        "actual": 0.42,
        "predicted": 0.437136861588776
    },
    {
        "actual": 0.33,
        "predicted": 0.248004567444005
    },
    {
        "actual": 0.31,
        "predicted": 0.195937988908404
    },
    {
        "actual": 0.15,
        "predicted": 0.121041159012872
    },
    {
        "actual": 0.08,
        "predicted": 0.118777682889229
    },
    {
        "actual": 0.24,
        "predicted": 0.364956745517536
    },
    {
        "actual": 0.11,
        "predicted": 0.171816090700484
    },
    {
        "actual": 0.07,
        "predicted": 0.065107193753686
    },
    {
        "actual": 0.06,
        "predicted": 0.10947214983817
    },
    {
        "actual": 0.08,
        "predicted": 0.108144271105492
    },
    {
        "actual": 0.19,
        "predicted": 0.230114698350504
    },
    {
        "actual": 0.17,
        "predicted": 0.158111779110173
    },
    {
        "actual": 0.13,
        "predicted": 0.172539707489662
    },
    {
        "actual": 0.01,
        "predicted": 0.007394553499612
    },
    {
        "actual": 0.06,
        "predicted": 0.194485985151828
    },
    {
        "actual": 0.15,
        "predicted": 0.36579402844716
    },
    {
        "actual": 0.11,
        "predicted": 0.053192557404797
    },
    {
        "actual": 0.05,
        "predicted": 0.079372392721829
    },
    {
        "actual": 0.01,
        "predicted": -0.006446897372277
    },
    {
        "actual": 0.06,
        "predicted": 0.05714699318953
    },
    {
        "actual": 0.5,
        "predicted": 0.333261419531848
    },
    {
        "actual": 0.13,
        "predicted": 0.044236456474158
    },
    {
        "actual": 0.67,
        "predicted": 0.503300129809204
    },
    {
        "actual": 0.17,
        "predicted": 0.150697080511746
    },
    {
        "actual": 0.35,
        "predicted": 0.475819912591077
    },
    {
        "actual": 0.19,
        "predicted": 0.094035329748175
    },
    {
        "actual": 0.6,
        "predicted": 0.322609598295623
    },
    {
        "actual": 0.6,
        "predicted": 0.313126350954417
    },
    {
        "actual": 0.06,
        "predicted": 0.112486205601355
    },
    {
        "actual": 0.27,
        "predicted": 0.265461683934062
    },
    {
        "actual": 0.09,
        "predicted": 0.008340517624582
    },
    {
        "actual": 0.22,
        "predicted": 0.02824204733328
    },
    {
        "actual": 1,
        "predicted": 0.712095821688447
    },
    {
        "actual": 0.12,
        "predicted": 0.069941614285315
    },
    {
        "actual": 0.02,
        "predicted": 0.040034464475292
    },
    {
        "actual": 0.03,
        "predicted": 0.046338770000206
    },
    {
        "actual": 0.16,
        "predicted": 0.106950471099513
    },
    {
        "actual": 0.22,
        "predicted": 0.232123081777034
    },
    {
        "actual": 0.08,
        "predicted": 0.143678196459825
    },
    {
        "actual": 0.01,
        "predicted": 0.020552412613329
    },
    {
        "actual": 0.67,
        "predicted": 0.52121435635024
    },
    {
        "actual": 0.08,
        "predicted": 0.050956234906193
    },
    {
        "actual": 0.14,
        "predicted": 0.13006998556107
    },
    {
        "actual": 0.36,
        "predicted": 0.42253983758184
    },
    {
        "actual": 0.16,
        "predicted": 0.110845055595841
    },
    {
        "actual": 0.09,
        "predicted": 0.15847671307997
    },
    {
        "actual": 0.75,
        "predicted": 0.61062398364574
    },
    {
        "actual": 0.15,
        "predicted": 0.217971699775921
    },
    {
        "actual": 0.83,
        "predicted": 0.443730454931457
    },
    {
        "actual": 0.03,
        "predicted": 0.017467714657844
    },
    {
        "actual": 0.47,
        "predicted": 0.621341753555925
    },
    {
        "actual": 0.48,
        "predicted": 0.414438510238753
    },
    {
        "actual": 0.19,
        "predicted": 0.379790297812207
    },
    {
        "actual": 0.05,
        "predicted": 0.110520066324273
    },
    {
        "actual": 0.08,
        "predicted": 0.127304625845817
    },
    {
        "actual": 0.04,
        "predicted": 0.066684997353959
    },
    {
        "actual": 0.53,
        "predicted": 0.383424448098314
    },
    {
        "actual": 0.09,
        "predicted": 0.20628947285643
    },
    {
        "actual": 0.06,
        "predicted": 0.028557223094075
    },
    {
        "actual": 0.09,
        "predicted": 0.040335473620518
    },
    {
        "actual": 0.25,
        "predicted": 0.384629061607773
    },
    {
        "actual": 0.39,
        "predicted": 0.325573007843876
    },
    {
        "actual": 0.53,
        "predicted": 0.508781035772081
    },
    {
        "actual": 0.52,
        "predicted": 0.41153914777597
    },
    {
        "actual": 0.08,
        "predicted": 0.003424925605719
    },
    {
        "actual": 0.6,
        "predicted": 0.413849820847528
    },
    {
        "actual": 0.02,
        "predicted": 0.060103976746253
    },
    {
        "actual": 0.06,
        "predicted": 0.058748725342783
    },
    {
        "actual": 0.09,
        "predicted": 0.159917458353352
    },
    {
        "actual": 0.19,
        "predicted": 0.220694485321517
    },
    {
        "actual": 0.16,
        "predicted": 0.122390798023043
    },
    {
        "actual": 0.14,
        "predicted": 0.101505869051889
    },
    {
        "actual": 0.19,
        "predicted": 0.2644302672336
    },
    {
        "actual": 0.07,
        "predicted": 0.169617411115054
    },
    {
        "actual": 0.72,
        "predicted": 0.563402521976135
    },
    {
        "actual": 0.07,
        "predicted": 0.097455638670902
    },
    {
        "actual": 0.27,
        "predicted": 0.297194086772725
    },
    {
        "actual": 0.03,
        "predicted": 0.046317182844595
    },
    {
        "actual": 0.45,
        "predicted": 0.067057076221358
    },
    {
        "actual": 0.15,
        "predicted": 0.245013676231999
    },
    {
        "actual": 0.13,
        "predicted": 0.014934493730125
    },
    {
        "actual": 0.26,
        "predicted": 0.479600799670323
    },
    {
        "actual": 0.06,
        "predicted": 0.13324521516349
    },
    {
        "actual": 0.62,
        "predicted": 0.622432252648097
    },
    {
        "actual": 0.53,
        "predicted": 0.279606198045145
    },
    {
        "actual": 0.09,
        "predicted": 0.21898432934421
    },
    {
        "actual": 0.49,
        "predicted": 0.294326436498487
    },
    {
        "actual": 0.09,
        "predicted": 0.11351655661473
    },
    {
        "actual": 0.64,
        "predicted": 0.708446568954572
    },
    {
        "actual": 0.01,
        "predicted": 0.043499923356238
    },
    {
        "actual": 0.5,
        "predicted": 0.532230535683004
    },
    {
        "actual": 0.02,
        "predicted": 0.01837689747965
    },
    {
        "actual": 0.24,
        "predicted": 0.215959290855468
    },
    {
        "actual": 0.23,
        "predicted": 0.287801808388239
    },
    {
        "actual": 0.38,
        "predicted": 0.212476123975099
    },
    {
        "actual": 0.23,
        "predicted": 0.68600039158516
    },
    {
        "actual": 0.41,
        "predicted": 0.171325810059728
    },
    {
        "actual": 0.05,
        "predicted": 0.052973338278292
    },
    {
        "actual": 0.18,
        "predicted": 0.221660295042069
    },
    {
        "actual": 0.02,
        "predicted": 0.067854244132149
    },
    {
        "actual": 0.09,
        "predicted": 0.055474234216739
    },
    {
        "actual": 0.05,
        "predicted": 0.154213044660177
    },
    {
        "actual": 0.07,
        "predicted": 0.196185094075973
    },
    {
        "actual": 0.07,
        "predicted": 0.192403945724102
    },
    {
        "actual": 0.81,
        "predicted": 0.41512947636048
    },
    {
        "actual": 0.04,
        "predicted": 0.032018493411775
    },
    {
        "actual": 0.02,
        "predicted": 0.042816177558169
    },
    {
        "actual": 0.15,
        "predicted": 0.063034446405043
    },
    {
        "actual": 0.65,
        "predicted": 0.749527573607093
    },
    {
        "actual": 0.86,
        "predicted": 0.729542441232846
    },
    {
        "actual": 0.12,
        "predicted": 0.185935749106059
    },
    {
        "actual": 0.57,
        "predicted": 0.589313803671577
    },
    {
        "actual": 0.16,
        "predicted": 0.248711697011076
    },
    {
        "actual": 0.18,
        "predicted": 0.360551040052416
    },
    {
        "actual": 0.16,
        "predicted": 0.497296080325476
    },
    {
        "actual": 0.24,
        "predicted": 0.547042544323727
    },
    {
        "actual": 0.44,
        "predicted": 0.378974631030208
    },
    {
        "actual": 0.06,
        "predicted": 0.041009293577186
    },
    {
        "actual": 0.16,
        "predicted": 0.195477686409551
    },
    {
        "actual": 0.08,
        "predicted": 0.11912446471466
    },
    {
        "actual": 1,
        "predicted": 1.06750419420253
    },
    {
        "actual": 0.14,
        "predicted": 0.101653979059057
    },
    {
        "actual": 0.55,
        "predicted": 0.742679702106231
    },
    {
        "actual": 0.13,
        "predicted": 0.162951127967041
    },
    {
        "actual": 0.22,
        "predicted": 0.268662592308686
    },
    {
        "actual": 0.29,
        "predicted": 0.236353259757332
    },
    {
        "actual": 0.05,
        "predicted": 0.093178932056287
    },
    {
        "actual": 0.16,
        "predicted": 0.132341724142204
    },
    {
        "actual": 0.09,
        "predicted": 0.253150271968969
    },
    {
        "actual": 0.17,
        "predicted": 0.198848295964071
    },
    {
        "actual": 0.15,
        "predicted": 0.061348545515231
    },
    {
        "actual": 0.14,
        "predicted": 0.166274097931417
    },
    {
        "actual": 0.34,
        "predicted": 0.401589763321322
    },
    {
        "actual": 0.27,
        "predicted": 0.250842127788358
    },
    {
        "actual": 0.17,
        "predicted": 0.186148452330155
    },
    {
        "actual": 0.26,
        "predicted": 0.252235348963868
    },
    {
        "actual": 0.07,
        "predicted": 0.016220355532899
    },
    {
        "actual": 0.02,
        "predicted": -0.003149772190874
    },
    {
        "actual": 0.95,
        "predicted": 0.69115403839203
    },
    {
        "actual": 0.11,
        "predicted": 0.178011836772152
    },
    {
        "actual": 0.03,
        "predicted": 0.148979894623342
    },
    {
        "actual": 0.03,
        "predicted": 0.060757594511865
    },
    {
        "actual": 0.19,
        "predicted": 0.141398614658661
    },
    {
        "actual": 0.34,
        "predicted": 0.289044584429641
    },
    {
        "actual": 0.11,
        "predicted": 0.023162751062909
    },
    {
        "actual": 0.53,
        "predicted": 0.57504414284403
    },
    {
        "actual": 0.04,
        "predicted": 0.145077048977227
    },
    {
        "actual": 0.21,
        "predicted": 0.1509588095458
    },
    {
        "actual": 0.37,
        "predicted": 0.281451027462707
    },
    {
        "actual": 0.18,
        "predicted": 0.204479002639132
    },
    {
        "actual": 0.15,
        "predicted": 0.22574904914207
    },
    {
        "actual": 0.88,
        "predicted": 0.599021505771435
    },
    {
        "actual": 0.2,
        "predicted": 0.700735422975913
    },
    {
        "actual": 0.22,
        "predicted": 0.297401527491752
    },
    {
        "actual": 0.06,
        "predicted": 0.104085492326734
    },
    {
        "actual": 0.08,
        "predicted": 0.059276642729328
    },
    {
        "actual": 0.11,
        "predicted": 0.18527054036891
    },
    {
        "actual": 0.38,
        "predicted": 0.340444106573851
    },
    {
        "actual": 0.08,
        "predicted": 0.067579855826333
    },
    {
        "actual": 0.29,
        "predicted": 0.234735861742625
    },
    {
        "actual": 0.36,
        "predicted": 0.398205726584234
    },
    {
        "actual": 0.09,
        "predicted": 0.133648603786827
    },
    {
        "actual": 0.1,
        "predicted": 0.200427763316176
    },
    {
        "actual": 0.05,
        "predicted": 0.094890982956213
    },
    {
        "actual": 0.23,
        "predicted": 0.246031801200438
    },
    {
        "actual": 0.15,
        "predicted": 0.171794517103039
    },
    {
        "actual": 0.3,
        "predicted": 0.274100476844177
    },
    {
        "actual": 0.03,
        "predicted": 0.104806579470504
    },
    {
        "actual": 0.19,
        "predicted": 0.077557745555675
    },
    {
        "actual": 0.04,
        "predicted": 0.115654052380071
    },
    {
        "actual": 0.15,
        "predicted": 0.029614393042979
    },
    {
        "actual": 0.01,
        "predicted": 0.117992812158948
    },
    {
        "actual": 0.08,
        "predicted": 0.01648666530038
    },
    {
        "actual": 0.5,
        "predicted": 0.176823329774897
    },
    {
        "actual": 0.16,
        "predicted": 0.163652046286267
    },
    {
        "actual": 0.16,
        "predicted": 0.16491563352612
    },
    {
        "actual": 0.22,
        "predicted": 0.331354522107121
    },
    {
        "actual": 0.08,
        "predicted": 0.126094480560433
    },
    {
        "actual": 0.14,
        "predicted": 0.15060545572093
    },
    {
        "actual": 0.05,
        "predicted": 0.191296937096557
    },
    {
        "actual": 0.41,
        "predicted": 0.623298693474915
    },
    {
        "actual": 0.09,
        "predicted": 0.220672245186119
    },
    {
        "actual": 0.26,
        "predicted": 0.257022436813593
    },
    {
        "actual": 0.67,
        "predicted": 0.544242565866675
    },
    {
        "actual": 0.05,
        "predicted": 0.068997174784094
    },
    {
        "actual": 0.17,
        "predicted": 0.131892436365689
    },
    {
        "actual": 0.29,
        "predicted": 0.161301266627792
    },
    {
        "actual": 0.54,
        "predicted": 0.262664107037302
    },
    {
        "actual": 0.1,
        "predicted": 0.029461341753636
    },
    {
        "actual": 0.63,
        "predicted": 0.537307963936257
    },
    {
        "actual": 0.2,
        "predicted": 0.172513760917925
    },
    {
        "actual": 0.29,
        "predicted": 0.268006317826861
    },
    {
        "actual": 0.27,
        "predicted": 0.340611795228747
    },
    {
        "actual": 0.13,
        "predicted": 0.419254778740266
    },
    {
        "actual": 0.16,
        "predicted": 0.311603006698966
    },
    {
        "actual": 0.32,
        "predicted": 0.362219036073316
    },
    {
        "actual": 0.11,
        "predicted": 0.151932181858928
    },
    {
        "actual": 0.13,
        "predicted": 0.131048460649567
    },
    {
        "actual": 0.29,
        "predicted": 0.401193673668755
    },
    {
        "actual": 0.09,
        "predicted": 0.125815615420623
    },
    {
        "actual": 0.08,
        "predicted": 0.095386982777037
    },
    {
        "actual": 0.17,
        "predicted": 0.26518878833182
    },
    {
        "actual": 0.17,
        "predicted": 0.182527302720138
    },
    {
        "actual": 0.02,
        "predicted": -0.0193289394579
    },
    {
        "actual": 0.12,
        "predicted": 0.174644354869065
    },
    {
        "actual": 0.04,
        "predicted": 0.000662130649531
    },
    {
        "actual": 0.03,
        "predicted": 0.049718869719033
    },
    {
        "actual": 0.14,
        "predicted": 0.050356462399209
    },
    {
        "actual": 0.04,
        "predicted": 0.044817847251164
    },
    {
        "actual": 0.04,
        "predicted": 0.051003258236168
    },
    {
        "actual": 0.06,
        "predicted": 0.09493433630966
    },
    {
        "actual": 0.2,
        "predicted": 0.218217626085475
    },
    {
        "actual": 0.08,
        "predicted": 0.157485159719099
    },
    {
        "actual": 0.56,
        "predicted": 0.382027570417477
    },
    {
        "actual": 0.14,
        "predicted": 0.292275661267849
    },
    {
        "actual": 0.12,
        "predicted": 0.203308813394951
    },
    {
        "actual": 0.16,
        "predicted": 0.308490181964629
    },
    {
        "actual": 0.16,
        "predicted": 0.135944675860069
    },
    {
        "actual": 0.15,
        "predicted": 0.187850169287184
    },
    {
        "actual": 0.2,
        "predicted": 0.299419390977707
    },
    {
        "actual": 0.06,
        "predicted": 0.141129202432999
    },
    {
        "actual": 0.18,
        "predicted": -0.006808190548457
    },
    {
        "actual": 0.23,
        "predicted": 0.387239542374411
    },
    {
        "actual": 0.18,
        "predicted": 0.068250862284773
    },
    {
        "actual": 0.26,
        "predicted": 0.166619113645398
    },
    {
        "actual": 0.11,
        "predicted": 0.134930034037329
    },
    {
        "actual": 0.04,
        "predicted": 0.147623999770887
    },
    {
        "actual": 0.48,
        "predicted": 0.643346273295558
    },
    {
        "actual": 0.03,
        "predicted": 0.033036200428474
    },
    {
        "actual": 0.3,
        "predicted": 0.343650949690322
    },
    {
        "actual": 1,
        "predicted": 0.500244775671142
    },
    {
        "actual": 0.34,
        "predicted": 0.236727232088003
    },
    {
        "actual": 0.1,
        "predicted": 0.120279649075115
    },
    {
        "actual": 0.02,
        "predicted": 0.100706996266128
    },
    {
        "actual": 0.02,
        "predicted": 0.28495740319217
    },
    {
        "actual": 0.32,
        "predicted": 0.366684587005174
    },
    {
        "actual": 0.45,
        "predicted": 0.566239811364234
    },
    {
        "actual": 0.6,
        "predicted": 0.626764555076074
    },
    {
        "actual": 0.69,
        "predicted": 0.555415704025123
    },
    {
        "actual": 0.3,
        "predicted": 0.356169009675596
    },
    {
        "actual": 0.04,
        "predicted": -0.019181605413095
    },
    {
        "actual": 0.19,
        "predicted": 0.459423176812298
    },
    {
        "actual": 0.75,
        "predicted": 0.695968955037321
    },
    {
        "actual": 0.53,
        "predicted": 0.286366426107232
    },
    {
        "actual": 0.22,
        "predicted": 0.273793357977769
    },
    {
        "actual": 0.3,
        "predicted": 0.232109136521526
    },
    {
        "actual": 0.04,
        "predicted": 0.050434778335384
    },
    {
        "actual": 0.52,
        "predicted": 0.383967697705089
    },
    {
        "actual": 0.09,
        "predicted": 0.182555481659068
    },
    {
        "actual": 0.08,
        "predicted": 0.066599539211144
    },
    {
        "actual": 0.25,
        "predicted": 0.172773772192398
    },
    {
        "actual": 0.04,
        "predicted": 0.053500246493421
    },
    {
        "actual": 0.16,
        "predicted": 0.270944682279489
    },
    {
        "actual": 0.28,
        "predicted": 0.200824829094173
    },
    {
        "actual": 0.07,
        "predicted": 0.110092815966893
    },
    {
        "actual": 0.03,
        "predicted": -0.004746841639481
    },
    {
        "actual": 0.56,
        "predicted": 0.375959940471347
    },
    {
        "actual": 0.14,
        "predicted": 0.037522394370101
    },
    {
        "actual": 0.14,
        "predicted": 0.302810163688025
    },
    {
        "actual": 0.02,
        "predicted": 0.017703611307764
    },
    {
        "actual": 0.04,
        "predicted": 0.021160867072222
    },
    {
        "actual": 0.19,
        "predicted": 0.603955824757392
    },
    {
        "actual": 0.09,
        "predicted": 0.133847864611733
    },
    {
        "actual": 0.45,
        "predicted": 0.409203410604935
    },
    {
        "actual": 0.23,
        "predicted": 0.410197196963654
    },
    {
        "actual": 0.19,
        "predicted": 0.164156829028693
    },
    {
        "actual": 0.48,
        "predicted": 0.434192908773407
    }
];


var eva_lr_chart = AmCharts.makeChart("eva-lr-chart", {
    "type": "xy",
    "theme": "light",
    "autoMarginOffset": 20,
    "dataProvider": eva_linear_data,
    "valueAxes": [{
        "position": "bottom",
        "axisAlpha": 0,
        "dashLength": 1,
        "title": "Actual"
    }, {
        "axisAlpha": 0,
        "dashLength": 1,
        "position": "left",
        "title": "Predicted"
    }],
    "startDuration": 0,
    "graphs": [{
        "balloonText": "actual:[[x]] predicted:[[y]]",
        "bullet": "circle",
        "lineAlpha": 0,
        "xField": "actual",
        "yField": "predicted",
        "lineColor": "#f00000",
        "fillAlphas": 0
    }],
    "marginLeft": 64,
    "marginBottom": 60,
    "chartScrollbar": {},
    "chartCursor": {},
    "export": {
        "enabled": true,
        "position": "bottom-right"
    },
    "titles": [
        {
            "text": "Linear Regression",
            "size": 15
        }
    ]
});

var eva_svmr_data = [
    {
        "actual": 0.2,
        "predicted": 0.18374762
    },
    {
        "actual": 0.67,
        "predicted": 0.318483958
    },
    {
        "actual": 0.43,
        "predicted": 0.329820935
    },
    {
        "actual": 0.12,
        "predicted": 0.153497958
    },
    {
        "actual": 0.03,
        "predicted": 0.106467885
    },
    {
        "actual": 0.14,
        "predicted": 0.185345539
    },
    {
        "actual": 0.03,
        "predicted": 0.103253268
    },
    {
        "actual": 0.55,
        "predicted": 0.407251238
    },
    {
        "actual": 0.53,
        "predicted": 0.239417083
    },
    {
        "actual": 0.15,
        "predicted": 0.100388668
    },
    {
        "actual": 0.24,
        "predicted": 0.377096541
    },
    {
        "actual": 0.08,
        "predicted": 0.125824728
    },
    {
        "actual": 0.06,
        "predicted": 0.098502317
    },
    {
        "actual": 0.09,
        "predicted": 0.1092812
    },
    {
        "actual": 0.21,
        "predicted": 0.266764917
    },
    {
        "actual": 0.3,
        "predicted": 0.165404372
    },
    {
        "actual": 0.49,
        "predicted": 0.59023576
    },
    {
        "actual": 0.07,
        "predicted": 0.09777316
    },
    {
        "actual": 0.15,
        "predicted": 0.107134023
    },
    {
        "actual": 0.03,
        "predicted": 0.115345664
    },
    {
        "actual": 0.34,
        "predicted": 0.303185852
    },
    {
        "actual": 0.69,
        "predicted": 0.590110607
    },
    {
        "actual": 0.21,
        "predicted": 0.226551372
    },
    {
        "actual": 0.63,
        "predicted": 0.243701897
    },
    {
        "actual": 0.31,
        "predicted": 0.344729485
    },
    {
        "actual": 0.12,
        "predicted": 0.141589985
    },
    {
        "actual": 0.84,
        "predicted": 0.697383425
    },
    {
        "actual": 0.1,
        "predicted": 0.10341863
    },
    {
        "actual": 0.49,
        "predicted": 0.353624343
    },
    {
        "actual": 0.02,
        "predicted": 0.087374755
    },
    {
        "actual": 0.16,
        "predicted": 0.092074981
    },
    {
        "actual": 0.19,
        "predicted": 0.227477731
    },
    {
        "actual": 0.15,
        "predicted": 0.173504879
    },
    {
        "actual": 0.31,
        "predicted": 0.410194783
    },
    {
        "actual": 0.08,
        "predicted": 0.099523712
    },
    {
        "actual": 0.24,
        "predicted": 0.339668523
    },
    {
        "actual": 0.11,
        "predicted": 0.136883709
    },
    {
        "actual": 0.22,
        "predicted": 0.216028038
    },
    {
        "actual": 0.13,
        "predicted": 0.254008173
    },
    {
        "actual": 0.07,
        "predicted": 0.113722999
    },
    {
        "actual": 0.11,
        "predicted": 0.143169917
    },
    {
        "actual": 0.06,
        "predicted": 0.129621858
    },
    {
        "actual": 0.8,
        "predicted": 0.348200237
    },
    {
        "actual": 0.22,
        "predicted": 0.284450748
    },
    {
        "actual": 0.17,
        "predicted": 0.090475355
    },
    {
        "actual": 0.16,
        "predicted": 0.136950203
    },
    {
        "actual": 0.2,
        "predicted": 0.223878247
    },
    {
        "actual": 0.12,
        "predicted": 0.204177112
    },
    {
        "actual": 0.11,
        "predicted": 0.128999936
    },
    {
        "actual": 0.12,
        "predicted": 0.151483923
    },
    {
        "actual": 0.2,
        "predicted": 0.325352234
    },
    {
        "actual": 0.68,
        "predicted": 0.388377792
    },
    {
        "actual": 0.23,
        "predicted": 0.224633198
    },
    {
        "actual": 0.05,
        "predicted": 0.095694273
    },
    {
        "actual": 0.1,
        "predicted": 0.138543111
    },
    {
        "actual": 0.28,
        "predicted": 0.335296841
    },
    {
        "actual": 0.22,
        "predicted": 0.179632496
    },
    {
        "actual": 0.22,
        "predicted": 0.213184565
    },
    {
        "actual": 0.55,
        "predicted": 0.370257662
    },
    {
        "actual": 0.05,
        "predicted": 0.118898904
    },
    {
        "actual": 0.03,
        "predicted": 0.107741778
    },
    {
        "actual": 0.07,
        "predicted": 0.218968541
    },
    {
        "actual": 0.07,
        "predicted": 0.141332018
    },
    {
        "actual": 0.57,
        "predicted": 0.357952609
    },
    {
        "actual": 0.37,
        "predicted": 0.397264711
    },
    {
        "actual": 0.14,
        "predicted": 0.112897316
    },
    {
        "actual": 0.61,
        "predicted": 0.43392048
    },
    {
        "actual": 0.03,
        "predicted": 0.126598088
    },
    {
        "actual": 0.5,
        "predicted": 0.422559618
    },
    {
        "actual": 0.05,
        "predicted": 0.122279504
    },
    {
        "actual": 0.04,
        "predicted": 0.098866507
    },
    {
        "actual": 0.21,
        "predicted": 0.137994902
    },
    {
        "actual": 0.05,
        "predicted": 0.111840488
    },
    {
        "actual": 0.02,
        "predicted": 0.087937919
    },
    {
        "actual": 0.14,
        "predicted": 0.222891239
    },
    {
        "actual": 0.18,
        "predicted": 0.165631737
    },
    {
        "actual": 0.12,
        "predicted": 0.254809112
    },
    {
        "actual": 0.68,
        "predicted": 0.574974323
    },
    {
        "actual": 0.7,
        "predicted": 0.39085204
    },
    {
        "actual": 0.75,
        "predicted": 0.31787006
    },
    {
        "actual": 0.3,
        "predicted": 0.377368962
    },
    {
        "actual": 0.24,
        "predicted": 0.24372293
    },
    {
        "actual": 1,
        "predicted": 0.244153475
    },
    {
        "actual": 0,
        "predicted": 0.102168957
    },
    {
        "actual": 0.03,
        "predicted": 0.097860684
    },
    {
        "actual": 0.06,
        "predicted": 0.121452894
    },
    {
        "actual": 0.08,
        "predicted": 0.197792508
    },
    {
        "actual": 0.1,
        "predicted": 0.13152616
    },
    {
        "actual": 0.27,
        "predicted": 0.175286043
    },
    {
        "actual": 0.15,
        "predicted": 0.178067072
    },
    {
        "actual": 0.63,
        "predicted": 0.348867468
    },
    {
        "actual": 0.05,
        "predicted": 0.209264937
    },
    {
        "actual": 0.03,
        "predicted": 0.108433028
    },
    {
        "actual": 0.12,
        "predicted": 0.105794992
    },
    {
        "actual": 0.4,
        "predicted": 0.174741637
    },
    {
        "actual": 0.37,
        "predicted": 0.187848178
    },
    {
        "actual": 0.45,
        "predicted": 0.297729199
    },
    {
        "actual": 0.04,
        "predicted": 0.107849759
    },
    {
        "actual": 0.09,
        "predicted": 0.104358657
    },
    {
        "actual": 0.09,
        "predicted": 0.20333969
    },
    {
        "actual": 0.39,
        "predicted": 0.371923504
    },
    {
        "actual": 0.02,
        "predicted": 0.140874264
    },
    {
        "actual": 0.34,
        "predicted": 0.439906658
    },
    {
        "actual": 0.28,
        "predicted": 0.314849579
    },
    {
        "actual": 0.08,
        "predicted": 0.104716095
    },
    {
        "actual": 0.44,
        "predicted": 0.540109367
    },
    {
        "actual": 0.24,
        "predicted": 0.180437171
    },
    {
        "actual": 0.09,
        "predicted": 0.108040206
    },
    {
        "actual": 0.26,
        "predicted": 0.270723933
    },
    {
        "actual": 0.4,
        "predicted": 0.449273882
    },
    {
        "actual": 0.56,
        "predicted": 0.459528007
    },
    {
        "actual": 0.05,
        "predicted": 0.103101104
    },
    {
        "actual": 0.06,
        "predicted": 0.109955873
    },
    {
        "actual": 0.2,
        "predicted": 0.237128333
    },
    {
        "actual": 0.51,
        "predicted": 0.439158318
    },
    {
        "actual": 0.04,
        "predicted": 0.000502256
    },
    {
        "actual": 0.86,
        "predicted": 0.959956704
    },
    {
        "actual": 0.05,
        "predicted": 0.095017336
    },
    {
        "actual": 0.06,
        "predicted": 0.142250089
    },
    {
        "actual": 0.68,
        "predicted": 0.579647097
    },
    {
        "actual": 0.22,
        "predicted": 0.213099186
    },
    {
        "actual": 0.05,
        "predicted": 0.128530501
    },
    {
        "actual": 0.03,
        "predicted": 0.118599377
    },
    {
        "actual": 0.09,
        "predicted": 0.140277115
    },
    {
        "actual": 0.17,
        "predicted": 0.100541318
    },
    {
        "actual": 0.17,
        "predicted": 0.11727345
    },
    {
        "actual": 0.17,
        "predicted": 0.126458861
    },
    {
        "actual": 0.14,
        "predicted": 0.272782621
    },
    {
        "actual": 0.62,
        "predicted": 0.346875801
    },
    {
        "actual": 0.03,
        "predicted": 0.082685072
    },
    {
        "actual": 0.23,
        "predicted": 0.42391355
    },
    {
        "actual": 0.15,
        "predicted": 0.107835293
    },
    {
        "actual": 0.13,
        "predicted": 0.188982656
    },
    {
        "actual": 0.27,
        "predicted": 0.172613093
    },
    {
        "actual": 0.08,
        "predicted": 0.038520876
    },
    {
        "actual": 0.06,
        "predicted": 0.11125273
    },
    {
        "actual": 0.09,
        "predicted": 0.095050207
    },
    {
        "actual": 0.16,
        "predicted": 0.223551109
    },
    {
        "actual": 0.38,
        "predicted": 0.249466628
    },
    {
        "actual": 0.02,
        "predicted": 0.105630101
    },
    {
        "actual": 0.08,
        "predicted": 0.137147556
    },
    {
        "actual": 0.09,
        "predicted": 0.103690737
    },
    {
        "actual": 0.3,
        "predicted": 0.534202572
    },
    {
        "actual": 0.05,
        "predicted": 0.118042753
    },
    {
        "actual": 0.17,
        "predicted": 0.193508521
    },
    {
        "actual": 0.53,
        "predicted": 0.407088837
    },
    {
        "actual": 1,
        "predicted": 0.673708052
    },
    {
        "actual": 0.05,
        "predicted": 0.126118858
    },
    {
        "actual": 0.63,
        "predicted": 0.530195856
    },
    {
        "actual": 1,
        "predicted": 0.422066863
    },
    {
        "actual": 0.21,
        "predicted": 0.268824915
    },
    {
        "actual": 0.86,
        "predicted": 0.545483469
    },
    {
        "actual": 0.03,
        "predicted": 0.101035363
    },
    {
        "actual": 0.26,
        "predicted": 0.096612691
    },
    {
        "actual": 0.87,
        "predicted": 0.616820032
    },
    {
        "actual": 0.44,
        "predicted": 0.540279572
    },
    {
        "actual": 0.03,
        "predicted": 0.1114158
    },
    {
        "actual": 0.73,
        "predicted": 0.507468719
    },
    {
        "actual": 0.48,
        "predicted": 0.424863685
    },
    {
        "actual": 0.06,
        "predicted": 0.125565382
    },
    {
        "actual": 0.07,
        "predicted": 0.085847124
    },
    {
        "actual": 0.03,
        "predicted": 0.144338352
    },
    {
        "actual": 0.17,
        "predicted": 0.101603254
    },
    {
        "actual": 0.11,
        "predicted": 0.101809253
    },
    {
        "actual": 0.05,
        "predicted": 0.094918457
    },
    {
        "actual": 0.25,
        "predicted": 0.181497263
    },
    {
        "actual": 0.05,
        "predicted": 0.029346326
    },
    {
        "actual": 0.15,
        "predicted": 0.202222469
    },
    {
        "actual": 0.46,
        "predicted": 0.386161738
    },
    {
        "actual": 0.45,
        "predicted": 0.190200814
    },
    {
        "actual": 0.23,
        "predicted": 0.30657792
    },
    {
        "actual": 0.08,
        "predicted": 0.124063776
    },
    {
        "actual": 0.08,
        "predicted": 0.110209205
    },
    {
        "actual": 0.2,
        "predicted": 0.310034861
    },
    {
        "actual": 0.73,
        "predicted": 0.547481654
    },
    {
        "actual": 0.17,
        "predicted": 0.142484397
    },
    {
        "actual": 0.07,
        "predicted": 0.1026747
    },
    {
        "actual": 0.83,
        "predicted": 0.910934224
    },
    {
        "actual": 0.1,
        "predicted": 0.15899831
    },
    {
        "actual": 0.25,
        "predicted": 0.149758573
    },
    {
        "actual": 0.12,
        "predicted": 0.318236525
    },
    {
        "actual": 0.25,
        "predicted": 0.215575377
    },
    {
        "actual": 0.3,
        "predicted": 0.282128871
    },
    {
        "actual": 0.02,
        "predicted": 0.102797241
    },
    {
        "actual": 0.19,
        "predicted": 0.137083218
    },
    {
        "actual": 0.36,
        "predicted": 0.418890501
    },
    {
        "actual": 0.12,
        "predicted": 0.131495933
    },
    {
        "actual": 0.01,
        "predicted": 0.109832417
    },
    {
        "actual": 0.06,
        "predicted": 0.118770426
    },
    {
        "actual": 0.1,
        "predicted": 0.104031861
    },
    {
        "actual": 0.1,
        "predicted": 0.246618227
    },
    {
        "actual": 0.21,
        "predicted": 0.135878251
    },
    {
        "actual": 0.1,
        "predicted": 0.072652885
    },
    {
        "actual": 0.07,
        "predicted": 0.117937003
    },
    {
        "actual": 0.02,
        "predicted": 0.097521166
    },
    {
        "actual": 0.03,
        "predicted": 0.101355732
    },
    {
        "actual": 0.01,
        "predicted": 0.110307167
    },
    {
        "actual": 0.41,
        "predicted": 0.553281603
    },
    {
        "actual": 0.26,
        "predicted": 0.360064682
    },
    {
        "actual": 0.42,
        "predicted": 0.436940578
    },
    {
        "actual": 0.18,
        "predicted": 0.280185395
    },
    {
        "actual": 0.13,
        "predicted": 0.111748382
    },
    {
        "actual": 0.29,
        "predicted": 0.179273079
    },
    {
        "actual": 0.68,
        "predicted": 0.364633795
    },
    {
        "actual": 0.05,
        "predicted": 0.103153176
    },
    {
        "actual": 0.16,
        "predicted": 0.260239385
    },
    {
        "actual": 0.26,
        "predicted": 0.17314732
    },
    {
        "actual": 0.19,
        "predicted": 0.105894689
    },
    {
        "actual": 0.03,
        "predicted": 0.100839534
    },
    {
        "actual": 0.15,
        "predicted": 0.088130972
    },
    {
        "actual": 0.29,
        "predicted": 0.361847452
    },
    {
        "actual": 0.01,
        "predicted": 0.092903572
    },
    {
        "actual": 0.66,
        "predicted": 0.496136874
    },
    {
        "actual": 0.05,
        "predicted": 0.098909301
    },
    {
        "actual": 0.27,
        "predicted": 0.14630826
    },
    {
        "actual": 0.49,
        "predicted": 0.304416931
    },
    {
        "actual": 0.08,
        "predicted": 0.187015523
    },
    {
        "actual": 0.04,
        "predicted": 0.118905295
    },
    {
        "actual": 0.16,
        "predicted": 0.451131354
    },
    {
        "actual": 0.06,
        "predicted": 0.114176224
    },
    {
        "actual": 0.04,
        "predicted": 0.096540688
    },
    {
        "actual": 0.31,
        "predicted": 0.41378109
    },
    {
        "actual": 0.36,
        "predicted": 0.491370827
    },
    {
        "actual": 0.05,
        "predicted": 0.097524702
    },
    {
        "actual": 0.16,
        "predicted": 0.10861162
    },
    {
        "actual": 0.1,
        "predicted": 0.377724028
    },
    {
        "actual": 0.74,
        "predicted": 0.467707143
    },
    {
        "actual": 0.19,
        "predicted": 0.209971378
    },
    {
        "actual": 0.63,
        "predicted": 0.401395276
    },
    {
        "actual": 0.42,
        "predicted": 0.602145162
    },
    {
        "actual": 0.04,
        "predicted": 0.182721704
    },
    {
        "actual": 0.06,
        "predicted": 0.112477929
    },
    {
        "actual": 0.2,
        "predicted": 0.17880385
    },
    {
        "actual": 0.88,
        "predicted": 0.805824881
    },
    {
        "actual": 0.12,
        "predicted": 0.103164824
    },
    {
        "actual": 0.11,
        "predicted": 0.307306339
    },
    {
        "actual": 0.27,
        "predicted": 0.322274962
    },
    {
        "actual": 0.02,
        "predicted": 0.120983953
    },
    {
        "actual": 0.37,
        "predicted": 0.123720434
    },
    {
        "actual": 0.18,
        "predicted": 0.242238675
    },
    {
        "actual": 0.04,
        "predicted": 0.095717197
    },
    {
        "actual": 0.12,
        "predicted": 0.203930207
    },
    {
        "actual": 0.32,
        "predicted": 0.281432348
    },
    {
        "actual": 0.54,
        "predicted": 0.544295994
    },
    {
        "actual": 0.18,
        "predicted": 0.230508216
    },
    {
        "actual": 0.25,
        "predicted": 0.196753103
    },
    {
        "actual": 0.7,
        "predicted": 0.465213394
    },
    {
        "actual": 0.22,
        "predicted": 0.256475273
    },
    {
        "actual": 1,
        "predicted": 0.548767352
    },
    {
        "actual": 0.03,
        "predicted": 0.15305906
    },
    {
        "actual": 0.74,
        "predicted": 0.601206605
    },
    {
        "actual": 0.63,
        "predicted": 0.529489031
    },
    {
        "actual": 0.05,
        "predicted": 0.096869806
    },
    {
        "actual": 0.09,
        "predicted": 0.254354592
    },
    {
        "actual": 0.04,
        "predicted": 0.094089579
    },
    {
        "actual": 0.93,
        "predicted": 0.611086779
    },
    {
        "actual": 0.19,
        "predicted": 0.30680221
    },
    {
        "actual": 0.06,
        "predicted": 0.116413341
    },
    {
        "actual": 0.03,
        "predicted": 0.196432146
    },
    {
        "actual": 0.1,
        "predicted": 0.219047648
    },
    {
        "actual": 0.53,
        "predicted": 0.152111772
    },
    {
        "actual": 0.59,
        "predicted": 0.501048781
    },
    {
        "actual": 0.67,
        "predicted": 0.754967848
    },
    {
        "actual": 0.01,
        "predicted": 0.109890515
    },
    {
        "actual": 0.05,
        "predicted": 0.112440942
    },
    {
        "actual": 0.14,
        "predicted": 0.156822338
    },
    {
        "actual": 0.35,
        "predicted": 0.553515415
    },
    {
        "actual": 0.17,
        "predicted": 0.176121399
    },
    {
        "actual": 0.05,
        "predicted": 0.106532632
    },
    {
        "actual": 0.69,
        "predicted": 0.134203573
    },
    {
        "actual": 0.11,
        "predicted": 0.121758122
    },
    {
        "actual": 0.24,
        "predicted": 0.194951756
    },
    {
        "actual": 0.35,
        "predicted": 0.320275073
    },
    {
        "actual": 0.27,
        "predicted": 0.422362496
    },
    {
        "actual": 0.13,
        "predicted": 0.114719066
    },
    {
        "actual": 0.36,
        "predicted": 0.459788945
    },
    {
        "actual": 0.34,
        "predicted": 0.602564666
    },
    {
        "actual": 0.08,
        "predicted": 0.201788922
    },
    {
        "actual": 0.05,
        "predicted": 0.125687382
    },
    {
        "actual": 0.03,
        "predicted": 0.114182015
    },
    {
        "actual": 0.03,
        "predicted": 0.129871998
    },
    {
        "actual": 0.12,
        "predicted": 0.220040186
    },
    {
        "actual": 0.06,
        "predicted": 0.089510184
    },
    {
        "actual": 0.32,
        "predicted": 0.219956764
    },
    {
        "actual": 0.19,
        "predicted": 0.232189986
    },
    {
        "actual": 0.14,
        "predicted": 0.364198365
    },
    {
        "actual": 0.51,
        "predicted": 0.506691304
    },
    {
        "actual": 0.01,
        "predicted": 0.096316011
    },
    {
        "actual": 0.59,
        "predicted": 0.339780052
    },
    {
        "actual": 0.09,
        "predicted": 0.112081727
    },
    {
        "actual": 0.1,
        "predicted": 0.186191342
    },
    {
        "actual": 0.09,
        "predicted": 0.203003318
    },
    {
        "actual": 0.03,
        "predicted": 0.107379683
    },
    {
        "actual": 0.28,
        "predicted": 0.35405529
    },
    {
        "actual": 0.1,
        "predicted": 0.143159556
    },
    {
        "actual": 0.12,
        "predicted": 0.120129688
    },
    {
        "actual": 0.67,
        "predicted": 0.707379057
    },
    {
        "actual": 0.02,
        "predicted": 0.090170301
    },
    {
        "actual": 0.29,
        "predicted": 0.263752906
    },
    {
        "actual": 0.36,
        "predicted": 0.345817867
    },
    {
        "actual": 0.11,
        "predicted": 0.140565669
    },
    {
        "actual": 0.03,
        "predicted": 0.141653262
    },
    {
        "actual": 0.35,
        "predicted": 0.289906432
    },
    {
        "actual": 0.25,
        "predicted": 0.277363078
    },
    {
        "actual": 0.06,
        "predicted": 0.149336368
    },
    {
        "actual": 0.45,
        "predicted": 0.139094051
    },
    {
        "actual": 0.23,
        "predicted": 0.375401198
    },
    {
        "actual": 0.32,
        "predicted": 0.348015037
    },
    {
        "actual": 0.04,
        "predicted": 0.120994849
    },
    {
        "actual": 0.02,
        "predicted": 0.093140992
    },
    {
        "actual": 0.16,
        "predicted": 0.117937041
    },
    {
        "actual": 0.12,
        "predicted": 0.150800828
    },
    {
        "actual": 0.2,
        "predicted": 0.219156723
    },
    {
        "actual": 0.51,
        "predicted": 0.41262927
    },
    {
        "actual": 0.18,
        "predicted": 0.158467006
    },
    {
        "actual": 0.3,
        "predicted": 0.503425745
    },
    {
        "actual": 0.37,
        "predicted": 0.47026998
    },
    {
        "actual": 0.31,
        "predicted": 0.371029881
    },
    {
        "actual": 0.04,
        "predicted": 0.125219736
    },
    {
        "actual": 0.18,
        "predicted": 0.282480459
    },
    {
        "actual": 0.48,
        "predicted": 0.234098152
    },
    {
        "actual": 0.09,
        "predicted": 0.17322062
    },
    {
        "actual": 0.07,
        "predicted": 0.136234591
    },
    {
        "actual": 0.27,
        "predicted": 0.328071485
    },
    {
        "actual": 0.3,
        "predicted": 0.247160247
    },
    {
        "actual": 0.34,
        "predicted": 0.264213428
    },
    {
        "actual": 0.07,
        "predicted": 0.110417719
    },
    {
        "actual": 0.17,
        "predicted": 0.111828107
    },
    {
        "actual": 0.17,
        "predicted": 0.289965826
    },
    {
        "actual": 0.34,
        "predicted": 0.363254009
    },
    {
        "actual": 0.07,
        "predicted": 0.139100681
    },
    {
        "actual": 0.35,
        "predicted": 0.159826462
    },
    {
        "actual": 0.04,
        "predicted": 0.10959096
    },
    {
        "actual": 1,
        "predicted": 0.976047435
    },
    {
        "actual": 0.48,
        "predicted": 0.319049871
    },
    {
        "actual": 0.03,
        "predicted": 0.105920949
    },
    {
        "actual": 0.07,
        "predicted": 0.115571653
    },
    {
        "actual": 0.05,
        "predicted": 0.107165057
    },
    {
        "actual": 0.12,
        "predicted": 0.237570852
    },
    {
        "actual": 0.04,
        "predicted": 0.123424287
    },
    {
        "actual": 0.08,
        "predicted": 0.128038551
    },
    {
        "actual": 0.1,
        "predicted": 0.112500164
    },
    {
        "actual": 0,
        "predicted": 0.100381264
    },
    {
        "actual": 0.04,
        "predicted": 0.09918987
    },
    {
        "actual": 0.02,
        "predicted": 0.121380681
    },
    {
        "actual": 0.18,
        "predicted": 0.157071579
    },
    {
        "actual": 0.58,
        "predicted": 0.594136156
    },
    {
        "actual": 0.08,
        "predicted": 0.174162889
    },
    {
        "actual": 0.04,
        "predicted": 0.108642185
    },
    {
        "actual": 0.09,
        "predicted": 0.077708513
    },
    {
        "actual": 0.06,
        "predicted": 0.103885979
    },
    {
        "actual": 0.08,
        "predicted": 0.133652613
    },
    {
        "actual": 0.08,
        "predicted": 0.109484943
    },
    {
        "actual": 0.1,
        "predicted": 0.13201922
    },
    {
        "actual": 0.03,
        "predicted": 0.109356799
    },
    {
        "actual": 0.28,
        "predicted": 0.18034342
    },
    {
        "actual": 0.06,
        "predicted": 0.112487838
    },
    {
        "actual": 0.04,
        "predicted": 0.105874942
    },
    {
        "actual": 0.03,
        "predicted": 0.136754813
    },
    {
        "actual": 0.07,
        "predicted": 0.086745905
    },
    {
        "actual": 0.41,
        "predicted": 0.212529427
    },
    {
        "actual": 0.22,
        "predicted": 0.271654026
    },
    {
        "actual": 1,
        "predicted": 0.933112221
    },
    {
        "actual": 0.1,
        "predicted": 0.136865366
    },
    {
        "actual": 0.06,
        "predicted": 0.140435543
    },
    {
        "actual": 0.45,
        "predicted": 0.440489128
    },
    {
        "actual": 0.32,
        "predicted": 0.409236136
    },
    {
        "actual": 0.14,
        "predicted": 0.224159235
    },
    {
        "actual": 0.09,
        "predicted": 0.138006979
    },
    {
        "actual": 0.07,
        "predicted": 0.133188177
    },
    {
        "actual": 0.6,
        "predicted": 0.569718304
    },
    {
        "actual": 0.18,
        "predicted": 0.319340128
    },
    {
        "actual": 0.03,
        "predicted": 0.118770747
    },
    {
        "actual": 0.04,
        "predicted": 0.113425078
    },
    {
        "actual": 0.51,
        "predicted": 0.375917197
    },
    {
        "actual": 0.83,
        "predicted": 0.108589653
    },
    {
        "actual": 0.02,
        "predicted": 0.102768748
    },
    {
        "actual": 0.08,
        "predicted": 0.160579899
    },
    {
        "actual": 0.26,
        "predicted": 0.464860164
    },
    {
        "actual": 0.23,
        "predicted": 0.239973299
    },
    {
        "actual": 0.49,
        "predicted": 0.57105618
    },
    {
        "actual": 0.03,
        "predicted": 0.1300139
    },
    {
        "actual": 0.04,
        "predicted": 0.108397936
    },
    {
        "actual": 0.15,
        "predicted": 0.140021253
    },
    {
        "actual": 0.54,
        "predicted": 0.50582384
    },
    {
        "actual": 0.31,
        "predicted": 0.263950808
    },
    {
        "actual": 0.39,
        "predicted": 0.298759088
    },
    {
        "actual": 0.43,
        "predicted": 0.263678009
    },
    {
        "actual": 0.5,
        "predicted": 0.303532874
    },
    {
        "actual": 0.03,
        "predicted": 0.100648014
    },
    {
        "actual": 0.08,
        "predicted": 0.069940703
    },
    {
        "actual": 0.04,
        "predicted": 0.128650559
    },
    {
        "actual": 0.22,
        "predicted": 0.301394869
    },
    {
        "actual": 0.58,
        "predicted": 0.394574847
    },
    {
        "actual": 0.01,
        "predicted": 0.093073159
    },
    {
        "actual": 0.1,
        "predicted": 0.101530808
    },
    {
        "actual": 0.39,
        "predicted": 0.352586875
    },
    {
        "actual": 0.09,
        "predicted": 0.167901415
    },
    {
        "actual": 0.18,
        "predicted": 0.417299591
    },
    {
        "actual": 0.8,
        "predicted": 0.699651108
    },
    {
        "actual": 1,
        "predicted": 0.37103762
    },
    {
        "actual": 0.4,
        "predicted": 0.700054775
    },
    {
        "actual": 0.05,
        "predicted": 0.344241871
    },
    {
        "actual": 0.21,
        "predicted": 0.331084006
    },
    {
        "actual": 0.68,
        "predicted": 0.290616427
    },
    {
        "actual": 0.32,
        "predicted": 0.456126625
    },
    {
        "actual": 0.2,
        "predicted": 0.152141648
    },
    {
        "actual": 0.62,
        "predicted": 0.401756102
    },
    {
        "actual": 0.53,
        "predicted": 0.530353934
    },
    {
        "actual": 0.25,
        "predicted": 0.316824573
    },
    {
        "actual": 1,
        "predicted": 1.006161661
    },
    {
        "actual": 0.2,
        "predicted": 0.263832174
    },
    {
        "actual": 0.21,
        "predicted": 0.241686044
    },
    {
        "actual": 1,
        "predicted": 0.90020966
    },
    {
        "actual": 0.1,
        "predicted": 0.170859816
    },
    {
        "actual": 0.14,
        "predicted": 0.103407182
    },
    {
        "actual": 0.01,
        "predicted": 0.101413865
    },
    {
        "actual": 0.13,
        "predicted": 0.12005056
    },
    {
        "actual": 0.22,
        "predicted": 0.120103931
    },
    {
        "actual": 0.1,
        "predicted": 0.202268933
    },
    {
        "actual": 1,
        "predicted": 0.608336784
    },
    {
        "actual": 0.69,
        "predicted": 0.178608135
    },
    {
        "actual": 0.06,
        "predicted": 0.082299042
    },
    {
        "actual": 0.66,
        "predicted": 0.358198777
    },
    {
        "actual": 0.03,
        "predicted": 0.110425658
    },
    {
        "actual": 0.16,
        "predicted": 0.238203989
    },
    {
        "actual": 0,
        "predicted": 0.065730386
    },
    {
        "actual": 0.76,
        "predicted": 0.523785306
    },
    {
        "actual": 0.71,
        "predicted": 0.200104759
    },
    {
        "actual": 0.42,
        "predicted": 0.491003549
    },
    {
        "actual": 0.03,
        "predicted": 0.130320807
    },
    {
        "actual": 0.53,
        "predicted": 0.760909257
    },
    {
        "actual": 0.06,
        "predicted": 0.114183811
    },
    {
        "actual": 0.18,
        "predicted": 0.515457258
    },
    {
        "actual": 0.04,
        "predicted": 0.114985277
    },
    {
        "actual": 0.1,
        "predicted": 0.135494558
    },
    {
        "actual": 0.06,
        "predicted": 0.19892816
    },
    {
        "actual": 0.04,
        "predicted": 0.089075172
    },
    {
        "actual": 0.16,
        "predicted": 0.302594535
    },
    {
        "actual": 0.24,
        "predicted": 0.257671026
    },
    {
        "actual": 0.2,
        "predicted": 0.147509151
    },
    {
        "actual": 0.35,
        "predicted": 0.280928951
    },
    {
        "actual": 0.04,
        "predicted": 0.114179053
    },
    {
        "actual": 0.05,
        "predicted": 0.099865426
    },
    {
        "actual": 0.72,
        "predicted": 0.807888847
    },
    {
        "actual": 0.06,
        "predicted": 0.161367593
    },
    {
        "actual": 0.62,
        "predicted": 0.26665974
    },
    {
        "actual": 1,
        "predicted": 0.802025585
    },
    {
        "actual": 0.03,
        "predicted": 0.103711894
    },
    {
        "actual": 0.05,
        "predicted": 0.09927722
    },
    {
        "actual": 0.63,
        "predicted": 0.417493667
    },
    {
        "actual": 0.05,
        "predicted": 0.104297901
    },
    {
        "actual": 0.2,
        "predicted": 0.305761753
    },
    {
        "actual": 0.07,
        "predicted": 0.298902075
    },
    {
        "actual": 0.64,
        "predicted": 0.613295344
    },
    {
        "actual": 0.1,
        "predicted": 0.114347896
    },
    {
        "actual": 0.11,
        "predicted": 0.121049681
    },
    {
        "actual": 1,
        "predicted": 0.900106316
    },
    {
        "actual": 0.07,
        "predicted": 0.197631572
    },
    {
        "actual": 0.02,
        "predicted": 0.094865383
    },
    {
        "actual": 0.55,
        "predicted": 0.527771025
    },
    {
        "actual": 0.04,
        "predicted": 0.104200953
    },
    {
        "actual": 1,
        "predicted": 0.520429418
    },
    {
        "actual": 0.37,
        "predicted": 0.208566892
    },
    {
        "actual": 0.33,
        "predicted": 0.374790897
    },
    {
        "actual": 0.09,
        "predicted": 0.159223111
    },
    {
        "actual": 0.28,
        "predicted": 0.123205499
    },
    {
        "actual": 0.12,
        "predicted": 0.148976248
    },
    {
        "actual": 0.15,
        "predicted": 0.194555852
    },
    {
        "actual": 0.03,
        "predicted": 0.135585135
    },
    {
        "actual": 0.22,
        "predicted": 0.324894796
    },
    {
        "actual": 0.05,
        "predicted": 0.111124279
    },
    {
        "actual": 0.78,
        "predicted": 0.457828324
    },
    {
        "actual": 0.46,
        "predicted": 0.318721534
    },
    {
        "actual": 0.34,
        "predicted": 0.415832505
    },
    {
        "actual": 0.22,
        "predicted": 0.275759357
    },
    {
        "actual": 0.14,
        "predicted": 0.334730817
    },
    {
        "actual": 0.37,
        "predicted": 0.346751712
    },
    {
        "actual": 0.06,
        "predicted": 0.097303518
    },
    {
        "actual": 0.24,
        "predicted": 0.295993361
    },
    {
        "actual": 0.4,
        "predicted": 0.151005812
    },
    {
        "actual": 0.22,
        "predicted": 0.156310937
    },
    {
        "actual": 0.69,
        "predicted": 0.410578865
    },
    {
        "actual": 0.11,
        "predicted": 0.211498223
    },
    {
        "actual": 0.02,
        "predicted": 0.100704004
    },
    {
        "actual": 0.25,
        "predicted": 0.46312816
    },
    {
        "actual": 0.1,
        "predicted": 0.14125939
    },
    {
        "actual": 0.05,
        "predicted": 0.207930698
    },
    {
        "actual": 0.16,
        "predicted": 0.259579625
    },
    {
        "actual": 0.04,
        "predicted": 0.104966171
    },
    {
        "actual": 0.01,
        "predicted": 0.100907841
    },
    {
        "actual": 0.29,
        "predicted": 0.51069256
    },
    {
        "actual": 0.1,
        "predicted": 0.103919069
    },
    {
        "actual": 0.05,
        "predicted": 0.102848584
    },
    {
        "actual": 0.36,
        "predicted": 0.530328498
    },
    {
        "actual": 0.22,
        "predicted": 0.345094387
    },
    {
        "actual": 0.17,
        "predicted": 0.266993706
    },
    {
        "actual": 0.15,
        "predicted": 0.291182213
    },
    {
        "actual": 0.14,
        "predicted": 0.088620057
    },
    {
        "actual": 1,
        "predicted": 0.803019786
    },
    {
        "actual": 0.1,
        "predicted": 0.114814021
    },
    {
        "actual": 0.24,
        "predicted": 0.193552957
    },
    {
        "actual": 0.12,
        "predicted": 0.109906148
    },
    {
        "actual": 0.04,
        "predicted": 0.114807683
    },
    {
        "actual": 0.21,
        "predicted": 0.342348372
    },
    {
        "actual": 0.7,
        "predicted": 0.619185306
    },
    {
        "actual": 0.13,
        "predicted": 0.393875933
    },
    {
        "actual": 0.13,
        "predicted": 0.159149982
    },
    {
        "actual": 0.24,
        "predicted": 0.405039408
    },
    {
        "actual": 0.04,
        "predicted": 0.095824545
    },
    {
        "actual": 0.14,
        "predicted": 0.110261156
    },
    {
        "actual": 0.22,
        "predicted": 0.268991887
    },
    {
        "actual": 0.17,
        "predicted": 0.221832046
    },
    {
        "actual": 0.22,
        "predicted": 0.237644148
    },
    {
        "actual": 0.21,
        "predicted": 0.151445522
    },
    {
        "actual": 0.03,
        "predicted": 0.113169912
    },
    {
        "actual": 0.2,
        "predicted": 0.17895769
    },
    {
        "actual": 0.09,
        "predicted": 0.137019172
    },
    {
        "actual": 0.11,
        "predicted": 0.17049582
    },
    {
        "actual": 0,
        "predicted": 0.093253403
    },
    {
        "actual": 0.13,
        "predicted": 0.150291462
    },
    {
        "actual": 0.17,
        "predicted": 0.141948391
    },
    {
        "actual": 0.46,
        "predicted": 0.526771265
    },
    {
        "actual": 0.24,
        "predicted": 0.314814587
    },
    {
        "actual": 0.08,
        "predicted": 0.1957602
    },
    {
        "actual": 0.66,
        "predicted": 0.435470803
    },
    {
        "actual": 0.25,
        "predicted": 0.539514204
    },
    {
        "actual": 0.07,
        "predicted": 0.145321015
    },
    {
        "actual": 0.56,
        "predicted": 0.469662188
    },
    {
        "actual": 0,
        "predicted": 0.103217314
    },
    {
        "actual": 0.04,
        "predicted": 0.135873147
    },
    {
        "actual": 0.15,
        "predicted": 0.110909596
    },
    {
        "actual": 0.41,
        "predicted": 0.509677368
    },
    {
        "actual": 0.2,
        "predicted": 0.169490339
    },
    {
        "actual": 0.06,
        "predicted": 0.132089102
    },
    {
        "actual": 0.2,
        "predicted": 0.2124642
    },
    {
        "actual": 0.05,
        "predicted": 0.103418069
    },
    {
        "actual": 0.18,
        "predicted": 0.291464541
    },
    {
        "actual": 0.07,
        "predicted": 0.108752562
    },
    {
        "actual": 0.91,
        "predicted": 0.474539728
    },
    {
        "actual": 0.15,
        "predicted": 0.201234745
    },
    {
        "actual": 0.13,
        "predicted": 0.179930874
    },
    {
        "actual": 0.03,
        "predicted": 0.12690498
    },
    {
        "actual": 0.05,
        "predicted": 0.09754648
    },
    {
        "actual": 0.36,
        "predicted": 0.55504427
    },
    {
        "actual": 0.86,
        "predicted": 0.481480915
    },
    {
        "actual": 0.11,
        "predicted": 0.146421525
    },
    {
        "actual": 0.18,
        "predicted": 0.143438221
    },
    {
        "actual": 0.06,
        "predicted": 0.087656037
    },
    {
        "actual": 0.28,
        "predicted": 0.179617946
    },
    {
        "actual": 0.01,
        "predicted": 0.103432802
    },
    {
        "actual": 0.05,
        "predicted": 0.143190592
    },
    {
        "actual": 0.52,
        "predicted": 0.587740565
    },
    {
        "actual": 0.21,
        "predicted": 0.298311004
    },
    {
        "actual": 0.04,
        "predicted": 0.101201942
    },
    {
        "actual": 0.55,
        "predicted": 0.450069251
    },
    {
        "actual": 0.01,
        "predicted": 0.122291629
    },
    {
        "actual": 0.36,
        "predicted": 0.352516304
    },
    {
        "actual": 0.36,
        "predicted": 0.213352178
    },
    {
        "actual": 0.07,
        "predicted": 0.120752409
    },
    {
        "actual": 0.85,
        "predicted": 0.980195369
    },
    {
        "actual": 0.08,
        "predicted": 0.080665127
    },
    {
        "actual": 0.12,
        "predicted": 0.109402739
    },
    {
        "actual": 0.25,
        "predicted": 0.267211687
    },
    {
        "actual": 1,
        "predicted": 0.825737477
    },
    {
        "actual": 0.04,
        "predicted": 0.122053659
    },
    {
        "actual": 0.36,
        "predicted": 0.194082507
    },
    {
        "actual": 0.41,
        "predicted": 0.211441102
    },
    {
        "actual": 0.33,
        "predicted": 0.38418865
    },
    {
        "actual": 0.33,
        "predicted": 0.257546778
    },
    {
        "actual": 0.19,
        "predicted": 0.1226946
    },
    {
        "actual": 0.14,
        "predicted": 0.144831881
    },
    {
        "actual": 0.07,
        "predicted": 0.142243212
    },
    {
        "actual": 0.15,
        "predicted": 0.174283684
    },
    {
        "actual": 0.08,
        "predicted": 0.113208715
    },
    {
        "actual": 0.1,
        "predicted": 0.123041462
    },
    {
        "actual": 0.04,
        "predicted": 0.122072497
    },
    {
        "actual": 0.04,
        "predicted": 0.105328717
    },
    {
        "actual": 0.08,
        "predicted": 0.153636975
    },
    {
        "actual": 0.14,
        "predicted": 0.176127815
    },
    {
        "actual": 0.04,
        "predicted": 0.083119075
    },
    {
        "actual": 0.16,
        "predicted": 0.101578519
    },
    {
        "actual": 0.27,
        "predicted": 0.210351834
    },
    {
        "actual": 0.13,
        "predicted": 0.173937623
    },
    {
        "actual": 0.09,
        "predicted": 0.108031712
    },
    {
        "actual": 0.09,
        "predicted": 0.110177562
    },
    {
        "actual": 0.56,
        "predicted": 0.649700882
    },
    {
        "actual": 0.52,
        "predicted": 0.217030675
    },
    {
        "actual": 0.12,
        "predicted": 0.156498435
    },
    {
        "actual": 0.12,
        "predicted": 0.132713759
    },
    {
        "actual": 0.41,
        "predicted": 0.449593492
    },
    {
        "actual": 0.87,
        "predicted": 0.790861116
    },
    {
        "actual": 0.01,
        "predicted": 0.094512225
    },
    {
        "actual": 0.06,
        "predicted": 0.108374632
    },
    {
        "actual": 0.03,
        "predicted": 0.096521029
    },
    {
        "actual": 0.11,
        "predicted": 0.236449758
    },
    {
        "actual": 0.15,
        "predicted": 0.315081202
    },
    {
        "actual": 0.24,
        "predicted": 0.210764534
    },
    {
        "actual": 0.21,
        "predicted": 0.362986822
    },
    {
        "actual": 0.03,
        "predicted": 0.277780345
    },
    {
        "actual": 0.87,
        "predicted": 0.828124866
    },
    {
        "actual": 0.39,
        "predicted": 0.483348869
    },
    {
        "actual": 0.23,
        "predicted": 0.130015517
    },
    {
        "actual": 0.1,
        "predicted": 0.151538056
    },
    {
        "actual": 0.59,
        "predicted": 0.586382215
    },
    {
        "actual": 0.24,
        "predicted": 0.114710708
    },
    {
        "actual": 0.13,
        "predicted": 0.292233796
    },
    {
        "actual": 0.11,
        "predicted": 0.139308436
    },
    {
        "actual": 0.59,
        "predicted": 0.293210975
    },
    {
        "actual": 0.01,
        "predicted": 0.10180053
    },
    {
        "actual": 0.41,
        "predicted": 0.268453263
    },
    {
        "actual": 0.13,
        "predicted": 0.271661381
    },
    {
        "actual": 0.24,
        "predicted": 0.171740823
    },
    {
        "actual": 0.1,
        "predicted": 0.196737982
    },
    {
        "actual": 0.4,
        "predicted": 0.270876178
    },
    {
        "actual": 0.82,
        "predicted": 0.133836956
    },
    {
        "actual": 0.09,
        "predicted": 0.113643195
    },
    {
        "actual": 0.18,
        "predicted": 0.161314626
    },
    {
        "actual": 0.16,
        "predicted": 0.465161425
    },
    {
        "actual": 0.13,
        "predicted": 0.123571909
    },
    {
        "actual": 0.33,
        "predicted": 0.429728555
    },
    {
        "actual": 0.06,
        "predicted": 0.133159484
    },
    {
        "actual": 0.1,
        "predicted": 0.104109245
    },
    {
        "actual": 0.04,
        "predicted": 0.114114609
    },
    {
        "actual": 0.23,
        "predicted": 0.492927058
    },
    {
        "actual": 0.08,
        "predicted": 0.160280056
    },
    {
        "actual": 0.1,
        "predicted": 0.148544035
    },
    {
        "actual": 0.01,
        "predicted": 0.107499679
    },
    {
        "actual": 0.1,
        "predicted": 0.23491644
    },
    {
        "actual": 0.17,
        "predicted": 0.111326803
    },
    {
        "actual": 0.89,
        "predicted": 0.81412524
    },
    {
        "actual": 0.85,
        "predicted": 0.749927544
    },
    {
        "actual": 0.14,
        "predicted": 0.21252495
    },
    {
        "actual": 0.32,
        "predicted": 0.508723639
    },
    {
        "actual": 0.03,
        "predicted": 0.188837645
    },
    {
        "actual": 0.09,
        "predicted": 0.11257487
    },
    {
        "actual": 0.2,
        "predicted": 0.099652325
    },
    {
        "actual": 0.54,
        "predicted": 0.383329253
    },
    {
        "actual": 0.15,
        "predicted": 0.176306256
    },
    {
        "actual": 0.18,
        "predicted": 0.148480531
    },
    {
        "actual": 0.24,
        "predicted": 0.298285387
    },
    {
        "actual": 0.94,
        "predicted": 0.862017467
    },
    {
        "actual": 0.65,
        "predicted": 0.14130917
    },
    {
        "actual": 0.06,
        "predicted": 0.10386276
    },
    {
        "actual": 0.05,
        "predicted": 0.101599355
    },
    {
        "actual": 0.26,
        "predicted": 0.143549142
    },
    {
        "actual": 0.12,
        "predicted": 0.22661883
    },
    {
        "actual": 0.03,
        "predicted": 0.093382602
    },
    {
        "actual": 0.41,
        "predicted": 0.413258078
    },
    {
        "actual": 0.01,
        "predicted": 0.132745435
    },
    {
        "actual": 0.15,
        "predicted": 0.10295444
    },
    {
        "actual": 0.15,
        "predicted": 0.134722316
    },
    {
        "actual": 0.04,
        "predicted": 0.108703572
    },
    {
        "actual": 0.03,
        "predicted": 0.100753292
    },
    {
        "actual": 0.06,
        "predicted": 0.157738711
    },
    {
        "actual": 0.09,
        "predicted": 0.105922335
    },
    {
        "actual": 0.28,
        "predicted": 0.187494725
    },
    {
        "actual": 0.07,
        "predicted": 0.103816016
    },
    {
        "actual": 0.16,
        "predicted": 0.153093919
    },
    {
        "actual": 0.41,
        "predicted": 0.11429713
    },
    {
        "actual": 0.22,
        "predicted": 0.209325775
    },
    {
        "actual": 0.03,
        "predicted": 0.10006193
    },
    {
        "actual": 0.35,
        "predicted": 0.370494651
    },
    {
        "actual": 0.63,
        "predicted": 0.529850582
    },
    {
        "actual": 0.09,
        "predicted": 0.190018859
    },
    {
        "actual": 0.25,
        "predicted": 0.264158872
    },
    {
        "actual": 0.22,
        "predicted": 0.166231022
    },
    {
        "actual": 1,
        "predicted": 0.899937967
    },
    {
        "actual": 0.36,
        "predicted": 0.54408639
    },
    {
        "actual": 0.81,
        "predicted": 0.749203973
    },
    {
        "actual": 0.27,
        "predicted": 0.386513161
    },
    {
        "actual": 0.07,
        "predicted": 0.110682785
    },
    {
        "actual": 0.04,
        "predicted": 0.132860837
    },
    {
        "actual": 0.61,
        "predicted": 0.37084133
    },
    {
        "actual": 0.24,
        "predicted": 0.494328344
    },
    {
        "actual": 0.95,
        "predicted": 0.709007384
    },
    {
        "actual": 0.81,
        "predicted": 0.609223595
    },
    {
        "actual": 0.12,
        "predicted": 0.181935901
    },
    {
        "actual": 1,
        "predicted": 1.021521181
    },
    {
        "actual": 0.05,
        "predicted": 0.109432022
    },
    {
        "actual": 0.38,
        "predicted": 0.492766358
    },
    {
        "actual": 0.37,
        "predicted": 0.399456065
    },
    {
        "actual": 0.53,
        "predicted": 0.71617155
    },
    {
        "actual": 0.23,
        "predicted": 0.18425048
    },
    {
        "actual": 0.26,
        "predicted": 0.305189615
    },
    {
        "actual": 0.04,
        "predicted": 0.110633375
    },
    {
        "actual": 0.18,
        "predicted": 0.189200128
    },
    {
        "actual": 0.62,
        "predicted": 0.519929583
    },
    {
        "actual": 0.5,
        "predicted": 0.298822371
    },
    {
        "actual": 0.14,
        "predicted": 0.11376598
    },
    {
        "actual": 0.06,
        "predicted": 0.104639971
    },
    {
        "actual": 0.54,
        "predicted": 0.606789093
    },
    {
        "actual": 0.61,
        "predicted": 0.709970642
    },
    {
        "actual": 0.35,
        "predicted": 0.769136981
    },
    {
        "actual": 0.38,
        "predicted": 0.289408409
    },
    {
        "actual": 0.72,
        "predicted": 0.740603408
    },
    {
        "actual": 0.04,
        "predicted": 0.099923876
    },
    {
        "actual": 0.09,
        "predicted": 0.218326146
    },
    {
        "actual": 0.51,
        "predicted": 0.310730789
    },
    {
        "actual": 0.54,
        "predicted": 0.543863173
    },
    {
        "actual": 0.45,
        "predicted": 0.531694406
    },
    {
        "actual": 0.1,
        "predicted": 0.219048279
    },
    {
        "actual": 0.07,
        "predicted": 0.248554236
    },
    {
        "actual": 0.01,
        "predicted": 0.104782844
    },
    {
        "actual": 0.16,
        "predicted": 0.197905731
    },
    {
        "actual": 0.29,
        "predicted": 0.181799113
    },
    {
        "actual": 0.42,
        "predicted": 0.319086142
    },
    {
        "actual": 0.18,
        "predicted": 0.243176772
    },
    {
        "actual": 0.36,
        "predicted": 0.284567612
    },
    {
        "actual": 0.1,
        "predicted": 0.120014816
    },
    {
        "actual": 0.03,
        "predicted": 0.098092919
    },
    {
        "actual": 0.62,
        "predicted": 0.46338461
    },
    {
        "actual": 0.08,
        "predicted": 0.112102291
    },
    {
        "actual": 0.12,
        "predicted": 0.180479908
    },
    {
        "actual": 0.23,
        "predicted": 0.164029724
    },
    {
        "actual": 0.18,
        "predicted": 0.151441705
    },
    {
        "actual": 0.28,
        "predicted": 0.274525239
    },
    {
        "actual": 0.09,
        "predicted": 0.085779678
    },
    {
        "actual": 0.2,
        "predicted": 0.199761375
    },
    {
        "actual": 0.09,
        "predicted": 0.127038653
    },
    {
        "actual": 0.16,
        "predicted": 0.1448944
    },
    {
        "actual": 0.06,
        "predicted": 0.111065303
    },
    {
        "actual": 0.23,
        "predicted": 0.17607692
    },
    {
        "actual": 0.82,
        "predicted": 0.605789225
    },
    {
        "actual": 0.15,
        "predicted": 0.146903136
    },
    {
        "actual": 0.02,
        "predicted": 0.089335792
    },
    {
        "actual": 0.9,
        "predicted": 0.876324187
    },
    {
        "actual": 0.34,
        "predicted": 0.667596348
    },
    {
        "actual": 0.01,
        "predicted": 0.137003357
    },
    {
        "actual": 0.21,
        "predicted": 0.313425473
    },
    {
        "actual": 0.06,
        "predicted": 0.137424376
    },
    {
        "actual": 0.59,
        "predicted": 0.241979132
    },
    {
        "actual": 0.66,
        "predicted": 0.760005796
    },
    {
        "actual": 0.2,
        "predicted": 0.214238691
    },
    {
        "actual": 0.1,
        "predicted": 0.124806911
    },
    {
        "actual": 0.4,
        "predicted": 0.448194569
    },
    {
        "actual": 0.17,
        "predicted": 0.231669665
    },
    {
        "actual": 0.04,
        "predicted": 0.114003328
    },
    {
        "actual": 0.28,
        "predicted": 0.271974439
    },
    {
        "actual": 0.13,
        "predicted": 0.137961249
    },
    {
        "actual": 0.27,
        "predicted": 0.37012595
    },
    {
        "actual": 0.23,
        "predicted": 0.113648192
    },
    {
        "actual": 0.59,
        "predicted": 0.482663718
    },
    {
        "actual": 0.12,
        "predicted": 0.269856793
    },
    {
        "actual": 0.01,
        "predicted": 0.10584464
    },
    {
        "actual": 0.23,
        "predicted": 0.293825348
    },
    {
        "actual": 0.02,
        "predicted": 0.097163461
    },
    {
        "actual": 0.17,
        "predicted": 0.129149444
    },
    {
        "actual": 0.07,
        "predicted": 0.091858181
    },
    {
        "actual": 0.05,
        "predicted": 0.107050654
    },
    {
        "actual": 0.12,
        "predicted": 0.22833834
    },
    {
        "actual": 0.1,
        "predicted": 0.175451433
    },
    {
        "actual": 0.11,
        "predicted": 0.22422485
    },
    {
        "actual": 0.1,
        "predicted": 0.091706352
    },
    {
        "actual": 0.11,
        "predicted": 0.115568663
    },
    {
        "actual": 0.16,
        "predicted": 0.207361744
    },
    {
        "actual": 0.05,
        "predicted": 0.122341858
    },
    {
        "actual": 0.24,
        "predicted": 0.227090745
    },
    {
        "actual": 0.33,
        "predicted": 0.350296247
    },
    {
        "actual": 0.19,
        "predicted": 0.109049866
    },
    {
        "actual": 0.19,
        "predicted": 0.249877973
    },
    {
        "actual": 0.21,
        "predicted": 0.14661903
    },
    {
        "actual": 0.16,
        "predicted": 0.131392131
    },
    {
        "actual": 0.19,
        "predicted": 0.313921676
    },
    {
        "actual": 0.04,
        "predicted": 0.109202193
    },
    {
        "actual": 0.05,
        "predicted": 0.125130218
    },
    {
        "actual": 0.34,
        "predicted": 0.324027476
    },
    {
        "actual": 0.23,
        "predicted": 0.329693291
    },
    {
        "actual": 0.1,
        "predicted": 0.120983932
    },
    {
        "actual": 0.24,
        "predicted": 0.359619883
    },
    {
        "actual": 0.52,
        "predicted": 0.36366701
    },
    {
        "actual": 0.03,
        "predicted": 0.087930833
    },
    {
        "actual": 0.36,
        "predicted": 0.426186766
    },
    {
        "actual": 0,
        "predicted": 0.128294425
    },
    {
        "actual": 0.24,
        "predicted": 0.177445199
    },
    {
        "actual": 0.3,
        "predicted": 0.197466023
    },
    {
        "actual": 1,
        "predicted": 0.908706763
    },
    {
        "actual": 0.43,
        "predicted": 0.383376516
    },
    {
        "actual": 0.11,
        "predicted": 0.142719028
    },
    {
        "actual": 0.41,
        "predicted": 0.194621695
    },
    {
        "actual": 0.22,
        "predicted": 0.407140105
    },
    {
        "actual": 0.7,
        "predicted": 0.508001532
    },
    {
        "actual": 0.1,
        "predicted": 0.179977632
    },
    {
        "actual": 0.61,
        "predicted": 0.544783929
    },
    {
        "actual": 0.06,
        "predicted": 0.126994811
    },
    {
        "actual": 0.12,
        "predicted": 0.131705442
    },
    {
        "actual": 0.41,
        "predicted": 0.34422032
    },
    {
        "actual": 0.04,
        "predicted": 0.109813377
    },
    {
        "actual": 0.01,
        "predicted": 0.095421999
    },
    {
        "actual": 0.04,
        "predicted": 0.094049394
    },
    {
        "actual": 0.18,
        "predicted": 0.343067523
    },
    {
        "actual": 0.47,
        "predicted": 0.466508748
    },
    {
        "actual": 0.03,
        "predicted": 0.104105388
    },
    {
        "actual": 0.21,
        "predicted": 0.10966807
    },
    {
        "actual": 0.13,
        "predicted": 0.187910514
    },
    {
        "actual": 0.25,
        "predicted": 0.202211717
    },
    {
        "actual": 0.02,
        "predicted": 0.093712439
    },
    {
        "actual": 0.08,
        "predicted": 0.185573635
    },
    {
        "actual": 0.05,
        "predicted": 0.097198993
    },
    {
        "actual": 0.05,
        "predicted": 0.168441692
    },
    {
        "actual": 0.02,
        "predicted": 0.109076009
    },
    {
        "actual": 0.27,
        "predicted": 0.382377405
    },
    {
        "actual": 0.06,
        "predicted": 0.147556858
    },
    {
        "actual": 0.5,
        "predicted": 0.399720447
    },
    {
        "actual": 0.28,
        "predicted": 0.370062093
    },
    {
        "actual": 0.12,
        "predicted": 0.162789307
    },
    {
        "actual": 0.1,
        "predicted": 0.13635083
    },
    {
        "actual": 0.09,
        "predicted": 0.153930909
    },
    {
        "actual": 0.21,
        "predicted": 0.274889652
    },
    {
        "actual": 0.02,
        "predicted": 0.120246933
    },
    {
        "actual": 1,
        "predicted": 0.694415058
    },
    {
        "actual": 0.24,
        "predicted": 0.324672853
    },
    {
        "actual": 0.13,
        "predicted": 0.178147853
    },
    {
        "actual": 0.1,
        "predicted": 0.142767872
    },
    {
        "actual": 0.12,
        "predicted": 0.226477417
    },
    {
        "actual": 0.06,
        "predicted": 0.111830518
    },
    {
        "actual": 0.12,
        "predicted": 0.156123207
    },
    {
        "actual": 0.06,
        "predicted": 0.084760017
    },
    {
        "actual": 0.22,
        "predicted": 0.10469724
    },
    {
        "actual": 0.15,
        "predicted": 0.305223586
    },
    {
        "actual": 0.03,
        "predicted": 0.120172971
    },
    {
        "actual": 0.3,
        "predicted": 0.690481947
    },
    {
        "actual": 0.02,
        "predicted": 0.188776795
    },
    {
        "actual": 0.05,
        "predicted": 0.147226752
    },
    {
        "actual": 0.02,
        "predicted": 0.097641788
    },
    {
        "actual": 0.02,
        "predicted": 0.107018132
    },
    {
        "actual": 0.07,
        "predicted": 0.135127521
    },
    {
        "actual": 0.26,
        "predicted": 0.302457015
    },
    {
        "actual": 1,
        "predicted": 0.627016999
    },
    {
        "actual": 0.35,
        "predicted": 0.229650447
    },
    {
        "actual": 0.08,
        "predicted": 0.129531049
    },
    {
        "actual": 0.03,
        "predicted": 0.098692502
    },
    {
        "actual": 0.02,
        "predicted": 0.098760559
    },
    {
        "actual": 0.03,
        "predicted": 0.098588752
    },
    {
        "actual": 0.11,
        "predicted": 0.110280822
    },
    {
        "actual": 0.29,
        "predicted": 0.287645151
    },
    {
        "actual": 0.79,
        "predicted": 0.408874116
    },
    {
        "actual": 0.13,
        "predicted": 0.201326004
    },
    {
        "actual": 0.02,
        "predicted": 0.120375997
    },
    {
        "actual": 0.01,
        "predicted": 0.110328729
    },
    {
        "actual": 0.23,
        "predicted": 0.231551974
    },
    {
        "actual": 1,
        "predicted": 0.846377694
    },
    {
        "actual": 0.33,
        "predicted": 0.232621163
    },
    {
        "actual": 0.58,
        "predicted": 0.37157831
    },
    {
        "actual": 0.18,
        "predicted": 0.186779394
    },
    {
        "actual": 0.5,
        "predicted": 0.457284673
    },
    {
        "actual": 0.4,
        "predicted": 0.302090306
    },
    {
        "actual": 0.34,
        "predicted": 0.225831138
    },
    {
        "actual": 0.05,
        "predicted": 0.108945266
    },
    {
        "actual": 0.04,
        "predicted": 0.097168181
    },
    {
        "actual": 0.06,
        "predicted": 0.160292951
    },
    {
        "actual": 0.04,
        "predicted": 0.106434919
    },
    {
        "actual": 0.05,
        "predicted": 0.134865167
    },
    {
        "actual": 0.01,
        "predicted": 0.099600123
    },
    {
        "actual": 0.31,
        "predicted": 0.205209601
    },
    {
        "actual": 0.62,
        "predicted": 0.528721105
    },
    {
        "actual": 0.2,
        "predicted": 0.246344324
    },
    {
        "actual": 0.6,
        "predicted": 0.467492077
    },
    {
        "actual": 0.97,
        "predicted": 0.456694417
    },
    {
        "actual": 0.28,
        "predicted": 0.236022418
    },
    {
        "actual": 0.13,
        "predicted": 0.112743156
    },
    {
        "actual": 0.07,
        "predicted": 0.242235363
    },
    {
        "actual": 0.26,
        "predicted": 0.250314257
    },
    {
        "actual": 0.07,
        "predicted": 0.102017651
    },
    {
        "actual": 0.29,
        "predicted": 0.18999823
    },
    {
        "actual": 0.04,
        "predicted": 0.157481774
    },
    {
        "actual": 0.85,
        "predicted": 0.505725418
    },
    {
        "actual": 0.76,
        "predicted": 0.623723106
    },
    {
        "actual": 0.17,
        "predicted": 0.328571713
    },
    {
        "actual": 0.65,
        "predicted": 0.46032403
    },
    {
        "actual": 0.54,
        "predicted": 0.590573585
    },
    {
        "actual": 0.36,
        "predicted": 0.380207348
    },
    {
        "actual": 0.13,
        "predicted": 0.090179072
    },
    {
        "actual": 0.18,
        "predicted": 0.109359658
    },
    {
        "actual": 0.35,
        "predicted": 0.412699284
    },
    {
        "actual": 0.06,
        "predicted": 0.132587179
    },
    {
        "actual": 0.28,
        "predicted": 0.329784197
    },
    {
        "actual": 0.28,
        "predicted": 0.180626411
    },
    {
        "actual": 0.08,
        "predicted": 0.122352412
    },
    {
        "actual": 0.14,
        "predicted": 0.116419853
    },
    {
        "actual": 0.1,
        "predicted": 0.140970222
    },
    {
        "actual": 0.06,
        "predicted": 0.150067321
    },
    {
        "actual": 0.06,
        "predicted": 0.115535741
    },
    {
        "actual": 0.48,
        "predicted": 0.386561813
    },
    {
        "actual": 0.09,
        "predicted": 0.150594108
    },
    {
        "actual": 0.19,
        "predicted": 0.284205164
    },
    {
        "actual": 0.26,
        "predicted": 0.268421603
    },
    {
        "actual": 0.02,
        "predicted": 0.09392211
    },
    {
        "actual": 0.08,
        "predicted": 0.105193975
    },
    {
        "actual": 0.22,
        "predicted": 0.172534761
    },
    {
        "actual": 0.2,
        "predicted": 0.102692251
    },
    {
        "actual": 0.03,
        "predicted": 0.113382682
    },
    {
        "actual": 0.03,
        "predicted": 0.094529439
    },
    {
        "actual": 0.02,
        "predicted": 0.092723996
    },
    {
        "actual": 0.11,
        "predicted": 0.160123959
    },
    {
        "actual": 0.08,
        "predicted": 0.16089183
    },
    {
        "actual": 0.24,
        "predicted": 0.157854137
    },
    {
        "actual": 0.22,
        "predicted": 0.23750656
    },
    {
        "actual": 0.5,
        "predicted": 0.226587876
    },
    {
        "actual": 0.26,
        "predicted": 0.308855289
    },
    {
        "actual": 0.09,
        "predicted": 0.131857621
    },
    {
        "actual": 0.02,
        "predicted": 0.072273247
    },
    {
        "actual": 0.55,
        "predicted": 0.128275254
    },
    {
        "actual": 0.18,
        "predicted": 0.123609928
    },
    {
        "actual": 0.09,
        "predicted": 0.123483213
    },
    {
        "actual": 0.09,
        "predicted": 0.125522177
    },
    {
        "actual": 0.46,
        "predicted": 0.38379656
    },
    {
        "actual": 0.04,
        "predicted": 0.120809656
    },
    {
        "actual": 0.07,
        "predicted": 0.106229449
    },
    {
        "actual": 1,
        "predicted": 0.712171224
    },
    {
        "actual": 0.04,
        "predicted": 0.095872354
    },
    {
        "actual": 0.04,
        "predicted": 0.116921388
    },
    {
        "actual": 0.13,
        "predicted": 0.096746215
    },
    {
        "actual": 0.16,
        "predicted": 0.299293061
    },
    {
        "actual": 0.04,
        "predicted": 0.139340729
    },
    {
        "actual": 0.12,
        "predicted": 0.07713259
    },
    {
        "actual": 0.09,
        "predicted": 0.091918587
    },
    {
        "actual": 0.53,
        "predicted": 0.507162372
    },
    {
        "actual": 0.14,
        "predicted": 0.12015939
    },
    {
        "actual": 0.1,
        "predicted": 0.185931814
    },
    {
        "actual": 0.45,
        "predicted": 0.425097358
    },
    {
        "actual": 0.03,
        "predicted": 0.106889572
    },
    {
        "actual": 0.28,
        "predicted": 0.113226198
    },
    {
        "actual": 0.15,
        "predicted": 0.133848044
    },
    {
        "actual": 0.39,
        "predicted": 0.231281818
    },
    {
        "actual": 0.03,
        "predicted": 0.116121955
    },
    {
        "actual": 0.23,
        "predicted": 0.253908433
    },
    {
        "actual": 0.1,
        "predicted": 0.246009498
    },
    {
        "actual": 0.22,
        "predicted": 0.248233925
    },
    {
        "actual": 0.26,
        "predicted": 0.190425952
    },
    {
        "actual": 0.03,
        "predicted": 0.104529978
    },
    {
        "actual": 0.43,
        "predicted": 0.401438918
    },
    {
        "actual": 0.11,
        "predicted": 0.14501014
    },
    {
        "actual": 0.1,
        "predicted": 0.118619112
    },
    {
        "actual": 0.03,
        "predicted": 0.10863788
    },
    {
        "actual": 0.07,
        "predicted": 0.101090882
    },
    {
        "actual": 0.16,
        "predicted": 0.14345995
    },
    {
        "actual": 0.06,
        "predicted": 0.101448523
    },
    {
        "actual": 0.18,
        "predicted": 0.136440785
    },
    {
        "actual": 0.06,
        "predicted": 0.109920783
    },
    {
        "actual": 0.2,
        "predicted": 0.13956672
    },
    {
        "actual": 0.14,
        "predicted": 0.248075116
    },
    {
        "actual": 0.15,
        "predicted": 0.154068263
    },
    {
        "actual": 0.04,
        "predicted": 0.114436864
    },
    {
        "actual": 0.16,
        "predicted": 0.30644651
    },
    {
        "actual": 0.64,
        "predicted": 0.739575276
    },
    {
        "actual": 0.2,
        "predicted": 0.100022287
    },
    {
        "actual": 0.65,
        "predicted": 0.434266055
    },
    {
        "actual": 0.17,
        "predicted": 0.211848017
    },
    {
        "actual": 0.14,
        "predicted": 0.160029413
    },
    {
        "actual": 0.27,
        "predicted": 0.115289296
    },
    {
        "actual": 0.12,
        "predicted": 0.179259601
    },
    {
        "actual": 0.74,
        "predicted": 0.356400723
    },
    {
        "actual": 0.73,
        "predicted": 0.619188619
    },
    {
        "actual": 0.24,
        "predicted": 0.17818659
    },
    {
        "actual": 1,
        "predicted": 0.840478176
    },
    {
        "actual": 0.03,
        "predicted": 0.130408588
    },
    {
        "actual": 1,
        "predicted": 0.430650156
    },
    {
        "actual": 0.21,
        "predicted": 0.327990753
    },
    {
        "actual": 0.25,
        "predicted": 0.517952162
    },
    {
        "actual": 0.26,
        "predicted": 0.226044314
    },
    {
        "actual": 0.51,
        "predicted": 0.474119447
    },
    {
        "actual": 0.01,
        "predicted": 0.101556048
    },
    {
        "actual": 0.03,
        "predicted": 0.096225839
    },
    {
        "actual": 0.01,
        "predicted": 0.079119503
    },
    {
        "actual": 0.16,
        "predicted": 0.203725516
    },
    {
        "actual": 0.52,
        "predicted": 0.583338214
    },
    {
        "actual": 0.1,
        "predicted": 0.13557898
    },
    {
        "actual": 0.24,
        "predicted": 0.188596766
    },
    {
        "actual": 0.3,
        "predicted": 0.261564212
    },
    {
        "actual": 0.69,
        "predicted": 0.790202972
    },
    {
        "actual": 0.09,
        "predicted": 0.102585838
    },
    {
        "actual": 0.22,
        "predicted": 0.119882034
    },
    {
        "actual": 0.65,
        "predicted": 0.672692004
    },
    {
        "actual": 0.17,
        "predicted": 0.125094277
    },
    {
        "actual": 0.09,
        "predicted": 0.123118127
    },
    {
        "actual": 0.77,
        "predicted": 0.870461161
    },
    {
        "actual": 0.33,
        "predicted": 0.523127094
    },
    {
        "actual": 0.38,
        "predicted": 0.602897166
    },
    {
        "actual": 0.07,
        "predicted": 0.127535146
    },
    {
        "actual": 0.19,
        "predicted": 0.170309482
    },
    {
        "actual": 0.09,
        "predicted": 0.132831084
    },
    {
        "actual": 0.21,
        "predicted": 0.238168818
    },
    {
        "actual": 0.08,
        "predicted": 0.134778544
    },
    {
        "actual": 0.1,
        "predicted": 0.117323264
    },
    {
        "actual": 0.05,
        "predicted": 0.105122626
    },
    {
        "actual": 0.23,
        "predicted": 0.276459024
    },
    {
        "actual": 0.08,
        "predicted": 0.105988504
    },
    {
        "actual": 0.02,
        "predicted": 0.091079784
    },
    {
        "actual": 0.08,
        "predicted": 0.111041978
    },
    {
        "actual": 0.12,
        "predicted": 0.149111246
    },
    {
        "actual": 0.4,
        "predicted": 0.450135968
    },
    {
        "actual": 0.45,
        "predicted": 0.254786622
    },
    {
        "actual": 0.05,
        "predicted": 0.089090969
    },
    {
        "actual": 0.03,
        "predicted": 0.091352895
    },
    {
        "actual": 0.36,
        "predicted": 0.373113552
    },
    {
        "actual": 0.08,
        "predicted": 0.120105309
    },
    {
        "actual": 0.07,
        "predicted": 0.149549542
    },
    {
        "actual": 1,
        "predicted": 0.89021316
    },
    {
        "actual": 0.04,
        "predicted": 0.101493282
    },
    {
        "actual": 0.06,
        "predicted": 0.130708782
    },
    {
        "actual": 1,
        "predicted": 0.427892754
    },
    {
        "actual": 0.2,
        "predicted": 0.247008684
    },
    {
        "actual": 0.14,
        "predicted": 0.187039552
    },
    {
        "actual": 0.48,
        "predicted": 0.49611312
    },
    {
        "actual": 0.13,
        "predicted": 0.033640776
    },
    {
        "actual": 0.67,
        "predicted": 0.744540936
    },
    {
        "actual": 0.04,
        "predicted": 0.109770252
    },
    {
        "actual": 0.49,
        "predicted": 0.282474764
    },
    {
        "actual": 0.05,
        "predicted": 0.105394869
    },
    {
        "actual": 0.02,
        "predicted": 0.091307526
    },
    {
        "actual": 0.39,
        "predicted": 0.398133946
    },
    {
        "actual": 0.29,
        "predicted": 0.481595726
    },
    {
        "actual": 0.02,
        "predicted": 0.094037266
    },
    {
        "actual": 0.25,
        "predicted": 0.228101016
    },
    {
        "actual": 0.23,
        "predicted": 0.290725205
    },
    {
        "actual": 0.01,
        "predicted": 0.095299691
    },
    {
        "actual": 0.12,
        "predicted": 0.170488042
    },
    {
        "actual": 0.1,
        "predicted": 0.225683944
    },
    {
        "actual": 0.04,
        "predicted": 0.11579451
    },
    {
        "actual": 0.14,
        "predicted": 0.471693601
    },
    {
        "actual": 0.2,
        "predicted": 0.290732726
    },
    {
        "actual": 0.13,
        "predicted": 0.148937188
    },
    {
        "actual": 0.03,
        "predicted": 0.11992535
    },
    {
        "actual": 0.11,
        "predicted": 0.165086639
    },
    {
        "actual": 1,
        "predicted": 0.560074891
    },
    {
        "actual": 0.28,
        "predicted": 0.099641196
    },
    {
        "actual": 0.01,
        "predicted": 0.110352907
    },
    {
        "actual": 0.24,
        "predicted": 0.213386711
    },
    {
        "actual": 0.43,
        "predicted": 0.465944333
    },
    {
        "actual": 0.2,
        "predicted": 0.22778627
    },
    {
        "actual": 0.08,
        "predicted": 0.110018992
    },
    {
        "actual": 0.04,
        "predicted": 0.086075584
    },
    {
        "actual": 0.07,
        "predicted": 0.145200959
    },
    {
        "actual": 0.05,
        "predicted": 0.150007719
    },
    {
        "actual": 0.04,
        "predicted": 0.084515481
    },
    {
        "actual": 0.02,
        "predicted": 0.098555431
    },
    {
        "actual": 0.4,
        "predicted": 0.156197219
    },
    {
        "actual": 0.16,
        "predicted": 0.147458266
    },
    {
        "actual": 0.57,
        "predicted": 0.42417387
    },
    {
        "actual": 0.2,
        "predicted": 0.306720189
    },
    {
        "actual": 1,
        "predicted": 0.900079729
    },
    {
        "actual": 0.02,
        "predicted": 0.095353453
    },
    {
        "actual": 0.08,
        "predicted": 0.125171426
    },
    {
        "actual": 1,
        "predicted": 0.990005697
    },
    {
        "actual": 0.06,
        "predicted": 0.104289118
    },
    {
        "actual": 0.07,
        "predicted": 0.079807988
    },
    {
        "actual": 0.08,
        "predicted": 0.115870877
    },
    {
        "actual": 0.05,
        "predicted": 0.108588355
    },
    {
        "actual": 0.02,
        "predicted": 0.166826312
    },
    {
        "actual": 0.13,
        "predicted": 0.210692322
    },
    {
        "actual": 0.45,
        "predicted": 0.467000623
    },
    {
        "actual": 0.44,
        "predicted": 0.55327847
    },
    {
        "actual": 0.45,
        "predicted": 0.397672777
    },
    {
        "actual": 0.39,
        "predicted": 0.289964864
    },
    {
        "actual": 0.26,
        "predicted": 0.298519912
    },
    {
        "actual": 1,
        "predicted": 0.798554576
    },
    {
        "actual": 0.32,
        "predicted": 0.121124421
    },
    {
        "actual": 0.3,
        "predicted": 0.342471863
    },
    {
        "actual": 0.31,
        "predicted": 0.266272461
    },
    {
        "actual": 0.27,
        "predicted": 0.472311039
    },
    {
        "actual": 0.11,
        "predicted": 0.097156725
    },
    {
        "actual": 0.07,
        "predicted": 0.111380312
    },
    {
        "actual": 0.09,
        "predicted": 0.161167914
    },
    {
        "actual": 0.26,
        "predicted": 0.347670023
    },
    {
        "actual": 0.17,
        "predicted": 0.269785304
    },
    {
        "actual": 0.07,
        "predicted": 0.118586919
    },
    {
        "actual": 0.31,
        "predicted": 0.285588183
    },
    {
        "actual": 0.07,
        "predicted": 0.109868987
    },
    {
        "actual": 0.33,
        "predicted": 0.455120164
    },
    {
        "actual": 0.15,
        "predicted": 0.167603744
    },
    {
        "actual": 0.21,
        "predicted": 0.235111087
    },
    {
        "actual": 0.1,
        "predicted": 0.17336411
    },
    {
        "actual": 0.51,
        "predicted": 0.466317795
    },
    {
        "actual": 0.17,
        "predicted": 0.143501017
    },
    {
        "actual": 0.09,
        "predicted": 0.127228028
    },
    {
        "actual": 0.03,
        "predicted": 0.100658969
    },
    {
        "actual": 0.15,
        "predicted": 0.149580785
    },
    {
        "actual": 0.17,
        "predicted": 0.176129449
    },
    {
        "actual": 0.14,
        "predicted": 0.141994856
    },
    {
        "actual": 0.03,
        "predicted": 0.126804947
    },
    {
        "actual": 0.34,
        "predicted": 0.158915421
    },
    {
        "actual": 0.05,
        "predicted": 0.114028375
    },
    {
        "actual": 0.24,
        "predicted": 0.135020467
    },
    {
        "actual": 0.07,
        "predicted": 0.126860923
    },
    {
        "actual": 0.33,
        "predicted": 0.278726314
    },
    {
        "actual": 0.09,
        "predicted": 0.185023137
    },
    {
        "actual": 0.11,
        "predicted": 0.127205239
    },
    {
        "actual": 0.1,
        "predicted": 0.104102276
    },
    {
        "actual": 0.02,
        "predicted": 0.105938457
    },
    {
        "actual": 0.25,
        "predicted": 0.25888141
    },
    {
        "actual": 0.37,
        "predicted": 0.452395964
    },
    {
        "actual": 0.07,
        "predicted": 0.117447114
    },
    {
        "actual": 0.71,
        "predicted": 0.610007017
    },
    {
        "actual": 0.18,
        "predicted": 0.161004167
    },
    {
        "actual": 0.28,
        "predicted": 0.395026277
    },
    {
        "actual": 0.44,
        "predicted": 0.130164067
    },
    {
        "actual": 0.09,
        "predicted": 0.123453559
    },
    {
        "actual": 0.19,
        "predicted": 0.150567479
    },
    {
        "actual": 0.28,
        "predicted": 0.390637013
    },
    {
        "actual": 0.03,
        "predicted": 0.100509984
    },
    {
        "actual": 0.04,
        "predicted": 0.091473064
    },
    {
        "actual": 0.32,
        "predicted": 0.126729262
    },
    {
        "actual": 0.19,
        "predicted": 0.420274578
    },
    {
        "actual": 0.16,
        "predicted": 0.247871818
    },
    {
        "actual": 0.09,
        "predicted": 0.188963444
    },
    {
        "actual": 0.05,
        "predicted": 0.161542589
    },
    {
        "actual": 0.11,
        "predicted": 0.15211029
    },
    {
        "actual": 0.36,
        "predicted": 0.414787965
    },
    {
        "actual": 0.09,
        "predicted": 0.114427044
    },
    {
        "actual": 0.03,
        "predicted": 0.123169898
    },
    {
        "actual": 0.05,
        "predicted": 0.103789854
    },
    {
        "actual": 0.05,
        "predicted": 0.1053019
    },
    {
        "actual": 0.13,
        "predicted": 0.107212836
    },
    {
        "actual": 0.05,
        "predicted": 0.095837344
    },
    {
        "actual": 0.12,
        "predicted": 0.178359537
    },
    {
        "actual": 0.47,
        "predicted": 0.305796213
    },
    {
        "actual": 0.17,
        "predicted": 0.190130777
    },
    {
        "actual": 0.17,
        "predicted": 0.137420624
    },
    {
        "actual": 1,
        "predicted": 0.724152818
    },
    {
        "actual": 0.2,
        "predicted": 0.177196267
    },
    {
        "actual": 0.08,
        "predicted": 0.104716187
    },
    {
        "actual": 0.09,
        "predicted": 0.219838929
    },
    {
        "actual": 0.1,
        "predicted": 0.167489419
    },
    {
        "actual": 0.03,
        "predicted": 0.004857451
    },
    {
        "actual": 0.71,
        "predicted": 0.508000758
    },
    {
        "actual": 0.17,
        "predicted": 0.269697551
    },
    {
        "actual": 0.02,
        "predicted": 0.083568843
    },
    {
        "actual": 0.2,
        "predicted": 0.256667349
    },
    {
        "actual": 0.38,
        "predicted": 0.206271826
    },
    {
        "actual": 0.09,
        "predicted": 0.177743212
    },
    {
        "actual": 0.06,
        "predicted": 0.154028054
    },
    {
        "actual": 0.05,
        "predicted": 0.082620763
    },
    {
        "actual": 0.05,
        "predicted": 0.118291072
    },
    {
        "actual": 1,
        "predicted": 1.100139106
    },
    {
        "actual": 0.21,
        "predicted": 0.177364101
    },
    {
        "actual": 0.29,
        "predicted": 0.242934821
    },
    {
        "actual": 0.04,
        "predicted": 0.132670788
    },
    {
        "actual": 0.12,
        "predicted": 0.187514466
    },
    {
        "actual": 0.06,
        "predicted": 0.13271674
    },
    {
        "actual": 0.21,
        "predicted": 0.159036257
    },
    {
        "actual": 0.06,
        "predicted": 0.132415795
    },
    {
        "actual": 0.51,
        "predicted": 0.409720966
    },
    {
        "actual": 0.07,
        "predicted": 0.129652008
    },
    {
        "actual": 0.21,
        "predicted": 0.212676908
    },
    {
        "actual": 0.39,
        "predicted": 0.165426683
    },
    {
        "actual": 0.66,
        "predicted": 0.605030416
    },
    {
        "actual": 0.03,
        "predicted": 0.121647747
    },
    {
        "actual": 0.06,
        "predicted": 0.092899112
    },
    {
        "actual": 0.53,
        "predicted": 0.628106445
    },
    {
        "actual": 0.08,
        "predicted": 0.138999487
    },
    {
        "actual": 0.59,
        "predicted": 0.372962674
    },
    {
        "actual": 0.12,
        "predicted": 0.115301355
    },
    {
        "actual": 0.29,
        "predicted": 0.302440966
    },
    {
        "actual": 1,
        "predicted": 0.75606668
    },
    {
        "actual": 0.03,
        "predicted": 0.125740375
    },
    {
        "actual": 0.29,
        "predicted": 0.249570652
    },
    {
        "actual": 0.38,
        "predicted": 0.291473213
    },
    {
        "actual": 0.06,
        "predicted": 0.09326645
    },
    {
        "actual": 1,
        "predicted": 1.024658894
    },
    {
        "actual": 0.3,
        "predicted": 0.290365681
    },
    {
        "actual": 0.16,
        "predicted": 0.132051322
    },
    {
        "actual": 0.29,
        "predicted": 0.134396036
    },
    {
        "actual": 0.02,
        "predicted": 0.092329102
    },
    {
        "actual": 0.19,
        "predicted": 0.290275328
    },
    {
        "actual": 0.38,
        "predicted": 0.476964945
    },
    {
        "actual": 0.31,
        "predicted": 0.285959738
    },
    {
        "actual": 0.07,
        "predicted": 0.122218648
    },
    {
        "actual": 0.11,
        "predicted": 0.194247889
    },
    {
        "actual": 0.6,
        "predicted": 0.332104564
    },
    {
        "actual": 0.54,
        "predicted": 0.321328094
    },
    {
        "actual": 0.45,
        "predicted": 0.497094529
    },
    {
        "actual": 0.22,
        "predicted": 0.162301721
    },
    {
        "actual": 0.02,
        "predicted": 0.107024143
    },
    {
        "actual": 0,
        "predicted": 0.064635091
    },
    {
        "actual": 0.22,
        "predicted": 0.1941699
    },
    {
        "actual": 0.13,
        "predicted": 0.165899084
    },
    {
        "actual": 0.06,
        "predicted": 0.152905613
    },
    {
        "actual": 0.11,
        "predicted": 0.107131185
    },
    {
        "actual": 0.03,
        "predicted": 0.104774528
    },
    {
        "actual": 0.69,
        "predicted": 0.66817353
    },
    {
        "actual": 0.19,
        "predicted": 0.188768499
    },
    {
        "actual": 0.69,
        "predicted": 0.590151016
    },
    {
        "actual": 0.41,
        "predicted": 0.392881735
    },
    {
        "actual": 0.08,
        "predicted": 0.097537769
    },
    {
        "actual": 0.31,
        "predicted": 0.256863889
    },
    {
        "actual": 0.08,
        "predicted": 0.10743909
    },
    {
        "actual": 0.45,
        "predicted": 0.550138083
    },
    {
        "actual": 0.2,
        "predicted": 0.10333035
    },
    {
        "actual": 0.19,
        "predicted": 0.167871596
    },
    {
        "actual": 0.03,
        "predicted": 0.133196658
    },
    {
        "actual": 0.15,
        "predicted": 0.12598209
    },
    {
        "actual": 0.54,
        "predicted": 0.37043511
    },
    {
        "actual": 0.02,
        "predicted": 0.102303947
    },
    {
        "actual": 0.1,
        "predicted": 0.225668747
    },
    {
        "actual": 0.31,
        "predicted": 0.099699078
    },
    {
        "actual": 0.65,
        "predicted": 0.582244205
    },
    {
        "actual": 0.06,
        "predicted": 0.124822103
    },
    {
        "actual": 0.02,
        "predicted": 0.076322237
    },
    {
        "actual": 0.06,
        "predicted": 0.145227141
    },
    {
        "actual": 0.82,
        "predicted": 0.542701967
    },
    {
        "actual": 0.02,
        "predicted": 0.119863881
    },
    {
        "actual": 0.14,
        "predicted": 0.208314845
    },
    {
        "actual": 0.03,
        "predicted": 0.088795814
    },
    {
        "actual": 0.4,
        "predicted": 0.151674341
    },
    {
        "actual": 0.05,
        "predicted": 0.094359517
    },
    {
        "actual": 0.12,
        "predicted": 0.136136377
    },
    {
        "actual": 0.61,
        "predicted": 0.44388285
    },
    {
        "actual": 1,
        "predicted": 0.78489882
    },
    {
        "actual": 0.15,
        "predicted": 0.112281946
    },
    {
        "actual": 0.09,
        "predicted": 0.139954403
    },
    {
        "actual": 0.76,
        "predicted": 0.504545186
    },
    {
        "actual": 0.02,
        "predicted": 0.10078934
    },
    {
        "actual": 0.06,
        "predicted": 0.100920335
    },
    {
        "actual": 0.03,
        "predicted": 0.100801743
    },
    {
        "actual": 0.06,
        "predicted": 0.134503356
    },
    {
        "actual": 0.2,
        "predicted": 0.344688693
    },
    {
        "actual": 0.25,
        "predicted": 0.436165189
    },
    {
        "actual": 0.07,
        "predicted": 0.100928486
    },
    {
        "actual": 0.06,
        "predicted": 0.112308049
    },
    {
        "actual": 0.19,
        "predicted": 0.490663951
    },
    {
        "actual": 0.06,
        "predicted": 0.097250573
    },
    {
        "actual": 0.16,
        "predicted": 0.220002596
    },
    {
        "actual": 0.19,
        "predicted": 0.296804739
    },
    {
        "actual": 0.14,
        "predicted": 0.154127994
    },
    {
        "actual": 0.18,
        "predicted": 0.090122316
    },
    {
        "actual": 0.11,
        "predicted": 0.152880266
    },
    {
        "actual": 0.22,
        "predicted": 0.135308577
    },
    {
        "actual": 0.03,
        "predicted": 0.105073775
    },
    {
        "actual": 0.33,
        "predicted": 0.378745132
    },
    {
        "actual": 0,
        "predicted": 0.199615437
    },
    {
        "actual": 0.01,
        "predicted": 0.125069964
    },
    {
        "actual": 0.37,
        "predicted": 0.269740145
    },
    {
        "actual": 0.15,
        "predicted": 0.209086264
    },
    {
        "actual": 0.04,
        "predicted": 0.100864855
    },
    {
        "actual": 0.35,
        "predicted": 0.223866051
    },
    {
        "actual": 0.1,
        "predicted": 0.161946177
    },
    {
        "actual": 0.46,
        "predicted": 0.425854136
    },
    {
        "actual": 0.04,
        "predicted": 0.097535207
    },
    {
        "actual": 0.18,
        "predicted": 0.233600165
    },
    {
        "actual": 0.4,
        "predicted": 0.428779358
    },
    {
        "actual": 0.06,
        "predicted": 0.126861117
    },
    {
        "actual": 0.01,
        "predicted": 0.102388356
    },
    {
        "actual": 0.03,
        "predicted": 0.082695186
    },
    {
        "actual": 0.52,
        "predicted": 0.620233647
    },
    {
        "actual": 0.03,
        "predicted": 0.113766591
    },
    {
        "actual": 0.27,
        "predicted": 0.333922179
    },
    {
        "actual": 0.11,
        "predicted": 0.200266033
    },
    {
        "actual": 0.03,
        "predicted": 0.095011098
    },
    {
        "actual": 0.17,
        "predicted": 0.105102235
    },
    {
        "actual": 0.47,
        "predicted": 0.448112979
    },
    {
        "actual": 0.22,
        "predicted": 0.14926008
    },
    {
        "actual": 0.06,
        "predicted": 0.156509221
    },
    {
        "actual": 0.39,
        "predicted": 0.397550467
    },
    {
        "actual": 0.12,
        "predicted": 0.126336188
    },
    {
        "actual": 0.02,
        "predicted": 0.095237749
    },
    {
        "actual": 0.26,
        "predicted": 0.117089165
    },
    {
        "actual": 0.55,
        "predicted": 0.419030743
    },
    {
        "actual": 0.21,
        "predicted": 0.236760873
    },
    {
        "actual": 0.12,
        "predicted": 0.210692229
    },
    {
        "actual": 0.1,
        "predicted": 0.154174535
    },
    {
        "actual": 0.41,
        "predicted": 0.468908589
    },
    {
        "actual": 0.84,
        "predicted": 0.887739731
    },
    {
        "actual": 0.18,
        "predicted": 0.296319053
    },
    {
        "actual": 0.04,
        "predicted": 0.128018766
    },
    {
        "actual": 0.34,
        "predicted": 0.374070114
    },
    {
        "actual": 0.07,
        "predicted": 0.095524856
    },
    {
        "actual": 0.05,
        "predicted": 0.150148646
    },
    {
        "actual": 0.02,
        "predicted": 0.099461949
    },
    {
        "actual": 0.31,
        "predicted": 0.4130481
    },
    {
        "actual": 0.97,
        "predicted": 0.947688465
    },
    {
        "actual": 0.33,
        "predicted": 0.336746818
    },
    {
        "actual": 0.12,
        "predicted": 0.148723904
    },
    {
        "actual": 1,
        "predicted": 0.479849009
    },
    {
        "actual": 0.96,
        "predicted": 0.454963916
    },
    {
        "actual": 0.25,
        "predicted": 0.245533555
    },
    {
        "actual": 0.03,
        "predicted": 0.092269035
    },
    {
        "actual": 0.12,
        "predicted": 0.086049307
    },
    {
        "actual": 0.14,
        "predicted": 0.201031499
    },
    {
        "actual": 0.52,
        "predicted": 0.505434683
    },
    {
        "actual": 0.05,
        "predicted": 0.150449866
    },
    {
        "actual": 0.09,
        "predicted": 0.104761783
    },
    {
        "actual": 0.14,
        "predicted": 0.219091621
    },
    {
        "actual": 0.36,
        "predicted": 0.419067293
    },
    {
        "actual": 0.04,
        "predicted": 0.113476346
    },
    {
        "actual": 0.59,
        "predicted": 0.62258553
    },
    {
        "actual": 0.49,
        "predicted": 0.134857442
    },
    {
        "actual": 0.53,
        "predicted": 0.397031685
    },
    {
        "actual": 0.06,
        "predicted": 0.168432681
    },
    {
        "actual": 0.19,
        "predicted": 0.147166337
    },
    {
        "actual": 0.28,
        "predicted": 0.332804571
    },
    {
        "actual": 0.14,
        "predicted": 0.228655681
    },
    {
        "actual": 0.9,
        "predicted": 0.40697501
    },
    {
        "actual": 0.05,
        "predicted": 0.184836137
    },
    {
        "actual": 0.15,
        "predicted": 0.16636386
    },
    {
        "actual": 1,
        "predicted": 0.623812195
    },
    {
        "actual": 0.21,
        "predicted": 0.309893218
    },
    {
        "actual": 0.02,
        "predicted": 0.050963645
    },
    {
        "actual": 0.07,
        "predicted": 0.127064533
    },
    {
        "actual": 0.21,
        "predicted": 0.420421495
    },
    {
        "actual": 0.21,
        "predicted": 0.295699932
    },
    {
        "actual": 0.4,
        "predicted": 0.345079762
    },
    {
        "actual": 0.04,
        "predicted": 0.11009617
    },
    {
        "actual": 0.31,
        "predicted": 0.251859593
    },
    {
        "actual": 0.2,
        "predicted": 0.123389365
    },
    {
        "actual": 0.05,
        "predicted": 0.142440949
    },
    {
        "actual": 0.54,
        "predicted": 0.44821041
    },
    {
        "actual": 0.54,
        "predicted": 0.516936577
    },
    {
        "actual": 0.11,
        "predicted": 0.210361549
    },
    {
        "actual": 0.13,
        "predicted": 0.134999977
    },
    {
        "actual": 0.42,
        "predicted": 0.454559775
    },
    {
        "actual": 0.06,
        "predicted": 0.142864746
    },
    {
        "actual": 0.7,
        "predicted": 0.594898812
    },
    {
        "actual": 0.45,
        "predicted": 0.472621073
    },
    {
        "actual": 0.15,
        "predicted": 0.094058391
    },
    {
        "actual": 0.15,
        "predicted": 0.120753488
    },
    {
        "actual": 0.12,
        "predicted": 0.159290032
    },
    {
        "actual": 0.11,
        "predicted": 0.097531143
    },
    {
        "actual": 0.03,
        "predicted": 0.094465879
    },
    {
        "actual": 0.09,
        "predicted": 0.174399365
    },
    {
        "actual": 0.3,
        "predicted": 0.30750924
    },
    {
        "actual": 0.39,
        "predicted": 0.273844417
    },
    {
        "actual": 0.05,
        "predicted": 0.100535958
    },
    {
        "actual": 0.03,
        "predicted": 0.13004033
    },
    {
        "actual": 0.22,
        "predicted": 0.201148229
    },
    {
        "actual": 0.33,
        "predicted": 0.243964794
    },
    {
        "actual": 0.83,
        "predicted": 0.310380749
    },
    {
        "actual": 0.11,
        "predicted": 0.268232712
    },
    {
        "actual": 0.07,
        "predicted": 0.093721753
    },
    {
        "actual": 0.28,
        "predicted": 0.337570253
    },
    {
        "actual": 0.02,
        "predicted": 0.09241304
    },
    {
        "actual": 0.41,
        "predicted": 0.316616292
    },
    {
        "actual": 0.12,
        "predicted": 0.273136517
    },
    {
        "actual": 0.34,
        "predicted": 0.323481389
    },
    {
        "actual": 0.07,
        "predicted": 0.112666957
    },
    {
        "actual": 0.05,
        "predicted": 0.089757739
    },
    {
        "actual": 0.12,
        "predicted": 0.145807042
    },
    {
        "actual": 0.04,
        "predicted": 0.084777513
    },
    {
        "actual": 0.3,
        "predicted": 0.293173669
    },
    {
        "actual": 0.06,
        "predicted": 0.14722292
    },
    {
        "actual": 0.09,
        "predicted": 0.136144406
    },
    {
        "actual": 0.42,
        "predicted": 0.596530009
    },
    {
        "actual": 0.02,
        "predicted": 0.121887421
    },
    {
        "actual": 0.1,
        "predicted": 0.199578659
    },
    {
        "actual": 0.07,
        "predicted": 0.131586216
    },
    {
        "actual": 0.11,
        "predicted": 0.137993152
    },
    {
        "actual": 0.03,
        "predicted": 0.147811422
    },
    {
        "actual": 0.06,
        "predicted": 0.09822682
    },
    {
        "actual": 0.03,
        "predicted": 0.11029817
    },
    {
        "actual": 0.11,
        "predicted": 0.101614911
    },
    {
        "actual": 0.52,
        "predicted": 0.464754153
    },
    {
        "actual": 0.25,
        "predicted": 0.419995138
    },
    {
        "actual": 0.11,
        "predicted": 0.128374026
    },
    {
        "actual": 0.82,
        "predicted": 0.719642859
    },
    {
        "actual": 0.14,
        "predicted": 0.240250554
    },
    {
        "actual": 0.08,
        "predicted": 0.128509975
    },
    {
        "actual": 0.02,
        "predicted": 0.073381998
    },
    {
        "actual": 0.27,
        "predicted": 0.169885211
    },
    {
        "actual": 0.15,
        "predicted": 0.236676014
    },
    {
        "actual": 0.16,
        "predicted": 0.258557821
    },
    {
        "actual": 0.47,
        "predicted": 0.282191932
    },
    {
        "actual": 0.12,
        "predicted": 0.279310824
    },
    {
        "actual": 0.26,
        "predicted": 0.177750817
    },
    {
        "actual": 0.02,
        "predicted": 0.098399618
    },
    {
        "actual": 1,
        "predicted": 1.048220707
    },
    {
        "actual": 0.06,
        "predicted": 0.10532415
    },
    {
        "actual": 0.31,
        "predicted": 0.195434858
    },
    {
        "actual": 0.19,
        "predicted": 0.220495066
    },
    {
        "actual": 0.06,
        "predicted": 0.105655182
    },
    {
        "actual": 0.14,
        "predicted": 0.274964096
    },
    {
        "actual": 0.35,
        "predicted": 0.442404094
    },
    {
        "actual": 0.02,
        "predicted": 0.091927573
    },
    {
        "actual": 0.36,
        "predicted": 0.30241647
    },
    {
        "actual": 0.39,
        "predicted": 0.311976139
    },
    {
        "actual": 0.12,
        "predicted": 0.13360298
    },
    {
        "actual": 0.13,
        "predicted": 0.16005743
    },
    {
        "actual": 0.57,
        "predicted": 0.483360973
    },
    {
        "actual": 0.07,
        "predicted": 0.119007235
    },
    {
        "actual": 0.59,
        "predicted": 0.622997811
    },
    {
        "actual": 0.31,
        "predicted": 0.409836841
    },
    {
        "actual": 0.34,
        "predicted": 0.36736733
    },
    {
        "actual": 0.02,
        "predicted": 0.092930659
    },
    {
        "actual": 0.47,
        "predicted": 0.166078635
    },
    {
        "actual": 0.16,
        "predicted": 0.184875417
    },
    {
        "actual": 0.15,
        "predicted": 0.151851832
    },
    {
        "actual": 0.05,
        "predicted": 0.112232342
    },
    {
        "actual": 0.15,
        "predicted": 0.196447287
    },
    {
        "actual": 0.04,
        "predicted": 0.10055789
    },
    {
        "actual": 0.12,
        "predicted": 0.302063841
    },
    {
        "actual": 0.39,
        "predicted": 0.471636962
    },
    {
        "actual": 0.18,
        "predicted": 0.11418549
    },
    {
        "actual": 0.1,
        "predicted": 0.096083421
    },
    {
        "actual": 0.86,
        "predicted": 0.790892876
    },
    {
        "actual": 0.29,
        "predicted": 0.414856342
    },
    {
        "actual": 0.07,
        "predicted": 0.106915439
    },
    {
        "actual": 0.06,
        "predicted": 0.087656283
    },
    {
        "actual": 0.2,
        "predicted": 0.380820377
    },
    {
        "actual": 0.6,
        "predicted": 0.438021405
    },
    {
        "actual": 0.14,
        "predicted": 0.199470607
    },
    {
        "actual": 0.12,
        "predicted": 0.170199307
    },
    {
        "actual": 0.04,
        "predicted": 0.096164463
    },
    {
        "actual": 0.12,
        "predicted": 0.14696672
    },
    {
        "actual": 0.36,
        "predicted": 0.501561886
    },
    {
        "actual": 0.1,
        "predicted": 0.159227733
    },
    {
        "actual": 0.27,
        "predicted": 0.316752776
    },
    {
        "actual": 0.02,
        "predicted": 0.106868549
    },
    {
        "actual": 0.01,
        "predicted": 0.086734592
    },
    {
        "actual": 0.04,
        "predicted": 0.131339806
    },
    {
        "actual": 0.03,
        "predicted": 0.08917023
    },
    {
        "actual": 0.11,
        "predicted": 0.144332027
    },
    {
        "actual": 0.26,
        "predicted": 0.22303035
    },
    {
        "actual": 0.15,
        "predicted": 0.115076836
    },
    {
        "actual": 0.08,
        "predicted": 0.149421466
    },
    {
        "actual": 0.47,
        "predicted": 0.483857421
    },
    {
        "actual": 0.1,
        "predicted": 0.119919293
    },
    {
        "actual": 0.07,
        "predicted": 0.131680988
    },
    {
        "actual": 0.15,
        "predicted": 0.141164193
    },
    {
        "actual": 0.21,
        "predicted": 0.104446336
    },
    {
        "actual": 0.13,
        "predicted": 0.168533405
    },
    {
        "actual": 0.12,
        "predicted": 0.089451738
    },
    {
        "actual": 0.59,
        "predicted": 0.379417198
    },
    {
        "actual": 0.7,
        "predicted": 0.282937203
    },
    {
        "actual": 0.03,
        "predicted": 0.10628418
    },
    {
        "actual": 0.06,
        "predicted": 0.094528271
    },
    {
        "actual": 0.1,
        "predicted": 0.108025966
    },
    {
        "actual": 0.08,
        "predicted": 0.108088805
    },
    {
        "actual": 0.11,
        "predicted": 0.125864524
    },
    {
        "actual": 0.15,
        "predicted": 0.309172807
    },
    {
        "actual": 0.51,
        "predicted": 0.394302661
    },
    {
        "actual": 0.02,
        "predicted": 0.076602348
    },
    {
        "actual": 0.06,
        "predicted": 0.102947895
    },
    {
        "actual": 0.51,
        "predicted": 0.27372787
    },
    {
        "actual": 0.58,
        "predicted": 0.596142887
    },
    {
        "actual": 0.05,
        "predicted": 0.083501911
    },
    {
        "actual": 0.05,
        "predicted": 0.093167777
    },
    {
        "actual": 0.21,
        "predicted": 0.146994377
    },
    {
        "actual": 0.65,
        "predicted": 0.572440252
    },
    {
        "actual": 0.1,
        "predicted": 0.183688556
    },
    {
        "actual": 0.23,
        "predicted": 0.274366793
    },
    {
        "actual": 0.05,
        "predicted": 0.105996414
    },
    {
        "actual": 0.13,
        "predicted": 0.222690524
    },
    {
        "actual": 0.48,
        "predicted": 0.697822384
    },
    {
        "actual": 0.06,
        "predicted": 0.136072986
    },
    {
        "actual": 0.14,
        "predicted": 0.222854243
    },
    {
        "actual": 0.54,
        "predicted": 0.347531117
    },
    {
        "actual": 0.21,
        "predicted": 0.219062457
    },
    {
        "actual": 0.25,
        "predicted": 0.244752797
    },
    {
        "actual": 0.09,
        "predicted": 0.112552432
    },
    {
        "actual": 0.04,
        "predicted": 0.106288826
    },
    {
        "actual": 0.12,
        "predicted": 0.220243833
    },
    {
        "actual": 0.44,
        "predicted": 0.610012425
    },
    {
        "actual": 0.6,
        "predicted": 0.499633153
    },
    {
        "actual": 0.34,
        "predicted": 0.175875446
    },
    {
        "actual": 0.13,
        "predicted": 0.34244858
    },
    {
        "actual": 0.15,
        "predicted": 0.114681236
    },
    {
        "actual": 0.11,
        "predicted": 0.179591115
    },
    {
        "actual": 0.32,
        "predicted": 0.420122839
    },
    {
        "actual": 0.38,
        "predicted": 0.260691801
    },
    {
        "actual": 0.12,
        "predicted": 0.10022708
    },
    {
        "actual": 0.37,
        "predicted": 0.233618836
    },
    {
        "actual": 0.08,
        "predicted": 0.097069222
    },
    {
        "actual": 0.04,
        "predicted": 0.059784269
    },
    {
        "actual": 0,
        "predicted": 0.058725588
    },
    {
        "actual": 0.02,
        "predicted": 0.08957845
    },
    {
        "actual": 0.03,
        "predicted": 0.113963229
    },
    {
        "actual": 0.36,
        "predicted": 0.342566595
    },
    {
        "actual": 0.25,
        "predicted": 0.161693415
    },
    {
        "actual": 0.33,
        "predicted": 0.430311129
    },
    {
        "actual": 0.04,
        "predicted": 0.113100121
    },
    {
        "actual": 0.48,
        "predicted": 0.390710828
    },
    {
        "actual": 0.13,
        "predicted": 0.143320551
    },
    {
        "actual": 0.01,
        "predicted": 0.113755557
    },
    {
        "actual": 0.29,
        "predicted": 0.222102406
    },
    {
        "actual": 0.02,
        "predicted": 0.106368202
    },
    {
        "actual": 0.03,
        "predicted": 0.102312319
    },
    {
        "actual": 0.21,
        "predicted": 0.293222665
    },
    {
        "actual": 0.12,
        "predicted": 0.19373217
    },
    {
        "actual": 0.41,
        "predicted": 0.435397616
    },
    {
        "actual": 0.06,
        "predicted": 0.113384685
    },
    {
        "actual": 0.57,
        "predicted": 0.335596257
    },
    {
        "actual": 0.37,
        "predicted": 0.225694567
    },
    {
        "actual": 0.67,
        "predicted": 0.753642813
    },
    {
        "actual": 0.11,
        "predicted": 0.126932383
    },
    {
        "actual": 0.03,
        "predicted": 0.133024804
    },
    {
        "actual": 0.1,
        "predicted": 0.142233318
    },
    {
        "actual": 0.03,
        "predicted": 0.107806241
    },
    {
        "actual": 0.81,
        "predicted": 0.822817908
    },
    {
        "actual": 0.51,
        "predicted": 0.257509614
    },
    {
        "actual": 0.09,
        "predicted": 0.186083954
    },
    {
        "actual": 0.01,
        "predicted": 0.108585128
    },
    {
        "actual": 0.03,
        "predicted": 0.081707064
    },
    {
        "actual": 0.2,
        "predicted": 0.23085937
    },
    {
        "actual": 0.3,
        "predicted": 0.513862539
    },
    {
        "actual": 0.03,
        "predicted": 0.097813107
    },
    {
        "actual": 0.23,
        "predicted": 0.442458405
    },
    {
        "actual": 0.12,
        "predicted": 0.153905358
    },
    {
        "actual": 0.11,
        "predicted": 0.139572713
    },
    {
        "actual": 0.12,
        "predicted": 0.219933993
    },
    {
        "actual": 0.06,
        "predicted": 0.129704274
    },
    {
        "actual": 0.12,
        "predicted": 0.170552027
    },
    {
        "actual": 0.04,
        "predicted": 0.093312102
    },
    {
        "actual": 0.25,
        "predicted": 0.233275662
    },
    {
        "actual": 0.76,
        "predicted": 0.462257619
    },
    {
        "actual": 0.15,
        "predicted": 0.120781751
    },
    {
        "actual": 0.14,
        "predicted": 0.328888619
    },
    {
        "actual": 0.23,
        "predicted": 0.226732387
    },
    {
        "actual": 0.55,
        "predicted": 0.474241922
    },
    {
        "actual": 0.37,
        "predicted": 0.229641059
    },
    {
        "actual": 0.61,
        "predicted": 0.529701612
    },
    {
        "actual": 0.37,
        "predicted": 0.518411669
    },
    {
        "actual": 0.14,
        "predicted": 0.230623272
    },
    {
        "actual": 0.32,
        "predicted": 0.361232961
    },
    {
        "actual": 0.35,
        "predicted": 0.594202952
    },
    {
        "actual": 0.21,
        "predicted": 0.150156621
    },
    {
        "actual": 0.37,
        "predicted": 0.375446275
    },
    {
        "actual": 0.05,
        "predicted": 0.100520043
    },
    {
        "actual": 0.03,
        "predicted": 0.105556415
    },
    {
        "actual": 0.14,
        "predicted": 0.254010318
    },
    {
        "actual": 0.34,
        "predicted": 0.148661892
    },
    {
        "actual": 0.03,
        "predicted": 0.099214301
    },
    {
        "actual": 0.03,
        "predicted": 0.09644684
    },
    {
        "actual": 0.03,
        "predicted": 0.12392031
    },
    {
        "actual": 0.04,
        "predicted": 0.112092186
    },
    {
        "actual": 0.29,
        "predicted": 0.377577729
    },
    {
        "actual": 0.93,
        "predicted": 0.684781558
    },
    {
        "actual": 0.05,
        "predicted": 0.137288396
    },
    {
        "actual": 0.26,
        "predicted": 0.209467454
    },
    {
        "actual": 0.28,
        "predicted": 0.222610565
    },
    {
        "actual": 0.22,
        "predicted": 0.175543626
    },
    {
        "actual": 0.12,
        "predicted": 0.117616138
    },
    {
        "actual": 0.13,
        "predicted": 0.10613289
    },
    {
        "actual": 0.01,
        "predicted": 0.095825828
    },
    {
        "actual": 0.49,
        "predicted": 0.284180428
    },
    {
        "actual": 0.18,
        "predicted": 0.179672926
    },
    {
        "actual": 0.25,
        "predicted": 0.314413085
    },
    {
        "actual": 0.05,
        "predicted": 0.162757579
    },
    {
        "actual": 0.53,
        "predicted": 0.630261443
    },
    {
        "actual": 0.32,
        "predicted": 0.222593349
    },
    {
        "actual": 0.36,
        "predicted": 0.477144798
    },
    {
        "actual": 0.34,
        "predicted": 0.432594756
    },
    {
        "actual": 0.18,
        "predicted": 0.323780352
    },
    {
        "actual": 0.21,
        "predicted": 0.347122816
    },
    {
        "actual": 0.22,
        "predicted": 0.251720173
    },
    {
        "actual": 0.35,
        "predicted": 0.4527706
    },
    {
        "actual": 0.75,
        "predicted": 0.526378527
    },
    {
        "actual": 0.19,
        "predicted": 0.126908805
    },
    {
        "actual": 0.05,
        "predicted": 0.093570479
    },
    {
        "actual": 0.2,
        "predicted": 0.222276001
    },
    {
        "actual": 0.08,
        "predicted": 0.107648928
    },
    {
        "actual": 0.03,
        "predicted": 0.134254133
    },
    {
        "actual": 0.03,
        "predicted": 0.143052237
    },
    {
        "actual": 0.19,
        "predicted": 0.155289454
    },
    {
        "actual": 0.03,
        "predicted": 0.142610394
    },
    {
        "actual": 0.11,
        "predicted": 0.16426786
    },
    {
        "actual": 0.78,
        "predicted": 0.343487207
    },
    {
        "actual": 0.32,
        "predicted": 0.114813629
    },
    {
        "actual": 0.37,
        "predicted": 0.246868111
    },
    {
        "actual": 0.33,
        "predicted": 0.14948857
    },
    {
        "actual": 0.19,
        "predicted": 0.152123221
    },
    {
        "actual": 0.11,
        "predicted": 0.103640955
    },
    {
        "actual": 0.29,
        "predicted": 0.233295302
    },
    {
        "actual": 0.08,
        "predicted": 0.086278678
    },
    {
        "actual": 0.1,
        "predicted": 0.128826668
    },
    {
        "actual": 1,
        "predicted": 0.900000516
    },
    {
        "actual": 0.24,
        "predicted": 0.256342019
    },
    {
        "actual": 0.04,
        "predicted": 0.140151223
    },
    {
        "actual": 0.27,
        "predicted": 0.369950236
    },
    {
        "actual": 0.5,
        "predicted": 0.399662391
    },
    {
        "actual": 0.06,
        "predicted": 0.132420645
    },
    {
        "actual": 0.53,
        "predicted": 0.523199752
    },
    {
        "actual": 0.53,
        "predicted": 0.228031652
    },
    {
        "actual": 0.07,
        "predicted": 0.128498405
    },
    {
        "actual": 0.11,
        "predicted": 0.092777928
    },
    {
        "actual": 0.31,
        "predicted": 0.332306909
    },
    {
        "actual": 0.34,
        "predicted": 0.315610647
    },
    {
        "actual": 0.18,
        "predicted": 0.312968355
    },
    {
        "actual": 0.14,
        "predicted": 0.225271646
    },
    {
        "actual": 0.14,
        "predicted": 0.121435509
    },
    {
        "actual": 0.03,
        "predicted": 0.074285845
    },
    {
        "actual": 0.14,
        "predicted": 0.1134509
    },
    {
        "actual": 0.45,
        "predicted": 0.515279876
    },
    {
        "actual": 0.12,
        "predicted": 0.104286649
    },
    {
        "actual": 0.66,
        "predicted": 0.3556057
    },
    {
        "actual": 0.07,
        "predicted": 0.120892295
    },
    {
        "actual": 0.26,
        "predicted": 0.224257555
    },
    {
        "actual": 0.07,
        "predicted": 0.169893487
    },
    {
        "actual": 0.06,
        "predicted": 0.118904125
    },
    {
        "actual": 0.1,
        "predicted": 0.200245942
    },
    {
        "actual": 0.04,
        "predicted": 0.101236677
    },
    {
        "actual": 0.11,
        "predicted": 0.171621068
    },
    {
        "actual": 0.29,
        "predicted": 0.403954787
    },
    {
        "actual": 0.13,
        "predicted": 0.184281997
    },
    {
        "actual": 0.11,
        "predicted": 0.09935919
    },
    {
        "actual": 0.02,
        "predicted": 0.089358798
    },
    {
        "actual": 0.24,
        "predicted": 0.252270363
    },
    {
        "actual": 0.87,
        "predicted": 0.620293717
    },
    {
        "actual": 0.14,
        "predicted": 0.109598171
    },
    {
        "actual": 0.46,
        "predicted": 0.264669989
    },
    {
        "actual": 0.25,
        "predicted": 0.250489488
    },
    {
        "actual": 0.08,
        "predicted": 0.102312481
    },
    {
        "actual": 0.04,
        "predicted": 0.100079637
    },
    {
        "actual": 0.54,
        "predicted": 0.554123653
    },
    {
        "actual": 0.09,
        "predicted": 0.20460558
    },
    {
        "actual": 0.2,
        "predicted": 0.163284163
    },
    {
        "actual": 0.02,
        "predicted": 0.156992852
    },
    {
        "actual": 0.04,
        "predicted": 0.122577234
    },
    {
        "actual": 0.1,
        "predicted": 0.095310514
    },
    {
        "actual": 0.69,
        "predicted": 0.506835516
    },
    {
        "actual": 0.13,
        "predicted": 0.249620544
    },
    {
        "actual": 0.06,
        "predicted": 0.116229314
    },
    {
        "actual": 0.91,
        "predicted": 0.413320838
    },
    {
        "actual": 0.04,
        "predicted": 0.084167208
    },
    {
        "actual": 0.81,
        "predicted": 0.672710075
    },
    {
        "actual": 0.15,
        "predicted": 0.110320436
    },
    {
        "actual": 0.07,
        "predicted": 0.103179075
    },
    {
        "actual": 0.06,
        "predicted": 0.108561995
    },
    {
        "actual": 0.02,
        "predicted": 0.099576079
    },
    {
        "actual": 0.31,
        "predicted": 0.328514217
    },
    {
        "actual": 0.03,
        "predicted": 0.082839655
    },
    {
        "actual": 0.27,
        "predicted": 0.488889938
    },
    {
        "actual": 0.11,
        "predicted": 0.235177787
    },
    {
        "actual": 0.09,
        "predicted": 0.109984236
    },
    {
        "actual": 0.01,
        "predicted": 0.104070476
    },
    {
        "actual": 0.5,
        "predicted": 0.348181939
    },
    {
        "actual": 0.32,
        "predicted": 0.300141072
    },
    {
        "actual": 0.43,
        "predicted": 0.586056501
    },
    {
        "actual": 0.3,
        "predicted": 0.352457304
    },
    {
        "actual": 0.02,
        "predicted": 0.108436413
    },
    {
        "actual": 0.38,
        "predicted": 0.279878772
    },
    {
        "actual": 0.01,
        "predicted": 0.076166677
    },
    {
        "actual": 0.02,
        "predicted": 0.105174928
    },
    {
        "actual": 0.04,
        "predicted": 0.109096286
    },
    {
        "actual": 0.3,
        "predicted": 0.226040763
    },
    {
        "actual": 0.8,
        "predicted": 0.662379412
    },
    {
        "actual": 0.03,
        "predicted": 0.103670779
    },
    {
        "actual": 0.11,
        "predicted": 0.096597111
    },
    {
        "actual": 0.9,
        "predicted": 0.46015962
    },
    {
        "actual": 0.09,
        "predicted": 0.233406393
    },
    {
        "actual": 0.17,
        "predicted": 0.270174314
    },
    {
        "actual": 0.07,
        "predicted": 0.119553449
    },
    {
        "actual": 0.79,
        "predicted": 0.686485569
    },
    {
        "actual": 0.28,
        "predicted": 0.395666568
    },
    {
        "actual": 0.02,
        "predicted": 0.088144097
    },
    {
        "actual": 0.03,
        "predicted": 0.138533361
    },
    {
        "actual": 0.15,
        "predicted": 0.223572264
    },
    {
        "actual": 0.07,
        "predicted": 0.196635036
    },
    {
        "actual": 0.08,
        "predicted": 0.104102418
    },
    {
        "actual": 0.33,
        "predicted": 0.364419848
    },
    {
        "actual": 0.05,
        "predicted": 0.100212346
    },
    {
        "actual": 0.25,
        "predicted": 0.303857061
    },
    {
        "actual": 0.09,
        "predicted": 0.168615192
    },
    {
        "actual": 0.23,
        "predicted": 0.241093812
    },
    {
        "actual": 0.06,
        "predicted": 0.111126718
    },
    {
        "actual": 0.07,
        "predicted": 0.208460127
    },
    {
        "actual": 0.08,
        "predicted": 0.165421144
    },
    {
        "actual": 0.42,
        "predicted": 0.422295378
    },
    {
        "actual": 0,
        "predicted": 0.100461072
    },
    {
        "actual": 0.05,
        "predicted": 0.105358702
    },
    {
        "actual": 0.05,
        "predicted": 0.121822014
    },
    {
        "actual": 0.03,
        "predicted": 0.114058193
    },
    {
        "actual": 0.06,
        "predicted": 0.120473817
    },
    {
        "actual": 0.59,
        "predicted": 0.471902083
    },
    {
        "actual": 0.33,
        "predicted": 0.430182045
    },
    {
        "actual": 0.75,
        "predicted": 0.228496556
    },
    {
        "actual": 0.43,
        "predicted": 0.24345784
    },
    {
        "actual": 0.02,
        "predicted": 0.252929884
    },
    {
        "actual": 0.09,
        "predicted": 0.157304686
    },
    {
        "actual": 0.03,
        "predicted": 0.093147672
    },
    {
        "actual": 0.07,
        "predicted": 0.111776462
    },
    {
        "actual": 0.25,
        "predicted": 0.447260088
    },
    {
        "actual": 0.48,
        "predicted": 0.636355132
    },
    {
        "actual": 0.22,
        "predicted": 0.216239129
    },
    {
        "actual": 0.04,
        "predicted": 0.093454608
    },
    {
        "actual": 0.16,
        "predicted": 0.112730825
    },
    {
        "actual": 0.11,
        "predicted": 0.145614935
    },
    {
        "actual": 0.18,
        "predicted": 0.100002746
    },
    {
        "actual": 0.28,
        "predicted": 0.354413363
    },
    {
        "actual": 0.57,
        "predicted": 0.560345322
    },
    {
        "actual": 0.39,
        "predicted": 0.54382561
    },
    {
        "actual": 0.01,
        "predicted": 0.095684454
    },
    {
        "actual": 0.14,
        "predicted": 0.148131087
    },
    {
        "actual": 0.12,
        "predicted": 0.114923276
    },
    {
        "actual": 0.06,
        "predicted": 0.077348661
    },
    {
        "actual": 0.37,
        "predicted": 0.160998159
    },
    {
        "actual": 1,
        "predicted": 0.875719835
    },
    {
        "actual": 0.09,
        "predicted": 0.18341631
    },
    {
        "actual": 0.65,
        "predicted": 0.36276389
    },
    {
        "actual": 0.02,
        "predicted": 0.05709126
    },
    {
        "actual": 0.08,
        "predicted": 0.115103966
    },
    {
        "actual": 0.34,
        "predicted": 0.227186392
    },
    {
        "actual": 0.39,
        "predicted": 0.378295411
    },
    {
        "actual": 0.29,
        "predicted": 0.303808359
    },
    {
        "actual": 0.2,
        "predicted": 0.343082256
    },
    {
        "actual": 0.13,
        "predicted": 0.186683105
    },
    {
        "actual": 0.02,
        "predicted": 0.099813232
    },
    {
        "actual": 0.32,
        "predicted": 0.240403194
    },
    {
        "actual": 0.13,
        "predicted": 0.108656589
    },
    {
        "actual": 0.04,
        "predicted": 0.117070579
    },
    {
        "actual": 0.59,
        "predicted": 0.825113279
    },
    {
        "actual": 0.33,
        "predicted": 0.296156592
    },
    {
        "actual": 0.5,
        "predicted": 0.348998996
    },
    {
        "actual": 0.1,
        "predicted": 0.1098433
    },
    {
        "actual": 0.09,
        "predicted": 0.158026483
    },
    {
        "actual": 0.52,
        "predicted": 0.545078954
    },
    {
        "actual": 0.04,
        "predicted": 0.1204676
    },
    {
        "actual": 0.05,
        "predicted": 0.097643566
    },
    {
        "actual": 0.05,
        "predicted": 0.114330744
    },
    {
        "actual": 0.38,
        "predicted": 0.404468939
    },
    {
        "actual": 0.02,
        "predicted": 0.108511594
    },
    {
        "actual": 0.22,
        "predicted": 0.183723657
    },
    {
        "actual": 0.28,
        "predicted": 0.309245849
    },
    {
        "actual": 0.28,
        "predicted": 0.334322882
    },
    {
        "actual": 0.18,
        "predicted": 0.189177898
    },
    {
        "actual": 0.02,
        "predicted": 0.109211958
    },
    {
        "actual": 0.11,
        "predicted": 0.137957951
    },
    {
        "actual": 0.08,
        "predicted": 0.141926323
    },
    {
        "actual": 0.12,
        "predicted": 0.219433913
    },
    {
        "actual": 0.19,
        "predicted": 0.184590842
    },
    {
        "actual": 0.21,
        "predicted": 0.406854297
    },
    {
        "actual": 0.23,
        "predicted": 0.21178713
    },
    {
        "actual": 0.11,
        "predicted": 0.358280549
    },
    {
        "actual": 1,
        "predicted": 0.831985916
    },
    {
        "actual": 0.04,
        "predicted": 0.122813929
    },
    {
        "actual": 0.11,
        "predicted": 0.104612112
    },
    {
        "actual": 0.19,
        "predicted": 0.28754438
    },
    {
        "actual": 0.04,
        "predicted": 0.101782216
    },
    {
        "actual": 0.32,
        "predicted": 0.401236621
    },
    {
        "actual": 0.42,
        "predicted": 0.462733789
    },
    {
        "actual": 0.33,
        "predicted": 0.240166682
    },
    {
        "actual": 0.31,
        "predicted": 0.177710151
    },
    {
        "actual": 0.15,
        "predicted": 0.14085506
    },
    {
        "actual": 0.08,
        "predicted": 0.123075399
    },
    {
        "actual": 0.24,
        "predicted": 0.368120175
    },
    {
        "actual": 0.11,
        "predicted": 0.161923839
    },
    {
        "actual": 0.07,
        "predicted": 0.131093896
    },
    {
        "actual": 0.06,
        "predicted": 0.115713201
    },
    {
        "actual": 0.08,
        "predicted": 0.124523229
    },
    {
        "actual": 0.19,
        "predicted": 0.188748445
    },
    {
        "actual": 0.17,
        "predicted": 0.151356268
    },
    {
        "actual": 0.13,
        "predicted": 0.1351374
    },
    {
        "actual": 0.01,
        "predicted": 0.071902071
    },
    {
        "actual": 0.06,
        "predicted": 0.147443182
    },
    {
        "actual": 0.15,
        "predicted": 0.250192941
    },
    {
        "actual": 0.11,
        "predicted": 0.132130953
    },
    {
        "actual": 0.05,
        "predicted": 0.130388395
    },
    {
        "actual": 0.01,
        "predicted": 0.106037178
    },
    {
        "actual": 0.06,
        "predicted": 0.105406531
    },
    {
        "actual": 0.5,
        "predicted": 0.331253707
    },
    {
        "actual": 0.13,
        "predicted": 0.112901954
    },
    {
        "actual": 0.67,
        "predicted": 0.586252659
    },
    {
        "actual": 0.17,
        "predicted": 0.13132601
    },
    {
        "actual": 0.35,
        "predicted": 0.449627782
    },
    {
        "actual": 0.19,
        "predicted": 0.130733135
    },
    {
        "actual": 0.6,
        "predicted": 0.327403083
    },
    {
        "actual": 0.6,
        "predicted": 0.325542385
    },
    {
        "actual": 0.06,
        "predicted": 0.133720501
    },
    {
        "actual": 0.27,
        "predicted": 0.268588708
    },
    {
        "actual": 0.09,
        "predicted": 0.06945811
    },
    {
        "actual": 0.22,
        "predicted": 0.095231181
    },
    {
        "actual": 1,
        "predicted": 0.77113422
    },
    {
        "actual": 0.12,
        "predicted": 0.112740085
    },
    {
        "actual": 0.02,
        "predicted": 0.085473778
    },
    {
        "actual": 0.03,
        "predicted": 0.103671211
    },
    {
        "actual": 0.16,
        "predicted": 0.11574575
    },
    {
        "actual": 0.22,
        "predicted": 0.193527698
    },
    {
        "actual": 0.08,
        "predicted": 0.133448955
    },
    {
        "actual": 0.01,
        "predicted": 0.094116431
    },
    {
        "actual": 0.67,
        "predicted": 0.658233335
    },
    {
        "actual": 0.08,
        "predicted": 0.09632795
    },
    {
        "actual": 0.14,
        "predicted": 0.156988284
    },
    {
        "actual": 0.36,
        "predicted": 0.202115681
    },
    {
        "actual": 0.16,
        "predicted": 0.115855792
    },
    {
        "actual": 0.09,
        "predicted": 0.136728255
    },
    {
        "actual": 0.75,
        "predicted": 0.67340008
    },
    {
        "actual": 0.15,
        "predicted": 0.203213598
    },
    {
        "actual": 0.83,
        "predicted": 0.517319995
    },
    {
        "actual": 0.03,
        "predicted": 0.108782507
    },
    {
        "actual": 0.47,
        "predicted": 0.61356805
    },
    {
        "actual": 0.48,
        "predicted": 0.397546389
    },
    {
        "actual": 0.19,
        "predicted": 0.355406906
    },
    {
        "actual": 0.05,
        "predicted": 0.10931665
    },
    {
        "actual": 0.08,
        "predicted": 0.118241599
    },
    {
        "actual": 0.04,
        "predicted": 0.114108528
    },
    {
        "actual": 0.53,
        "predicted": 0.269171171
    },
    {
        "actual": 0.09,
        "predicted": 0.144214913
    },
    {
        "actual": 0.06,
        "predicted": 0.099393723
    },
    {
        "actual": 0.09,
        "predicted": 0.092836759
    },
    {
        "actual": 0.25,
        "predicted": 0.370614504
    },
    {
        "actual": 0.39,
        "predicted": 0.279440402
    },
    {
        "actual": 0.53,
        "predicted": 0.436341365
    },
    {
        "actual": 0.52,
        "predicted": 0.398507446
    },
    {
        "actual": 0.08,
        "predicted": 0.108324122
    },
    {
        "actual": 0.6,
        "predicted": 0.394429299
    },
    {
        "actual": 0.02,
        "predicted": 0.096786503
    },
    {
        "actual": 0.06,
        "predicted": 0.11159061
    },
    {
        "actual": 0.09,
        "predicted": 0.122936676
    },
    {
        "actual": 0.19,
        "predicted": 0.199957728
    },
    {
        "actual": 0.16,
        "predicted": 0.147506025
    },
    {
        "actual": 0.14,
        "predicted": 0.101198315
    },
    {
        "actual": 0.19,
        "predicted": 0.254295039
    },
    {
        "actual": 0.07,
        "predicted": 0.152125685
    },
    {
        "actual": 0.72,
        "predicted": 0.556349711
    },
    {
        "actual": 0.07,
        "predicted": 0.122727704
    },
    {
        "actual": 0.27,
        "predicted": 0.292513038
    },
    {
        "actual": 0.03,
        "predicted": 0.090450086
    },
    {
        "actual": 0.45,
        "predicted": 0.114227527
    },
    {
        "actual": 0.15,
        "predicted": 0.223939091
    },
    {
        "actual": 0.13,
        "predicted": 0.107566477
    },
    {
        "actual": 0.26,
        "predicted": 0.363628241
    },
    {
        "actual": 0.06,
        "predicted": 0.158856594
    },
    {
        "actual": 0.62,
        "predicted": 0.697915776
    },
    {
        "actual": 0.53,
        "predicted": 0.252663953
    },
    {
        "actual": 0.09,
        "predicted": 0.206164197
    },
    {
        "actual": 0.49,
        "predicted": 0.303062643
    },
    {
        "actual": 0.09,
        "predicted": 0.103861612
    },
    {
        "actual": 0.64,
        "predicted": 0.770411099
    },
    {
        "actual": 0.01,
        "predicted": 0.087691074
    },
    {
        "actual": 0.5,
        "predicted": 0.597490556
    },
    {
        "actual": 0.02,
        "predicted": 0.103430632
    },
    {
        "actual": 0.24,
        "predicted": 0.247080682
    },
    {
        "actual": 0.23,
        "predicted": 0.256631044
    },
    {
        "actual": 0.38,
        "predicted": 0.188117776
    },
    {
        "actual": 0.23,
        "predicted": 0.575018785
    },
    {
        "actual": 0.41,
        "predicted": 0.171839838
    },
    {
        "actual": 0.05,
        "predicted": 0.09710759
    },
    {
        "actual": 0.18,
        "predicted": 0.193667132
    },
    {
        "actual": 0.02,
        "predicted": 0.10595226
    },
    {
        "actual": 0.09,
        "predicted": 0.109513427
    },
    {
        "actual": 0.05,
        "predicted": 0.143109573
    },
    {
        "actual": 0.07,
        "predicted": 0.20085291
    },
    {
        "actual": 0.07,
        "predicted": 0.15328652
    },
    {
        "actual": 0.81,
        "predicted": 0.41194793
    },
    {
        "actual": 0.04,
        "predicted": 0.105270483
    },
    {
        "actual": 0.02,
        "predicted": 0.103136152
    },
    {
        "actual": 0.15,
        "predicted": 0.112648625
    },
    {
        "actual": 0.65,
        "predicted": 0.775318892
    },
    {
        "actual": 0.86,
        "predicted": 0.813487647
    },
    {
        "actual": 0.12,
        "predicted": 0.204626912
    },
    {
        "actual": 0.57,
        "predicted": 0.556298919
    },
    {
        "actual": 0.16,
        "predicted": 0.214116514
    },
    {
        "actual": 0.18,
        "predicted": 0.330549973
    },
    {
        "actual": 0.16,
        "predicted": 0.562825582
    },
    {
        "actual": 0.24,
        "predicted": 0.453088036
    },
    {
        "actual": 0.44,
        "predicted": 0.40456247
    },
    {
        "actual": 0.06,
        "predicted": 0.097105016
    },
    {
        "actual": 0.16,
        "predicted": 0.192994355
    },
    {
        "actual": 0.08,
        "predicted": 0.127940779
    },
    {
        "actual": 1,
        "predicted": 1.100261917
    },
    {
        "actual": 0.14,
        "predicted": 0.108673539
    },
    {
        "actual": 0.55,
        "predicted": 0.686205576
    },
    {
        "actual": 0.13,
        "predicted": 0.151716426
    },
    {
        "actual": 0.22,
        "predicted": 0.261177621
    },
    {
        "actual": 0.29,
        "predicted": 0.222476487
    },
    {
        "actual": 0.05,
        "predicted": 0.122503842
    },
    {
        "actual": 0.16,
        "predicted": 0.134528821
    },
    {
        "actual": 0.09,
        "predicted": 0.200991567
    },
    {
        "actual": 0.17,
        "predicted": 0.185447104
    },
    {
        "actual": 0.15,
        "predicted": 0.076581281
    },
    {
        "actual": 0.14,
        "predicted": 0.18105918
    },
    {
        "actual": 0.34,
        "predicted": 0.442129419
    },
    {
        "actual": 0.27,
        "predicted": 0.239977684
    },
    {
        "actual": 0.17,
        "predicted": 0.154475493
    },
    {
        "actual": 0.26,
        "predicted": 0.25537568
    },
    {
        "actual": 0.07,
        "predicted": 0.111981526
    },
    {
        "actual": 0.02,
        "predicted": 0.068381446
    },
    {
        "actual": 0.95,
        "predicted": 0.835260882
    },
    {
        "actual": 0.11,
        "predicted": 0.175163266
    },
    {
        "actual": 0.03,
        "predicted": 0.111829837
    },
    {
        "actual": 0.03,
        "predicted": 0.111369033
    },
    {
        "actual": 0.19,
        "predicted": 0.149111138
    },
    {
        "actual": 0.34,
        "predicted": 0.264736873
    },
    {
        "actual": 0.11,
        "predicted": 0.102885505
    },
    {
        "actual": 0.53,
        "predicted": 0.54308044
    },
    {
        "actual": 0.04,
        "predicted": 0.139301157
    },
    {
        "actual": 0.21,
        "predicted": 0.14569952
    },
    {
        "actual": 0.37,
        "predicted": 0.265961709
    },
    {
        "actual": 0.18,
        "predicted": 0.225508371
    },
    {
        "actual": 0.15,
        "predicted": 0.171642924
    },
    {
        "actual": 0.88,
        "predicted": 0.633812303
    },
    {
        "actual": 0.2,
        "predicted": 0.600444443
    },
    {
        "actual": 0.22,
        "predicted": 0.169941268
    },
    {
        "actual": 0.06,
        "predicted": 0.122898213
    },
    {
        "actual": 0.08,
        "predicted": 0.106136998
    },
    {
        "actual": 0.11,
        "predicted": 0.165206247
    },
    {
        "actual": 0.38,
        "predicted": 0.33877577
    },
    {
        "actual": 0.08,
        "predicted": 0.11742678
    },
    {
        "actual": 0.29,
        "predicted": 0.22143749
    },
    {
        "actual": 0.36,
        "predicted": 0.444714073
    },
    {
        "actual": 0.09,
        "predicted": 0.136924645
    },
    {
        "actual": 0.1,
        "predicted": 0.212202417
    },
    {
        "actual": 0.05,
        "predicted": 0.129008401
    },
    {
        "actual": 0.23,
        "predicted": 0.235745716
    },
    {
        "actual": 0.15,
        "predicted": 0.154398193
    },
    {
        "actual": 0.3,
        "predicted": 0.227916042
    },
    {
        "actual": 0.03,
        "predicted": 0.124352343
    },
    {
        "actual": 0.19,
        "predicted": 0.120166274
    },
    {
        "actual": 0.04,
        "predicted": 0.104594025
    },
    {
        "actual": 0.15,
        "predicted": 0.096829932
    },
    {
        "actual": 0.01,
        "predicted": 0.130853855
    },
    {
        "actual": 0.08,
        "predicted": 0.09263608
    },
    {
        "actual": 0.5,
        "predicted": 0.187499431
    },
    {
        "actual": 0.16,
        "predicted": 0.112253164
    },
    {
        "actual": 0.16,
        "predicted": 0.193470956
    },
    {
        "actual": 0.22,
        "predicted": 0.325931895
    },
    {
        "actual": 0.08,
        "predicted": 0.129463951
    },
    {
        "actual": 0.14,
        "predicted": 0.129360306
    },
    {
        "actual": 0.05,
        "predicted": 0.165963371
    },
    {
        "actual": 0.41,
        "predicted": 0.651349819
    },
    {
        "actual": 0.09,
        "predicted": 0.175000773
    },
    {
        "actual": 0.26,
        "predicted": 0.188892735
    },
    {
        "actual": 0.67,
        "predicted": 0.605485902
    },
    {
        "actual": 0.05,
        "predicted": 0.119952461
    },
    {
        "actual": 0.17,
        "predicted": 0.141204936
    },
    {
        "actual": 0.29,
        "predicted": 0.170226105
    },
    {
        "actual": 0.54,
        "predicted": 0.263313865
    },
    {
        "actual": 0.1,
        "predicted": 0.11172106
    },
    {
        "actual": 0.63,
        "predicted": 0.529904623
    },
    {
        "actual": 0.2,
        "predicted": 0.154302916
    },
    {
        "actual": 0.29,
        "predicted": 0.284760902
    },
    {
        "actual": 0.27,
        "predicted": 0.300352493
    },
    {
        "actual": 0.13,
        "predicted": 0.325584835
    },
    {
        "actual": 0.16,
        "predicted": 0.223300328
    },
    {
        "actual": 0.32,
        "predicted": 0.365274665
    },
    {
        "actual": 0.11,
        "predicted": 0.150471647
    },
    {
        "actual": 0.13,
        "predicted": 0.151613885
    },
    {
        "actual": 0.29,
        "predicted": 0.364997623
    },
    {
        "actual": 0.09,
        "predicted": 0.124169255
    },
    {
        "actual": 0.08,
        "predicted": 0.122821739
    },
    {
        "actual": 0.17,
        "predicted": 0.232686585
    },
    {
        "actual": 0.17,
        "predicted": 0.169997692
    },
    {
        "actual": 0.02,
        "predicted": 0.058293664
    },
    {
        "actual": 0.12,
        "predicted": 0.161169164
    },
    {
        "actual": 0.04,
        "predicted": 0.067630721
    },
    {
        "actual": 0.03,
        "predicted": 0.114148307
    },
    {
        "actual": 0.14,
        "predicted": 0.134750504
    },
    {
        "actual": 0.04,
        "predicted": 0.086305238
    },
    {
        "actual": 0.04,
        "predicted": 0.071986092
    },
    {
        "actual": 0.06,
        "predicted": 0.093871656
    },
    {
        "actual": 0.2,
        "predicted": 0.22514854
    },
    {
        "actual": 0.08,
        "predicted": 0.154383668
    },
    {
        "actual": 0.56,
        "predicted": 0.359427166
    },
    {
        "actual": 0.14,
        "predicted": 0.26895988
    },
    {
        "actual": 0.12,
        "predicted": 0.199717691
    },
    {
        "actual": 0.16,
        "predicted": 0.260142582
    },
    {
        "actual": 0.16,
        "predicted": 0.152291337
    },
    {
        "actual": 0.15,
        "predicted": 0.1753183
    },
    {
        "actual": 0.2,
        "predicted": 0.247343865
    },
    {
        "actual": 0.06,
        "predicted": 0.118425429
    },
    {
        "actual": 0.18,
        "predicted": 0.085363617
    },
    {
        "actual": 0.23,
        "predicted": 0.446503576
    },
    {
        "actual": 0.18,
        "predicted": 0.113222985
    },
    {
        "actual": 0.26,
        "predicted": 0.167485838
    },
    {
        "actual": 0.11,
        "predicted": 0.157612671
    },
    {
        "actual": 0.04,
        "predicted": 0.158235614
    },
    {
        "actual": 0.48,
        "predicted": 0.579477222
    },
    {
        "actual": 0.03,
        "predicted": 0.105321918
    },
    {
        "actual": 0.3,
        "predicted": 0.328252914
    },
    {
        "actual": 1,
        "predicted": 0.519864058
    },
    {
        "actual": 0.34,
        "predicted": 0.232565295
    },
    {
        "actual": 0.1,
        "predicted": 0.169618609
    },
    {
        "actual": 0.02,
        "predicted": 0.138548954
    },
    {
        "actual": 0.02,
        "predicted": 0.230426594
    },
    {
        "actual": 0.32,
        "predicted": 0.379851923
    },
    {
        "actual": 0.45,
        "predicted": 0.593804734
    },
    {
        "actual": 0.6,
        "predicted": 0.699852115
    },
    {
        "actual": 0.69,
        "predicted": 0.589736556
    },
    {
        "actual": 0.3,
        "predicted": 0.368884487
    },
    {
        "actual": 0.04,
        "predicted": 0.103336642
    },
    {
        "actual": 0.19,
        "predicted": 0.470268955
    },
    {
        "actual": 0.75,
        "predicted": 0.649751404
    },
    {
        "actual": 0.53,
        "predicted": 0.271855201
    },
    {
        "actual": 0.22,
        "predicted": 0.271634998
    },
    {
        "actual": 0.3,
        "predicted": 0.238109153
    },
    {
        "actual": 0.04,
        "predicted": 0.105096751
    },
    {
        "actual": 0.52,
        "predicted": 0.229196632
    },
    {
        "actual": 0.09,
        "predicted": 0.151024371
    },
    {
        "actual": 0.08,
        "predicted": 0.103871875
    },
    {
        "actual": 0.25,
        "predicted": 0.149025266
    },
    {
        "actual": 0.04,
        "predicted": 0.107616427
    },
    {
        "actual": 0.16,
        "predicted": 0.262952868
    },
    {
        "actual": 0.28,
        "predicted": 0.152847727
    },
    {
        "actual": 0.07,
        "predicted": 0.125215893
    },
    {
        "actual": 0.03,
        "predicted": 0.109471057
    },
    {
        "actual": 0.56,
        "predicted": 0.413393416
    },
    {
        "actual": 0.14,
        "predicted": 0.093170202
    },
    {
        "actual": 0.14,
        "predicted": 0.305819495
    },
    {
        "actual": 0.02,
        "predicted": 0.103374409
    },
    {
        "actual": 0.04,
        "predicted": 0.10993152
    },
    {
        "actual": 0.19,
        "predicted": 0.503670144
    },
    {
        "actual": 0.09,
        "predicted": 0.144139074
    },
    {
        "actual": 0.45,
        "predicted": 0.480788725
    },
    {
        "actual": 0.23,
        "predicted": 0.456098543
    },
    {
        "actual": 0.19,
        "predicted": 0.155006023
    },
    {
        "actual": 0.48,
        "predicted": 0.379638229
    }
];

var eva_svmr_chart = AmCharts.makeChart("eva-svmr-chart", {
    "type": "xy",
    "theme": "light",
    "autoMarginOffset": 20,
    "dataProvider": eva_svmr_data,
    "valueAxes": [{
        "position": "bottom",
        "axisAlpha": 0,
        "dashLength": 1,
        "title": "Actual"
    }, {
        "axisAlpha": 0,
        "dashLength": 1,
        "position": "left",
        "title": "Predicted"
    }],
    "startDuration": 0,
    "graphs": [{
        "balloonText": "actual:[[x]] predicted:[[y]]",
        "bullet": "circle",
        "lineAlpha": 0,
        "xField": "actual",
        "yField": "predicted",
        "lineColor": "#0f0000",
        "fillAlphas": 0
    }],
    "marginLeft": 64,
    "marginBottom": 60,
    "chartScrollbar": {},
    "chartCursor": {},
    "export": {
        "enabled": true,
        "position": "bottom-right"
    },
    "titles": [
        {
            "text": "SVMR",
            "size": 15
        }
    ]
});

var eva_nn_data = [
    {
        "actual": 0.2,
        "predicted": 0.231163449
    },
    {
        "actual": 0.67,
        "predicted": 0.331297176
    },
    {
        "actual": 0.43,
        "predicted": 0.348457755
    },
    {
        "actual": 0.12,
        "predicted": 0.385720109
    },
    {
        "actual": 0.03,
        "predicted": 0.029725028
    },
    {
        "actual": 0.14,
        "predicted": 0.22513516
    },
    {
        "actual": 0.03,
        "predicted": 0.067400284
    },
    {
        "actual": 0.55,
        "predicted": 0.401496672
    },
    {
        "actual": 0.53,
        "predicted": 0.26067318
    },
    {
        "actual": 0.15,
        "predicted": 0.111279244
    },
    {
        "actual": 0.24,
        "predicted": 0.417442625
    },
    {
        "actual": 0.08,
        "predicted": 0.077859215
    },
    {
        "actual": 0.06,
        "predicted": 0.018489742
    },
    {
        "actual": 0.09,
        "predicted": 0.039080195
    },
    {
        "actual": 0.21,
        "predicted": 0.208557919
    },
    {
        "actual": 0.3,
        "predicted": 0.160277326
    },
    {
        "actual": 0.49,
        "predicted": 0.511609167
    },
    {
        "actual": 0.07,
        "predicted": 0.043028573
    },
    {
        "actual": 0.15,
        "predicted": 0.081859451
    },
    {
        "actual": 0.03,
        "predicted": 0.094214798
    },
    {
        "actual": 0.34,
        "predicted": 0.29987156
    },
    {
        "actual": 0.69,
        "predicted": 0.484848299
    },
    {
        "actual": 0.21,
        "predicted": 0.230617364
    },
    {
        "actual": 0.63,
        "predicted": 0.230105572
    },
    {
        "actual": 0.31,
        "predicted": 0.440585488
    },
    {
        "actual": 0.12,
        "predicted": 0.179584392
    },
    {
        "actual": 0.84,
        "predicted": 0.518127963
    },
    {
        "actual": 0.1,
        "predicted": 0.102229972
    },
    {
        "actual": 0.49,
        "predicted": 0.314064625
    },
    {
        "actual": 0.02,
        "predicted": 0.04166405
    },
    {
        "actual": 0.16,
        "predicted": 0.110830359
    },
    {
        "actual": 0.19,
        "predicted": 0.304380402
    },
    {
        "actual": 0.15,
        "predicted": 0.321474493
    },
    {
        "actual": 0.31,
        "predicted": 0.395536988
    },
    {
        "actual": 0.08,
        "predicted": 0.158455108
    },
    {
        "actual": 0.24,
        "predicted": 0.332636689
    },
    {
        "actual": 0.11,
        "predicted": 0.153347474
    },
    {
        "actual": 0.22,
        "predicted": 0.23871754
    },
    {
        "actual": 0.13,
        "predicted": 0.239464733
    },
    {
        "actual": 0.07,
        "predicted": 0.170522986
    },
    {
        "actual": 0.11,
        "predicted": 0.110379298
    },
    {
        "actual": 0.06,
        "predicted": 0.149864832
    },
    {
        "actual": 0.8,
        "predicted": 0.512624616
    },
    {
        "actual": 0.22,
        "predicted": 0.205318332
    },
    {
        "actual": 0.17,
        "predicted": 0.048349774
    },
    {
        "actual": 0.16,
        "predicted": 0.13124351
    },
    {
        "actual": 0.2,
        "predicted": 0.25150595
    },
    {
        "actual": 0.12,
        "predicted": 0.241790255
    },
    {
        "actual": 0.11,
        "predicted": 0.151902235
    },
    {
        "actual": 0.12,
        "predicted": 0.171833817
    },
    {
        "actual": 0.2,
        "predicted": 0.312355921
    },
    {
        "actual": 0.68,
        "predicted": 0.361668997
    },
    {
        "actual": 0.23,
        "predicted": 0.233727574
    },
    {
        "actual": 0.05,
        "predicted": 0.021746481
    },
    {
        "actual": 0.1,
        "predicted": 0.178904951
    },
    {
        "actual": 0.28,
        "predicted": 0.28079513
    },
    {
        "actual": 0.22,
        "predicted": 0.226395064
    },
    {
        "actual": 0.22,
        "predicted": 0.219407737
    },
    {
        "actual": 0.55,
        "predicted": 0.329912678
    },
    {
        "actual": 0.05,
        "predicted": 0.121414304
    },
    {
        "actual": 0.03,
        "predicted": 0.063148163
    },
    {
        "actual": 0.07,
        "predicted": 0.243567023
    },
    {
        "actual": 0.07,
        "predicted": 0.152742168
    },
    {
        "actual": 0.57,
        "predicted": 0.323069665
    },
    {
        "actual": 0.37,
        "predicted": 0.354752855
    },
    {
        "actual": 0.14,
        "predicted": 0.111954275
    },
    {
        "actual": 0.61,
        "predicted": 0.402418642
    },
    {
        "actual": 0.03,
        "predicted": 0.105970794
    },
    {
        "actual": 0.5,
        "predicted": 0.493446357
    },
    {
        "actual": 0.05,
        "predicted": 0.147298235
    },
    {
        "actual": 0.04,
        "predicted": 0.033315833
    },
    {
        "actual": 0.21,
        "predicted": 0.112671923
    },
    {
        "actual": 0.05,
        "predicted": 0.099824304
    },
    {
        "actual": 0.02,
        "predicted": 0.021593907
    },
    {
        "actual": 0.14,
        "predicted": 0.244267668
    },
    {
        "actual": 0.18,
        "predicted": 0.231364784
    },
    {
        "actual": 0.12,
        "predicted": 0.330004498
    },
    {
        "actual": 0.68,
        "predicted": 0.509563579
    },
    {
        "actual": 0.7,
        "predicted": 0.346787476
    },
    {
        "actual": 0.75,
        "predicted": 0.344045388
    },
    {
        "actual": 0.3,
        "predicted": 0.385274096
    },
    {
        "actual": 0.24,
        "predicted": 0.303948551
    },
    {
        "actual": 1,
        "predicted": 0.243428139
    },
    {
        "actual": 0,
        "predicted": -0.002933393
    },
    {
        "actual": 0.03,
        "predicted": 0.126208504
    },
    {
        "actual": 0.06,
        "predicted": 0.117000322
    },
    {
        "actual": 0.08,
        "predicted": 0.138384387
    },
    {
        "actual": 0.1,
        "predicted": 0.117617477
    },
    {
        "actual": 0.27,
        "predicted": 0.201560202
    },
    {
        "actual": 0.15,
        "predicted": 0.182113217
    },
    {
        "actual": 0.63,
        "predicted": 0.233490321
    },
    {
        "actual": 0.05,
        "predicted": 0.216233782
    },
    {
        "actual": 0.03,
        "predicted": 0.065990801
    },
    {
        "actual": 0.12,
        "predicted": 0.118079162
    },
    {
        "actual": 0.4,
        "predicted": 0.18451837
    },
    {
        "actual": 0.37,
        "predicted": 0.218485324
    },
    {
        "actual": 0.45,
        "predicted": 0.266997688
    },
    {
        "actual": 0.04,
        "predicted": 0.053856938
    },
    {
        "actual": 0.09,
        "predicted": 0.04161871
    },
    {
        "actual": 0.09,
        "predicted": 0.235246191
    },
    {
        "actual": 0.39,
        "predicted": 0.352077696
    },
    {
        "actual": 0.02,
        "predicted": 0.139874122
    },
    {
        "actual": 0.34,
        "predicted": 0.369602999
    },
    {
        "actual": 0.28,
        "predicted": 0.32113517
    },
    {
        "actual": 0.08,
        "predicted": 0.085456247
    },
    {
        "actual": 0.44,
        "predicted": 0.483168308
    },
    {
        "actual": 0.24,
        "predicted": 0.191932429
    },
    {
        "actual": 0.09,
        "predicted": 0.078700652
    },
    {
        "actual": 0.26,
        "predicted": 0.23795231
    },
    {
        "actual": 0.4,
        "predicted": 0.479394706
    },
    {
        "actual": 0.56,
        "predicted": 0.400328748
    },
    {
        "actual": 0.05,
        "predicted": 0.045384984
    },
    {
        "actual": 0.06,
        "predicted": 0.04717489
    },
    {
        "actual": 0.2,
        "predicted": 0.29485791
    },
    {
        "actual": 0.51,
        "predicted": 0.405285284
    },
    {
        "actual": 0.04,
        "predicted": 0.009890763
    },
    {
        "actual": 0.86,
        "predicted": 0.733971486
    },
    {
        "actual": 0.05,
        "predicted": 0.034544887
    },
    {
        "actual": 0.06,
        "predicted": 0.149297044
    },
    {
        "actual": 0.68,
        "predicted": 0.322651615
    },
    {
        "actual": 0.22,
        "predicted": 0.216292694
    },
    {
        "actual": 0.05,
        "predicted": 0.088991976
    },
    {
        "actual": 0.03,
        "predicted": 0.026481111
    },
    {
        "actual": 0.09,
        "predicted": 0.137010524
    },
    {
        "actual": 0.17,
        "predicted": 0.101622151
    },
    {
        "actual": 0.17,
        "predicted": 0.125444155
    },
    {
        "actual": 0.17,
        "predicted": 0.1142366
    },
    {
        "actual": 0.14,
        "predicted": 0.287018959
    },
    {
        "actual": 0.62,
        "predicted": 0.408902515
    },
    {
        "actual": 0.03,
        "predicted": 0.067898375
    },
    {
        "actual": 0.23,
        "predicted": 0.585115064
    },
    {
        "actual": 0.15,
        "predicted": 0.087970317
    },
    {
        "actual": 0.13,
        "predicted": 0.185245875
    },
    {
        "actual": 0.27,
        "predicted": 0.187623587
    },
    {
        "actual": 0.08,
        "predicted": 0.123167565
    },
    {
        "actual": 0.06,
        "predicted": 0.078702724
    },
    {
        "actual": 0.09,
        "predicted": 0.003651989
    },
    {
        "actual": 0.16,
        "predicted": 0.282970275
    },
    {
        "actual": 0.38,
        "predicted": 0.261654833
    },
    {
        "actual": 0.02,
        "predicted": 0.046253405
    },
    {
        "actual": 0.08,
        "predicted": 0.113285086
    },
    {
        "actual": 0.09,
        "predicted": 0.09578275
    },
    {
        "actual": 0.3,
        "predicted": 0.564017535
    },
    {
        "actual": 0.05,
        "predicted": 0.037370567
    },
    {
        "actual": 0.17,
        "predicted": 0.224950815
    },
    {
        "actual": 0.53,
        "predicted": 0.392077621
    },
    {
        "actual": 1,
        "predicted": 0.673081819
    },
    {
        "actual": 0.05,
        "predicted": 0.176277123
    },
    {
        "actual": 0.63,
        "predicted": 0.447107017
    },
    {
        "actual": 1,
        "predicted": 0.350231999
    },
    {
        "actual": 0.21,
        "predicted": 0.290001849
    },
    {
        "actual": 0.86,
        "predicted": 0.48002839
    },
    {
        "actual": 0.03,
        "predicted": 0.079869151
    },
    {
        "actual": 0.26,
        "predicted": 0.046279232
    },
    {
        "actual": 0.87,
        "predicted": 0.506289269
    },
    {
        "actual": 0.44,
        "predicted": 0.621257738
    },
    {
        "actual": 0.03,
        "predicted": 0.071984811
    },
    {
        "actual": 0.73,
        "predicted": 0.586054206
    },
    {
        "actual": 0.48,
        "predicted": 0.359690985
    },
    {
        "actual": 0.06,
        "predicted": 0.081874453
    },
    {
        "actual": 0.07,
        "predicted": 0.120986031
    },
    {
        "actual": 0.03,
        "predicted": 0.114580001
    },
    {
        "actual": 0.17,
        "predicted": 0.073005123
    },
    {
        "actual": 0.11,
        "predicted": 0.076886164
    },
    {
        "actual": 0.05,
        "predicted": 0.030547506
    },
    {
        "actual": 0.25,
        "predicted": 0.201539156
    },
    {
        "actual": 0.05,
        "predicted": 0.082984438
    },
    {
        "actual": 0.15,
        "predicted": 0.177384168
    },
    {
        "actual": 0.46,
        "predicted": 0.410509131
    },
    {
        "actual": 0.45,
        "predicted": 0.223854348
    },
    {
        "actual": 0.23,
        "predicted": 0.29265149
    },
    {
        "actual": 0.08,
        "predicted": 0.088026385
    },
    {
        "actual": 0.08,
        "predicted": 0.123523498
    },
    {
        "actual": 0.2,
        "predicted": 0.361899899
    },
    {
        "actual": 0.73,
        "predicted": 0.400352945
    },
    {
        "actual": 0.17,
        "predicted": 0.142705196
    },
    {
        "actual": 0.07,
        "predicted": 0.041991006
    },
    {
        "actual": 0.83,
        "predicted": 0.685659224
    },
    {
        "actual": 0.1,
        "predicted": 0.185213428
    },
    {
        "actual": 0.25,
        "predicted": 0.186473426
    },
    {
        "actual": 0.12,
        "predicted": 0.328511005
    },
    {
        "actual": 0.25,
        "predicted": 0.227585171
    },
    {
        "actual": 0.3,
        "predicted": 0.287180931
    },
    {
        "actual": 0.02,
        "predicted": 0.019615706
    },
    {
        "actual": 0.19,
        "predicted": 0.156627622
    },
    {
        "actual": 0.36,
        "predicted": 0.431936326
    },
    {
        "actual": 0.12,
        "predicted": 0.149322581
    },
    {
        "actual": 0.01,
        "predicted": 0.065289419
    },
    {
        "actual": 0.06,
        "predicted": 0.075855634
    },
    {
        "actual": 0.1,
        "predicted": 0.071816573
    },
    {
        "actual": 0.1,
        "predicted": 0.302823269
    },
    {
        "actual": 0.21,
        "predicted": 0.155209282
    },
    {
        "actual": 0.1,
        "predicted": 0.130018667
    },
    {
        "actual": 0.07,
        "predicted": 0.087690756
    },
    {
        "actual": 0.02,
        "predicted": 0.02275139
    },
    {
        "actual": 0.03,
        "predicted": 0.037313828
    },
    {
        "actual": 0.01,
        "predicted": 0.132543793
    },
    {
        "actual": 0.41,
        "predicted": 0.672235091
    },
    {
        "actual": 0.26,
        "predicted": 0.260350637
    },
    {
        "actual": 0.42,
        "predicted": 0.434579264
    },
    {
        "actual": 0.18,
        "predicted": 0.279055499
    },
    {
        "actual": 0.13,
        "predicted": 0.070666215
    },
    {
        "actual": 0.29,
        "predicted": 0.244797983
    },
    {
        "actual": 0.68,
        "predicted": 0.379328472
    },
    {
        "actual": 0.05,
        "predicted": 0.084945309
    },
    {
        "actual": 0.16,
        "predicted": 0.22184044
    },
    {
        "actual": 0.26,
        "predicted": 0.227487904
    },
    {
        "actual": 0.19,
        "predicted": 0.092011551
    },
    {
        "actual": 0.03,
        "predicted": 0.060297873
    },
    {
        "actual": 0.15,
        "predicted": 0.097757413
    },
    {
        "actual": 0.29,
        "predicted": 0.434788502
    },
    {
        "actual": 0.01,
        "predicted": 0.066265846
    },
    {
        "actual": 0.66,
        "predicted": 0.42467195
    },
    {
        "actual": 0.05,
        "predicted": 0.101982403
    },
    {
        "actual": 0.27,
        "predicted": 0.091046661
    },
    {
        "actual": 0.49,
        "predicted": 0.26358394
    },
    {
        "actual": 0.08,
        "predicted": 0.156191446
    },
    {
        "actual": 0.04,
        "predicted": 0.032292222
    },
    {
        "actual": 0.16,
        "predicted": 0.472895679
    },
    {
        "actual": 0.06,
        "predicted": 0.145581713
    },
    {
        "actual": 0.04,
        "predicted": 0.071657552
    },
    {
        "actual": 0.31,
        "predicted": 0.407910388
    },
    {
        "actual": 0.36,
        "predicted": 0.570005246
    },
    {
        "actual": 0.05,
        "predicted": 0.054767895
    },
    {
        "actual": 0.16,
        "predicted": 0.090216133
    },
    {
        "actual": 0.1,
        "predicted": 0.386713061
    },
    {
        "actual": 0.74,
        "predicted": 0.37135933
    },
    {
        "actual": 0.19,
        "predicted": 0.274210507
    },
    {
        "actual": 0.63,
        "predicted": 0.52083494
    },
    {
        "actual": 0.42,
        "predicted": 0.587942992
    },
    {
        "actual": 0.04,
        "predicted": 0.190849369
    },
    {
        "actual": 0.06,
        "predicted": 0.095937691
    },
    {
        "actual": 0.2,
        "predicted": 0.187813943
    },
    {
        "actual": 0.88,
        "predicted": 0.704279197
    },
    {
        "actual": 0.12,
        "predicted": 0.076724647
    },
    {
        "actual": 0.11,
        "predicted": 0.293679965
    },
    {
        "actual": 0.27,
        "predicted": 0.276915239
    },
    {
        "actual": 0.02,
        "predicted": 0.047404299
    },
    {
        "actual": 0.37,
        "predicted": 0.144539436
    },
    {
        "actual": 0.18,
        "predicted": 0.284073008
    },
    {
        "actual": 0.04,
        "predicted": 0.036779388
    },
    {
        "actual": 0.12,
        "predicted": 0.246120533
    },
    {
        "actual": 0.32,
        "predicted": 0.296398685
    },
    {
        "actual": 0.54,
        "predicted": 0.528862191
    },
    {
        "actual": 0.18,
        "predicted": 0.218767742
    },
    {
        "actual": 0.25,
        "predicted": 0.209350609
    },
    {
        "actual": 0.7,
        "predicted": 0.415355122
    },
    {
        "actual": 0.22,
        "predicted": 0.248268989
    },
    {
        "actual": 1,
        "predicted": 0.643441428
    },
    {
        "actual": 0.03,
        "predicted": 0.185862532
    },
    {
        "actual": 0.74,
        "predicted": 0.489660794
    },
    {
        "actual": 0.63,
        "predicted": 0.430172118
    },
    {
        "actual": 0.05,
        "predicted": 0.02240168
    },
    {
        "actual": 0.09,
        "predicted": 0.270758727
    },
    {
        "actual": 0.04,
        "predicted": 0.017420341
    },
    {
        "actual": 0.93,
        "predicted": 0.542263053
    },
    {
        "actual": 0.19,
        "predicted": 0.287255283
    },
    {
        "actual": 0.06,
        "predicted": 0.059969309
    },
    {
        "actual": 0.03,
        "predicted": 0.190865453
    },
    {
        "actual": 0.1,
        "predicted": 0.200905627
    },
    {
        "actual": 0.53,
        "predicted": 0.158992858
    },
    {
        "actual": 0.59,
        "predicted": 0.416056299
    },
    {
        "actual": 0.67,
        "predicted": 0.784509227
    },
    {
        "actual": 0.01,
        "predicted": 0.035791009
    },
    {
        "actual": 0.05,
        "predicted": 0.08205129
    },
    {
        "actual": 0.14,
        "predicted": 0.158321401
    },
    {
        "actual": 0.35,
        "predicted": 0.542521339
    },
    {
        "actual": 0.17,
        "predicted": 0.220221587
    },
    {
        "actual": 0.05,
        "predicted": 0.063873719
    },
    {
        "actual": 0.69,
        "predicted": 0.191842279
    },
    {
        "actual": 0.11,
        "predicted": 0.100783153
    },
    {
        "actual": 0.24,
        "predicted": 0.211402429
    },
    {
        "actual": 0.35,
        "predicted": 0.316511273
    },
    {
        "actual": 0.27,
        "predicted": 0.402893345
    },
    {
        "actual": 0.13,
        "predicted": 0.06041769
    },
    {
        "actual": 0.36,
        "predicted": 0.409351466
    },
    {
        "actual": 0.34,
        "predicted": 0.526953498
    },
    {
        "actual": 0.08,
        "predicted": 0.173905795
    },
    {
        "actual": 0.05,
        "predicted": 0.119938103
    },
    {
        "actual": 0.03,
        "predicted": 0.093509028
    },
    {
        "actual": 0.03,
        "predicted": 0.131561121
    },
    {
        "actual": 0.12,
        "predicted": 0.241069041
    },
    {
        "actual": 0.06,
        "predicted": 0.092932944
    },
    {
        "actual": 0.32,
        "predicted": 0.267756533
    },
    {
        "actual": 0.19,
        "predicted": 0.244892503
    },
    {
        "actual": 0.14,
        "predicted": 0.378530491
    },
    {
        "actual": 0.51,
        "predicted": 0.44493131
    },
    {
        "actual": 0.01,
        "predicted": -0.039519205
    },
    {
        "actual": 0.59,
        "predicted": 0.287858202
    },
    {
        "actual": 0.09,
        "predicted": 0.079245426
    },
    {
        "actual": 0.1,
        "predicted": 0.166794913
    },
    {
        "actual": 0.09,
        "predicted": 0.339931083
    },
    {
        "actual": 0.03,
        "predicted": 0.017812947
    },
    {
        "actual": 0.28,
        "predicted": 0.359810282
    },
    {
        "actual": 0.1,
        "predicted": 0.132475508
    },
    {
        "actual": 0.12,
        "predicted": 0.105443103
    },
    {
        "actual": 0.67,
        "predicted": 0.580382603
    },
    {
        "actual": 0.02,
        "predicted": 0.025352513
    },
    {
        "actual": 0.29,
        "predicted": 0.245158754
    },
    {
        "actual": 0.36,
        "predicted": 0.344758088
    },
    {
        "actual": 0.11,
        "predicted": 0.145035699
    },
    {
        "actual": 0.03,
        "predicted": 0.142754769
    },
    {
        "actual": 0.35,
        "predicted": 0.304640809
    },
    {
        "actual": 0.25,
        "predicted": 0.262575326
    },
    {
        "actual": 0.06,
        "predicted": 0.186665102
    },
    {
        "actual": 0.45,
        "predicted": 0.16058124
    },
    {
        "actual": 0.23,
        "predicted": 0.343164298
    },
    {
        "actual": 0.32,
        "predicted": 0.309303857
    },
    {
        "actual": 0.04,
        "predicted": 0.090024589
    },
    {
        "actual": 0.02,
        "predicted": 0.04847159
    },
    {
        "actual": 0.16,
        "predicted": 0.123911246
    },
    {
        "actual": 0.12,
        "predicted": 0.163302966
    },
    {
        "actual": 0.2,
        "predicted": 0.208927444
    },
    {
        "actual": 0.51,
        "predicted": 0.41293272
    },
    {
        "actual": 0.18,
        "predicted": 0.161994145
    },
    {
        "actual": 0.3,
        "predicted": 0.412997681
    },
    {
        "actual": 0.37,
        "predicted": 0.55356908
    },
    {
        "actual": 0.31,
        "predicted": 0.410438609
    },
    {
        "actual": 0.04,
        "predicted": 0.107136135
    },
    {
        "actual": 0.18,
        "predicted": 0.275428619
    },
    {
        "actual": 0.48,
        "predicted": 0.203617135
    },
    {
        "actual": 0.09,
        "predicted": 0.154623824
    },
    {
        "actual": 0.07,
        "predicted": 0.156396248
    },
    {
        "actual": 0.27,
        "predicted": 0.393107187
    },
    {
        "actual": 0.3,
        "predicted": 0.255254561
    },
    {
        "actual": 0.34,
        "predicted": 0.346182645
    },
    {
        "actual": 0.07,
        "predicted": 0.135539515
    },
    {
        "actual": 0.17,
        "predicted": 0.10391455
    },
    {
        "actual": 0.17,
        "predicted": 0.328320385
    },
    {
        "actual": 0.34,
        "predicted": 0.394869383
    },
    {
        "actual": 0.07,
        "predicted": 0.130236223
    },
    {
        "actual": 0.35,
        "predicted": 0.171432248
    },
    {
        "actual": 0.04,
        "predicted": 0.036590092
    },
    {
        "actual": 1,
        "predicted": 0.843990872
    },
    {
        "actual": 0.48,
        "predicted": 0.313610028
    },
    {
        "actual": 0.03,
        "predicted": 0.026855132
    },
    {
        "actual": 0.07,
        "predicted": 0.123962554
    },
    {
        "actual": 0.05,
        "predicted": 0.043407058
    },
    {
        "actual": 0.12,
        "predicted": 0.264425988
    },
    {
        "actual": 0.04,
        "predicted": 0.128022682
    },
    {
        "actual": 0.08,
        "predicted": 0.155586429
    },
    {
        "actual": 0.1,
        "predicted": 0.102118658
    },
    {
        "actual": 0,
        "predicted": 0.046962853
    },
    {
        "actual": 0.04,
        "predicted": 0.104430045
    },
    {
        "actual": 0.02,
        "predicted": 0.147141119
    },
    {
        "actual": 0.18,
        "predicted": 0.193876748
    },
    {
        "actual": 0.58,
        "predicted": 0.413957309
    },
    {
        "actual": 0.08,
        "predicted": 0.223166699
    },
    {
        "actual": 0.04,
        "predicted": 0.061281107
    },
    {
        "actual": 0.09,
        "predicted": 0.073534276
    },
    {
        "actual": 0.06,
        "predicted": 0.078762029
    },
    {
        "actual": 0.08,
        "predicted": 0.139174002
    },
    {
        "actual": 0.08,
        "predicted": 0.085541861
    },
    {
        "actual": 0.1,
        "predicted": 0.116985837
    },
    {
        "actual": 0.03,
        "predicted": 0.05117612
    },
    {
        "actual": 0.28,
        "predicted": 0.226653974
    },
    {
        "actual": 0.06,
        "predicted": 0.116087814
    },
    {
        "actual": 0.04,
        "predicted": 0.070236681
    },
    {
        "actual": 0.03,
        "predicted": 0.176990802
    },
    {
        "actual": 0.07,
        "predicted": 0.081683788
    },
    {
        "actual": 0.41,
        "predicted": 0.229600128
    },
    {
        "actual": 0.22,
        "predicted": 0.308545589
    },
    {
        "actual": 1,
        "predicted": 0.728642794
    },
    {
        "actual": 0.1,
        "predicted": 0.126823429
    },
    {
        "actual": 0.06,
        "predicted": 0.181053023
    },
    {
        "actual": 0.45,
        "predicted": 0.418977966
    },
    {
        "actual": 0.32,
        "predicted": 0.37504765
    },
    {
        "actual": 0.14,
        "predicted": 0.306574373
    },
    {
        "actual": 0.09,
        "predicted": 0.179858425
    },
    {
        "actual": 0.07,
        "predicted": 0.109676454
    },
    {
        "actual": 0.6,
        "predicted": 0.480114692
    },
    {
        "actual": 0.18,
        "predicted": 0.311776925
    },
    {
        "actual": 0.03,
        "predicted": 0.070892507
    },
    {
        "actual": 0.04,
        "predicted": 0.063252367
    },
    {
        "actual": 0.51,
        "predicted": 0.436594934
    },
    {
        "actual": 0.83,
        "predicted": 0.06648362
    },
    {
        "actual": 0.02,
        "predicted": 0.038804136
    },
    {
        "actual": 0.08,
        "predicted": 0.145396467
    },
    {
        "actual": 0.26,
        "predicted": 0.456593354
    },
    {
        "actual": 0.23,
        "predicted": 0.288990272
    },
    {
        "actual": 0.49,
        "predicted": 0.509736615
    },
    {
        "actual": 0.03,
        "predicted": 0.091253292
    },
    {
        "actual": 0.04,
        "predicted": 0.048605186
    },
    {
        "actual": 0.15,
        "predicted": 0.164621125
    },
    {
        "actual": 0.54,
        "predicted": 0.52000497
    },
    {
        "actual": 0.31,
        "predicted": 0.303629361
    },
    {
        "actual": 0.39,
        "predicted": 0.279971771
    },
    {
        "actual": 0.43,
        "predicted": 0.231340866
    },
    {
        "actual": 0.5,
        "predicted": 0.287490478
    },
    {
        "actual": 0.03,
        "predicted": 0.06385525
    },
    {
        "actual": 0.08,
        "predicted": 0.105670746
    },
    {
        "actual": 0.04,
        "predicted": 0.084477449
    },
    {
        "actual": 0.22,
        "predicted": 0.291101597
    },
    {
        "actual": 0.58,
        "predicted": 0.322989391
    },
    {
        "actual": 0.01,
        "predicted": 0.014673152
    },
    {
        "actual": 0.1,
        "predicted": 0.10695721
    },
    {
        "actual": 0.39,
        "predicted": 0.389326648
    },
    {
        "actual": 0.09,
        "predicted": 0.197121817
    },
    {
        "actual": 0.18,
        "predicted": 0.401479672
    },
    {
        "actual": 0.8,
        "predicted": 0.463344135
    },
    {
        "actual": 1,
        "predicted": 0.361965988
    },
    {
        "actual": 0.4,
        "predicted": 0.682163524
    },
    {
        "actual": 0.05,
        "predicted": 0.3206372
    },
    {
        "actual": 0.21,
        "predicted": 0.343371565
    },
    {
        "actual": 0.68,
        "predicted": 0.293109279
    },
    {
        "actual": 0.32,
        "predicted": 0.44790307
    },
    {
        "actual": 0.2,
        "predicted": 0.203240797
    },
    {
        "actual": 0.62,
        "predicted": 0.399159337
    },
    {
        "actual": 0.53,
        "predicted": 0.566279802
    },
    {
        "actual": 0.25,
        "predicted": 0.301196175
    },
    {
        "actual": 1,
        "predicted": 0.721613607
    },
    {
        "actual": 0.2,
        "predicted": 0.32315663
    },
    {
        "actual": 0.21,
        "predicted": 0.261020427
    },
    {
        "actual": 1,
        "predicted": 0.877418113
    },
    {
        "actual": 0.1,
        "predicted": 0.169774009
    },
    {
        "actual": 0.14,
        "predicted": 0.105833907
    },
    {
        "actual": 0.01,
        "predicted": 0.091704484
    },
    {
        "actual": 0.13,
        "predicted": 0.168831834
    },
    {
        "actual": 0.22,
        "predicted": 0.0593755
    },
    {
        "actual": 0.1,
        "predicted": 0.180719874
    },
    {
        "actual": 1,
        "predicted": 0.534734304
    },
    {
        "actual": 0.69,
        "predicted": 0.203313249
    },
    {
        "actual": 0.06,
        "predicted": 0.080561601
    },
    {
        "actual": 0.66,
        "predicted": 0.41282288
    },
    {
        "actual": 0.03,
        "predicted": 0.057890578
    },
    {
        "actual": 0.16,
        "predicted": 0.265547606
    },
    {
        "actual": 0,
        "predicted": 0.006873485
    },
    {
        "actual": 0.76,
        "predicted": 0.494055039
    },
    {
        "actual": 0.71,
        "predicted": 0.168214387
    },
    {
        "actual": 0.42,
        "predicted": 0.333972471
    },
    {
        "actual": 0.03,
        "predicted": 0.106851971
    },
    {
        "actual": 0.53,
        "predicted": 0.526033537
    },
    {
        "actual": 0.06,
        "predicted": 0.077836733
    },
    {
        "actual": 0.18,
        "predicted": 0.545223323
    },
    {
        "actual": 0.04,
        "predicted": 0.110343228
    },
    {
        "actual": 0.1,
        "predicted": 0.107900136
    },
    {
        "actual": 0.06,
        "predicted": 0.203831756
    },
    {
        "actual": 0.04,
        "predicted": 0.110228238
    },
    {
        "actual": 0.16,
        "predicted": 0.310503675
    },
    {
        "actual": 0.24,
        "predicted": 0.283064075
    },
    {
        "actual": 0.2,
        "predicted": 0.15598345
    },
    {
        "actual": 0.35,
        "predicted": 0.326525866
    },
    {
        "actual": 0.04,
        "predicted": 0.119094058
    },
    {
        "actual": 0.05,
        "predicted": 0.108057687
    },
    {
        "actual": 0.72,
        "predicted": 0.591425897
    },
    {
        "actual": 0.06,
        "predicted": 0.154606124
    },
    {
        "actual": 0.62,
        "predicted": 0.264891287
    },
    {
        "actual": 1,
        "predicted": 0.718488468
    },
    {
        "actual": 0.03,
        "predicted": 0.05579009
    },
    {
        "actual": 0.05,
        "predicted": 0.066009241
    },
    {
        "actual": 0.63,
        "predicted": 0.556325199
    },
    {
        "actual": 0.05,
        "predicted": 0.0778816
    },
    {
        "actual": 0.2,
        "predicted": 0.316326583
    },
    {
        "actual": 0.07,
        "predicted": 0.270102513
    },
    {
        "actual": 0.64,
        "predicted": 0.472777162
    },
    {
        "actual": 0.1,
        "predicted": 0.072573511
    },
    {
        "actual": 0.11,
        "predicted": 0.138325336
    },
    {
        "actual": 1,
        "predicted": 0.666212114
    },
    {
        "actual": 0.07,
        "predicted": 0.194550081
    },
    {
        "actual": 0.02,
        "predicted": 0.013862967
    },
    {
        "actual": 0.55,
        "predicted": 0.579388167
    },
    {
        "actual": 0.04,
        "predicted": 0.021755978
    },
    {
        "actual": 1,
        "predicted": 0.490958313
    },
    {
        "actual": 0.37,
        "predicted": 0.146746688
    },
    {
        "actual": 0.33,
        "predicted": 0.32057846
    },
    {
        "actual": 0.09,
        "predicted": 0.180005749
    },
    {
        "actual": 0.28,
        "predicted": 0.126451692
    },
    {
        "actual": 0.12,
        "predicted": 0.166230471
    },
    {
        "actual": 0.15,
        "predicted": 0.205843037
    },
    {
        "actual": 0.03,
        "predicted": 0.156303979
    },
    {
        "actual": 0.22,
        "predicted": 0.344323466
    },
    {
        "actual": 0.05,
        "predicted": 0.029452464
    },
    {
        "actual": 0.78,
        "predicted": 0.453121605
    },
    {
        "actual": 0.46,
        "predicted": 0.342352512
    },
    {
        "actual": 0.34,
        "predicted": 0.542199259
    },
    {
        "actual": 0.22,
        "predicted": 0.265693596
    },
    {
        "actual": 0.14,
        "predicted": 0.381354092
    },
    {
        "actual": 0.37,
        "predicted": 0.416008115
    },
    {
        "actual": 0.06,
        "predicted": 0.037535615
    },
    {
        "actual": 0.24,
        "predicted": 0.315862672
    },
    {
        "actual": 0.4,
        "predicted": 0.163740741
    },
    {
        "actual": 0.22,
        "predicted": 0.115703444
    },
    {
        "actual": 0.69,
        "predicted": 0.362849774
    },
    {
        "actual": 0.11,
        "predicted": 0.225839242
    },
    {
        "actual": 0.02,
        "predicted": 0.036448963
    },
    {
        "actual": 0.25,
        "predicted": 0.482273665
    },
    {
        "actual": 0.1,
        "predicted": 0.151697487
    },
    {
        "actual": 0.05,
        "predicted": 0.209619195
    },
    {
        "actual": 0.16,
        "predicted": 0.26516534
    },
    {
        "actual": 0.04,
        "predicted": 0.119601811
    },
    {
        "actual": 0.01,
        "predicted": 0.029746329
    },
    {
        "actual": 0.29,
        "predicted": 0.67750181
    },
    {
        "actual": 0.1,
        "predicted": 0.004350319
    },
    {
        "actual": 0.05,
        "predicted": 0.047926034
    },
    {
        "actual": 0.36,
        "predicted": 0.505462067
    },
    {
        "actual": 0.22,
        "predicted": 0.322406338
    },
    {
        "actual": 0.17,
        "predicted": 0.307230893
    },
    {
        "actual": 0.15,
        "predicted": 0.296194519
    },
    {
        "actual": 0.14,
        "predicted": 0.060454861
    },
    {
        "actual": 1,
        "predicted": 0.573922302
    },
    {
        "actual": 0.1,
        "predicted": 0.118740103
    },
    {
        "actual": 0.24,
        "predicted": 0.166697989
    },
    {
        "actual": 0.12,
        "predicted": 0.078688168
    },
    {
        "actual": 0.04,
        "predicted": 0.073304718
    },
    {
        "actual": 0.21,
        "predicted": 0.346163563
    },
    {
        "actual": 0.7,
        "predicted": 0.421753221
    },
    {
        "actual": 0.13,
        "predicted": 0.361680204
    },
    {
        "actual": 0.13,
        "predicted": 0.179099493
    },
    {
        "actual": 0.24,
        "predicted": 0.394642263
    },
    {
        "actual": 0.04,
        "predicted": 0.105288457
    },
    {
        "actual": 0.14,
        "predicted": 0.156666416
    },
    {
        "actual": 0.22,
        "predicted": 0.277225625
    },
    {
        "actual": 0.17,
        "predicted": 0.222016307
    },
    {
        "actual": 0.22,
        "predicted": 0.238490326
    },
    {
        "actual": 0.21,
        "predicted": 0.135931234
    },
    {
        "actual": 0.03,
        "predicted": 0.07877741
    },
    {
        "actual": 0.2,
        "predicted": 0.193050402
    },
    {
        "actual": 0.09,
        "predicted": 0.130905523
    },
    {
        "actual": 0.11,
        "predicted": 0.200058576
    },
    {
        "actual": 0,
        "predicted": 0.052229306
    },
    {
        "actual": 0.13,
        "predicted": 0.158205629
    },
    {
        "actual": 0.17,
        "predicted": 0.155221923
    },
    {
        "actual": 0.46,
        "predicted": 0.537823423
    },
    {
        "actual": 0.24,
        "predicted": 0.318262566
    },
    {
        "actual": 0.08,
        "predicted": 0.229909667
    },
    {
        "actual": 0.66,
        "predicted": 0.398651554
    },
    {
        "actual": 0.25,
        "predicted": 0.656505813
    },
    {
        "actual": 0.07,
        "predicted": 0.183643063
    },
    {
        "actual": 0.56,
        "predicted": 0.438700794
    },
    {
        "actual": 0,
        "predicted": 0.103112976
    },
    {
        "actual": 0.04,
        "predicted": 0.115558589
    },
    {
        "actual": 0.15,
        "predicted": 0.091948756
    },
    {
        "actual": 0.41,
        "predicted": 0.475763236
    },
    {
        "actual": 0.2,
        "predicted": 0.188834229
    },
    {
        "actual": 0.06,
        "predicted": 0.161533708
    },
    {
        "actual": 0.2,
        "predicted": 0.207828981
    },
    {
        "actual": 0.05,
        "predicted": 0.045553969
    },
    {
        "actual": 0.18,
        "predicted": 0.33343177
    },
    {
        "actual": 0.07,
        "predicted": 0.105026529
    },
    {
        "actual": 0.91,
        "predicted": 0.515467026
    },
    {
        "actual": 0.15,
        "predicted": 0.199762963
    },
    {
        "actual": 0.13,
        "predicted": 0.206365774
    },
    {
        "actual": 0.03,
        "predicted": 0.13226664
    },
    {
        "actual": 0.05,
        "predicted": 0.044321471
    },
    {
        "actual": 0.36,
        "predicted": 0.506392181
    },
    {
        "actual": 0.86,
        "predicted": 0.439497218
    },
    {
        "actual": 0.11,
        "predicted": 0.120036748
    },
    {
        "actual": 0.18,
        "predicted": 0.109483065
    },
    {
        "actual": 0.06,
        "predicted": 0.067591583
    },
    {
        "actual": 0.28,
        "predicted": 0.259344865
    },
    {
        "actual": 0.01,
        "predicted": 0.046446332
    },
    {
        "actual": 0.05,
        "predicted": 0.177713315
    },
    {
        "actual": 0.52,
        "predicted": 0.464154898
    },
    {
        "actual": 0.21,
        "predicted": 0.342001337
    },
    {
        "actual": 0.04,
        "predicted": 0.099575934
    },
    {
        "actual": 0.55,
        "predicted": 0.557816663
    },
    {
        "actual": 0.01,
        "predicted": 0.135024924
    },
    {
        "actual": 0.36,
        "predicted": 0.365925305
    },
    {
        "actual": 0.36,
        "predicted": 0.185774353
    },
    {
        "actual": 0.07,
        "predicted": 0.143474324
    },
    {
        "actual": 0.85,
        "predicted": 0.788315264
    },
    {
        "actual": 0.08,
        "predicted": 0.054094923
    },
    {
        "actual": 0.12,
        "predicted": 0.103122283
    },
    {
        "actual": 0.25,
        "predicted": 0.275455593
    },
    {
        "actual": 1,
        "predicted": 0.680327147
    },
    {
        "actual": 0.04,
        "predicted": 0.109974785
    },
    {
        "actual": 0.36,
        "predicted": 0.200933381
    },
    {
        "actual": 0.41,
        "predicted": 0.206972229
    },
    {
        "actual": 0.33,
        "predicted": 0.398920463
    },
    {
        "actual": 0.33,
        "predicted": 0.257931108
    },
    {
        "actual": 0.19,
        "predicted": 0.17407734
    },
    {
        "actual": 0.14,
        "predicted": 0.137672379
    },
    {
        "actual": 0.07,
        "predicted": 0.14642562
    },
    {
        "actual": 0.15,
        "predicted": 0.268129543
    },
    {
        "actual": 0.08,
        "predicted": 0.102823224
    },
    {
        "actual": 0.1,
        "predicted": 0.111296879
    },
    {
        "actual": 0.04,
        "predicted": 0.122597475
    },
    {
        "actual": 0.04,
        "predicted": 0.018855238
    },
    {
        "actual": 0.08,
        "predicted": 0.167827975
    },
    {
        "actual": 0.14,
        "predicted": 0.24035989
    },
    {
        "actual": 0.04,
        "predicted": 0.074554814
    },
    {
        "actual": 0.16,
        "predicted": 0.037773883
    },
    {
        "actual": 0.27,
        "predicted": 0.18473619
    },
    {
        "actual": 0.13,
        "predicted": 0.224820272
    },
    {
        "actual": 0.09,
        "predicted": 0.075785475
    },
    {
        "actual": 0.09,
        "predicted": 0.087635215
    },
    {
        "actual": 0.56,
        "predicted": 0.684497069
    },
    {
        "actual": 0.52,
        "predicted": 0.33443425
    },
    {
        "actual": 0.12,
        "predicted": 0.132317334
    },
    {
        "actual": 0.12,
        "predicted": 0.138778864
    },
    {
        "actual": 0.41,
        "predicted": 0.415036878
    },
    {
        "actual": 0.87,
        "predicted": 0.780982869
    },
    {
        "actual": 0.01,
        "predicted": 0.013071556
    },
    {
        "actual": 0.06,
        "predicted": 0.077714932
    },
    {
        "actual": 0.03,
        "predicted": 0.039290574
    },
    {
        "actual": 0.11,
        "predicted": 0.263513068
    },
    {
        "actual": 0.15,
        "predicted": 0.349684805
    },
    {
        "actual": 0.24,
        "predicted": 0.23229736
    },
    {
        "actual": 0.21,
        "predicted": 0.382663411
    },
    {
        "actual": 0.03,
        "predicted": 0.422189311
    },
    {
        "actual": 0.87,
        "predicted": 0.714008484
    },
    {
        "actual": 0.39,
        "predicted": 0.426820043
    },
    {
        "actual": 0.23,
        "predicted": 0.18338031
    },
    {
        "actual": 0.1,
        "predicted": 0.156705971
    },
    {
        "actual": 0.59,
        "predicted": 0.528857496
    },
    {
        "actual": 0.24,
        "predicted": 0.116277532
    },
    {
        "actual": 0.13,
        "predicted": 0.277923501
    },
    {
        "actual": 0.11,
        "predicted": 0.149496665
    },
    {
        "actual": 0.59,
        "predicted": 0.310457263
    },
    {
        "actual": 0.01,
        "predicted": 0.011034989
    },
    {
        "actual": 0.41,
        "predicted": 0.24258039
    },
    {
        "actual": 0.13,
        "predicted": 0.322062002
    },
    {
        "actual": 0.24,
        "predicted": 0.199327215
    },
    {
        "actual": 0.1,
        "predicted": 0.234565336
    },
    {
        "actual": 0.4,
        "predicted": 0.271284688
    },
    {
        "actual": 0.82,
        "predicted": 0.192264852
    },
    {
        "actual": 0.09,
        "predicted": 0.08986877
    },
    {
        "actual": 0.18,
        "predicted": 0.210550107
    },
    {
        "actual": 0.16,
        "predicted": 0.514458198
    },
    {
        "actual": 0.13,
        "predicted": 0.108658926
    },
    {
        "actual": 0.33,
        "predicted": 0.423163413
    },
    {
        "actual": 0.06,
        "predicted": 0.136740406
    },
    {
        "actual": 0.1,
        "predicted": 0.084424056
    },
    {
        "actual": 0.04,
        "predicted": 0.137287831
    },
    {
        "actual": 0.23,
        "predicted": 0.40438122
    },
    {
        "actual": 0.08,
        "predicted": 0.205415994
    },
    {
        "actual": 0.1,
        "predicted": 0.119305035
    },
    {
        "actual": 0.01,
        "predicted": 0.076970896
    },
    {
        "actual": 0.1,
        "predicted": 0.248041187
    },
    {
        "actual": 0.17,
        "predicted": 0.082925758
    },
    {
        "actual": 0.89,
        "predicted": 0.837044992
    },
    {
        "actual": 0.85,
        "predicted": 0.759598099
    },
    {
        "actual": 0.14,
        "predicted": 0.213684682
    },
    {
        "actual": 0.32,
        "predicted": 0.595393306
    },
    {
        "actual": 0.03,
        "predicted": 0.212036738
    },
    {
        "actual": 0.09,
        "predicted": 0.121466109
    },
    {
        "actual": 0.2,
        "predicted": 0.343328785
    },
    {
        "actual": 0.54,
        "predicted": 0.381204375
    },
    {
        "actual": 0.15,
        "predicted": 0.189698112
    },
    {
        "actual": 0.18,
        "predicted": 0.147324242
    },
    {
        "actual": 0.24,
        "predicted": 0.342744681
    },
    {
        "actual": 0.94,
        "predicted": 0.791006304
    },
    {
        "actual": 0.65,
        "predicted": 0.124998486
    },
    {
        "actual": 0.06,
        "predicted": 0.039495133
    },
    {
        "actual": 0.05,
        "predicted": 0.000850689
    },
    {
        "actual": 0.26,
        "predicted": 0.142221006
    },
    {
        "actual": 0.12,
        "predicted": 0.378277699
    },
    {
        "actual": 0.03,
        "predicted": 0.031909043
    },
    {
        "actual": 0.41,
        "predicted": 0.374339999
    },
    {
        "actual": 0.01,
        "predicted": 0.131118423
    },
    {
        "actual": 0.15,
        "predicted": 0.101478808
    },
    {
        "actual": 0.15,
        "predicted": 0.153473253
    },
    {
        "actual": 0.04,
        "predicted": 0.026427503
    },
    {
        "actual": 0.03,
        "predicted": 0.058781884
    },
    {
        "actual": 0.06,
        "predicted": 0.166716565
    },
    {
        "actual": 0.09,
        "predicted": 0.090093691
    },
    {
        "actual": 0.28,
        "predicted": 0.19641511
    },
    {
        "actual": 0.07,
        "predicted": 0.055097761
    },
    {
        "actual": 0.16,
        "predicted": 0.188442062
    },
    {
        "actual": 0.41,
        "predicted": 0.108861454
    },
    {
        "actual": 0.22,
        "predicted": 0.376512256
    },
    {
        "actual": 0.03,
        "predicted": 0.037071909
    },
    {
        "actual": 0.35,
        "predicted": 0.402435027
    },
    {
        "actual": 0.63,
        "predicted": 0.555886603
    },
    {
        "actual": 0.09,
        "predicted": 0.225074269
    },
    {
        "actual": 0.25,
        "predicted": 0.271994243
    },
    {
        "actual": 0.22,
        "predicted": 0.178239587
    },
    {
        "actual": 1,
        "predicted": 0.916381924
    },
    {
        "actual": 0.36,
        "predicted": 0.592169548
    },
    {
        "actual": 0.81,
        "predicted": 0.68419375
    },
    {
        "actual": 0.27,
        "predicted": 0.33591516
    },
    {
        "actual": 0.07,
        "predicted": 0.077777242
    },
    {
        "actual": 0.04,
        "predicted": 0.097352121
    },
    {
        "actual": 0.61,
        "predicted": 0.444404511
    },
    {
        "actual": 0.24,
        "predicted": 0.454820109
    },
    {
        "actual": 0.95,
        "predicted": 0.581527052
    },
    {
        "actual": 0.81,
        "predicted": 0.548363593
    },
    {
        "actual": 0.12,
        "predicted": 0.243846835
    },
    {
        "actual": 1,
        "predicted": 0.634851935
    },
    {
        "actual": 0.05,
        "predicted": 0.015919361
    },
    {
        "actual": 0.38,
        "predicted": 0.611018769
    },
    {
        "actual": 0.37,
        "predicted": 0.319485177
    },
    {
        "actual": 0.53,
        "predicted": 0.748939651
    },
    {
        "actual": 0.23,
        "predicted": 0.19715684
    },
    {
        "actual": 0.26,
        "predicted": 0.290135934
    },
    {
        "actual": 0.04,
        "predicted": 0.064694296
    },
    {
        "actual": 0.18,
        "predicted": 0.166348238
    },
    {
        "actual": 0.62,
        "predicted": 0.568095179
    },
    {
        "actual": 0.5,
        "predicted": 0.32592072
    },
    {
        "actual": 0.14,
        "predicted": 0.149846891
    },
    {
        "actual": 0.06,
        "predicted": 0.058881212
    },
    {
        "actual": 0.54,
        "predicted": 0.591308025
    },
    {
        "actual": 0.61,
        "predicted": 0.516183964
    },
    {
        "actual": 0.35,
        "predicted": 0.793550597
    },
    {
        "actual": 0.38,
        "predicted": 0.280234542
    },
    {
        "actual": 0.72,
        "predicted": 0.653855024
    },
    {
        "actual": 0.04,
        "predicted": 0.046079917
    },
    {
        "actual": 0.09,
        "predicted": 0.221260285
    },
    {
        "actual": 0.51,
        "predicted": 0.327001968
    },
    {
        "actual": 0.54,
        "predicted": 0.536644945
    },
    {
        "actual": 0.45,
        "predicted": 0.466478296
    },
    {
        "actual": 0.1,
        "predicted": 0.223698529
    },
    {
        "actual": 0.07,
        "predicted": 0.248930871
    },
    {
        "actual": 0.01,
        "predicted": 0.058774372
    },
    {
        "actual": 0.16,
        "predicted": 0.193024658
    },
    {
        "actual": 0.29,
        "predicted": 0.209096209
    },
    {
        "actual": 0.42,
        "predicted": 0.270814703
    },
    {
        "actual": 0.18,
        "predicted": 0.257557639
    },
    {
        "actual": 0.36,
        "predicted": 0.288680221
    },
    {
        "actual": 0.1,
        "predicted": 0.107313694
    },
    {
        "actual": 0.03,
        "predicted": 0.041584652
    },
    {
        "actual": 0.62,
        "predicted": 0.394536433
    },
    {
        "actual": 0.08,
        "predicted": 0.042085026
    },
    {
        "actual": 0.12,
        "predicted": 0.163337203
    },
    {
        "actual": 0.23,
        "predicted": 0.197525773
    },
    {
        "actual": 0.18,
        "predicted": 0.315006521
    },
    {
        "actual": 0.28,
        "predicted": 0.269676376
    },
    {
        "actual": 0.09,
        "predicted": 0.089201595
    },
    {
        "actual": 0.2,
        "predicted": 0.155341699
    },
    {
        "actual": 0.09,
        "predicted": 0.107814819
    },
    {
        "actual": 0.16,
        "predicted": 0.177080266
    },
    {
        "actual": 0.06,
        "predicted": 0.086443695
    },
    {
        "actual": 0.23,
        "predicted": 0.210385676
    },
    {
        "actual": 0.82,
        "predicted": 0.480278782
    },
    {
        "actual": 0.15,
        "predicted": 0.167544314
    },
    {
        "actual": 0.02,
        "predicted": 0.051345393
    },
    {
        "actual": 0.9,
        "predicted": 0.773748061
    },
    {
        "actual": 0.34,
        "predicted": 0.701076548
    },
    {
        "actual": 0.01,
        "predicted": 0.150668957
    },
    {
        "actual": 0.21,
        "predicted": 0.347817497
    },
    {
        "actual": 0.06,
        "predicted": 0.127284084
    },
    {
        "actual": 0.59,
        "predicted": 0.249219426
    },
    {
        "actual": 0.66,
        "predicted": 0.62210997
    },
    {
        "actual": 0.2,
        "predicted": 0.257977437
    },
    {
        "actual": 0.1,
        "predicted": 0.113821594
    },
    {
        "actual": 0.4,
        "predicted": 0.473808515
    },
    {
        "actual": 0.17,
        "predicted": 0.254025628
    },
    {
        "actual": 0.04,
        "predicted": 0.081993337
    },
    {
        "actual": 0.28,
        "predicted": 0.311558209
    },
    {
        "actual": 0.13,
        "predicted": 0.117093691
    },
    {
        "actual": 0.27,
        "predicted": 0.471268422
    },
    {
        "actual": 0.23,
        "predicted": 0.129658596
    },
    {
        "actual": 0.59,
        "predicted": 0.544135872
    },
    {
        "actual": 0.12,
        "predicted": 0.284941271
    },
    {
        "actual": 0.01,
        "predicted": 0.057277459
    },
    {
        "actual": 0.23,
        "predicted": 0.288316813
    },
    {
        "actual": 0.02,
        "predicted": 0.060442406
    },
    {
        "actual": 0.17,
        "predicted": 0.119435517
    },
    {
        "actual": 0.07,
        "predicted": 0.076487239
    },
    {
        "actual": 0.05,
        "predicted": 0.114611808
    },
    {
        "actual": 0.12,
        "predicted": 0.333232421
    },
    {
        "actual": 0.1,
        "predicted": 0.27555945
    },
    {
        "actual": 0.11,
        "predicted": 0.243537597
    },
    {
        "actual": 0.1,
        "predicted": 0.09106137
    },
    {
        "actual": 0.11,
        "predicted": 0.103926536
    },
    {
        "actual": 0.16,
        "predicted": 0.234626036
    },
    {
        "actual": 0.05,
        "predicted": 0.10063482
    },
    {
        "actual": 0.24,
        "predicted": 0.345119372
    },
    {
        "actual": 0.33,
        "predicted": 0.333636235
    },
    {
        "actual": 0.19,
        "predicted": 0.090762204
    },
    {
        "actual": 0.19,
        "predicted": 0.296247082
    },
    {
        "actual": 0.21,
        "predicted": 0.170259029
    },
    {
        "actual": 0.16,
        "predicted": 0.128430823
    },
    {
        "actual": 0.19,
        "predicted": 0.288552923
    },
    {
        "actual": 0.04,
        "predicted": 0.115494076
    },
    {
        "actual": 0.05,
        "predicted": 0.106559259
    },
    {
        "actual": 0.34,
        "predicted": 0.34309372
    },
    {
        "actual": 0.23,
        "predicted": 0.299992987
    },
    {
        "actual": 0.1,
        "predicted": 0.126430881
    },
    {
        "actual": 0.24,
        "predicted": 0.373255692
    },
    {
        "actual": 0.52,
        "predicted": 0.365855383
    },
    {
        "actual": 0.03,
        "predicted": 0.001132906
    },
    {
        "actual": 0.36,
        "predicted": 0.409344811
    },
    {
        "actual": 0,
        "predicted": 0.146398741
    },
    {
        "actual": 0.24,
        "predicted": 0.168209992
    },
    {
        "actual": 0.3,
        "predicted": 0.229219115
    },
    {
        "actual": 1,
        "predicted": 0.803562357
    },
    {
        "actual": 0.43,
        "predicted": 0.364184513
    },
    {
        "actual": 0.11,
        "predicted": 0.147189412
    },
    {
        "actual": 0.41,
        "predicted": 0.209802135
    },
    {
        "actual": 0.22,
        "predicted": 0.446373442
    },
    {
        "actual": 0.7,
        "predicted": 0.513374819
    },
    {
        "actual": 0.1,
        "predicted": 0.253623761
    },
    {
        "actual": 0.61,
        "predicted": 0.603415797
    },
    {
        "actual": 0.06,
        "predicted": 0.108203842
    },
    {
        "actual": 0.12,
        "predicted": 0.143437132
    },
    {
        "actual": 0.41,
        "predicted": 0.358725678
    },
    {
        "actual": 0.04,
        "predicted": 0.098185474
    },
    {
        "actual": 0.01,
        "predicted": 0.040535595
    },
    {
        "actual": 0.04,
        "predicted": 0.015015902
    },
    {
        "actual": 0.18,
        "predicted": 0.464581792
    },
    {
        "actual": 0.47,
        "predicted": 0.522290561
    },
    {
        "actual": 0.03,
        "predicted": 0.044588806
    },
    {
        "actual": 0.21,
        "predicted": 0.16826293
    },
    {
        "actual": 0.13,
        "predicted": 0.209639168
    },
    {
        "actual": 0.25,
        "predicted": 0.195114782
    },
    {
        "actual": 0.02,
        "predicted": 0.061419116
    },
    {
        "actual": 0.08,
        "predicted": 0.205420163
    },
    {
        "actual": 0.05,
        "predicted": 0.133114458
    },
    {
        "actual": 0.05,
        "predicted": 0.219956609
    },
    {
        "actual": 0.02,
        "predicted": 0.06671332
    },
    {
        "actual": 0.27,
        "predicted": 0.388371523
    },
    {
        "actual": 0.06,
        "predicted": 0.15353234
    },
    {
        "actual": 0.5,
        "predicted": 0.315904526
    },
    {
        "actual": 0.28,
        "predicted": 0.340659689
    },
    {
        "actual": 0.12,
        "predicted": 0.188108866
    },
    {
        "actual": 0.1,
        "predicted": 0.175852591
    },
    {
        "actual": 0.09,
        "predicted": 0.163967243
    },
    {
        "actual": 0.21,
        "predicted": 0.311805483
    },
    {
        "actual": 0.02,
        "predicted": 0.081461045
    },
    {
        "actual": 1,
        "predicted": 0.630385819
    },
    {
        "actual": 0.24,
        "predicted": 0.311923575
    },
    {
        "actual": 0.13,
        "predicted": 0.240299342
    },
    {
        "actual": 0.1,
        "predicted": 0.142345915
    },
    {
        "actual": 0.12,
        "predicted": 0.2849585
    },
    {
        "actual": 0.06,
        "predicted": 0.127146227
    },
    {
        "actual": 0.12,
        "predicted": 0.187844791
    },
    {
        "actual": 0.06,
        "predicted": 0.084234205
    },
    {
        "actual": 0.22,
        "predicted": 0.012219078
    },
    {
        "actual": 0.15,
        "predicted": 0.407023378
    },
    {
        "actual": 0.03,
        "predicted": 0.083869046
    },
    {
        "actual": 0.3,
        "predicted": 0.582966935
    },
    {
        "actual": 0.02,
        "predicted": 0.211918592
    },
    {
        "actual": 0.05,
        "predicted": 0.13817496
    },
    {
        "actual": 0.02,
        "predicted": 0.077634635
    },
    {
        "actual": 0.02,
        "predicted": 0.070145868
    },
    {
        "actual": 0.07,
        "predicted": 0.134007072
    },
    {
        "actual": 0.26,
        "predicted": 0.227018
    },
    {
        "actual": 1,
        "predicted": 0.602449997
    },
    {
        "actual": 0.35,
        "predicted": 0.22915501
    },
    {
        "actual": 0.08,
        "predicted": 0.142399981
    },
    {
        "actual": 0.03,
        "predicted": 0.073297856
    },
    {
        "actual": 0.02,
        "predicted": 0.053243429
    },
    {
        "actual": 0.03,
        "predicted": 0.020977494
    },
    {
        "actual": 0.11,
        "predicted": 0.11564625
    },
    {
        "actual": 0.29,
        "predicted": 0.246530473
    },
    {
        "actual": 0.79,
        "predicted": 0.350811441
    },
    {
        "actual": 0.13,
        "predicted": 0.18408626
    },
    {
        "actual": 0.02,
        "predicted": 0.095579085
    },
    {
        "actual": 0.01,
        "predicted": -0.001686401
    },
    {
        "actual": 0.23,
        "predicted": 0.231311364
    },
    {
        "actual": 1,
        "predicted": 0.570411524
    },
    {
        "actual": 0.33,
        "predicted": 0.245005417
    },
    {
        "actual": 0.58,
        "predicted": 0.322244665
    },
    {
        "actual": 0.18,
        "predicted": 0.203255
    },
    {
        "actual": 0.5,
        "predicted": 0.442050096
    },
    {
        "actual": 0.4,
        "predicted": 0.321468622
    },
    {
        "actual": 0.34,
        "predicted": 0.240188535
    },
    {
        "actual": 0.05,
        "predicted": 0.116228653
    },
    {
        "actual": 0.04,
        "predicted": 0.035121736
    },
    {
        "actual": 0.06,
        "predicted": 0.166080393
    },
    {
        "actual": 0.04,
        "predicted": 0.040704425
    },
    {
        "actual": 0.05,
        "predicted": 0.162139858
    },
    {
        "actual": 0.01,
        "predicted": 0.025212427
    },
    {
        "actual": 0.31,
        "predicted": 0.320672653
    },
    {
        "actual": 0.62,
        "predicted": 0.643610345
    },
    {
        "actual": 0.2,
        "predicted": 0.255540164
    },
    {
        "actual": 0.6,
        "predicted": 0.555591645
    },
    {
        "actual": 0.97,
        "predicted": 0.479279066
    },
    {
        "actual": 0.28,
        "predicted": 0.254779683
    },
    {
        "actual": 0.13,
        "predicted": 0.11864083
    },
    {
        "actual": 0.07,
        "predicted": 0.363197774
    },
    {
        "actual": 0.26,
        "predicted": 0.275093637
    },
    {
        "actual": 0.07,
        "predicted": 0.098471391
    },
    {
        "actual": 0.29,
        "predicted": 0.334366893
    },
    {
        "actual": 0.04,
        "predicted": 0.193152547
    },
    {
        "actual": 0.85,
        "predicted": 0.507495088
    },
    {
        "actual": 0.76,
        "predicted": 0.464086962
    },
    {
        "actual": 0.17,
        "predicted": 0.342165941
    },
    {
        "actual": 0.65,
        "predicted": 0.44010545
    },
    {
        "actual": 0.54,
        "predicted": 0.533100319
    },
    {
        "actual": 0.36,
        "predicted": 0.365370173
    },
    {
        "actual": 0.13,
        "predicted": 0.033119452
    },
    {
        "actual": 0.18,
        "predicted": 0.043501925
    },
    {
        "actual": 0.35,
        "predicted": 0.400444313
    },
    {
        "actual": 0.06,
        "predicted": 0.109052403
    },
    {
        "actual": 0.28,
        "predicted": 0.380774837
    },
    {
        "actual": 0.28,
        "predicted": 0.209542291
    },
    {
        "actual": 0.08,
        "predicted": 0.135293058
    },
    {
        "actual": 0.14,
        "predicted": 0.124883433
    },
    {
        "actual": 0.1,
        "predicted": 0.147671191
    },
    {
        "actual": 0.06,
        "predicted": 0.148166724
    },
    {
        "actual": 0.06,
        "predicted": 0.101211358
    },
    {
        "actual": 0.48,
        "predicted": 0.358648342
    },
    {
        "actual": 0.09,
        "predicted": 0.200481701
    },
    {
        "actual": 0.19,
        "predicted": 0.307146543
    },
    {
        "actual": 0.26,
        "predicted": 0.358270479
    },
    {
        "actual": 0.02,
        "predicted": 0.056541908
    },
    {
        "actual": 0.08,
        "predicted": 0.009466233
    },
    {
        "actual": 0.22,
        "predicted": 0.187040614
    },
    {
        "actual": 0.2,
        "predicted": 0.150836708
    },
    {
        "actual": 0.03,
        "predicted": 0.066978705
    },
    {
        "actual": 0.03,
        "predicted": 0.035357762
    },
    {
        "actual": 0.02,
        "predicted": 0.048069431
    },
    {
        "actual": 0.11,
        "predicted": 0.154439552
    },
    {
        "actual": 0.08,
        "predicted": 0.141098855
    },
    {
        "actual": 0.24,
        "predicted": 0.138485804
    },
    {
        "actual": 0.22,
        "predicted": 0.262448777
    },
    {
        "actual": 0.5,
        "predicted": 0.210295063
    },
    {
        "actual": 0.26,
        "predicted": 0.35143647
    },
    {
        "actual": 0.09,
        "predicted": 0.106583887
    },
    {
        "actual": 0.02,
        "predicted": 0.085361226
    },
    {
        "actual": 0.55,
        "predicted": 0.125486686
    },
    {
        "actual": 0.18,
        "predicted": 0.109012736
    },
    {
        "actual": 0.09,
        "predicted": 0.087041962
    },
    {
        "actual": 0.09,
        "predicted": 0.076376257
    },
    {
        "actual": 0.46,
        "predicted": 0.394392359
    },
    {
        "actual": 0.04,
        "predicted": 0.158599872
    },
    {
        "actual": 0.07,
        "predicted": 0.04597044
    },
    {
        "actual": 1,
        "predicted": 0.597927556
    },
    {
        "actual": 0.04,
        "predicted": 0.014900376
    },
    {
        "actual": 0.04,
        "predicted": 0.116433554
    },
    {
        "actual": 0.13,
        "predicted": 0.075330371
    },
    {
        "actual": 0.16,
        "predicted": 0.270258749
    },
    {
        "actual": 0.04,
        "predicted": 0.091525187
    },
    {
        "actual": 0.12,
        "predicted": 0.036079316
    },
    {
        "actual": 0.09,
        "predicted": 0.07994328
    },
    {
        "actual": 0.53,
        "predicted": 0.690508799
    },
    {
        "actual": 0.14,
        "predicted": 0.155525449
    },
    {
        "actual": 0.1,
        "predicted": 0.2417614
    },
    {
        "actual": 0.45,
        "predicted": 0.372868769
    },
    {
        "actual": 0.03,
        "predicted": 0.035819772
    },
    {
        "actual": 0.28,
        "predicted": 0.109883666
    },
    {
        "actual": 0.15,
        "predicted": 0.125919185
    },
    {
        "actual": 0.39,
        "predicted": 0.235014173
    },
    {
        "actual": 0.03,
        "predicted": 0.134455197
    },
    {
        "actual": 0.23,
        "predicted": 0.26019091
    },
    {
        "actual": 0.1,
        "predicted": 0.212674761
    },
    {
        "actual": 0.22,
        "predicted": 0.232967589
    },
    {
        "actual": 0.26,
        "predicted": 0.227164649
    },
    {
        "actual": 0.03,
        "predicted": 0.042730111
    },
    {
        "actual": 0.43,
        "predicted": 0.353523839
    },
    {
        "actual": 0.11,
        "predicted": 0.166268604
    },
    {
        "actual": 0.1,
        "predicted": 0.086279845
    },
    {
        "actual": 0.03,
        "predicted": 0.113572181
    },
    {
        "actual": 0.07,
        "predicted": 0.050917415
    },
    {
        "actual": 0.16,
        "predicted": 0.201756796
    },
    {
        "actual": 0.06,
        "predicted": 0.048067969
    },
    {
        "actual": 0.18,
        "predicted": 0.128540712
    },
    {
        "actual": 0.06,
        "predicted": 0.104258851
    },
    {
        "actual": 0.2,
        "predicted": 0.186757163
    },
    {
        "actual": 0.14,
        "predicted": 0.222576454
    },
    {
        "actual": 0.15,
        "predicted": 0.165438693
    },
    {
        "actual": 0.04,
        "predicted": 0.059374469
    },
    {
        "actual": 0.16,
        "predicted": 0.284754648
    },
    {
        "actual": 0.64,
        "predicted": 0.718935771
    },
    {
        "actual": 0.2,
        "predicted": 0.186152441
    },
    {
        "actual": 0.65,
        "predicted": 0.473542194
    },
    {
        "actual": 0.17,
        "predicted": 0.192981041
    },
    {
        "actual": 0.14,
        "predicted": 0.152008718
    },
    {
        "actual": 0.27,
        "predicted": 0.066273826
    },
    {
        "actual": 0.12,
        "predicted": 0.199233202
    },
    {
        "actual": 0.74,
        "predicted": 0.52207397
    },
    {
        "actual": 0.73,
        "predicted": 0.544242286
    },
    {
        "actual": 0.24,
        "predicted": 0.221204714
    },
    {
        "actual": 1,
        "predicted": 0.793592165
    },
    {
        "actual": 0.03,
        "predicted": 0.096952994
    },
    {
        "actual": 1,
        "predicted": 0.281638619
    },
    {
        "actual": 0.21,
        "predicted": 0.25450947
    },
    {
        "actual": 0.25,
        "predicted": 0.491909943
    },
    {
        "actual": 0.26,
        "predicted": 0.266117093
    },
    {
        "actual": 0.51,
        "predicted": 0.492129208
    },
    {
        "actual": 0.01,
        "predicted": 0.053102886
    },
    {
        "actual": 0.03,
        "predicted": 0.027612509
    },
    {
        "actual": 0.01,
        "predicted": 0.001213908
    },
    {
        "actual": 0.16,
        "predicted": 0.209895047
    },
    {
        "actual": 0.52,
        "predicted": 0.501085752
    },
    {
        "actual": 0.1,
        "predicted": 0.137198776
    },
    {
        "actual": 0.24,
        "predicted": 0.19852759
    },
    {
        "actual": 0.3,
        "predicted": 0.277681196
    },
    {
        "actual": 0.69,
        "predicted": 0.827807438
    },
    {
        "actual": 0.09,
        "predicted": 0.032922724
    },
    {
        "actual": 0.22,
        "predicted": 0.126889585
    },
    {
        "actual": 0.65,
        "predicted": 0.697315349
    },
    {
        "actual": 0.17,
        "predicted": 0.127033223
    },
    {
        "actual": 0.09,
        "predicted": 0.103448607
    },
    {
        "actual": 0.77,
        "predicted": 0.778350211
    },
    {
        "actual": 0.33,
        "predicted": 0.428967456
    },
    {
        "actual": 0.38,
        "predicted": 0.564407299
    },
    {
        "actual": 0.07,
        "predicted": 0.165811802
    },
    {
        "actual": 0.19,
        "predicted": 0.193764823
    },
    {
        "actual": 0.09,
        "predicted": 0.177162617
    },
    {
        "actual": 0.21,
        "predicted": 0.232924511
    },
    {
        "actual": 0.08,
        "predicted": 0.145479074
    },
    {
        "actual": 0.1,
        "predicted": 0.112006194
    },
    {
        "actual": 0.05,
        "predicted": 0.029760783
    },
    {
        "actual": 0.23,
        "predicted": 0.331334993
    },
    {
        "actual": 0.08,
        "predicted": 0.04441284
    },
    {
        "actual": 0.02,
        "predicted": 0.02371811
    },
    {
        "actual": 0.08,
        "predicted": 0.068410235
    },
    {
        "actual": 0.12,
        "predicted": 0.162998504
    },
    {
        "actual": 0.4,
        "predicted": 0.511027266
    },
    {
        "actual": 0.45,
        "predicted": 0.281357298
    },
    {
        "actual": 0.05,
        "predicted": 0.098998481
    },
    {
        "actual": 0.03,
        "predicted": 0.141868559
    },
    {
        "actual": 0.36,
        "predicted": 0.415081775
    },
    {
        "actual": 0.08,
        "predicted": 0.091862126
    },
    {
        "actual": 0.07,
        "predicted": 0.147848739
    },
    {
        "actual": 1,
        "predicted": 0.60835015
    },
    {
        "actual": 0.04,
        "predicted": 0.045335627
    },
    {
        "actual": 0.06,
        "predicted": 0.138629084
    },
    {
        "actual": 1,
        "predicted": 0.471364372
    },
    {
        "actual": 0.2,
        "predicted": 0.241659109
    },
    {
        "actual": 0.14,
        "predicted": 0.211462242
    },
    {
        "actual": 0.48,
        "predicted": 0.548480049
    },
    {
        "actual": 0.13,
        "predicted": 0.221567866
    },
    {
        "actual": 0.67,
        "predicted": 0.702488884
    },
    {
        "actual": 0.04,
        "predicted": 0.067565466
    },
    {
        "actual": 0.49,
        "predicted": 0.319377378
    },
    {
        "actual": 0.05,
        "predicted": 0.180637407
    },
    {
        "actual": 0.02,
        "predicted": 0.049956321
    },
    {
        "actual": 0.39,
        "predicted": 0.489116425
    },
    {
        "actual": 0.29,
        "predicted": 0.455318407
    },
    {
        "actual": 0.02,
        "predicted": -0.006925347
    },
    {
        "actual": 0.25,
        "predicted": 0.26651236
    },
    {
        "actual": 0.23,
        "predicted": 0.311774249
    },
    {
        "actual": 0.01,
        "predicted": 0.103425207
    },
    {
        "actual": 0.12,
        "predicted": 0.161281044
    },
    {
        "actual": 0.1,
        "predicted": 0.288422213
    },
    {
        "actual": 0.04,
        "predicted": 0.066817061
    },
    {
        "actual": 0.14,
        "predicted": 0.439370661
    },
    {
        "actual": 0.2,
        "predicted": 0.311909834
    },
    {
        "actual": 0.13,
        "predicted": 0.163803919
    },
    {
        "actual": 0.03,
        "predicted": 0.076138765
    },
    {
        "actual": 0.11,
        "predicted": 0.116019642
    },
    {
        "actual": 1,
        "predicted": 0.562236693
    },
    {
        "actual": 0.28,
        "predicted": 0.081924706
    },
    {
        "actual": 0.01,
        "predicted": 0.00724955
    },
    {
        "actual": 0.24,
        "predicted": 0.275814417
    },
    {
        "actual": 0.43,
        "predicted": 0.391776731
    },
    {
        "actual": 0.2,
        "predicted": 0.337633794
    },
    {
        "actual": 0.08,
        "predicted": 0.054463265
    },
    {
        "actual": 0.04,
        "predicted": 0.075124219
    },
    {
        "actual": 0.07,
        "predicted": 0.173123343
    },
    {
        "actual": 0.05,
        "predicted": 0.411924212
    },
    {
        "actual": 0.04,
        "predicted": 0.015623572
    },
    {
        "actual": 0.02,
        "predicted": 0.009217309
    },
    {
        "actual": 0.4,
        "predicted": 0.191536062
    },
    {
        "actual": 0.16,
        "predicted": 0.204886911
    },
    {
        "actual": 0.57,
        "predicted": 0.386757388
    },
    {
        "actual": 0.2,
        "predicted": 0.297184555
    },
    {
        "actual": 1,
        "predicted": 0.642088442
    },
    {
        "actual": 0.02,
        "predicted": 0.064859004
    },
    {
        "actual": 0.08,
        "predicted": 0.09072164
    },
    {
        "actual": 1,
        "predicted": 0.900361481
    },
    {
        "actual": 0.06,
        "predicted": 0.075692365
    },
    {
        "actual": 0.07,
        "predicted": 0.021692998
    },
    {
        "actual": 0.08,
        "predicted": 0.106567944
    },
    {
        "actual": 0.05,
        "predicted": 0.042231098
    },
    {
        "actual": 0.02,
        "predicted": 0.21169383
    },
    {
        "actual": 0.13,
        "predicted": 0.206078129
    },
    {
        "actual": 0.45,
        "predicted": 0.401127746
    },
    {
        "actual": 0.44,
        "predicted": 0.631971308
    },
    {
        "actual": 0.45,
        "predicted": 0.407275756
    },
    {
        "actual": 0.39,
        "predicted": 0.23255775
    },
    {
        "actual": 0.26,
        "predicted": 0.289490561
    },
    {
        "actual": 1,
        "predicted": 0.622861155
    },
    {
        "actual": 0.32,
        "predicted": 0.121141404
    },
    {
        "actual": 0.3,
        "predicted": 0.317953681
    },
    {
        "actual": 0.31,
        "predicted": 0.271488414
    },
    {
        "actual": 0.27,
        "predicted": 0.411267812
    },
    {
        "actual": 0.11,
        "predicted": 0.056024435
    },
    {
        "actual": 0.07,
        "predicted": 0.080086546
    },
    {
        "actual": 0.09,
        "predicted": 0.197239613
    },
    {
        "actual": 0.26,
        "predicted": 0.350566567
    },
    {
        "actual": 0.17,
        "predicted": 0.406651141
    },
    {
        "actual": 0.07,
        "predicted": 0.076600456
    },
    {
        "actual": 0.31,
        "predicted": 0.275933088
    },
    {
        "actual": 0.07,
        "predicted": 0.125190246
    },
    {
        "actual": 0.33,
        "predicted": 0.325990129
    },
    {
        "actual": 0.15,
        "predicted": 0.219132902
    },
    {
        "actual": 0.21,
        "predicted": 0.270095726
    },
    {
        "actual": 0.1,
        "predicted": 0.169012431
    },
    {
        "actual": 0.51,
        "predicted": 0.438810499
    },
    {
        "actual": 0.17,
        "predicted": 0.146562225
    },
    {
        "actual": 0.09,
        "predicted": 0.131118904
    },
    {
        "actual": 0.03,
        "predicted": 0.040784531
    },
    {
        "actual": 0.15,
        "predicted": 0.141352682
    },
    {
        "actual": 0.17,
        "predicted": 0.205882484
    },
    {
        "actual": 0.14,
        "predicted": 0.20236935
    },
    {
        "actual": 0.03,
        "predicted": 0.133214776
    },
    {
        "actual": 0.34,
        "predicted": 0.203356406
    },
    {
        "actual": 0.05,
        "predicted": 0.009056467
    },
    {
        "actual": 0.24,
        "predicted": 0.183154974
    },
    {
        "actual": 0.07,
        "predicted": 0.067153465
    },
    {
        "actual": 0.33,
        "predicted": 0.267934715
    },
    {
        "actual": 0.09,
        "predicted": 0.188750855
    },
    {
        "actual": 0.11,
        "predicted": 0.129473127
    },
    {
        "actual": 0.1,
        "predicted": 0.149135792
    },
    {
        "actual": 0.02,
        "predicted": 0.019946995
    },
    {
        "actual": 0.25,
        "predicted": 0.268729941
    },
    {
        "actual": 0.37,
        "predicted": 0.390562074
    },
    {
        "actual": 0.07,
        "predicted": 0.079579345
    },
    {
        "actual": 0.71,
        "predicted": 0.711991098
    },
    {
        "actual": 0.18,
        "predicted": 0.182748349
    },
    {
        "actual": 0.28,
        "predicted": 0.44482222
    },
    {
        "actual": 0.44,
        "predicted": 0.139371035
    },
    {
        "actual": 0.09,
        "predicted": 0.122975916
    },
    {
        "actual": 0.19,
        "predicted": 0.198031559
    },
    {
        "actual": 0.28,
        "predicted": 0.488816219
    },
    {
        "actual": 0.03,
        "predicted": 0.046756418
    },
    {
        "actual": 0.04,
        "predicted": 0.01518596
    },
    {
        "actual": 0.32,
        "predicted": 0.094073855
    },
    {
        "actual": 0.19,
        "predicted": 0.393916951
    },
    {
        "actual": 0.16,
        "predicted": 0.241878122
    },
    {
        "actual": 0.09,
        "predicted": 0.214437644
    },
    {
        "actual": 0.05,
        "predicted": 0.162451969
    },
    {
        "actual": 0.11,
        "predicted": 0.155282645
    },
    {
        "actual": 0.36,
        "predicted": 0.427641849
    },
    {
        "actual": 0.09,
        "predicted": 0.047962021
    },
    {
        "actual": 0.03,
        "predicted": 0.108048815
    },
    {
        "actual": 0.05,
        "predicted": 0.064318804
    },
    {
        "actual": 0.05,
        "predicted": 0.063688334
    },
    {
        "actual": 0.13,
        "predicted": 0.055000454
    },
    {
        "actual": 0.05,
        "predicted": 0.067602012
    },
    {
        "actual": 0.12,
        "predicted": 0.185376467
    },
    {
        "actual": 0.47,
        "predicted": 0.261467678
    },
    {
        "actual": 0.17,
        "predicted": 0.194584124
    },
    {
        "actual": 0.17,
        "predicted": 0.120994721
    },
    {
        "actual": 1,
        "predicted": 0.671544101
    },
    {
        "actual": 0.2,
        "predicted": 0.232772668
    },
    {
        "actual": 0.08,
        "predicted": 0.074975139
    },
    {
        "actual": 0.09,
        "predicted": 0.216221074
    },
    {
        "actual": 0.1,
        "predicted": 0.196896299
    },
    {
        "actual": 0.03,
        "predicted": 0.076527562
    },
    {
        "actual": 0.71,
        "predicted": 0.539314657
    },
    {
        "actual": 0.17,
        "predicted": 0.294320317
    },
    {
        "actual": 0.02,
        "predicted": 0.052580052
    },
    {
        "actual": 0.2,
        "predicted": 0.30893165
    },
    {
        "actual": 0.38,
        "predicted": 0.219073415
    },
    {
        "actual": 0.09,
        "predicted": 0.199572988
    },
    {
        "actual": 0.06,
        "predicted": 0.159060951
    },
    {
        "actual": 0.05,
        "predicted": 0.10029475
    },
    {
        "actual": 0.05,
        "predicted": 0.069044182
    },
    {
        "actual": 1,
        "predicted": 0.821361492
    },
    {
        "actual": 0.21,
        "predicted": 0.206047658
    },
    {
        "actual": 0.29,
        "predicted": 0.258645274
    },
    {
        "actual": 0.04,
        "predicted": 0.11344485
    },
    {
        "actual": 0.12,
        "predicted": 0.247276748
    },
    {
        "actual": 0.06,
        "predicted": 0.147756321
    },
    {
        "actual": 0.21,
        "predicted": 0.280285182
    },
    {
        "actual": 0.06,
        "predicted": 0.129832446
    },
    {
        "actual": 0.51,
        "predicted": 0.40057669
    },
    {
        "actual": 0.07,
        "predicted": 0.11029929
    },
    {
        "actual": 0.21,
        "predicted": 0.254704204
    },
    {
        "actual": 0.39,
        "predicted": 0.184376035
    },
    {
        "actual": 0.66,
        "predicted": 0.608636532
    },
    {
        "actual": 0.03,
        "predicted": 0.091684449
    },
    {
        "actual": 0.06,
        "predicted": 0.007952172
    },
    {
        "actual": 0.53,
        "predicted": 0.554191988
    },
    {
        "actual": 0.08,
        "predicted": 0.116865133
    },
    {
        "actual": 0.59,
        "predicted": 0.345398598
    },
    {
        "actual": 0.12,
        "predicted": 0.151252498
    },
    {
        "actual": 0.29,
        "predicted": 0.339540219
    },
    {
        "actual": 1,
        "predicted": 0.775971456
    },
    {
        "actual": 0.03,
        "predicted": 0.078183768
    },
    {
        "actual": 0.29,
        "predicted": 0.250278795
    },
    {
        "actual": 0.38,
        "predicted": 0.30336786
    },
    {
        "actual": 0.06,
        "predicted": 0.03698898
    },
    {
        "actual": 1,
        "predicted": 0.756148352
    },
    {
        "actual": 0.3,
        "predicted": 0.354331541
    },
    {
        "actual": 0.16,
        "predicted": 0.157207629
    },
    {
        "actual": 0.29,
        "predicted": 0.128218706
    },
    {
        "actual": 0.02,
        "predicted": 0.003360718
    },
    {
        "actual": 0.19,
        "predicted": 0.411314385
    },
    {
        "actual": 0.38,
        "predicted": 0.426460378
    },
    {
        "actual": 0.31,
        "predicted": 0.263709163
    },
    {
        "actual": 0.07,
        "predicted": 0.102040767
    },
    {
        "actual": 0.11,
        "predicted": 0.253901587
    },
    {
        "actual": 0.6,
        "predicted": 0.407350688
    },
    {
        "actual": 0.54,
        "predicted": 0.27163035
    },
    {
        "actual": 0.45,
        "predicted": 0.477848961
    },
    {
        "actual": 0.22,
        "predicted": 0.211341102
    },
    {
        "actual": 0.02,
        "predicted": 0.042202861
    },
    {
        "actual": 0,
        "predicted": -0.012009345
    },
    {
        "actual": 0.22,
        "predicted": 0.237226279
    },
    {
        "actual": 0.13,
        "predicted": 0.101251541
    },
    {
        "actual": 0.06,
        "predicted": 0.073023978
    },
    {
        "actual": 0.11,
        "predicted": 0.097571463
    },
    {
        "actual": 0.03,
        "predicted": 0.042079718
    },
    {
        "actual": 0.69,
        "predicted": 0.454331293
    },
    {
        "actual": 0.19,
        "predicted": 0.183868321
    },
    {
        "actual": 0.69,
        "predicted": 0.551911066
    },
    {
        "actual": 0.41,
        "predicted": 0.384700076
    },
    {
        "actual": 0.08,
        "predicted": 0.044469162
    },
    {
        "actual": 0.31,
        "predicted": 0.251498263
    },
    {
        "actual": 0.08,
        "predicted": 0.033805391
    },
    {
        "actual": 0.45,
        "predicted": 0.440755382
    },
    {
        "actual": 0.2,
        "predicted": 0.071710141
    },
    {
        "actual": 0.19,
        "predicted": 0.142500298
    },
    {
        "actual": 0.03,
        "predicted": 0.179648251
    },
    {
        "actual": 0.15,
        "predicted": 0.149627643
    },
    {
        "actual": 0.54,
        "predicted": 0.312130647
    },
    {
        "actual": 0.02,
        "predicted": 0.064093453
    },
    {
        "actual": 0.1,
        "predicted": 0.247602663
    },
    {
        "actual": 0.31,
        "predicted": 0.121422448
    },
    {
        "actual": 0.65,
        "predicted": 0.673762499
    },
    {
        "actual": 0.06,
        "predicted": 0.113570543
    },
    {
        "actual": 0.02,
        "predicted": 0.009281012
    },
    {
        "actual": 0.06,
        "predicted": 0.144645439
    },
    {
        "actual": 0.82,
        "predicted": 0.471346163
    },
    {
        "actual": 0.02,
        "predicted": 0.089137249
    },
    {
        "actual": 0.14,
        "predicted": 0.251515567
    },
    {
        "actual": 0.03,
        "predicted": 0.014114395
    },
    {
        "actual": 0.4,
        "predicted": 0.176941805
    },
    {
        "actual": 0.05,
        "predicted": 0.083138016
    },
    {
        "actual": 0.12,
        "predicted": 0.155335693
    },
    {
        "actual": 0.61,
        "predicted": 0.368625275
    },
    {
        "actual": 1,
        "predicted": 0.717786189
    },
    {
        "actual": 0.15,
        "predicted": 0.071714401
    },
    {
        "actual": 0.09,
        "predicted": 0.130831376
    },
    {
        "actual": 0.76,
        "predicted": 0.398645407
    },
    {
        "actual": 0.02,
        "predicted": 0.075435518
    },
    {
        "actual": 0.06,
        "predicted": 0.076313118
    },
    {
        "actual": 0.03,
        "predicted": 0.047257407
    },
    {
        "actual": 0.06,
        "predicted": 0.055765613
    },
    {
        "actual": 0.2,
        "predicted": 0.331861653
    },
    {
        "actual": 0.25,
        "predicted": 0.38527849
    },
    {
        "actual": 0.07,
        "predicted": -0.005362137
    },
    {
        "actual": 0.06,
        "predicted": 0.10921366
    },
    {
        "actual": 0.19,
        "predicted": 0.380064883
    },
    {
        "actual": 0.06,
        "predicted": 0.020625818
    },
    {
        "actual": 0.16,
        "predicted": 0.22856014
    },
    {
        "actual": 0.19,
        "predicted": 0.288959896
    },
    {
        "actual": 0.14,
        "predicted": 0.182072078
    },
    {
        "actual": 0.18,
        "predicted": 0.150360361
    },
    {
        "actual": 0.11,
        "predicted": 0.152924782
    },
    {
        "actual": 0.22,
        "predicted": 0.146207322
    },
    {
        "actual": 0.03,
        "predicted": 0.04725458
    },
    {
        "actual": 0.33,
        "predicted": 0.264002534
    },
    {
        "actual": 0,
        "predicted": 0.192672628
    },
    {
        "actual": 0.01,
        "predicted": 0.108109661
    },
    {
        "actual": 0.37,
        "predicted": 0.25637091
    },
    {
        "actual": 0.15,
        "predicted": 0.270480196
    },
    {
        "actual": 0.04,
        "predicted": 0.073303344
    },
    {
        "actual": 0.35,
        "predicted": 0.25463891
    },
    {
        "actual": 0.1,
        "predicted": 0.153764844
    },
    {
        "actual": 0.46,
        "predicted": 0.430431994
    },
    {
        "actual": 0.04,
        "predicted": 0.05747874
    },
    {
        "actual": 0.18,
        "predicted": 0.234909255
    },
    {
        "actual": 0.4,
        "predicted": 0.403258694
    },
    {
        "actual": 0.06,
        "predicted": 0.133888027
    },
    {
        "actual": 0.01,
        "predicted": 0.04928465
    },
    {
        "actual": 0.03,
        "predicted": 0.051438839
    },
    {
        "actual": 0.52,
        "predicted": 0.590995268
    },
    {
        "actual": 0.03,
        "predicted": 0.016683633
    },
    {
        "actual": 0.27,
        "predicted": 0.302273601
    },
    {
        "actual": 0.11,
        "predicted": 0.231659402
    },
    {
        "actual": 0.03,
        "predicted": 0.015205193
    },
    {
        "actual": 0.17,
        "predicted": 0.067836118
    },
    {
        "actual": 0.47,
        "predicted": 0.394199019
    },
    {
        "actual": 0.22,
        "predicted": 0.161403331
    },
    {
        "actual": 0.06,
        "predicted": 0.118249718
    },
    {
        "actual": 0.39,
        "predicted": 0.431519796
    },
    {
        "actual": 0.12,
        "predicted": 0.137035954
    },
    {
        "actual": 0.02,
        "predicted": 0.036408707
    },
    {
        "actual": 0.26,
        "predicted": 0.124369041
    },
    {
        "actual": 0.55,
        "predicted": 0.371952862
    },
    {
        "actual": 0.21,
        "predicted": 0.263061984
    },
    {
        "actual": 0.12,
        "predicted": 0.205890536
    },
    {
        "actual": 0.1,
        "predicted": 0.134701823
    },
    {
        "actual": 0.41,
        "predicted": 0.518777703
    },
    {
        "actual": 0.84,
        "predicted": 0.88818503
    },
    {
        "actual": 0.18,
        "predicted": 0.254361346
    },
    {
        "actual": 0.04,
        "predicted": 0.080220349
    },
    {
        "actual": 0.34,
        "predicted": 0.338190028
    },
    {
        "actual": 0.07,
        "predicted": 0.047128278
    },
    {
        "actual": 0.05,
        "predicted": 0.172137065
    },
    {
        "actual": 0.02,
        "predicted": 0.025724863
    },
    {
        "actual": 0.31,
        "predicted": 0.451533197
    },
    {
        "actual": 0.97,
        "predicted": 0.69853714
    },
    {
        "actual": 0.33,
        "predicted": 0.339515198
    },
    {
        "actual": 0.12,
        "predicted": 0.175491345
    },
    {
        "actual": 1,
        "predicted": 0.654098359
    },
    {
        "actual": 0.96,
        "predicted": 0.528388857
    },
    {
        "actual": 0.25,
        "predicted": 0.23165389
    },
    {
        "actual": 0.03,
        "predicted": 0.055678716
    },
    {
        "actual": 0.12,
        "predicted": 0.062734276
    },
    {
        "actual": 0.14,
        "predicted": 0.229154568
    },
    {
        "actual": 0.52,
        "predicted": 0.419272165
    },
    {
        "actual": 0.05,
        "predicted": 0.149629562
    },
    {
        "actual": 0.09,
        "predicted": 0.094101828
    },
    {
        "actual": 0.14,
        "predicted": 0.238682849
    },
    {
        "actual": 0.36,
        "predicted": 0.32785813
    },
    {
        "actual": 0.04,
        "predicted": 0.123803321
    },
    {
        "actual": 0.59,
        "predicted": 0.518336733
    },
    {
        "actual": 0.49,
        "predicted": 0.162198223
    },
    {
        "actual": 0.53,
        "predicted": 0.324054533
    },
    {
        "actual": 0.06,
        "predicted": 0.170450735
    },
    {
        "actual": 0.19,
        "predicted": 0.153693173
    },
    {
        "actual": 0.28,
        "predicted": 0.316842957
    },
    {
        "actual": 0.14,
        "predicted": 0.22254941
    },
    {
        "actual": 0.9,
        "predicted": 0.485437588
    },
    {
        "actual": 0.05,
        "predicted": 0.198983103
    },
    {
        "actual": 0.15,
        "predicted": 0.176665815
    },
    {
        "actual": 1,
        "predicted": 0.632460372
    },
    {
        "actual": 0.21,
        "predicted": 0.370174338
    },
    {
        "actual": 0.02,
        "predicted": -0.017259984
    },
    {
        "actual": 0.07,
        "predicted": 0.074370657
    },
    {
        "actual": 0.21,
        "predicted": 0.439320084
    },
    {
        "actual": 0.21,
        "predicted": 0.2931798
    },
    {
        "actual": 0.4,
        "predicted": 0.328265176
    },
    {
        "actual": 0.04,
        "predicted": -0.003190991
    },
    {
        "actual": 0.31,
        "predicted": 0.352396713
    },
    {
        "actual": 0.2,
        "predicted": 0.116002784
    },
    {
        "actual": 0.05,
        "predicted": 0.157558745
    },
    {
        "actual": 0.54,
        "predicted": 0.453684082
    },
    {
        "actual": 0.54,
        "predicted": 0.415559508
    },
    {
        "actual": 0.11,
        "predicted": 0.150566515
    },
    {
        "actual": 0.13,
        "predicted": 0.140362905
    },
    {
        "actual": 0.42,
        "predicted": 0.450638595
    },
    {
        "actual": 0.06,
        "predicted": 0.181406429
    },
    {
        "actual": 0.7,
        "predicted": 0.373112306
    },
    {
        "actual": 0.45,
        "predicted": 0.456531099
    },
    {
        "actual": 0.15,
        "predicted": 0.059891865
    },
    {
        "actual": 0.15,
        "predicted": 0.141117611
    },
    {
        "actual": 0.12,
        "predicted": 0.161650266
    },
    {
        "actual": 0.11,
        "predicted": 0.09476742
    },
    {
        "actual": 0.03,
        "predicted": 0.018896405
    },
    {
        "actual": 0.09,
        "predicted": 0.214097173
    },
    {
        "actual": 0.3,
        "predicted": 0.31164059
    },
    {
        "actual": 0.39,
        "predicted": 0.297880309
    },
    {
        "actual": 0.05,
        "predicted": 0.062297794
    },
    {
        "actual": 0.03,
        "predicted": 0.119489722
    },
    {
        "actual": 0.22,
        "predicted": 0.241449138
    },
    {
        "actual": 0.33,
        "predicted": 0.184491471
    },
    {
        "actual": 0.83,
        "predicted": 0.326077312
    },
    {
        "actual": 0.11,
        "predicted": 0.222188303
    },
    {
        "actual": 0.07,
        "predicted": 0.094855708
    },
    {
        "actual": 0.28,
        "predicted": 0.348412976
    },
    {
        "actual": 0.02,
        "predicted": 0.028902599
    },
    {
        "actual": 0.41,
        "predicted": 0.266168106
    },
    {
        "actual": 0.12,
        "predicted": 0.31121025
    },
    {
        "actual": 0.34,
        "predicted": 0.32224257
    },
    {
        "actual": 0.07,
        "predicted": 0.10330534
    },
    {
        "actual": 0.05,
        "predicted": 0.077119782
    },
    {
        "actual": 0.12,
        "predicted": 0.156448655
    },
    {
        "actual": 0.04,
        "predicted": 0.045743033
    },
    {
        "actual": 0.3,
        "predicted": 0.290884936
    },
    {
        "actual": 0.06,
        "predicted": 0.142803874
    },
    {
        "actual": 0.09,
        "predicted": 0.171549251
    },
    {
        "actual": 0.42,
        "predicted": 0.454735673
    },
    {
        "actual": 0.02,
        "predicted": 0.130394526
    },
    {
        "actual": 0.1,
        "predicted": 0.260538436
    },
    {
        "actual": 0.07,
        "predicted": 0.098506475
    },
    {
        "actual": 0.11,
        "predicted": 0.137631219
    },
    {
        "actual": 0.03,
        "predicted": 0.13546716
    },
    {
        "actual": 0.06,
        "predicted": 0.071316124
    },
    {
        "actual": 0.03,
        "predicted": 0.158402229
    },
    {
        "actual": 0.11,
        "predicted": 0.065175077
    },
    {
        "actual": 0.52,
        "predicted": 0.458036302
    },
    {
        "actual": 0.25,
        "predicted": 0.37046616
    },
    {
        "actual": 0.11,
        "predicted": 0.134789314
    },
    {
        "actual": 0.82,
        "predicted": 0.531853849
    },
    {
        "actual": 0.14,
        "predicted": 0.408184489
    },
    {
        "actual": 0.08,
        "predicted": 0.115298185
    },
    {
        "actual": 0.02,
        "predicted": 0.019917365
    },
    {
        "actual": 0.27,
        "predicted": 0.140204832
    },
    {
        "actual": 0.15,
        "predicted": 0.430374809
    },
    {
        "actual": 0.16,
        "predicted": 0.263415626
    },
    {
        "actual": 0.47,
        "predicted": 0.267472774
    },
    {
        "actual": 0.12,
        "predicted": 0.28392737
    },
    {
        "actual": 0.26,
        "predicted": 0.241609788
    },
    {
        "actual": 0.02,
        "predicted": 0.027059102
    },
    {
        "actual": 1,
        "predicted": 0.846840219
    },
    {
        "actual": 0.06,
        "predicted": 0.117284687
    },
    {
        "actual": 0.31,
        "predicted": 0.219070442
    },
    {
        "actual": 0.19,
        "predicted": 0.259584019
    },
    {
        "actual": 0.06,
        "predicted": 0.091853229
    },
    {
        "actual": 0.14,
        "predicted": 0.356994877
    },
    {
        "actual": 0.35,
        "predicted": 0.490710178
    },
    {
        "actual": 0.02,
        "predicted": 0.088858211
    },
    {
        "actual": 0.36,
        "predicted": 0.333736994
    },
    {
        "actual": 0.39,
        "predicted": 0.293625262
    },
    {
        "actual": 0.12,
        "predicted": 0.111060987
    },
    {
        "actual": 0.13,
        "predicted": 0.219585772
    },
    {
        "actual": 0.57,
        "predicted": 0.402244038
    },
    {
        "actual": 0.07,
        "predicted": 0.134842243
    },
    {
        "actual": 0.59,
        "predicted": 0.674003244
    },
    {
        "actual": 0.31,
        "predicted": 0.563761041
    },
    {
        "actual": 0.34,
        "predicted": 0.527159079
    },
    {
        "actual": 0.02,
        "predicted": 0.041726792
    },
    {
        "actual": 0.47,
        "predicted": 0.182042724
    },
    {
        "actual": 0.16,
        "predicted": 0.247556933
    },
    {
        "actual": 0.15,
        "predicted": 0.197511751
    },
    {
        "actual": 0.05,
        "predicted": 0.084480961
    },
    {
        "actual": 0.15,
        "predicted": 0.218213942
    },
    {
        "actual": 0.04,
        "predicted": 0.036641083
    },
    {
        "actual": 0.12,
        "predicted": 0.295553103
    },
    {
        "actual": 0.39,
        "predicted": 0.385794577
    },
    {
        "actual": 0.18,
        "predicted": 0.113469666
    },
    {
        "actual": 0.1,
        "predicted": 0.020622267
    },
    {
        "actual": 0.86,
        "predicted": 0.594487338
    },
    {
        "actual": 0.29,
        "predicted": 0.407723367
    },
    {
        "actual": 0.07,
        "predicted": 0.116185141
    },
    {
        "actual": 0.06,
        "predicted": 0.054856735
    },
    {
        "actual": 0.2,
        "predicted": 0.380512419
    },
    {
        "actual": 0.6,
        "predicted": 0.41723191
    },
    {
        "actual": 0.14,
        "predicted": 0.177344684
    },
    {
        "actual": 0.12,
        "predicted": 0.171879488
    },
    {
        "actual": 0.04,
        "predicted": 0.002191961
    },
    {
        "actual": 0.12,
        "predicted": 0.154572255
    },
    {
        "actual": 0.36,
        "predicted": 0.518822422
    },
    {
        "actual": 0.1,
        "predicted": 0.137105861
    },
    {
        "actual": 0.27,
        "predicted": 0.313681582
    },
    {
        "actual": 0.02,
        "predicted": 0.001518686
    },
    {
        "actual": 0.01,
        "predicted": 0.101991986
    },
    {
        "actual": 0.04,
        "predicted": 0.065249567
    },
    {
        "actual": 0.03,
        "predicted": 0.023763451
    },
    {
        "actual": 0.11,
        "predicted": 0.177015355
    },
    {
        "actual": 0.26,
        "predicted": 0.240420429
    },
    {
        "actual": 0.15,
        "predicted": 0.106935015
    },
    {
        "actual": 0.08,
        "predicted": 0.171918283
    },
    {
        "actual": 0.47,
        "predicted": 0.472587935
    },
    {
        "actual": 0.1,
        "predicted": 0.096429371
    },
    {
        "actual": 0.07,
        "predicted": 0.165469462
    },
    {
        "actual": 0.15,
        "predicted": 0.153445715
    },
    {
        "actual": 0.21,
        "predicted": 0.037471952
    },
    {
        "actual": 0.13,
        "predicted": 0.204129959
    },
    {
        "actual": 0.12,
        "predicted": 0.073469993
    },
    {
        "actual": 0.59,
        "predicted": 0.307663721
    },
    {
        "actual": 0.7,
        "predicted": 0.313020857
    },
    {
        "actual": 0.03,
        "predicted": 0.104455106
    },
    {
        "actual": 0.06,
        "predicted": 0.108443296
    },
    {
        "actual": 0.1,
        "predicted": 0.104473158
    },
    {
        "actual": 0.08,
        "predicted": 0.146506281
    },
    {
        "actual": 0.11,
        "predicted": 0.102647056
    },
    {
        "actual": 0.15,
        "predicted": 0.289556924
    },
    {
        "actual": 0.51,
        "predicted": 0.439479703
    },
    {
        "actual": 0.02,
        "predicted": -0.002804348
    },
    {
        "actual": 0.06,
        "predicted": 0.068840905
    },
    {
        "actual": 0.51,
        "predicted": 0.280554709
    },
    {
        "actual": 0.58,
        "predicted": 0.467974435
    },
    {
        "actual": 0.05,
        "predicted": 0.016208241
    },
    {
        "actual": 0.05,
        "predicted": 0.023079431
    },
    {
        "actual": 0.21,
        "predicted": 0.16245523
    },
    {
        "actual": 0.65,
        "predicted": 0.485884183
    },
    {
        "actual": 0.1,
        "predicted": 0.184731654
    },
    {
        "actual": 0.23,
        "predicted": 0.288401552
    },
    {
        "actual": 0.05,
        "predicted": 0.091737099
    },
    {
        "actual": 0.13,
        "predicted": 0.23245543
    },
    {
        "actual": 0.48,
        "predicted": 0.69239974
    },
    {
        "actual": 0.06,
        "predicted": 0.146331521
    },
    {
        "actual": 0.14,
        "predicted": 0.245133399
    },
    {
        "actual": 0.54,
        "predicted": 0.301020823
    },
    {
        "actual": 0.21,
        "predicted": 0.299919769
    },
    {
        "actual": 0.25,
        "predicted": 0.248973077
    },
    {
        "actual": 0.09,
        "predicted": 0.100620315
    },
    {
        "actual": 0.04,
        "predicted": 0.031590024
    },
    {
        "actual": 0.12,
        "predicted": 0.277549928
    },
    {
        "actual": 0.44,
        "predicted": 0.544949071
    },
    {
        "actual": 0.6,
        "predicted": 0.415601969
    },
    {
        "actual": 0.34,
        "predicted": 0.185795224
    },
    {
        "actual": 0.13,
        "predicted": 0.314162151
    },
    {
        "actual": 0.15,
        "predicted": 0.103322046
    },
    {
        "actual": 0.11,
        "predicted": 0.170294117
    },
    {
        "actual": 0.32,
        "predicted": 0.505713406
    },
    {
        "actual": 0.38,
        "predicted": 0.354098679
    },
    {
        "actual": 0.12,
        "predicted": 0.036937349
    },
    {
        "actual": 0.37,
        "predicted": 0.255344251
    },
    {
        "actual": 0.08,
        "predicted": 0.065796936
    },
    {
        "actual": 0.04,
        "predicted": 0.075400003
    },
    {
        "actual": 0,
        "predicted": 0.018453309
    },
    {
        "actual": 0.02,
        "predicted": 0.001502847
    },
    {
        "actual": 0.03,
        "predicted": 0.06135642
    },
    {
        "actual": 0.36,
        "predicted": 0.359637688
    },
    {
        "actual": 0.25,
        "predicted": 0.191903626
    },
    {
        "actual": 0.33,
        "predicted": 0.401711172
    },
    {
        "actual": 0.04,
        "predicted": 0.070178876
    },
    {
        "actual": 0.48,
        "predicted": 0.36276444
    },
    {
        "actual": 0.13,
        "predicted": 0.310328819
    },
    {
        "actual": 0.01,
        "predicted": 0.129483582
    },
    {
        "actual": 0.29,
        "predicted": 0.262319643
    },
    {
        "actual": 0.02,
        "predicted": 0.11465703
    },
    {
        "actual": 0.03,
        "predicted": 0.034893987
    },
    {
        "actual": 0.21,
        "predicted": 0.300232569
    },
    {
        "actual": 0.12,
        "predicted": 0.213861216
    },
    {
        "actual": 0.41,
        "predicted": 0.430452798
    },
    {
        "actual": 0.06,
        "predicted": 0.103146625
    },
    {
        "actual": 0.57,
        "predicted": 0.328128404
    },
    {
        "actual": 0.37,
        "predicted": 0.264023372
    },
    {
        "actual": 0.67,
        "predicted": 0.815423177
    },
    {
        "actual": 0.11,
        "predicted": 0.269946896
    },
    {
        "actual": 0.03,
        "predicted": 0.133727575
    },
    {
        "actual": 0.1,
        "predicted": 0.12820694
    },
    {
        "actual": 0.03,
        "predicted": 0.035265755
    },
    {
        "actual": 0.81,
        "predicted": 0.741079347
    },
    {
        "actual": 0.51,
        "predicted": 0.289593609
    },
    {
        "actual": 0.09,
        "predicted": 0.203163163
    },
    {
        "actual": 0.01,
        "predicted": 0.041032159
    },
    {
        "actual": 0.03,
        "predicted": 0.056645842
    },
    {
        "actual": 0.2,
        "predicted": 0.255065698
    },
    {
        "actual": 0.3,
        "predicted": 0.54852665
    },
    {
        "actual": 0.03,
        "predicted": 0.049309456
    },
    {
        "actual": 0.23,
        "predicted": 0.434854139
    },
    {
        "actual": 0.12,
        "predicted": 0.186146711
    },
    {
        "actual": 0.11,
        "predicted": 0.138739309
    },
    {
        "actual": 0.12,
        "predicted": 0.275380966
    },
    {
        "actual": 0.06,
        "predicted": 0.129592666
    },
    {
        "actual": 0.12,
        "predicted": 0.195958522
    },
    {
        "actual": 0.04,
        "predicted": 0.039420683
    },
    {
        "actual": 0.25,
        "predicted": 0.211319468
    },
    {
        "actual": 0.76,
        "predicted": 0.401317447
    },
    {
        "actual": 0.15,
        "predicted": 0.110936856
    },
    {
        "actual": 0.14,
        "predicted": 0.296850892
    },
    {
        "actual": 0.23,
        "predicted": 0.214131456
    },
    {
        "actual": 0.55,
        "predicted": 0.415491086
    },
    {
        "actual": 0.37,
        "predicted": 0.216442212
    },
    {
        "actual": 0.61,
        "predicted": 0.539113464
    },
    {
        "actual": 0.37,
        "predicted": 0.501296979
    },
    {
        "actual": 0.14,
        "predicted": 0.290408919
    },
    {
        "actual": 0.32,
        "predicted": 0.479533195
    },
    {
        "actual": 0.35,
        "predicted": 0.562051296
    },
    {
        "actual": 0.21,
        "predicted": 0.183286548
    },
    {
        "actual": 0.37,
        "predicted": 0.407527096
    },
    {
        "actual": 0.05,
        "predicted": 0.030730444
    },
    {
        "actual": 0.03,
        "predicted": 0.072144794
    },
    {
        "actual": 0.14,
        "predicted": 0.253620413
    },
    {
        "actual": 0.34,
        "predicted": 0.184701834
    },
    {
        "actual": 0.03,
        "predicted": 0.012246
    },
    {
        "actual": 0.03,
        "predicted": 0.003278545
    },
    {
        "actual": 0.03,
        "predicted": 0.087464836
    },
    {
        "actual": 0.04,
        "predicted": 0.064361463
    },
    {
        "actual": 0.29,
        "predicted": 0.434573998
    },
    {
        "actual": 0.93,
        "predicted": 0.639261032
    },
    {
        "actual": 0.05,
        "predicted": 0.135359621
    },
    {
        "actual": 0.26,
        "predicted": 0.192360808
    },
    {
        "actual": 0.28,
        "predicted": 0.219943208
    },
    {
        "actual": 0.22,
        "predicted": 0.213866147
    },
    {
        "actual": 0.12,
        "predicted": 0.122407289
    },
    {
        "actual": 0.13,
        "predicted": 0.101000326
    },
    {
        "actual": 0.01,
        "predicted": 0.022840281
    },
    {
        "actual": 0.49,
        "predicted": 0.281177687
    },
    {
        "actual": 0.18,
        "predicted": 0.187231205
    },
    {
        "actual": 0.25,
        "predicted": 0.345280644
    },
    {
        "actual": 0.05,
        "predicted": 0.161356528
    },
    {
        "actual": 0.53,
        "predicted": 0.701326646
    },
    {
        "actual": 0.32,
        "predicted": 0.252238952
    },
    {
        "actual": 0.36,
        "predicted": 0.404182092
    },
    {
        "actual": 0.34,
        "predicted": 0.372580813
    },
    {
        "actual": 0.18,
        "predicted": 0.366561099
    },
    {
        "actual": 0.21,
        "predicted": 0.351900087
    },
    {
        "actual": 0.22,
        "predicted": 0.295777785
    },
    {
        "actual": 0.35,
        "predicted": 0.629546532
    },
    {
        "actual": 0.75,
        "predicted": 0.531747
    },
    {
        "actual": 0.19,
        "predicted": 0.136500991
    },
    {
        "actual": 0.05,
        "predicted": 0.139101745
    },
    {
        "actual": 0.2,
        "predicted": 0.26477855
    },
    {
        "actual": 0.08,
        "predicted": 0.055532068
    },
    {
        "actual": 0.03,
        "predicted": 0.123358582
    },
    {
        "actual": 0.03,
        "predicted": 0.144129428
    },
    {
        "actual": 0.19,
        "predicted": 0.152786758
    },
    {
        "actual": 0.03,
        "predicted": 0.191070936
    },
    {
        "actual": 0.11,
        "predicted": 0.2318209
    },
    {
        "actual": 0.78,
        "predicted": 0.336017153
    },
    {
        "actual": 0.32,
        "predicted": 0.124639391
    },
    {
        "actual": 0.37,
        "predicted": 0.183608937
    },
    {
        "actual": 0.33,
        "predicted": 0.212369322
    },
    {
        "actual": 0.19,
        "predicted": 0.118759085
    },
    {
        "actual": 0.11,
        "predicted": 0.116765753
    },
    {
        "actual": 0.29,
        "predicted": 0.201880718
    },
    {
        "actual": 0.08,
        "predicted": 0.061187019
    },
    {
        "actual": 0.1,
        "predicted": 0.137678038
    },
    {
        "actual": 1,
        "predicted": 0.69212949
    },
    {
        "actual": 0.24,
        "predicted": 0.31746024
    },
    {
        "actual": 0.04,
        "predicted": 0.12990545
    },
    {
        "actual": 0.27,
        "predicted": 0.337025701
    },
    {
        "actual": 0.5,
        "predicted": 0.343865678
    },
    {
        "actual": 0.06,
        "predicted": 0.154290226
    },
    {
        "actual": 0.53,
        "predicted": 0.482419544
    },
    {
        "actual": 0.53,
        "predicted": 0.224296509
    },
    {
        "actual": 0.07,
        "predicted": 0.11491761
    },
    {
        "actual": 0.11,
        "predicted": 0.078521344
    },
    {
        "actual": 0.31,
        "predicted": 0.356970208
    },
    {
        "actual": 0.34,
        "predicted": 0.293197428
    },
    {
        "actual": 0.18,
        "predicted": 0.332560081
    },
    {
        "actual": 0.14,
        "predicted": 0.204473299
    },
    {
        "actual": 0.14,
        "predicted": 0.127495498
    },
    {
        "actual": 0.03,
        "predicted": 0.07717146
    },
    {
        "actual": 0.14,
        "predicted": 0.109636076
    },
    {
        "actual": 0.45,
        "predicted": 0.526324875
    },
    {
        "actual": 0.12,
        "predicted": 0.048840792
    },
    {
        "actual": 0.66,
        "predicted": 0.443702378
    },
    {
        "actual": 0.07,
        "predicted": 0.091342844
    },
    {
        "actual": 0.26,
        "predicted": 0.309049548
    },
    {
        "actual": 0.07,
        "predicted": 0.330284881
    },
    {
        "actual": 0.06,
        "predicted": 0.132337824
    },
    {
        "actual": 0.1,
        "predicted": 0.23750434
    },
    {
        "actual": 0.04,
        "predicted": 0.120160573
    },
    {
        "actual": 0.11,
        "predicted": 0.190240312
    },
    {
        "actual": 0.29,
        "predicted": 0.379111002
    },
    {
        "actual": 0.13,
        "predicted": 0.315755989
    },
    {
        "actual": 0.11,
        "predicted": 0.129051141
    },
    {
        "actual": 0.02,
        "predicted": 0.007792087
    },
    {
        "actual": 0.24,
        "predicted": 0.279723038
    },
    {
        "actual": 0.87,
        "predicted": 0.600333978
    },
    {
        "actual": 0.14,
        "predicted": 0.082454315
    },
    {
        "actual": 0.46,
        "predicted": 0.292463272
    },
    {
        "actual": 0.25,
        "predicted": 0.28666479
    },
    {
        "actual": 0.08,
        "predicted": 0.077429433
    },
    {
        "actual": 0.04,
        "predicted": 0.041703014
    },
    {
        "actual": 0.54,
        "predicted": 0.59667576
    },
    {
        "actual": 0.09,
        "predicted": 0.219306784
    },
    {
        "actual": 0.2,
        "predicted": 0.235302373
    },
    {
        "actual": 0.02,
        "predicted": 0.212978917
    },
    {
        "actual": 0.04,
        "predicted": 0.167599105
    },
    {
        "actual": 0.1,
        "predicted": 0.084379244
    },
    {
        "actual": 0.69,
        "predicted": 0.433495178
    },
    {
        "actual": 0.13,
        "predicted": 0.324003729
    },
    {
        "actual": 0.06,
        "predicted": 0.070120784
    },
    {
        "actual": 0.91,
        "predicted": 0.459191649
    },
    {
        "actual": 0.04,
        "predicted": 0.055627033
    },
    {
        "actual": 0.81,
        "predicted": 0.551465241
    },
    {
        "actual": 0.15,
        "predicted": 0.075921329
    },
    {
        "actual": 0.07,
        "predicted": 0.045823901
    },
    {
        "actual": 0.06,
        "predicted": 0.087602745
    },
    {
        "actual": 0.02,
        "predicted": 0.054218297
    },
    {
        "actual": 0.31,
        "predicted": 0.293579532
    },
    {
        "actual": 0.03,
        "predicted": 0.009310767
    },
    {
        "actual": 0.27,
        "predicted": 0.435312141
    },
    {
        "actual": 0.11,
        "predicted": 0.196194464
    },
    {
        "actual": 0.09,
        "predicted": 0.12533553
    },
    {
        "actual": 0.01,
        "predicted": 0.004700919
    },
    {
        "actual": 0.5,
        "predicted": 0.324054888
    },
    {
        "actual": 0.32,
        "predicted": 0.29864452
    },
    {
        "actual": 0.43,
        "predicted": 0.549068709
    },
    {
        "actual": 0.3,
        "predicted": 0.382701001
    },
    {
        "actual": 0.02,
        "predicted": 0.04267479
    },
    {
        "actual": 0.38,
        "predicted": 0.305695335
    },
    {
        "actual": 0.01,
        "predicted": 0.169628489
    },
    {
        "actual": 0.02,
        "predicted": 0.136742812
    },
    {
        "actual": 0.04,
        "predicted": 0.074036797
    },
    {
        "actual": 0.3,
        "predicted": 0.325674479
    },
    {
        "actual": 0.8,
        "predicted": 0.666216719
    },
    {
        "actual": 0.03,
        "predicted": 0.069707961
    },
    {
        "actual": 0.11,
        "predicted": 0.033839353
    },
    {
        "actual": 0.9,
        "predicted": 0.405861874
    },
    {
        "actual": 0.09,
        "predicted": 0.283788779
    },
    {
        "actual": 0.17,
        "predicted": 0.279330785
    },
    {
        "actual": 0.07,
        "predicted": 0.106778607
    },
    {
        "actual": 0.79,
        "predicted": 0.652268055
    },
    {
        "actual": 0.28,
        "predicted": 0.402639078
    },
    {
        "actual": 0.02,
        "predicted": 0.005199771
    },
    {
        "actual": 0.03,
        "predicted": 0.162846021
    },
    {
        "actual": 0.15,
        "predicted": 0.227353163
    },
    {
        "actual": 0.07,
        "predicted": 0.251340758
    },
    {
        "actual": 0.08,
        "predicted": 0.102054984
    },
    {
        "actual": 0.33,
        "predicted": 0.335935208
    },
    {
        "actual": 0.05,
        "predicted": 0.099992843
    },
    {
        "actual": 0.25,
        "predicted": 0.326910314
    },
    {
        "actual": 0.09,
        "predicted": 0.186842879
    },
    {
        "actual": 0.23,
        "predicted": 0.224381456
    },
    {
        "actual": 0.06,
        "predicted": 0.027684186
    },
    {
        "actual": 0.07,
        "predicted": 0.268046394
    },
    {
        "actual": 0.08,
        "predicted": 0.211565244
    },
    {
        "actual": 0.42,
        "predicted": 0.29206716
    },
    {
        "actual": 0,
        "predicted": 0.000131767
    },
    {
        "actual": 0.05,
        "predicted": 0.101923153
    },
    {
        "actual": 0.05,
        "predicted": 0.119166189
    },
    {
        "actual": 0.03,
        "predicted": 0.105569053
    },
    {
        "actual": 0.06,
        "predicted": 0.097596724
    },
    {
        "actual": 0.59,
        "predicted": 0.565103136
    },
    {
        "actual": 0.33,
        "predicted": 0.623947551
    },
    {
        "actual": 0.75,
        "predicted": 0.2287597
    },
    {
        "actual": 0.43,
        "predicted": 0.235717877
    },
    {
        "actual": 0.02,
        "predicted": 0.320974004
    },
    {
        "actual": 0.09,
        "predicted": 0.14030433
    },
    {
        "actual": 0.03,
        "predicted": -0.00394235
    },
    {
        "actual": 0.07,
        "predicted": 0.059573631
    },
    {
        "actual": 0.25,
        "predicted": 0.463354114
    },
    {
        "actual": 0.48,
        "predicted": 0.52239578
    },
    {
        "actual": 0.22,
        "predicted": 0.230567477
    },
    {
        "actual": 0.04,
        "predicted": 0.032531576
    },
    {
        "actual": 0.16,
        "predicted": 0.119530162
    },
    {
        "actual": 0.11,
        "predicted": 0.157846398
    },
    {
        "actual": 0.18,
        "predicted": 0.039785421
    },
    {
        "actual": 0.28,
        "predicted": 0.389922878
    },
    {
        "actual": 0.57,
        "predicted": 0.481927068
    },
    {
        "actual": 0.39,
        "predicted": 0.570138778
    },
    {
        "actual": 0.01,
        "predicted": 0.046103894
    },
    {
        "actual": 0.14,
        "predicted": 0.193966638
    },
    {
        "actual": 0.12,
        "predicted": 0.113738497
    },
    {
        "actual": 0.06,
        "predicted": 0.086679787
    },
    {
        "actual": 0.37,
        "predicted": 0.236598214
    },
    {
        "actual": 1,
        "predicted": 0.666973616
    },
    {
        "actual": 0.09,
        "predicted": 0.207841767
    },
    {
        "actual": 0.65,
        "predicted": 0.317095958
    },
    {
        "actual": 0.02,
        "predicted": 0.000533411
    },
    {
        "actual": 0.08,
        "predicted": 0.07764384
    },
    {
        "actual": 0.34,
        "predicted": 0.213580069
    },
    {
        "actual": 0.39,
        "predicted": 0.42770126
    },
    {
        "actual": 0.29,
        "predicted": 0.31172646
    },
    {
        "actual": 0.2,
        "predicted": 0.382900454
    },
    {
        "actual": 0.13,
        "predicted": 0.210179922
    },
    {
        "actual": 0.02,
        "predicted": 0.043751234
    },
    {
        "actual": 0.32,
        "predicted": 0.302546821
    },
    {
        "actual": 0.13,
        "predicted": 0.076774868
    },
    {
        "actual": 0.04,
        "predicted": 0.115503453
    },
    {
        "actual": 0.59,
        "predicted": 0.679692032
    },
    {
        "actual": 0.33,
        "predicted": 0.288770069
    },
    {
        "actual": 0.5,
        "predicted": 0.32296758
    },
    {
        "actual": 0.1,
        "predicted": 0.113543462
    },
    {
        "actual": 0.09,
        "predicted": 0.181261538
    },
    {
        "actual": 0.52,
        "predicted": 0.435409206
    },
    {
        "actual": 0.04,
        "predicted": 0.093898593
    },
    {
        "actual": 0.05,
        "predicted": 0.016124191
    },
    {
        "actual": 0.05,
        "predicted": 0.119601296
    },
    {
        "actual": 0.38,
        "predicted": 0.488154139
    },
    {
        "actual": 0.02,
        "predicted": 0.082452288
    },
    {
        "actual": 0.22,
        "predicted": 0.235468809
    },
    {
        "actual": 0.28,
        "predicted": 0.360444629
    },
    {
        "actual": 0.28,
        "predicted": 0.348470445
    },
    {
        "actual": 0.18,
        "predicted": 0.168323052
    },
    {
        "actual": 0.02,
        "predicted": 0.032514198
    },
    {
        "actual": 0.11,
        "predicted": 0.169848697
    },
    {
        "actual": 0.08,
        "predicted": 0.142294968
    },
    {
        "actual": 0.12,
        "predicted": 0.275180339
    },
    {
        "actual": 0.19,
        "predicted": 0.191458328
    },
    {
        "actual": 0.21,
        "predicted": 0.456080118
    },
    {
        "actual": 0.23,
        "predicted": 0.222510952
    },
    {
        "actual": 0.11,
        "predicted": 0.350075175
    },
    {
        "actual": 1,
        "predicted": 0.603757471
    },
    {
        "actual": 0.04,
        "predicted": 0.167044993
    },
    {
        "actual": 0.11,
        "predicted": 0.106115763
    },
    {
        "actual": 0.19,
        "predicted": 0.312511164
    },
    {
        "actual": 0.04,
        "predicted": 0.006725606
    },
    {
        "actual": 0.32,
        "predicted": 0.347373889
    },
    {
        "actual": 0.42,
        "predicted": 0.427197346
    },
    {
        "actual": 0.33,
        "predicted": 0.272155774
    },
    {
        "actual": 0.31,
        "predicted": 0.204563541
    },
    {
        "actual": 0.15,
        "predicted": 0.117353663
    },
    {
        "actual": 0.08,
        "predicted": 0.129653123
    },
    {
        "actual": 0.24,
        "predicted": 0.338821332
    },
    {
        "actual": 0.11,
        "predicted": 0.178864595
    },
    {
        "actual": 0.07,
        "predicted": 0.065754947
    },
    {
        "actual": 0.06,
        "predicted": 0.126519625
    },
    {
        "actual": 0.08,
        "predicted": 0.125890283
    },
    {
        "actual": 0.19,
        "predicted": 0.225628309
    },
    {
        "actual": 0.17,
        "predicted": 0.170018136
    },
    {
        "actual": 0.13,
        "predicted": 0.19278643
    },
    {
        "actual": 0.01,
        "predicted": 0.013209881
    },
    {
        "actual": 0.06,
        "predicted": 0.194773631
    },
    {
        "actual": 0.15,
        "predicted": 0.318883873
    },
    {
        "actual": 0.11,
        "predicted": 0.09086131
    },
    {
        "actual": 0.05,
        "predicted": 0.106601575
    },
    {
        "actual": 0.01,
        "predicted": 0.020331339
    },
    {
        "actual": 0.06,
        "predicted": 0.051084637
    },
    {
        "actual": 0.5,
        "predicted": 0.328479894
    },
    {
        "actual": 0.13,
        "predicted": 0.067517286
    },
    {
        "actual": 0.67,
        "predicted": 0.48270768
    },
    {
        "actual": 0.17,
        "predicted": 0.181460126
    },
    {
        "actual": 0.35,
        "predicted": 0.454118743
    },
    {
        "actual": 0.19,
        "predicted": 0.100305325
    },
    {
        "actual": 0.6,
        "predicted": 0.31000239
    },
    {
        "actual": 0.6,
        "predicted": 0.293045945
    },
    {
        "actual": 0.06,
        "predicted": 0.096922018
    },
    {
        "actual": 0.27,
        "predicted": 0.247406337
    },
    {
        "actual": 0.09,
        "predicted": 0.023979825
    },
    {
        "actual": 0.22,
        "predicted": 0.045451243
    },
    {
        "actual": 1,
        "predicted": 0.642668067
    },
    {
        "actual": 0.12,
        "predicted": 0.065544638
    },
    {
        "actual": 0.02,
        "predicted": 0.044580006
    },
    {
        "actual": 0.03,
        "predicted": 0.057477789
    },
    {
        "actual": 0.16,
        "predicted": 0.122172369
    },
    {
        "actual": 0.22,
        "predicted": 0.224067432
    },
    {
        "actual": 0.08,
        "predicted": 0.166565689
    },
    {
        "actual": 0.01,
        "predicted": 0.038901552
    },
    {
        "actual": 0.67,
        "predicted": 0.429615483
    },
    {
        "actual": 0.08,
        "predicted": 0.056073001
    },
    {
        "actual": 0.14,
        "predicted": 0.137454643
    },
    {
        "actual": 0.36,
        "predicted": 0.369040367
    },
    {
        "actual": 0.16,
        "predicted": 0.119215048
    },
    {
        "actual": 0.09,
        "predicted": 0.165587121
    },
    {
        "actual": 0.75,
        "predicted": 0.539766829
    },
    {
        "actual": 0.15,
        "predicted": 0.231019048
    },
    {
        "actual": 0.83,
        "predicted": 0.4255597
    },
    {
        "actual": 0.03,
        "predicted": 0.031059239
    },
    {
        "actual": 0.47,
        "predicted": 0.603456699
    },
    {
        "actual": 0.48,
        "predicted": 0.415909503
    },
    {
        "actual": 0.19,
        "predicted": 0.415802961
    },
    {
        "actual": 0.05,
        "predicted": 0.107490492
    },
    {
        "actual": 0.08,
        "predicted": 0.148642492
    },
    {
        "actual": 0.04,
        "predicted": 0.080174855
    },
    {
        "actual": 0.53,
        "predicted": 0.399230329
    },
    {
        "actual": 0.09,
        "predicted": 0.217929846
    },
    {
        "actual": 0.06,
        "predicted": 0.044310394
    },
    {
        "actual": 0.09,
        "predicted": 0.057286602
    },
    {
        "actual": 0.25,
        "predicted": 0.356403201
    },
    {
        "actual": 0.39,
        "predicted": 0.343193383
    },
    {
        "actual": 0.53,
        "predicted": 0.487304636
    },
    {
        "actual": 0.52,
        "predicted": 0.420627922
    },
    {
        "actual": 0.08,
        "predicted": 0.03011193
    },
    {
        "actual": 0.6,
        "predicted": 0.422413712
    },
    {
        "actual": 0.02,
        "predicted": 0.067503885
    },
    {
        "actual": 0.06,
        "predicted": 0.078854638
    },
    {
        "actual": 0.09,
        "predicted": 0.160966021
    },
    {
        "actual": 0.19,
        "predicted": 0.216038293
    },
    {
        "actual": 0.16,
        "predicted": 0.117836292
    },
    {
        "actual": 0.14,
        "predicted": 0.11585885
    },
    {
        "actual": 0.19,
        "predicted": 0.264938951
    },
    {
        "actual": 0.07,
        "predicted": 0.170661078
    },
    {
        "actual": 0.72,
        "predicted": 0.561451812
    },
    {
        "actual": 0.07,
        "predicted": 0.119838903
    },
    {
        "actual": 0.27,
        "predicted": 0.26901946
    },
    {
        "actual": 0.03,
        "predicted": 0.066974049
    },
    {
        "actual": 0.45,
        "predicted": 0.102709541
    },
    {
        "actual": 0.15,
        "predicted": 0.241306628
    },
    {
        "actual": 0.13,
        "predicted": 0.029508694
    },
    {
        "actual": 0.26,
        "predicted": 0.487302907
    },
    {
        "actual": 0.06,
        "predicted": 0.141879495
    },
    {
        "actual": 0.62,
        "predicted": 0.632272796
    },
    {
        "actual": 0.53,
        "predicted": 0.284034797
    },
    {
        "actual": 0.09,
        "predicted": 0.195565968
    },
    {
        "actual": 0.49,
        "predicted": 0.311986765
    },
    {
        "actual": 0.09,
        "predicted": 0.136738283
    },
    {
        "actual": 0.64,
        "predicted": 0.68875562
    },
    {
        "actual": 0.01,
        "predicted": 0.022432649
    },
    {
        "actual": 0.5,
        "predicted": 0.533648766
    },
    {
        "actual": 0.02,
        "predicted": 0.030442537
    },
    {
        "actual": 0.24,
        "predicted": 0.24102742
    },
    {
        "actual": 0.23,
        "predicted": 0.298332946
    },
    {
        "actual": 0.38,
        "predicted": 0.236130636
    },
    {
        "actual": 0.23,
        "predicted": 0.690363312
    },
    {
        "actual": 0.41,
        "predicted": 0.184869996
    },
    {
        "actual": 0.05,
        "predicted": 0.055036599
    },
    {
        "actual": 0.18,
        "predicted": 0.225101593
    },
    {
        "actual": 0.02,
        "predicted": 0.075927392
    },
    {
        "actual": 0.09,
        "predicted": 0.06731372
    },
    {
        "actual": 0.05,
        "predicted": 0.159241203
    },
    {
        "actual": 0.07,
        "predicted": 0.201251176
    },
    {
        "actual": 0.07,
        "predicted": 0.185989043
    },
    {
        "actual": 0.81,
        "predicted": 0.413116868
    },
    {
        "actual": 0.04,
        "predicted": 0.030633615
    },
    {
        "actual": 0.02,
        "predicted": 0.082105156
    },
    {
        "actual": 0.15,
        "predicted": 0.082865518
    },
    {
        "actual": 0.65,
        "predicted": 0.70679026
    },
    {
        "actual": 0.86,
        "predicted": 0.713612165
    },
    {
        "actual": 0.12,
        "predicted": 0.190794741
    },
    {
        "actual": 0.57,
        "predicted": 0.497824348
    },
    {
        "actual": 0.16,
        "predicted": 0.258371851
    },
    {
        "actual": 0.18,
        "predicted": 0.360492968
    },
    {
        "actual": 0.16,
        "predicted": 0.467691622
    },
    {
        "actual": 0.24,
        "predicted": 0.530386474
    },
    {
        "actual": 0.44,
        "predicted": 0.361771714
    },
    {
        "actual": 0.06,
        "predicted": 0.057095917
    },
    {
        "actual": 0.16,
        "predicted": 0.190108554
    },
    {
        "actual": 0.08,
        "predicted": 0.135862925
    },
    {
        "actual": 1,
        "predicted": 0.860143832
    },
    {
        "actual": 0.14,
        "predicted": 0.095392278
    },
    {
        "actual": 0.55,
        "predicted": 0.754774696
    },
    {
        "actual": 0.13,
        "predicted": 0.161299662
    },
    {
        "actual": 0.22,
        "predicted": 0.243807164
    },
    {
        "actual": 0.29,
        "predicted": 0.246419578
    },
    {
        "actual": 0.05,
        "predicted": 0.125692412
    },
    {
        "actual": 0.16,
        "predicted": 0.119050234
    },
    {
        "actual": 0.09,
        "predicted": 0.244814105
    },
    {
        "actual": 0.17,
        "predicted": 0.209473944
    },
    {
        "actual": 0.15,
        "predicted": 0.082198219
    },
    {
        "actual": 0.14,
        "predicted": 0.186460867
    },
    {
        "actual": 0.34,
        "predicted": 0.41592076
    },
    {
        "actual": 0.27,
        "predicted": 0.261842885
    },
    {
        "actual": 0.17,
        "predicted": 0.190313765
    },
    {
        "actual": 0.26,
        "predicted": 0.264399334
    },
    {
        "actual": 0.07,
        "predicted": 0.054759044
    },
    {
        "actual": 0.02,
        "predicted": 0.001415752
    },
    {
        "actual": 0.95,
        "predicted": 0.597155406
    },
    {
        "actual": 0.11,
        "predicted": 0.148449418
    },
    {
        "actual": 0.03,
        "predicted": 0.159632846
    },
    {
        "actual": 0.03,
        "predicted": 0.083840385
    },
    {
        "actual": 0.19,
        "predicted": 0.157613126
    },
    {
        "actual": 0.34,
        "predicted": 0.302106975
    },
    {
        "actual": 0.11,
        "predicted": 0.052133878
    },
    {
        "actual": 0.53,
        "predicted": 0.577948134
    },
    {
        "actual": 0.04,
        "predicted": 0.156582941
    },
    {
        "actual": 0.21,
        "predicted": 0.168527673
    },
    {
        "actual": 0.37,
        "predicted": 0.292128966
    },
    {
        "actual": 0.18,
        "predicted": 0.218033048
    },
    {
        "actual": 0.15,
        "predicted": 0.230487711
    },
    {
        "actual": 0.88,
        "predicted": 0.604497802
    },
    {
        "actual": 0.2,
        "predicted": 0.699509059
    },
    {
        "actual": 0.22,
        "predicted": 0.287442146
    },
    {
        "actual": 0.06,
        "predicted": 0.105136887
    },
    {
        "actual": 0.08,
        "predicted": 0.071682468
    },
    {
        "actual": 0.11,
        "predicted": 0.192198588
    },
    {
        "actual": 0.38,
        "predicted": 0.329397536
    },
    {
        "actual": 0.08,
        "predicted": 0.073277466
    },
    {
        "actual": 0.29,
        "predicted": 0.226825234
    },
    {
        "actual": 0.36,
        "predicted": 0.332805214
    },
    {
        "actual": 0.09,
        "predicted": 0.14803475
    },
    {
        "actual": 0.1,
        "predicted": 0.207605798
    },
    {
        "actual": 0.05,
        "predicted": 0.108113171
    },
    {
        "actual": 0.23,
        "predicted": 0.2609638
    },
    {
        "actual": 0.15,
        "predicted": 0.179914231
    },
    {
        "actual": 0.3,
        "predicted": 0.271079281
    },
    {
        "actual": 0.03,
        "predicted": 0.110420975
    },
    {
        "actual": 0.19,
        "predicted": 0.096942608
    },
    {
        "actual": 0.04,
        "predicted": 0.111058938
    },
    {
        "actual": 0.15,
        "predicted": 0.054216594
    },
    {
        "actual": 0.01,
        "predicted": 0.131941835
    },
    {
        "actual": 0.08,
        "predicted": 0.019727643
    },
    {
        "actual": 0.5,
        "predicted": 0.188272206
    },
    {
        "actual": 0.16,
        "predicted": 0.172738753
    },
    {
        "actual": 0.16,
        "predicted": 0.173705632
    },
    {
        "actual": 0.22,
        "predicted": 0.296034021
    },
    {
        "actual": 0.08,
        "predicted": 0.13071546
    },
    {
        "actual": 0.14,
        "predicted": 0.146047558
    },
    {
        "actual": 0.05,
        "predicted": 0.165825322
    },
    {
        "actual": 0.41,
        "predicted": 0.609208213
    },
    {
        "actual": 0.09,
        "predicted": 0.23005076
    },
    {
        "actual": 0.26,
        "predicted": 0.25297492
    },
    {
        "actual": 0.67,
        "predicted": 0.506808435
    },
    {
        "actual": 0.05,
        "predicted": 0.085031951
    },
    {
        "actual": 0.17,
        "predicted": 0.152128628
    },
    {
        "actual": 0.29,
        "predicted": 0.162114987
    },
    {
        "actual": 0.54,
        "predicted": 0.253389174
    },
    {
        "actual": 0.1,
        "predicted": 0.049510272
    },
    {
        "actual": 0.63,
        "predicted": 0.491493109
    },
    {
        "actual": 0.2,
        "predicted": 0.18912913
    },
    {
        "actual": 0.29,
        "predicted": 0.263102789
    },
    {
        "actual": 0.27,
        "predicted": 0.350153957
    },
    {
        "actual": 0.13,
        "predicted": 0.368225198
    },
    {
        "actual": 0.16,
        "predicted": 0.307436832
    },
    {
        "actual": 0.32,
        "predicted": 0.341940461
    },
    {
        "actual": 0.11,
        "predicted": 0.166006972
    },
    {
        "actual": 0.13,
        "predicted": 0.131719347
    },
    {
        "actual": 0.29,
        "predicted": 0.377624631
    },
    {
        "actual": 0.09,
        "predicted": 0.148127448
    },
    {
        "actual": 0.08,
        "predicted": 0.092773465
    },
    {
        "actual": 0.17,
        "predicted": 0.273749093
    },
    {
        "actual": 0.17,
        "predicted": 0.193000689
    },
    {
        "actual": 0.02,
        "predicted": -0.014348906
    },
    {
        "actual": 0.12,
        "predicted": 0.151302966
    },
    {
        "actual": 0.04,
        "predicted": 0.011000268
    },
    {
        "actual": 0.03,
        "predicted": 0.061673652
    },
    {
        "actual": 0.14,
        "predicted": 0.076443015
    },
    {
        "actual": 0.04,
        "predicted": 0.076904301
    },
    {
        "actual": 0.04,
        "predicted": 0.068008695
    },
    {
        "actual": 0.06,
        "predicted": 0.101110877
    },
    {
        "actual": 0.2,
        "predicted": 0.213629495
    },
    {
        "actual": 0.08,
        "predicted": 0.174309251
    },
    {
        "actual": 0.56,
        "predicted": 0.366868834
    },
    {
        "actual": 0.14,
        "predicted": 0.29198436
    },
    {
        "actual": 0.12,
        "predicted": 0.21134557
    },
    {
        "actual": 0.16,
        "predicted": 0.285821621
    },
    {
        "actual": 0.16,
        "predicted": 0.142014909
    },
    {
        "actual": 0.15,
        "predicted": 0.190409264
    },
    {
        "actual": 0.2,
        "predicted": 0.292988468
    },
    {
        "actual": 0.06,
        "predicted": 0.164890329
    },
    {
        "actual": 0.18,
        "predicted": 0.004240854
    },
    {
        "actual": 0.23,
        "predicted": 0.397146652
    },
    {
        "actual": 0.18,
        "predicted": 0.089017809
    },
    {
        "actual": 0.26,
        "predicted": 0.171405972
    },
    {
        "actual": 0.11,
        "predicted": 0.142417227
    },
    {
        "actual": 0.04,
        "predicted": 0.13805537
    },
    {
        "actual": 0.48,
        "predicted": 0.485123187
    },
    {
        "actual": 0.03,
        "predicted": 0.050028563
    },
    {
        "actual": 0.3,
        "predicted": 0.348576482
    },
    {
        "actual": 1,
        "predicted": 0.502149408
    },
    {
        "actual": 0.34,
        "predicted": 0.232417278
    },
    {
        "actual": 0.1,
        "predicted": 0.108184108
    },
    {
        "actual": 0.02,
        "predicted": 0.109546658
    },
    {
        "actual": 0.02,
        "predicted": 0.289370788
    },
    {
        "actual": 0.32,
        "predicted": 0.370229404
    },
    {
        "actual": 0.45,
        "predicted": 0.555778236
    },
    {
        "actual": 0.6,
        "predicted": 0.603612589
    },
    {
        "actual": 0.69,
        "predicted": 0.516713433
    },
    {
        "actual": 0.3,
        "predicted": 0.290573074
    },
    {
        "actual": 0.04,
        "predicted": 0.003245521
    },
    {
        "actual": 0.19,
        "predicted": 0.436927558
    },
    {
        "actual": 0.75,
        "predicted": 0.550530902
    },
    {
        "actual": 0.53,
        "predicted": 0.30113286
    },
    {
        "actual": 0.22,
        "predicted": 0.268510057
    },
    {
        "actual": 0.3,
        "predicted": 0.23318266
    },
    {
        "actual": 0.04,
        "predicted": 0.068391246
    },
    {
        "actual": 0.52,
        "predicted": 0.420856997
    },
    {
        "actual": 0.09,
        "predicted": 0.184821213
    },
    {
        "actual": 0.08,
        "predicted": 0.078797182
    },
    {
        "actual": 0.25,
        "predicted": 0.170265338
    },
    {
        "actual": 0.04,
        "predicted": 0.059786547
    },
    {
        "actual": 0.16,
        "predicted": 0.263250386
    },
    {
        "actual": 0.28,
        "predicted": 0.212554785
    },
    {
        "actual": 0.07,
        "predicted": 0.124703712
    },
    {
        "actual": 0.03,
        "predicted": 0.031607856
    },
    {
        "actual": 0.56,
        "predicted": 0.362575637
    },
    {
        "actual": 0.14,
        "predicted": 0.062751114
    },
    {
        "actual": 0.14,
        "predicted": 0.323006081
    },
    {
        "actual": 0.02,
        "predicted": 0.041709074
    },
    {
        "actual": 0.04,
        "predicted": 0.044047588
    },
    {
        "actual": 0.19,
        "predicted": 0.601267931
    },
    {
        "actual": 0.09,
        "predicted": 0.148531657
    },
    {
        "actual": 0.45,
        "predicted": 0.395752954
    },
    {
        "actual": 0.23,
        "predicted": 0.414618133
    },
    {
        "actual": 0.19,
        "predicted": 0.172631602
    },
    {
        "actual": 0.48,
        "predicted": 0.411855701
    }
];

var eva_nn_chart = AmCharts.makeChart("eva-nn-chart", {
    "type": "xy",
    "theme": "light",
    "autoMarginOffset": 20,
    "dataProvider": eva_nn_data,
    "valueAxes": [{
        "position": "bottom",
        "axisAlpha": 0,
        "dashLength": 1,
        "title": "Actual"
    }, {
        "axisAlpha": 0,
        "dashLength": 1,
        "position": "left",
        "title": "Predicted"
    }],
    "startDuration": 0,
    "graphs": [{
        "balloonText": "actual:[[x]] predicted:[[y]]",
        "bullet": "circle",
        "lineAlpha": 0,
        "xField": "actual",
        "yField": "predicted",
        "lineColor": "#00ffff",
        "fillAlphas": 0
    }],
    "marginLeft": 64,
    "marginBottom": 60,
    "chartScrollbar": {},
    "chartCursor": {},
    "export": {
        "enabled": true,
        "position": "bottom-right"
    },
    "titles": [
        {
            "text": "Neural Network",
            "size": 15
        }
    ]
});
