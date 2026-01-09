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
maxResolution:140.0223307613098,
 minResolution:1.4002233076130983,

                style: style_desa_cingebul_2,
                popuplayertitle: 'desa_cingebul',
                interactive: true,
                title: '<img src="styles/legend/desa_cingebul_2.png" /> desa_cingebul'
            });
var format_RW_Cingebul_3 = new ol.format.GeoJSON();
var features_RW_Cingebul_3 = format_RW_Cingebul_3.readFeatures(json_RW_Cingebul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_Cingebul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_Cingebul_3.addFeatures(features_RW_Cingebul_3);
var lyr_RW_Cingebul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_Cingebul_3,
maxResolution:28004.466152261964,
 minResolution:1.4002233076130983,

                style: style_RW_Cingebul_3,
                popuplayertitle: 'RW_Cingebul',
                interactive: true,
    title: 'RW_Cingebul<br />\
    <img src="styles/legend/RW_Cingebul_3_0.png" /> <br />\
    <img src="styles/legend/RW_Cingebul_3_1.png" /> RW 1<br />\
    <img src="styles/legend/RW_Cingebul_3_2.png" /> RW 2<br />\
    <img src="styles/legend/RW_Cingebul_3_3.png" /> RW 3<br />\
    <img src="styles/legend/RW_Cingebul_3_4.png" /> RW 4<br />\
    <img src="styles/legend/RW_Cingebul_3_5.png" /> RW 5<br />\
    <img src="styles/legend/RW_Cingebul_3_6.png" /> RW 6<br />' });
var format_sungai_cingebul_4 = new ol.format.GeoJSON();
var features_sungai_cingebul_4 = format_sungai_cingebul_4.readFeatures(json_sungai_cingebul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_cingebul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_cingebul_4.addFeatures(features_sungai_cingebul_4);
var lyr_sungai_cingebul_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_cingebul_4, 
                style: style_sungai_cingebul_4,
                popuplayertitle: 'sungai_cingebul',
                interactive: true,
                title: '<img src="styles/legend/sungai_cingebul_4.png" /> sungai_cingebul'
            });
var format_jalan_cingebul_5 = new ol.format.GeoJSON();
var features_jalan_cingebul_5 = format_jalan_cingebul_5.readFeatures(json_jalan_cingebul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_cingebul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_cingebul_5.addFeatures(features_jalan_cingebul_5);
var lyr_jalan_cingebul_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_cingebul_5, 
                style: style_jalan_cingebul_5,
                popuplayertitle: 'jalan_cingebul',
                interactive: true,
                title: '<img src="styles/legend/jalan_cingebul_5.png" /> jalan_cingebul'
            });
var format_tempatmakan_6 = new ol.format.GeoJSON();
var features_tempatmakan_6 = format_tempatmakan_6.readFeatures(json_tempatmakan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatmakan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatmakan_6.addFeatures(features_tempatmakan_6);
var lyr_tempatmakan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatmakan_6,
maxResolution:1.9603126306583372,
 
                style: style_tempatmakan_6,
                popuplayertitle: 'tempat makan',
                interactive: true,
                title: '<img src="styles/legend/tempatmakan_6.png" /> tempat makan'
            });
var format_tempat_ibadah_7 = new ol.format.GeoJSON();
var features_tempat_ibadah_7 = format_tempat_ibadah_7.readFeatures(json_tempat_ibadah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempat_ibadah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempat_ibadah_7.addFeatures(features_tempat_ibadah_7);
var lyr_tempat_ibadah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempat_ibadah_7,
maxResolution:1.9603126306583372,
 
                style: style_tempat_ibadah_7,
                popuplayertitle: 'tempat_ibadah',
                interactive: true,
                title: '<img src="styles/legend/tempat_ibadah_7.png" /> tempat_ibadah'
            });
var format_pendidikan_8 = new ol.format.GeoJSON();
var features_pendidikan_8 = format_pendidikan_8.readFeatures(json_pendidikan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_8.addFeatures(features_pendidikan_8);
var lyr_pendidikan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_8,
maxResolution:1.9603126306583372,
 
                style: style_pendidikan_8,
                popuplayertitle: 'pendidikan',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_8.png" /> pendidikan'
            });
var format_Bangunan_9 = new ol.format.GeoJSON();
var features_Bangunan_9 = format_Bangunan_9.readFeatures(json_Bangunan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_9.addFeatures(features_Bangunan_9);
var lyr_Bangunan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_9,
maxResolution:1.4002233076130983,
 
                style: style_Bangunan_9,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_9.png" /> Bangunan'
            });
var format_Kesehatan_10 = new ol.format.GeoJSON();
var features_Kesehatan_10 = format_Kesehatan_10.readFeatures(json_Kesehatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_10.addFeatures(features_Kesehatan_10);
var lyr_Kesehatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_10,
maxResolution:1.9603126306583372,
 
                style: style_Kesehatan_10,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_10.png" /> Kesehatan'
            });
var format_Balaidesa_11 = new ol.format.GeoJSON();
var features_Balaidesa_11 = format_Balaidesa_11.readFeatures(json_Balaidesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balaidesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balaidesa_11.addFeatures(features_Balaidesa_11);
var lyr_Balaidesa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balaidesa_11,
maxResolution:14.00223307613098,
 
                style: style_Balaidesa_11,
                popuplayertitle: 'Balai desa',
                interactive: true,
                title: '<img src="styles/legend/Balaidesa_11.png" /> Balai desa'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_desa_cingebul_2.setVisible(true);lyr_RW_Cingebul_3.setVisible(true);lyr_sungai_cingebul_4.setVisible(true);lyr_jalan_cingebul_5.setVisible(true);lyr_tempatmakan_6.setVisible(true);lyr_tempat_ibadah_7.setVisible(true);lyr_pendidikan_8.setVisible(true);lyr_Bangunan_9.setVisible(true);lyr_Kesehatan_10.setVisible(true);lyr_Balaidesa_11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_desa_cingebul_2,lyr_RW_Cingebul_3,lyr_sungai_cingebul_4,lyr_jalan_cingebul_5,lyr_tempatmakan_6,lyr_tempat_ibadah_7,lyr_pendidikan_8,lyr_Bangunan_9,lyr_Kesehatan_10,lyr_Balaidesa_11];
lyr_desa_cingebul_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', });
lyr_RW_Cingebul_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sungai_cingebul_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_cingebul_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_tempatmakan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_tempat_ibadah_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_pendidikan_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_Bangunan_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'roof_mater': 'roof_mater', 'access_roo': 'access_roo', 'building': 'building', 'building_m': 'building_m', 'addr_house': 'addr_house', 'name': 'name', });
lyr_Kesehatan_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_Balaidesa_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_desa_cingebul_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_RW_Cingebul_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sungai_cingebul_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'Range', 'DMAX': 'TextEdit', 'FNGAIR': 'Range', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'LTKSGI': 'Range', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'Range', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalan_cingebul_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'TextEdit', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_tempatmakan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_tempat_ibadah_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_pendidikan_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_Bangunan_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'roof_mater': 'TextEdit', 'access_roo': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'addr_house': 'TextEdit', 'name': 'TextEdit', });
lyr_Kesehatan_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_Balaidesa_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_desa_cingebul_2.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'luas': 'no label', });
lyr_RW_Cingebul_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_sungai_cingebul_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_cingebul_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_tempatmakan_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_tempat_ibadah_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_pendidikan_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_Bangunan_9.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'roof_mater': 'no label', 'access_roo': 'no label', 'building': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'name': 'no label', });
lyr_Kesehatan_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_Balaidesa_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Balaidesa_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});