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
var format_Desa_parungkamal_2 = new ol.format.GeoJSON();
var features_Desa_parungkamal_2 = format_Desa_parungkamal_2.readFeatures(json_Desa_parungkamal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_parungkamal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_parungkamal_2.addFeatures(features_Desa_parungkamal_2);
var lyr_Desa_parungkamal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_parungkamal_2,
maxResolution:28004.466152261964,
 minResolution:1.4002233076130983,

                style: style_Desa_parungkamal_2,
                popuplayertitle: 'Desa_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/Desa_parungkamal_2.png" /> Desa_parungkamal'
            });
var format_RW1_Parungkamal_3 = new ol.format.GeoJSON();
var features_RW1_Parungkamal_3 = format_RW1_Parungkamal_3.readFeatures(json_RW1_Parungkamal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW1_Parungkamal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW1_Parungkamal_3.addFeatures(features_RW1_Parungkamal_3);
var lyr_RW1_Parungkamal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW1_Parungkamal_3,
maxResolution:28004.466152261964,
 minResolution:1.4002233076130983,

                style: style_RW1_Parungkamal_3,
                popuplayertitle: 'RW1_Parungkamal',
                interactive: true,
    title: 'RW1_Parungkamal<br />\
    <img src="styles/legend/RW1_Parungkamal_3_0.png" /> RW 1<br />\
    <img src="styles/legend/RW1_Parungkamal_3_1.png" /> RW 3<br />\
    <img src="styles/legend/RW1_Parungkamal_3_2.png" /> RW 4<br />\
    <img src="styles/legend/RW1_Parungkamal_3_3.png" /> RW 5<br />\
    <img src="styles/legend/RW1_Parungkamal_3_4.png" /> RW 6<br />\
    <img src="styles/legend/RW1_Parungkamal_3_5.png" /> <br />' });
var format_sungai_parungkamal_4 = new ol.format.GeoJSON();
var features_sungai_parungkamal_4 = format_sungai_parungkamal_4.readFeatures(json_sungai_parungkamal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_parungkamal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_parungkamal_4.addFeatures(features_sungai_parungkamal_4);
var lyr_sungai_parungkamal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_parungkamal_4, 
                style: style_sungai_parungkamal_4,
                popuplayertitle: 'sungai_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/sungai_parungkamal_4.png" /> sungai_parungkamal'
            });
var format_jalan_desa_parungkamal_5 = new ol.format.GeoJSON();
var features_jalan_desa_parungkamal_5 = format_jalan_desa_parungkamal_5.readFeatures(json_jalan_desa_parungkamal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_desa_parungkamal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_desa_parungkamal_5.addFeatures(features_jalan_desa_parungkamal_5);
var lyr_jalan_desa_parungkamal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_desa_parungkamal_5, 
                style: style_jalan_desa_parungkamal_5,
                popuplayertitle: 'jalan_desa_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/jalan_desa_parungkamal_5.png" /> jalan_desa_parungkamal'
            });
var format_bangunan_desa_parungkamal_6 = new ol.format.GeoJSON();
var features_bangunan_desa_parungkamal_6 = format_bangunan_desa_parungkamal_6.readFeatures(json_bangunan_desa_parungkamal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_desa_parungkamal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_desa_parungkamal_6.addFeatures(features_bangunan_desa_parungkamal_6);
var lyr_bangunan_desa_parungkamal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_desa_parungkamal_6,
maxResolution:0.9801563153291686,
 
                style: style_bangunan_desa_parungkamal_6,
                popuplayertitle: 'bangunan_desa_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/bangunan_desa_parungkamal_6.png" /> bangunan_desa_parungkamal'
            });
var format_balaidesa_parungkamal_7 = new ol.format.GeoJSON();
var features_balaidesa_parungkamal_7 = format_balaidesa_parungkamal_7.readFeatures(json_balaidesa_parungkamal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balaidesa_parungkamal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balaidesa_parungkamal_7.addFeatures(features_balaidesa_parungkamal_7);
var lyr_balaidesa_parungkamal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balaidesa_parungkamal_7,
maxResolution:28.00446615226196,
 
                style: style_balaidesa_parungkamal_7,
                popuplayertitle: 'balaidesa_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/balaidesa_parungkamal_7.png" /> balaidesa_parungkamal'
            });
var format_tempatibadah_parungkamal_8 = new ol.format.GeoJSON();
var features_tempatibadah_parungkamal_8 = format_tempatibadah_parungkamal_8.readFeatures(json_tempatibadah_parungkamal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatibadah_parungkamal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatibadah_parungkamal_8.addFeatures(features_tempatibadah_parungkamal_8);
var lyr_tempatibadah_parungkamal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatibadah_parungkamal_8,
maxResolution:1.4002233076130983,
 
                style: style_tempatibadah_parungkamal_8,
                popuplayertitle: 'tempatibadah_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/tempatibadah_parungkamal_8.png" /> tempatibadah_parungkamal'
            });
