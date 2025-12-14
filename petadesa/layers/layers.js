var wms_layers = [];

var format_Batas_desa_0 = new ol.format.GeoJSON();
var features_Batas_desa_0 = format_Batas_desa_0.readFeatures(json_Batas_desa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_desa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_desa_0.addFeatures(features_Batas_desa_0);
var lyr_Batas_desa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_desa_0, 
                style: style_Batas_desa_0,
                popuplayertitle: 'Batas_desa',
                interactive: true,
                title: '<img src="styles/legend/Batas_desa_0.png" /> Batas_desa'
            });
var format_RW6_1 = new ol.format.GeoJSON();
var features_RW6_1 = format_RW6_1.readFeatures(json_RW6_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW6_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW6_1.addFeatures(features_RW6_1);
var lyr_RW6_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW6_1, 
                style: style_RW6_1,
                popuplayertitle: 'RW6',
                interactive: true,
                title: '<img src="styles/legend/RW6_1.png" /> RW6'
            });
var format_RW5_2 = new ol.format.GeoJSON();
var features_RW5_2 = format_RW5_2.readFeatures(json_RW5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW5_2.addFeatures(features_RW5_2);
var lyr_RW5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW5_2, 
                style: style_RW5_2,
                popuplayertitle: 'RW5',
                interactive: true,
                title: '<img src="styles/legend/RW5_2.png" /> RW5'
            });
var format_RW4_3 = new ol.format.GeoJSON();
var features_RW4_3 = format_RW4_3.readFeatures(json_RW4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW4_3.addFeatures(features_RW4_3);
var lyr_RW4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW4_3, 
                style: style_RW4_3,
                popuplayertitle: 'RW4',
                interactive: true,
                title: '<img src="styles/legend/RW4_3.png" /> RW4'
            });
var format_RW3_4 = new ol.format.GeoJSON();
var features_RW3_4 = format_RW3_4.readFeatures(json_RW3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW3_4.addFeatures(features_RW3_4);
var lyr_RW3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW3_4, 
                style: style_RW3_4,
                popuplayertitle: 'RW3',
                interactive: true,
                title: '<img src="styles/legend/RW3_4.png" /> RW3'
            });
var format_RW2_5 = new ol.format.GeoJSON();
var features_RW2_5 = format_RW2_5.readFeatures(json_RW2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW2_5.addFeatures(features_RW2_5);
var lyr_RW2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW2_5, 
                style: style_RW2_5,
                popuplayertitle: 'RW2',
                interactive: true,
                title: '<img src="styles/legend/RW2_5.png" /> RW2'
            });
var format_RW1_6 = new ol.format.GeoJSON();
var features_RW1_6 = format_RW1_6.readFeatures(json_RW1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW1_6.addFeatures(features_RW1_6);
var lyr_RW1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW1_6, 
                style: style_RW1_6,
                popuplayertitle: 'RW1',
                interactive: true,
                title: '<img src="styles/legend/RW1_6.png" /> RW1'
            });
var format_RT6_RW6_7 = new ol.format.GeoJSON();
var features_RT6_RW6_7 = format_RT6_RW6_7.readFeatures(json_RT6_RW6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT6_RW6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT6_RW6_7.addFeatures(features_RT6_RW6_7);
var lyr_RT6_RW6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT6_RW6_7, 
                style: style_RT6_RW6_7,
                popuplayertitle: 'RT6_RW6',
                interactive: true,
                title: '<img src="styles/legend/RT6_RW6_7.png" /> RT6_RW6'
            });
var format_RT5_RW6_8 = new ol.format.GeoJSON();
var features_RT5_RW6_8 = format_RT5_RW6_8.readFeatures(json_RT5_RW6_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT5_RW6_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT5_RW6_8.addFeatures(features_RT5_RW6_8);
var lyr_RT5_RW6_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT5_RW6_8, 
                style: style_RT5_RW6_8,
                popuplayertitle: 'RT5_RW6',
                interactive: true,
                title: '<img src="styles/legend/RT5_RW6_8.png" /> RT5_RW6'
            });
var format_RT4_RW6_9 = new ol.format.GeoJSON();
var features_RT4_RW6_9 = format_RT4_RW6_9.readFeatures(json_RT4_RW6_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT4_RW6_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT4_RW6_9.addFeatures(features_RT4_RW6_9);
var lyr_RT4_RW6_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT4_RW6_9, 
                style: style_RT4_RW6_9,
                popuplayertitle: 'RT4_RW6',
                interactive: true,
                title: '<img src="styles/legend/RT4_RW6_9.png" /> RT4_RW6'
            });
var format_RT3_RW6_10 = new ol.format.GeoJSON();
var features_RT3_RW6_10 = format_RT3_RW6_10.readFeatures(json_RT3_RW6_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT3_RW6_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT3_RW6_10.addFeatures(features_RT3_RW6_10);
var lyr_RT3_RW6_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT3_RW6_10, 
                style: style_RT3_RW6_10,
                popuplayertitle: 'RT3_RW6',
                interactive: true,
                title: '<img src="styles/legend/RT3_RW6_10.png" /> RT3_RW6'
            });
var format_RT2_RW6_11 = new ol.format.GeoJSON();
var features_RT2_RW6_11 = format_RT2_RW6_11.readFeatures(json_RT2_RW6_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT2_RW6_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT2_RW6_11.addFeatures(features_RT2_RW6_11);
var lyr_RT2_RW6_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT2_RW6_11, 
                style: style_RT2_RW6_11,
                popuplayertitle: 'RT2_RW6',
                interactive: true,
                title: '<img src="styles/legend/RT2_RW6_11.png" /> RT2_RW6'
            });
