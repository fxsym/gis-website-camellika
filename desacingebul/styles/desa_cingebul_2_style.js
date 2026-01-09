var size = 0;
var placement = 'point';

var style_desa_cingebul_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "16.900000000000002px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#7d8b8f";
    var bufferWidth = 2.0999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAMOBJ") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("NAMOBJ"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,25,28,1.0)', lineDash: [7.6,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(176,79,80,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