var format_tempatmakan_parungkamal_9 = new ol.format.GeoJSON();
var features_tempatmakan_parungkamal_9 = format_tempatmakan_parungkamal_9.readFeatures(json_tempatmakan_parungkamal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatmakan_parungkamal_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatmakan_parungkamal_9.addFeatures(features_tempatmakan_parungkamal_9);
var lyr_tempatmakan_parungkamal_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatmakan_parungkamal_9,
maxResolution:1.4002233076130983,
 
                style: style_tempatmakan_parungkamal_9,
                popuplayertitle: 'tempatmakan_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/tempatmakan_parungkamal_9.png" /> tempatmakan_parungkamal'
            });
var format_toko_parungkamal_10 = new ol.format.GeoJSON();
var features_toko_parungkamal_10 = format_toko_parungkamal_10.readFeatures(json_toko_parungkamal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_toko_parungkamal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toko_parungkamal_10.addFeatures(features_toko_parungkamal_10);
var lyr_toko_parungkamal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_toko_parungkamal_10,
maxResolution:1.4002233076130983,
 
                style: style_toko_parungkamal_10,
                popuplayertitle: 'toko_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/toko_parungkamal_10.png" /> toko_parungkamal'
            });
var format_pendidikan_parungkamal_11 = new ol.format.GeoJSON();
var features_pendidikan_parungkamal_11 = format_pendidikan_parungkamal_11.readFeatures(json_pendidikan_parungkamal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_parungkamal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_parungkamal_11.addFeatures(features_pendidikan_parungkamal_11);
var lyr_pendidikan_parungkamal_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_parungkamal_11,
maxResolution:1.4002233076130983,
 
                style: style_pendidikan_parungkamal_11,
                popuplayertitle: 'pendidikan_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_parungkamal_11.png" /> pendidikan_parungkamal'
            });
var format_kesehatan_parungkamal_12 = new ol.format.GeoJSON();
var features_kesehatan_parungkamal_12 = format_kesehatan_parungkamal_12.readFeatures(json_kesehatan_parungkamal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_parungkamal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_parungkamal_12.addFeatures(features_kesehatan_parungkamal_12);
var lyr_kesehatan_parungkamal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_parungkamal_12,
maxResolution:1.4002233076130983,
 
                style: style_kesehatan_parungkamal_12,
                popuplayertitle: 'kesehatan_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/kesehatan_parungkamal_12.png" /> kesehatan_parungkamal'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Desa_parungkamal_2.setVisible(true);lyr_RW1_Parungkamal_3.setVisible(true);lyr_sungai_parungkamal_4.setVisible(true);lyr_jalan_desa_parungkamal_5.setVisible(true);lyr_bangunan_desa_parungkamal_6.setVisible(true);lyr_balaidesa_parungkamal_7.setVisible(true);lyr_tempatibadah_parungkamal_8.setVisible(true);lyr_tempatmakan_parungkamal_9.setVisible(true);lyr_toko_parungkamal_10.setVisible(true);lyr_pendidikan_parungkamal_11.setVisible(true);lyr_kesehatan_parungkamal_12.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_Desa_parungkamal_2,lyr_RW1_Parungkamal_3,lyr_sungai_parungkamal_4,lyr_jalan_desa_parungkamal_5,lyr_bangunan_desa_parungkamal_6,lyr_balaidesa_parungkamal_7,lyr_tempatibadah_parungkamal_8,lyr_tempatmakan_parungkamal_9,lyr_toko_parungkamal_10,lyr_pendidikan_parungkamal_11,lyr_kesehatan_parungkamal_12];
lyr_Desa_parungkamal_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', });
lyr_RW1_Parungkamal_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sungai_parungkamal_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_desa_parungkamal_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_bangunan_desa_parungkamal_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'roof_mater': 'roof_mater', 'access_roo': 'access_roo', 'building': 'building', 'building_m': 'building_m', 'addr_house': 'addr_house', 'name': 'name', });
lyr_balaidesa_parungkamal_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_tempatibadah_parungkamal_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_tempatmakan_parungkamal_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_toko_parungkamal_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pendidikan_parungkamal_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_kesehatan_parungkamal_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_Desa_parungkamal_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_RW1_Parungkamal_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sungai_parungkamal_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'Range', 'DMAX': 'TextEdit', 'FNGAIR': 'Range', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'LTKSGI': 'Range', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'Range', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalan_desa_parungkamal_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'TextEdit', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_bangunan_desa_parungkamal_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'roof_mater': 'TextEdit', 'access_roo': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'addr_house': 'TextEdit', 'name': 'TextEdit', });
lyr_balaidesa_parungkamal_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_tempatibadah_parungkamal_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_tempatmakan_parungkamal_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_toko_parungkamal_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pendidikan_parungkamal_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_kesehatan_parungkamal_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_Desa_parungkamal_2.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'luas': 'no label', });
lyr_RW1_Parungkamal_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_sungai_parungkamal_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_desa_parungkamal_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_bangunan_desa_parungkamal_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'roof_mater': 'no label', 'access_roo': 'no label', 'building': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'name': 'no label', });
lyr_balaidesa_parungkamal_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_tempatibadah_parungkamal_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_tempatmakan_parungkamal_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_toko_parungkamal_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pendidikan_parungkamal_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_kesehatan_parungkamal_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_kesehatan_parungkamal_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});