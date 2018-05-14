import Component from '@ember/component';

const myDataSource = {
  "chart": {
    "caption": "Cancer Types",
        "subCaption": "Percentage",
        "numberSuffix": "%",
        "showPercentInTooltip": "0",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fint"
},
"data": [

    {
        "label": "Skin Cancer",
        "value": "41"
    },
    {
        "label": "Brain Cancer",
        "value": "46"
    },
    {
        "label": "Blood Cancer",
        "value": "70"
    },
    {
        "label": "Pancreatic Cancer",
        "value": "20"
    },
    {
        "label": "Thyroid Cancer",
        "value": "10"
    },
    {
        "label": "Ovarian Cancer",
        "value": "5"
    },
    {
        "label": "Others",
        "value": "15"
    }
]
};

export default Component.extend({
    title: 'Ember FusionCharts Sample',
    width: 600,
    height: 400,
    type: 'pie2d',
    dataFormat: 'json',
    dataSource: myDataSource
});