var format_RT1_RW6_12 = new ol.format.GeoJSON();
var features_RT1_RW6_12 = format_RT1_RW6_12.readFeatures(json_RT1_RW6_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT1_RW6_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT1_RW6_12.addFeatures(features_RT1_RW6_12);
var lyr_RT1_RW6_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT1_RW6_12, 
                style: style_RT1_RW6_12,
                popuplayertitle: 'RT1_RW6',
                interactive: true,
                title: '<img src="styles/legend/RT1_RW6_12.png" /> RT1_RW6'
            });
var format_RT5_RW4_13 = new ol.format.GeoJSON();
var features_RT5_RW4_13 = format_RT5_RW4_13.readFeatures(json_RT5_RW4_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT5_RW4_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT5_RW4_13.addFeatures(features_RT5_RW4_13);
var lyr_RT5_RW4_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT5_RW4_13, 
                style: style_RT5_RW4_13,
                popuplayertitle: 'RT5_RW4',
                interactive: true,
                title: '<img src="styles/legend/RT5_RW4_13.png" /> RT5_RW4'
            });
var format_RT4_RW4_14 = new ol.format.GeoJSON();
var features_RT4_RW4_14 = format_RT4_RW4_14.readFeatures(json_RT4_RW4_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT4_RW4_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT4_RW4_14.addFeatures(features_RT4_RW4_14);
var lyr_RT4_RW4_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT4_RW4_14, 
                style: style_RT4_RW4_14,
                popuplayertitle: 'RT4_RW4',
                interactive: true,
                title: '<img src="styles/legend/RT4_RW4_14.png" /> RT4_RW4'
            });
var format_RT3_RW4_15 = new ol.format.GeoJSON();
var features_RT3_RW4_15 = format_RT3_RW4_15.readFeatures(json_RT3_RW4_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT3_RW4_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT3_RW4_15.addFeatures(features_RT3_RW4_15);
var lyr_RT3_RW4_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT3_RW4_15, 
                style: style_RT3_RW4_15,
                popuplayertitle: 'RT3_RW4',
                interactive: true,
                title: '<img src="styles/legend/RT3_RW4_15.png" /> RT3_RW4'
            });
var format_RT2_RW4_16 = new ol.format.GeoJSON();
var features_RT2_RW4_16 = format_RT2_RW4_16.readFeatures(json_RT2_RW4_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT2_RW4_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT2_RW4_16.addFeatures(features_RT2_RW4_16);
var lyr_RT2_RW4_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT2_RW4_16, 
                style: style_RT2_RW4_16,
                popuplayertitle: 'RT2_RW4',
                interactive: true,
                title: '<img src="styles/legend/RT2_RW4_16.png" /> RT2_RW4'
            });
var format_RT1_RW4_17 = new ol.format.GeoJSON();
var features_RT1_RW4_17 = format_RT1_RW4_17.readFeatures(json_RT1_RW4_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT1_RW4_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT1_RW4_17.addFeatures(features_RT1_RW4_17);
var lyr_RT1_RW4_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT1_RW4_17, 
                style: style_RT1_RW4_17,
                popuplayertitle: 'RT1_RW4',
                interactive: true,
                title: '<img src="styles/legend/RT1_RW4_17.png" /> RT1_RW4'
            });
var format_RT3_RW3_18 = new ol.format.GeoJSON();
var features_RT3_RW3_18 = format_RT3_RW3_18.readFeatures(json_RT3_RW3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT3_RW3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT3_RW3_18.addFeatures(features_RT3_RW3_18);
var lyr_RT3_RW3_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT3_RW3_18, 
                style: style_RT3_RW3_18,
                popuplayertitle: 'RT3_RW3',
                interactive: true,
                title: '<img src="styles/legend/RT3_RW3_18.png" /> RT3_RW3'
            });
var format_RT2_RW3_19 = new ol.format.GeoJSON();
var features_RT2_RW3_19 = format_RT2_RW3_19.readFeatures(json_RT2_RW3_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT2_RW3_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT2_RW3_19.addFeatures(features_RT2_RW3_19);
var lyr_RT2_RW3_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT2_RW3_19, 
                style: style_RT2_RW3_19,
                popuplayertitle: 'RT2_RW3',
                interactive: true,
                title: '<img src="styles/legend/RT2_RW3_19.png" /> RT2_RW3'
            });
var format_RT1_RW3_20 = new ol.format.GeoJSON();
var features_RT1_RW3_20 = format_RT1_RW3_20.readFeatures(json_RT1_RW3_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT1_RW3_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT1_RW3_20.addFeatures(features_RT1_RW3_20);
var lyr_RT1_RW3_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT1_RW3_20, 
                style: style_RT1_RW3_20,
                popuplayertitle: 'RT1_RW3',
                interactive: true,
                title: '<img src="styles/legend/RT1_RW3_20.png" /> RT1_RW3'
            });
var format_RT4_RW5_21 = new ol.format.GeoJSON();
var features_RT4_RW5_21 = format_RT4_RW5_21.readFeatures(json_RT4_RW5_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT4_RW5_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT4_RW5_21.addFeatures(features_RT4_RW5_21);
var lyr_RT4_RW5_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT4_RW5_21, 
                style: style_RT4_RW5_21,
                popuplayertitle: 'RT4_RW5',
                interactive: true,
                title: '<img src="styles/legend/RT4_RW5_21.png" /> RT4_RW5'
            });
var format_RT3_RW5_22 = new ol.format.GeoJSON();
var features_RT3_RW5_22 = format_RT3_RW5_22.readFeatures(json_RT3_RW5_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT3_RW5_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT3_RW5_22.addFeatures(features_RT3_RW5_22);
var lyr_RT3_RW5_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT3_RW5_22, 
                style: style_RT3_RW5_22,
                popuplayertitle: 'RT3_RW5',
                interactive: true,
                title: '<img src="styles/legend/RT3_RW5_22.png" /> RT3_RW5'
            });
