var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_desa_canduk_2 = new ol.format.GeoJSON();
var features_desa_canduk_2 = format_desa_canduk_2.readFeatures(json_desa_canduk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_canduk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_canduk_2.addFeatures(features_desa_canduk_2);
var lyr_desa_canduk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_canduk_2,
maxResolution:70.0111653806549,
 minResolution:1.4002233076130983,

                style: style_desa_canduk_2,
                popuplayertitle: 'desa_canduk',
                interactive: true,
                title: '<img src="styles/legend/desa_canduk_2.png" /> desa_canduk'
            });
var format_RW_Canduk_3 = new ol.format.GeoJSON();
var features_RW_Canduk_3 = format_RW_Canduk_3.readFeatures(json_RW_Canduk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_Canduk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_Canduk_3.addFeatures(features_RW_Canduk_3);
var lyr_RW_Canduk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_Canduk_3,
maxResolution:70.0111653806549,
 minResolution:1.4002233076130983,

                style: style_RW_Canduk_3,
                popuplayertitle: 'RW_Canduk',
                interactive: true,
    title: 'RW_Canduk<br />\
    <img src="styles/legend/RW_Canduk_3_0.png" /> RW 1<br />\
    <img src="styles/legend/RW_Canduk_3_1.png" /> RW 2<br />\
    <img src="styles/legend/RW_Canduk_3_2.png" /> RW 3<br />\
    <img src="styles/legend/RW_Canduk_3_3.png" /> RW 4<br />\
    <img src="styles/legend/RW_Canduk_3_4.png" /> RW 5<br />\
    <img src="styles/legend/RW_Canduk_3_5.png" /> <br />' });
var format_bangunan_canduk_4 = new ol.format.GeoJSON();
var features_bangunan_canduk_4 = format_bangunan_canduk_4.readFeatures(json_bangunan_canduk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_canduk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_canduk_4.addFeatures(features_bangunan_canduk_4);
var lyr_bangunan_canduk_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_canduk_4,
maxResolution:2.240357292180957,
 
                style: style_bangunan_canduk_4,
                popuplayertitle: 'bangunan_canduk',
                interactive: true,
                title: '<img src="styles/legend/bangunan_canduk_4.png" /> bangunan_canduk'
            });
var format_sungai_canduk_5 = new ol.format.GeoJSON();
var features_sungai_canduk_5 = format_sungai_canduk_5.readFeatures(json_sungai_canduk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_canduk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_canduk_5.addFeatures(features_sungai_canduk_5);
var lyr_sungai_canduk_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_canduk_5, 
                style: style_sungai_canduk_5,
                popuplayertitle: 'sungai_canduk',
                interactive: true,
                title: '<img src="styles/legend/sungai_canduk_5.png" /> sungai_canduk'
            });
var format_jalan_desa_canduk_6 = new ol.format.GeoJSON();
var features_jalan_desa_canduk_6 = format_jalan_desa_canduk_6.readFeatures(json_jalan_desa_canduk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_desa_canduk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_desa_canduk_6.addFeatures(features_jalan_desa_canduk_6);
var lyr_jalan_desa_canduk_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_desa_canduk_6, 
                style: style_jalan_desa_canduk_6,
                popuplayertitle: 'jalan_desa_canduk',
                interactive: true,
                title: '<img src="styles/legend/jalan_desa_canduk_6.png" /> jalan_desa_canduk'
            });
var format_tempatibadah_canduk_7 = new ol.format.GeoJSON();
var features_tempatibadah_canduk_7 = format_tempatibadah_canduk_7.readFeatures(json_tempatibadah_canduk_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatibadah_canduk_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatibadah_canduk_7.addFeatures(features_tempatibadah_canduk_7);
var lyr_tempatibadah_canduk_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatibadah_canduk_7,
maxResolution:2.8004466152261966,
 
                style: style_tempatibadah_canduk_7,
                popuplayertitle: 'tempatibadah_canduk',
                interactive: true,
                title: '<img src="styles/legend/tempatibadah_canduk_7.png" /> tempatibadah_canduk'
            });
var format_balai_desa_canduk_8 = new ol.format.GeoJSON();
var features_balai_desa_canduk_8 = format_balai_desa_canduk_8.readFeatures(json_balai_desa_canduk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balai_desa_canduk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balai_desa_canduk_8.addFeatures(features_balai_desa_canduk_8);
var lyr_balai_desa_canduk_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balai_desa_canduk_8,
maxResolution:70.0111653806549,
 
                style: style_balai_desa_canduk_8,
                popuplayertitle: 'balai_desa_canduk',
                interactive: true,
                title: '<img src="styles/legend/balai_desa_canduk_8.png" /> balai_desa_canduk'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_desa_canduk_2.setVisible(true);lyr_RW_Canduk_3.setVisible(true);lyr_bangunan_canduk_4.setVisible(true);lyr_sungai_canduk_5.setVisible(true);lyr_jalan_desa_canduk_6.setVisible(true);lyr_tempatibadah_canduk_7.setVisible(true);lyr_balai_desa_canduk_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_desa_canduk_2,lyr_RW_Canduk_3,lyr_bangunan_canduk_4,lyr_sungai_canduk_5,lyr_jalan_desa_canduk_6,lyr_tempatibadah_canduk_7,lyr_balai_desa_canduk_8];
lyr_desa_canduk_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', });
lyr_RW_Canduk_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_bangunan_canduk_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'roof_mater': 'roof_mater', 'access_roo': 'access_roo', 'building': 'building', 'building_m': 'building_m', 'addr_house': 'addr_house', 'name': 'name', });
lyr_sungai_canduk_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_desa_canduk_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_tempatibadah_canduk_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_balai_desa_canduk_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_desa_canduk_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_RW_Canduk_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_bangunan_canduk_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'roof_mater': 'TextEdit', 'access_roo': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'addr_house': 'TextEdit', 'name': 'TextEdit', });
lyr_sungai_canduk_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'Range', 'DMAX': 'TextEdit', 'FNGAIR': 'Range', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'LTKSGI': 'Range', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'Range', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalan_desa_canduk_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'TextEdit', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_tempatibadah_canduk_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_balai_desa_canduk_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_desa_canduk_2.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'luas': 'no label', });
lyr_RW_Canduk_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_bangunan_canduk_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'roof_mater': 'no label', 'access_roo': 'no label', 'building': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'name': 'no label', });
lyr_sungai_canduk_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_desa_canduk_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_tempatibadah_canduk_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_balai_desa_canduk_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_balai_desa_canduk_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});