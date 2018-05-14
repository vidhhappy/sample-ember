import Component from '@ember/component';

const myDataSource = {
  "chart": {
    "caption": "People diagonsed with cancer",
    "subCaption": "Over the years",
    "xAxisName": "Years",
    "yAxisName": "People diagnosed with Cancer",
     "paletteColors": "#0075c2",
    "bgColor": "#ffffff",
    "borderAlpha": "20",
    "canvasBorderAlpha": "0",
    "usePlotGradientColor": "0",
    "plotBorderAlpha": "10",
    "placevaluesInside": "1",
    "rotatevalues": "1",
    "valueFontColor": "#ffffff",
    "showXAxisLine": "1",
    "xAxisLineColor": "#999999",
    "divlineColor": "#999999",
    "divLineIsDashed": "1",
    "showAlternateHGridColor": "0",
    "subcaptionFontBold": "0",
    "subcaptionFontSize": "14", 
    "showcanvasborder": "1",
        "canvasborderthickness": "0.4",
        "canvasborderalpha": "50",
},
"data": [

    {
        "label": "2012",
        "value": "4123"
    },
    {
        "label": "2013",
        "value": "4633"
    },
    {
        "label": "2014",
        "value": "5507"
    },
    {
        "label": "2015",
        "value": "4910"
    },
    {
        "label": "2016",
        "value": "5529"
    },
    {
        "label": "2017",
        "value": "5803"
    },
    {
        "label": "2018",
        "value": "6202"
    }
]
};

export default Component.extend({
    title: 'Ember FusionCharts Sample',
    width: 600,
    height: 400,
    type: 'column3d',
    dataFormat: 'json',
    dataSource: myDataSource
});