var format_RT2_RW5_23 = new ol.format.GeoJSON();
var features_RT2_RW5_23 = format_RT2_RW5_23.readFeatures(json_RT2_RW5_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT2_RW5_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT2_RW5_23.addFeatures(features_RT2_RW5_23);
var lyr_RT2_RW5_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT2_RW5_23, 
                style: style_RT2_RW5_23,
                popuplayertitle: 'RT2_RW5',
                interactive: true,
                title: '<img src="styles/legend/RT2_RW5_23.png" /> RT2_RW5'
            });
var format_RT1_RW5_24 = new ol.format.GeoJSON();
var features_RT1_RW5_24 = format_RT1_RW5_24.readFeatures(json_RT1_RW5_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT1_RW5_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT1_RW5_24.addFeatures(features_RT1_RW5_24);
var lyr_RT1_RW5_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT1_RW5_24, 
                style: style_RT1_RW5_24,
                popuplayertitle: 'RT1_RW5',
                interactive: true,
                title: '<img src="styles/legend/RT1_RW5_24.png" /> RT1_RW5'
            });
var format_RT3_RW2_25 = new ol.format.GeoJSON();
var features_RT3_RW2_25 = format_RT3_RW2_25.readFeatures(json_RT3_RW2_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT3_RW2_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT3_RW2_25.addFeatures(features_RT3_RW2_25);
var lyr_RT3_RW2_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT3_RW2_25, 
                style: style_RT3_RW2_25,
                popuplayertitle: 'RT3_RW2',
                interactive: true,
                title: '<img src="styles/legend/RT3_RW2_25.png" /> RT3_RW2'
            });
var format_RT2_RW2_26 = new ol.format.GeoJSON();
var features_RT2_RW2_26 = format_RT2_RW2_26.readFeatures(json_RT2_RW2_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT2_RW2_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT2_RW2_26.addFeatures(features_RT2_RW2_26);
var lyr_RT2_RW2_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT2_RW2_26, 
                style: style_RT2_RW2_26,
                popuplayertitle: 'RT2_RW2',
                interactive: true,
                title: '<img src="styles/legend/RT2_RW2_26.png" /> RT2_RW2'
            });
var format_RT1_RW2_27 = new ol.format.GeoJSON();
var features_RT1_RW2_27 = format_RT1_RW2_27.readFeatures(json_RT1_RW2_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT1_RW2_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT1_RW2_27.addFeatures(features_RT1_RW2_27);
var lyr_RT1_RW2_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT1_RW2_27, 
                style: style_RT1_RW2_27,
                popuplayertitle: 'RT1_RW2',
                interactive: true,
                title: '<img src="styles/legend/RT1_RW2_27.png" /> RT1_RW2'
            });
var format_RT6_RW1_28 = new ol.format.GeoJSON();
var features_RT6_RW1_28 = format_RT6_RW1_28.readFeatures(json_RT6_RW1_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT6_RW1_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT6_RW1_28.addFeatures(features_RT6_RW1_28);
var lyr_RT6_RW1_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT6_RW1_28, 
                style: style_RT6_RW1_28,
                popuplayertitle: 'RT6_RW1',
                interactive: true,
                title: '<img src="styles/legend/RT6_RW1_28.png" /> RT6_RW1'
            });
var format_RT5_RW1_29 = new ol.format.GeoJSON();
var features_RT5_RW1_29 = format_RT5_RW1_29.readFeatures(json_RT5_RW1_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT5_RW1_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT5_RW1_29.addFeatures(features_RT5_RW1_29);
var lyr_RT5_RW1_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT5_RW1_29, 
                style: style_RT5_RW1_29,
                popuplayertitle: 'RT5_RW1',
                interactive: true,
                title: '<img src="styles/legend/RT5_RW1_29.png" /> RT5_RW1'
            });
var format_RT4_RW1_30 = new ol.format.GeoJSON();
var features_RT4_RW1_30 = format_RT4_RW1_30.readFeatures(json_RT4_RW1_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT4_RW1_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT4_RW1_30.addFeatures(features_RT4_RW1_30);
var lyr_RT4_RW1_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT4_RW1_30, 
                style: style_RT4_RW1_30,
                popuplayertitle: 'RT4_RW1',
                interactive: true,
                title: '<img src="styles/legend/RT4_RW1_30.png" /> RT4_RW1'
            });
var format_RT3_RW1_31 = new ol.format.GeoJSON();
var features_RT3_RW1_31 = format_RT3_RW1_31.readFeatures(json_RT3_RW1_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT3_RW1_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT3_RW1_31.addFeatures(features_RT3_RW1_31);
var lyr_RT3_RW1_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT3_RW1_31, 
                style: style_RT3_RW1_31,
                popuplayertitle: 'RT3_RW1',
                interactive: true,
                title: '<img src="styles/legend/RT3_RW1_31.png" /> RT3_RW1'
            });
var format_RT2_RW1_32 = new ol.format.GeoJSON();
var features_RT2_RW1_32 = format_RT2_RW1_32.readFeatures(json_RT2_RW1_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT2_RW1_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT2_RW1_32.addFeatures(features_RT2_RW1_32);
var lyr_RT2_RW1_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT2_RW1_32, 
                style: style_RT2_RW1_32,
                popuplayertitle: 'RT2_RW1',
                interactive: true,
                title: '<img src="styles/legend/RT2_RW1_32.png" /> RT2_RW1'
            });
var format_RT1_RW1_33 = new ol.format.GeoJSON();
var features_RT1_RW1_33 = format_RT1_RW1_33.readFeatures(json_RT1_RW1_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT1_RW1_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT1_RW1_33.addFeatures(features_RT1_RW1_33);
var lyr_RT1_RW1_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT1_RW1_33, 
                style: style_RT1_RW1_33,
                popuplayertitle: 'RT1_RW1',
                interactive: true,
                title: '<img src="styles/legend/RT1_RW1_33.png" /> RT1_RW1'
            });
