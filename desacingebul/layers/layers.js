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
var format_desa_cingebul_2 = new ol.format.GeoJSON();
var features_desa_cingebul_2 = format_desa_cingebul_2.readFeatures(json_desa_cingebul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_cingebul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_cingebul_2.addFeatures(features_desa_cingebul_2);
var lyr_desa_cingebul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_cingebul_2, 
                style: style_desa_cingebul_2,
                popuplayertitle: 'desa_cingebul',
                interactive: true,
                title: '<img src="styles/legend/desa_cingebul_2.png" /> desa_cingebul'
            });
var format_sungai_cingebul_3 = new ol.format.GeoJSON();
var features_sungai_cingebul_3 = format_sungai_cingebul_3.readFeatures(json_sungai_cingebul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_cingebul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_cingebul_3.addFeatures(features_sungai_cingebul_3);
var lyr_sungai_cingebul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_cingebul_3, 
                style: style_sungai_cingebul_3,
                popuplayertitle: 'sungai_cingebul',
                interactive: true,
                title: '<img src="styles/legend/sungai_cingebul_3.png" /> sungai_cingebul'
            });
var format_jalan_cingebul_4 = new ol.format.GeoJSON();
var features_jalan_cingebul_4 = format_jalan_cingebul_4.readFeatures(json_jalan_cingebul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_cingebul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_cingebul_4.addFeatures(features_jalan_cingebul_4);
var lyr_jalan_cingebul_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_cingebul_4, 
                style: style_jalan_cingebul_4,
                popuplayertitle: 'jalan_cingebul',
                interactive: true,
                title: '<img src="styles/legend/jalan_cingebul_4.png" /> jalan_cingebul'
            });
var format_Tokocopy_5 = new ol.format.GeoJSON();
var features_Tokocopy_5 = format_Tokocopy_5.readFeatures(json_Tokocopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tokocopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tokocopy_5.addFeatures(features_Tokocopy_5);
var lyr_Tokocopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tokocopy_5,
maxResolution:3.640580599794055,
 
                style: style_Tokocopy_5,
                popuplayertitle: 'Toko copy',
                interactive: true,
                title: '<img src="styles/legend/Tokocopy_5.png" /> Toko copy'
            });
var format_Tempat_makancopy_6 = new ol.format.GeoJSON();
var features_Tempat_makancopy_6 = format_Tempat_makancopy_6.readFeatures(json_Tempat_makancopy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempat_makancopy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempat_makancopy_6.addFeatures(features_Tempat_makancopy_6);
var lyr_Tempat_makancopy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempat_makancopy_6,
maxResolution:3.640580599794055,
 
                style: style_Tempat_makancopy_6,
                popuplayertitle: 'Tempat_makan copy',
                interactive: true,
                title: '<img src="styles/legend/Tempat_makancopy_6.png" /> Tempat_makan copy'
            });
var format_tempat_ibadahcopy_7 = new ol.format.GeoJSON();
var features_tempat_ibadahcopy_7 = format_tempat_ibadahcopy_7.readFeatures(json_tempat_ibadahcopy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempat_ibadahcopy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempat_ibadahcopy_7.addFeatures(features_tempat_ibadahcopy_7);
var lyr_tempat_ibadahcopy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempat_ibadahcopy_7,
maxResolution:3.640580599794055,
 
                style: style_tempat_ibadahcopy_7,
                popuplayertitle: 'tempat_ibadah copy',
                interactive: true,
                title: '<img src="styles/legend/tempat_ibadahcopy_7.png" /> tempat_ibadah copy'
            });
var format_pendidikancopy_8 = new ol.format.GeoJSON();
var features_pendidikancopy_8 = format_pendidikancopy_8.readFeatures(json_pendidikancopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikancopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikancopy_8.addFeatures(features_pendidikancopy_8);
var lyr_pendidikancopy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikancopy_8,
maxResolution:3.640580599794055,
 
                style: style_pendidikancopy_8,
                popuplayertitle: 'pendidikan copy',
                interactive: true,
                title: '<img src="styles/legend/pendidikancopy_8.png" /> pendidikan copy'
            });
var format_kesehatancopy_9 = new ol.format.GeoJSON();
var features_kesehatancopy_9 = format_kesehatancopy_9.readFeatures(json_kesehatancopy_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatancopy_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatancopy_9.addFeatures(features_kesehatancopy_9);
var lyr_kesehatancopy_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatancopy_9,
maxResolution:3.640580599794055,
 
                style: style_kesehatancopy_9,
                popuplayertitle: 'kesehatan copy',
                interactive: true,
                title: '<img src="styles/legend/kesehatancopy_9.png" /> kesehatan copy'
            });
var format_balai_desacopy_10 = new ol.format.GeoJSON();
var features_balai_desacopy_10 = format_balai_desacopy_10.readFeatures(json_balai_desacopy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balai_desacopy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balai_desacopy_10.addFeatures(features_balai_desacopy_10);
var lyr_balai_desacopy_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balai_desacopy_10,
maxResolution:3.640580599794055,
 
                style: style_balai_desacopy_10,
                popuplayertitle: 'balai_desa copy',
                interactive: true,
                title: '<img src="styles/legend/balai_desacopy_10.png" /> balai_desa copy'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_desa_cingebul_2.setVisible(true);lyr_sungai_cingebul_3.setVisible(true);lyr_jalan_cingebul_4.setVisible(true);lyr_Tokocopy_5.setVisible(true);lyr_Tempat_makancopy_6.setVisible(true);lyr_tempat_ibadahcopy_7.setVisible(true);lyr_pendidikancopy_8.setVisible(true);lyr_kesehatancopy_9.setVisible(true);lyr_balai_desacopy_10.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_desa_cingebul_2,lyr_sungai_cingebul_3,lyr_jalan_cingebul_4,lyr_Tokocopy_5,lyr_Tempat_makancopy_6,lyr_tempat_ibadahcopy_7,lyr_pendidikancopy_8,lyr_kesehatancopy_9,lyr_balai_desacopy_10];
lyr_desa_cingebul_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', });
lyr_sungai_cingebul_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_cingebul_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Tokocopy_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Tempat_makancopy_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_tempat_ibadahcopy_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_pendidikancopy_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_kesehatancopy_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_balai_desacopy_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_desa_cingebul_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_sungai_cingebul_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'Range', 'DMAX': 'TextEdit', 'FNGAIR': 'Range', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'LTKSGI': 'Range', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'Range', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalan_cingebul_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'TextEdit', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_Tokocopy_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Tempat_makancopy_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_tempat_ibadahcopy_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_pendidikancopy_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_kesehatancopy_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_balai_desacopy_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_desa_cingebul_2.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'luas': 'no label', });
lyr_sungai_cingebul_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_cingebul_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Tokocopy_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Tempat_makancopy_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_tempat_ibadahcopy_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_pendidikancopy_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_kesehatancopy_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_balai_desacopy_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_balai_desacopy_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});