var format_Hutan_Kebun_Warga_34 = new ol.format.GeoJSON();
var features_Hutan_Kebun_Warga_34 = format_Hutan_Kebun_Warga_34.readFeatures(json_Hutan_Kebun_Warga_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hutan_Kebun_Warga_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutan_Kebun_Warga_34.addFeatures(features_Hutan_Kebun_Warga_34);
var lyr_Hutan_Kebun_Warga_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hutan_Kebun_Warga_34, 
                style: style_Hutan_Kebun_Warga_34,
                popuplayertitle: 'Hutan_Kebun_Warga',
                interactive: true,
                title: '<img src="styles/legend/Hutan_Kebun_Warga_34.png" /> Hutan_Kebun_Warga'
            });
var format_Building_35 = new ol.format.GeoJSON();
var features_Building_35 = format_Building_35.readFeatures(json_Building_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_35.addFeatures(features_Building_35);
var lyr_Building_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_35, 
                style: style_Building_35,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_35.png" /> Building'
            });
var format_Perkebunan_36 = new ol.format.GeoJSON();
var features_Perkebunan_36 = format_Perkebunan_36.readFeatures(json_Perkebunan_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perkebunan_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perkebunan_36.addFeatures(features_Perkebunan_36);
var lyr_Perkebunan_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perkebunan_36, 
                style: style_Perkebunan_36,
                popuplayertitle: 'Perkebunan',
                interactive: true,
                title: '<img src="styles/legend/Perkebunan_36.png" /> Perkebunan'
            });
var format_Perhutani_37 = new ol.format.GeoJSON();
var features_Perhutani_37 = format_Perhutani_37.readFeatures(json_Perhutani_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perhutani_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perhutani_37.addFeatures(features_Perhutani_37);
var lyr_Perhutani_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perhutani_37, 
                style: style_Perhutani_37,
                popuplayertitle: 'Perhutani',
                interactive: true,
                title: '<img src="styles/legend/Perhutani_37.png" /> Perhutani'
            });
var format_Sawahh_38 = new ol.format.GeoJSON();
var features_Sawahh_38 = format_Sawahh_38.readFeatures(json_Sawahh_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawahh_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawahh_38.addFeatures(features_Sawahh_38);
var lyr_Sawahh_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawahh_38, 
                style: style_Sawahh_38,
                popuplayertitle: 'Sawahh',
                interactive: true,
                title: '<img src="styles/legend/Sawahh_38.png" /> Sawahh'
            });
var format_Tempat_Ibadah_39 = new ol.format.GeoJSON();
var features_Tempat_Ibadah_39 = format_Tempat_Ibadah_39.readFeatures(json_Tempat_Ibadah_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempat_Ibadah_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempat_Ibadah_39.addFeatures(features_Tempat_Ibadah_39);
var lyr_Tempat_Ibadah_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempat_Ibadah_39, 
                style: style_Tempat_Ibadah_39,
                popuplayertitle: 'Tempat_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/Tempat_Ibadah_39.png" /> Tempat_Ibadah'
            });
var format_Kuburan_40 = new ol.format.GeoJSON();
var features_Kuburan_40 = format_Kuburan_40.readFeatures(json_Kuburan_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_40.addFeatures(features_Kuburan_40);
var lyr_Kuburan_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_40, 
                style: style_Kuburan_40,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_40.png" /> Kuburan'
            });
var format_Fasilitas_Pendidikan_41 = new ol.format.GeoJSON();
var features_Fasilitas_Pendidikan_41 = format_Fasilitas_Pendidikan_41.readFeatures(json_Fasilitas_Pendidikan_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Pendidikan_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Pendidikan_41.addFeatures(features_Fasilitas_Pendidikan_41);
var lyr_Fasilitas_Pendidikan_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Pendidikan_41, 
                style: style_Fasilitas_Pendidikan_41,
                popuplayertitle: 'Fasilitas_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Pendidikan_41.png" /> Fasilitas_Pendidikan'
            });
var format_Rumah_saya_42 = new ol.format.GeoJSON();
var features_Rumah_saya_42 = format_Rumah_saya_42.readFeatures(json_Rumah_saya_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_saya_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_saya_42.addFeatures(features_Rumah_saya_42);
var lyr_Rumah_saya_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_saya_42, 
                style: style_Rumah_saya_42,
                popuplayertitle: 'Rumah_saya',
                interactive: true,
                title: '<img src="styles/legend/Rumah_saya_42.png" /> Rumah_saya'
            });
var format_Warung_makan_43 = new ol.format.GeoJSON();
var features_Warung_makan_43 = format_Warung_makan_43.readFeatures(json_Warung_makan_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warung_makan_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warung_makan_43.addFeatures(features_Warung_makan_43);
var lyr_Warung_makan_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warung_makan_43, 
                style: style_Warung_makan_43,
                popuplayertitle: 'Warung_makan',
                interactive: true,
                title: '<img src="styles/legend/Warung_makan_43.png" /> Warung_makan'
            });
var format_Lapangan_44 = new ol.format.GeoJSON();
var features_Lapangan_44 = format_Lapangan_44.readFeatures(json_Lapangan_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_44.addFeatures(features_Lapangan_44);
var lyr_Lapangan_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_44, 
                style: style_Lapangan_44,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_44.png" /> Lapangan'
            });
var format_Toko_45 = new ol.format.GeoJSON();
var features_Toko_45 = format_Toko_45.readFeatures(json_Toko_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_45.addFeatures(features_Toko_45);
var lyr_Toko_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_45, 
                style: style_Toko_45,
                popuplayertitle: 'Toko',
                interactive: true,
                title: '<img src="styles/legend/Toko_45.png" /> Toko'
            });
var format_Bengkel_46 = new ol.format.GeoJSON();
var features_Bengkel_46 = format_Bengkel_46.readFeatures(json_Bengkel_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bengkel_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_46.addFeatures(features_Bengkel_46);
var lyr_Bengkel_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_46, 
                style: style_Bengkel_46,
                popuplayertitle: 'Bengkel',
                interactive: true,
                title: '<img src="styles/legend/Bengkel_46.png" /> Bengkel'
            });
var format_Sawah_saya_47 = new ol.format.GeoJSON();
var features_Sawah_saya_47 = format_Sawah_saya_47.readFeatures(json_Sawah_saya_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_saya_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_saya_47.addFeatures(features_Sawah_saya_47);
var lyr_Sawah_saya_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_saya_47, 
                style: style_Sawah_saya_47,
                popuplayertitle: 'Sawah_saya',
                interactive: true,
                title: '<img src="styles/legend/Sawah_saya_47.png" /> Sawah_saya'
            });
var format_Balai_desa_48 = new ol.format.GeoJSON();
var features_Balai_desa_48 = format_Balai_desa_48.readFeatures(json_Balai_desa_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balai_desa_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balai_desa_48.addFeatures(features_Balai_desa_48);
var lyr_Balai_desa_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balai_desa_48, 
                style: style_Balai_desa_48,
                popuplayertitle: 'Balai_desa',
                interactive: true,
                title: '<img src="styles/legend/Balai_desa_48.png" /> Balai_desa'
            });
var format_SPBU_49 = new ol.format.GeoJSON();
var features_SPBU_49 = format_SPBU_49.readFeatures(json_SPBU_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_49.addFeatures(features_SPBU_49);
var lyr_SPBU_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_49, 
                style: style_SPBU_49,
                popuplayertitle: 'SPBU',
                interactive: true,
                title: '<img src="styles/legend/SPBU_49.png" /> SPBU'
            });
var format_Rumah_Tokoh_Masyarakat_50 = new ol.format.GeoJSON();
var features_Rumah_Tokoh_Masyarakat_50 = format_Rumah_Tokoh_Masyarakat_50.readFeatures(json_Rumah_Tokoh_Masyarakat_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Tokoh_Masyarakat_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Tokoh_Masyarakat_50.addFeatures(features_Rumah_Tokoh_Masyarakat_50);
var lyr_Rumah_Tokoh_Masyarakat_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Tokoh_Masyarakat_50, 
                style: style_Rumah_Tokoh_Masyarakat_50,
                popuplayertitle: 'Rumah_Tokoh_Masyarakat',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Tokoh_Masyarakat_50.png" /> Rumah_Tokoh_Masyarakat'
            });
var format_Fasilitas_Kesehatan_51 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_51 = format_Fasilitas_Kesehatan_51.readFeatures(json_Fasilitas_Kesehatan_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_51.addFeatures(features_Fasilitas_Kesehatan_51);
var lyr_Fasilitas_Kesehatan_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Kesehatan_51, 
                style: style_Fasilitas_Kesehatan_51,
                popuplayertitle: 'Fasilitas_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Kesehatan_51.png" /> Fasilitas_Kesehatan'
            });
var format_Jalan_Kecamatan_52 = new ol.format.GeoJSON();
var features_Jalan_Kecamatan_52 = format_Jalan_Kecamatan_52.readFeatures(json_Jalan_Kecamatan_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kecamatan_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kecamatan_52.addFeatures(features_Jalan_Kecamatan_52);
var lyr_Jalan_Kecamatan_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kecamatan_52, 
                style: style_Jalan_Kecamatan_52,
                popuplayertitle: 'Jalan_Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Kecamatan_52.png" /> Jalan_Kecamatan'
            });
var format_Jalan_Desa_53 = new ol.format.GeoJSON();
var features_Jalan_Desa_53 = format_Jalan_Desa_53.readFeatures(json_Jalan_Desa_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Desa_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Desa_53.addFeatures(features_Jalan_Desa_53);
var lyr_Jalan_Desa_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Desa_53, 
                style: style_Jalan_Desa_53,
                popuplayertitle: 'Jalan_Desa',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Desa_53.png" /> Jalan_Desa'
            });
var format_Sungai_54 = new ol.format.GeoJSON();
var features_Sungai_54 = format_Sungai_54.readFeatures(json_Sungai_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_54.addFeatures(features_Sungai_54);
var lyr_Sungai_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_54, 
                style: style_Sungai_54,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_54.png" /> Sungai'
            });
var group_Line = new ol.layer.Group({
                                layers: [lyr_Jalan_Kecamatan_52,lyr_Jalan_Desa_53,lyr_Sungai_54,],
                                fold: 'open',
                                title: 'Line'});
var group_Point = new ol.layer.Group({
                                layers: [lyr_Tempat_Ibadah_39,lyr_Kuburan_40,lyr_Fasilitas_Pendidikan_41,lyr_Rumah_saya_42,lyr_Warung_makan_43,lyr_Lapangan_44,lyr_Toko_45,lyr_Bengkel_46,lyr_Sawah_saya_47,lyr_Balai_desa_48,lyr_SPBU_49,lyr_Rumah_Tokoh_Masyarakat_50,lyr_Fasilitas_Kesehatan_51,],
                                fold: 'close',
                                title: 'Point'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_Hutan_Kebun_Warga_34,lyr_Building_35,lyr_Perkebunan_36,lyr_Perhutani_37,lyr_Sawahh_38,],
                                fold: 'close',
                                title: 'Polygon'});
var group_RT = new ol.layer.Group({
                                layers: [lyr_RT6_RW6_7,lyr_RT5_RW6_8,lyr_RT4_RW6_9,lyr_RT3_RW6_10,lyr_RT2_RW6_11,lyr_RT1_RW6_12,lyr_RT5_RW4_13,lyr_RT4_RW4_14,lyr_RT3_RW4_15,lyr_RT2_RW4_16,lyr_RT1_RW4_17,lyr_RT3_RW3_18,lyr_RT2_RW3_19,lyr_RT1_RW3_20,lyr_RT4_RW5_21,lyr_RT3_RW5_22,lyr_RT2_RW5_23,lyr_RT1_RW5_24,lyr_RT3_RW2_25,lyr_RT2_RW2_26,lyr_RT1_RW2_27,lyr_RT6_RW1_28,lyr_RT5_RW1_29,lyr_RT4_RW1_30,lyr_RT3_RW1_31,lyr_RT2_RW1_32,lyr_RT1_RW1_33,],
                                fold: 'open',
                                title: 'RT'});
var group_RW = new ol.layer.Group({
                                layers: [lyr_RW6_1,lyr_RW5_2,lyr_RW4_3,lyr_RW3_4,lyr_RW2_5,lyr_RW1_6,],
                                fold: 'open',
                                title: 'RW'});

lyr_Batas_desa_0.setVisible(true);lyr_RW6_1.setVisible(true);lyr_RW5_2.setVisible(true);lyr_RW4_3.setVisible(true);lyr_RW3_4.setVisible(true);lyr_RW2_5.setVisible(true);lyr_RW1_6.setVisible(true);lyr_RT6_RW6_7.setVisible(true);lyr_RT5_RW6_8.setVisible(true);lyr_RT4_RW6_9.setVisible(true);lyr_RT3_RW6_10.setVisible(true);lyr_RT2_RW6_11.setVisible(true);lyr_RT1_RW6_12.setVisible(true);lyr_RT5_RW4_13.setVisible(true);lyr_RT4_RW4_14.setVisible(true);lyr_RT3_RW4_15.setVisible(true);lyr_RT2_RW4_16.setVisible(true);lyr_RT1_RW4_17.setVisible(true);lyr_RT3_RW3_18.setVisible(true);lyr_RT2_RW3_19.setVisible(true);lyr_RT1_RW3_20.setVisible(true);lyr_RT4_RW5_21.setVisible(true);lyr_RT3_RW5_22.setVisible(true);lyr_RT2_RW5_23.setVisible(true);lyr_RT1_RW5_24.setVisible(true);lyr_RT3_RW2_25.setVisible(true);lyr_RT2_RW2_26.setVisible(true);lyr_RT1_RW2_27.setVisible(true);lyr_RT6_RW1_28.setVisible(true);lyr_RT5_RW1_29.setVisible(true);lyr_RT4_RW1_30.setVisible(true);lyr_RT3_RW1_31.setVisible(true);lyr_RT2_RW1_32.setVisible(true);lyr_RT1_RW1_33.setVisible(true);lyr_Hutan_Kebun_Warga_34.setVisible(true);lyr_Building_35.setVisible(true);lyr_Perkebunan_36.setVisible(true);lyr_Perhutani_37.setVisible(true);lyr_Sawahh_38.setVisible(true);lyr_Tempat_Ibadah_39.setVisible(true);lyr_Kuburan_40.setVisible(true);lyr_Fasilitas_Pendidikan_41.setVisible(true);lyr_Rumah_saya_42.setVisible(true);lyr_Warung_makan_43.setVisible(true);lyr_Lapangan_44.setVisible(true);lyr_Toko_45.setVisible(true);lyr_Bengkel_46.setVisible(true);lyr_Sawah_saya_47.setVisible(true);lyr_Balai_desa_48.setVisible(true);lyr_SPBU_49.setVisible(true);lyr_Rumah_Tokoh_Masyarakat_50.setVisible(true);lyr_Fasilitas_Kesehatan_51.setVisible(true);lyr_Jalan_Kecamatan_52.setVisible(true);lyr_Jalan_Desa_53.setVisible(true);lyr_Sungai_54.setVisible(true);
var layersList = [lyr_Batas_desa_0,group_RW,group_RT,group_Polygon,group_Point,group_Line];
lyr_Batas_desa_0.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kategori': 'Kategori', });
lyr_RW6_1.set('fieldAliases', {'id': 'id', 'Nama_RW': 'Nama_RW', 'Jml_Warga': 'Jml_Warga', 'Jml_RT': 'Jml_RT', 'Nama': 'Nama', });
lyr_RW5_2.set('fieldAliases', {'id': 'id', 'Nama_RW': 'Nama_RW', 'Jml_Warga': 'Jml_Warga', 'Jml_RT': 'Jml_RT', 'Nama': 'Nama', });
lyr_RW4_3.set('fieldAliases', {'id': 'id', 'Nama_RW': 'Nama_RW', 'Jml_warga': 'Jml_warga', 'Jml_RT': 'Jml_RT', 'Nama': 'Nama', });
lyr_RW3_4.set('fieldAliases', {'id': 'id', 'Nama_RW': 'Nama_RW', 'Jml_warga': 'Jml_warga', 'Jml_RT': 'Jml_RT', 'NAMA': 'NAMA', });
lyr_RW2_5.set('fieldAliases', {'id': 'id', 'Nama_RW': 'Nama_RW', 'Jml_Warga': 'Jml_Warga', 'Jml_RT': 'Jml_RT', 'Nama': 'Nama', });
lyr_RW1_6.set('fieldAliases', {'id': 'id', 'Nama_RW': 'Nama_RW', 'Jml_warga': 'Jml_warga', 'Jml_RT': 'Jml_RT', 'Nama': 'Nama', });
lyr_RT6_RW6_7.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT5_RW6_8.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT4_RW6_9.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT3_RW6_10.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT2_RW6_11.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_Warga': 'Jml_Warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT1_RW6_12.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT5_RW4_13.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT4_RW4_14.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT3_RW4_15.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT2_RW4_16.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT1_RW4_17.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_Warga': 'Jml_Warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT3_RW3_18.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT2_RW3_19.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT1_RW3_20.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warna': 'Jml_warna', 'RW': 'RW', 'RT': 'RT', });
lyr_RT4_RW5_21.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT3_RW5_22.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT2_RW5_23.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_Warga': 'Jml_Warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT1_RW5_24.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT3_RW2_25.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_Warga': 'Jml_Warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT2_RW2_26.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT1_RW2_27.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT6_RW1_28.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT5_RW1_29.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT4_RW1_30.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT3_RW1_31.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT2_RW1_32.set('fieldAliases', {'id': 'id', 'Nama_RT': 'Nama_RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', 'RT': 'RT', });
lyr_RT1_RW1_33.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Nama RT': 'Nama RT', 'Jml_warga': 'Jml_warga', 'RW': 'RW', });
lyr_Hutan_Kebun_Warga_34.set('fieldAliases', {'id': 'id', });
lyr_Building_35.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building_m': 'building_m', 'rooms': 'rooms', 'building': 'building', 'landuse': 'landuse', 'shop': 'shop', 'access_roo': 'access_roo', 'military': 'military', 'name': 'name', 'emergency': 'emergency', 'addr_stree': 'addr_stree', 'amenity': 'amenity', 'beds': 'beds', 'roof_mater': 'roof_mater', 'tourism': 'tourism', 'office': 'office', 'government': 'government', 'addr_house': 'addr_house', 'opening_ho': 'opening_ho', });
lyr_Perkebunan_36.set('fieldAliases', {'id': 'id', });
lyr_Perhutani_37.set('fieldAliases', {'id': 'id', });
lyr_Sawahh_38.set('fieldAliases', {'id': 'id', });
lyr_Tempat_Ibadah_39.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_Kuburan_40.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_Fasilitas_Pendidikan_41.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenjang': 'Jenjang', 'Alamat': 'Alamat', });
lyr_Rumah_saya_42.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_Warung_makan_43.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_Lapangan_44.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Toko_45.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bengkel_46.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_saya_47.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Balai_desa_48.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_SPBU_49.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_Tokoh_Masyarakat_50.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Fasilitas_Kesehatan_51.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Jalan_Kecamatan_52.set('fieldAliases', {'id': 'id', 'Nama_jln': 'Nama_jln', 'Lebar': 'Lebar', });
lyr_Jalan_Desa_53.set('fieldAliases', {'id': 'id', 'Nama_Jalan': 'Nama_Jalan', });
lyr_Sungai_54.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'man_made': 'man_made', 'width': 'width', 'aeroway': 'aeroway', 'capacity': 'capacity', 'public_tra': 'public_tra', 'water': 'water', 'covered': 'covered', 'amenity': 'amenity', 'building': 'building', 'railway': 'railway', 'name_fr': 'name_fr', 'operator': 'operator', 'bridge': 'bridge', 'surface': 'surface', 'landuse': 'landuse', 'barrier': 'barrier', 'parking': 'parking', 'tunnel': 'tunnel', 'oneway': 'oneway', 'depth': 'depth', 'highway': 'highway', 'diameter': 'diameter', 'name_en': 'name_en', 'pump': 'pump', 'layer': 'layer', 'waterway': 'waterway', 'blockage': 'blockage', 'name': 'name', 'natural': 'natural', 'smoothness': 'smoothness', 'name_sw': 'name_sw', });
lyr_Batas_desa_0.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_RW6_1.set('fieldImages', {'id': 'TextEdit', 'Nama_RW': 'TextEdit', 'Jml_Warga': 'TextEdit', 'Jml_RT': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RW5_2.set('fieldImages', {'id': 'TextEdit', 'Nama_RW': 'TextEdit', 'Jml_Warga': 'TextEdit', 'Jml_RT': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RW4_3.set('fieldImages', {'id': 'TextEdit', 'Nama_RW': 'TextEdit', 'Jml_warga': 'TextEdit', 'Jml_RT': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RW3_4.set('fieldImages', {'id': 'TextEdit', 'Nama_RW': 'TextEdit', 'Jml_warga': 'TextEdit', 'Jml_RT': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_RW2_5.set('fieldImages', {'id': 'TextEdit', 'Nama_RW': 'TextEdit', 'Jml_Warga': 'TextEdit', 'Jml_RT': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RW1_6.set('fieldImages', {'id': 'TextEdit', 'Nama_RW': 'TextEdit', 'Jml_warga': 'TextEdit', 'Jml_RT': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT6_RW6_7.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT5_RW6_8.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT4_RW6_9.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT3_RW6_10.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT2_RW6_11.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_Warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT1_RW6_12.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT5_RW4_13.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT4_RW4_14.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT3_RW4_15.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT2_RW4_16.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT1_RW4_17.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_Warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT3_RW3_18.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT2_RW3_19.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT1_RW3_20.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warna': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT4_RW5_21.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT3_RW5_22.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT2_RW5_23.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_Warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT1_RW5_24.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT3_RW2_25.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_Warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT2_RW2_26.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT1_RW2_27.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT6_RW1_28.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT5_RW1_29.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT4_RW1_30.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT3_RW1_31.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT2_RW1_32.set('fieldImages', {'id': 'TextEdit', 'Nama_RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_RT1_RW1_33.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Nama RT': 'TextEdit', 'Jml_warga': 'TextEdit', 'RW': 'TextEdit', });
lyr_Hutan_Kebun_Warga_34.set('fieldImages', {'id': 'TextEdit', });
lyr_Building_35.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building_m': 'TextEdit', 'rooms': 'TextEdit', 'building': 'TextEdit', 'landuse': 'TextEdit', 'shop': 'TextEdit', 'access_roo': 'TextEdit', 'military': 'TextEdit', 'name': 'TextEdit', 'emergency': 'TextEdit', 'addr_stree': 'TextEdit', 'amenity': 'TextEdit', 'beds': 'TextEdit', 'roof_mater': 'TextEdit', 'tourism': 'TextEdit', 'office': 'TextEdit', 'government': 'TextEdit', 'addr_house': 'TextEdit', 'opening_ho': 'TextEdit', });
lyr_Perkebunan_36.set('fieldImages', {'id': 'TextEdit', });
lyr_Perhutani_37.set('fieldImages', {'id': 'TextEdit', });
lyr_Sawahh_38.set('fieldImages', {'id': 'TextEdit', });
lyr_Tempat_Ibadah_39.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Kuburan_40.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Fasilitas_Pendidikan_41.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenjang': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Rumah_saya_42.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Warung_makan_43.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Lapangan_44.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Toko_45.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bengkel_46.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_saya_47.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Balai_desa_48.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_SPBU_49.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_Tokoh_Masyarakat_50.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Fasilitas_Kesehatan_51.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Jalan_Kecamatan_52.set('fieldImages', {'id': 'TextEdit', 'Nama_jln': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Jalan_Desa_53.set('fieldImages', {'id': 'TextEdit', 'Nama_Jalan': 'TextEdit', });
lyr_Sungai_54.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'man_made': 'TextEdit', 'width': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'public_tra': 'TextEdit', 'water': 'TextEdit', 'covered': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'railway': 'TextEdit', 'name_fr': 'TextEdit', 'operator': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'landuse': 'TextEdit', 'barrier': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'oneway': 'TextEdit', 'depth': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'name_en': 'TextEdit', 'pump': 'TextEdit', 'layer': 'TextEdit', 'waterway': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'name_sw': 'TextEdit', });
lyr_Batas_desa_0.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - always visible', 'Kategori': 'no label', });
lyr_RW6_1.set('fieldLabels', {'id': 'no label', 'Nama_RW': 'no label', 'Jml_Warga': 'no label', 'Jml_RT': 'no label', 'Nama': 'no label', });
lyr_RW5_2.set('fieldLabels', {'id': 'no label', 'Nama_RW': 'no label', 'Jml_Warga': 'no label', 'Jml_RT': 'no label', 'Nama': 'no label', });
lyr_RW4_3.set('fieldLabels', {'id': 'no label', 'Nama_RW': 'no label', 'Jml_warga': 'no label', 'Jml_RT': 'no label', 'Nama': 'no label', });
lyr_RW3_4.set('fieldLabels', {'id': 'no label', 'Nama_RW': 'no label', 'Jml_warga': 'no label', 'Jml_RT': 'no label', 'NAMA': 'no label', });
lyr_RW2_5.set('fieldLabels', {'id': 'no label', 'Nama_RW': 'no label', 'Jml_Warga': 'no label', 'Jml_RT': 'no label', 'Nama': 'no label', });
lyr_RW1_6.set('fieldLabels', {'id': 'no label', 'Nama_RW': 'no label', 'Jml_warga': 'no label', 'Jml_RT': 'no label', 'Nama': 'no label', });
lyr_RT6_RW6_7.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT5_RW6_8.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT4_RW6_9.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT3_RW6_10.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT2_RW6_11.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_Warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT1_RW6_12.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT5_RW4_13.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT4_RW4_14.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT3_RW4_15.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT2_RW4_16.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT1_RW4_17.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_Warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT3_RW3_18.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT2_RW3_19.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT1_RW3_20.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warna': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT4_RW5_21.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT3_RW5_22.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT2_RW5_23.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_Warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT1_RW5_24.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT3_RW2_25.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_Warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT2_RW2_26.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT1_RW2_27.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT6_RW1_28.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT5_RW1_29.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT4_RW1_30.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT3_RW1_31.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT2_RW1_32.set('fieldLabels', {'id': 'no label', 'Nama_RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_RT1_RW1_33.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Nama RT': 'no label', 'Jml_warga': 'no label', 'RW': 'no label', });
lyr_Hutan_Kebun_Warga_34.set('fieldLabels', {'id': 'no label', });
lyr_Building_35.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'building_m': 'no label', 'rooms': 'no label', 'building': 'no label', 'landuse': 'no label', 'shop': 'no label', 'access_roo': 'no label', 'military': 'no label', 'name': 'no label', 'emergency': 'no label', 'addr_stree': 'no label', 'amenity': 'no label', 'beds': 'no label', 'roof_mater': 'no label', 'tourism': 'no label', 'office': 'no label', 'government': 'no label', 'addr_house': 'no label', 'opening_ho': 'no label', });
lyr_Perkebunan_36.set('fieldLabels', {'id': 'no label', });
lyr_Perhutani_37.set('fieldLabels', {'id': 'no label', });
lyr_Sawahh_38.set('fieldLabels', {'id': 'no label', });
lyr_Tempat_Ibadah_39.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_Kuburan_40.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_Fasilitas_Pendidikan_41.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenjang': 'no label', 'Alamat': 'no label', });
lyr_Rumah_saya_42.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_Warung_makan_43.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_Lapangan_44.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Toko_45.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Bengkel_46.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sawah_saya_47.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Balai_desa_48.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_SPBU_49.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_Tokoh_Masyarakat_50.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Fasilitas_Kesehatan_51.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Jalan_Kecamatan_52.set('fieldLabels', {'id': 'no label', 'Nama_jln': 'no label', 'Lebar': 'no label', });
lyr_Jalan_Desa_53.set('fieldLabels', {'id': 'no label', 'Nama_Jalan': 'no label', });
lyr_Sungai_54.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'man_made': 'no label', 'width': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'public_tra': 'no label', 'water': 'no label', 'covered': 'no label', 'amenity': 'no label', 'building': 'no label', 'railway': 'no label', 'name_fr': 'no label', 'operator': 'no label', 'bridge': 'no label', 'surface': 'no label', 'landuse': 'no label', 'barrier': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'oneway': 'no label', 'depth': 'no label', 'highway': 'no label', 'diameter': 'no label', 'name_en': 'no label', 'pump': 'no label', 'layer': 'no label', 'waterway': 'no label', 'blockage': 'no label', 'name': 'no label', 'natural': 'no label', 'smoothness': 'no label', 'name_sw': 'no label', });
lyr_Sungai_54.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});