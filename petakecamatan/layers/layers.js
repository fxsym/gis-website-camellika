var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_batas_kecamatan_2 = new ol.format.GeoJSON();
var features_batas_kecamatan_2 = format_batas_kecamatan_2.readFeatures(json_batas_kecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kecamatan_2.addFeatures(features_batas_kecamatan_2);
var lyr_batas_kecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_kecamatan_2, 
                style: style_batas_kecamatan_2,
                popuplayertitle: 'batas_kecamatan',
                interactive: true,
                title: '<img src="styles/legend/batas_kecamatan_2.png" /> batas_kecamatan'
            });
var format_perkebunan_fix_3 = new ol.format.GeoJSON();
var features_perkebunan_fix_3 = format_perkebunan_fix_3.readFeatures(json_perkebunan_fix_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perkebunan_fix_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perkebunan_fix_3.addFeatures(features_perkebunan_fix_3);
var lyr_perkebunan_fix_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perkebunan_fix_3, 
                style: style_perkebunan_fix_3,
                popuplayertitle: 'perkebunan_fix',
                interactive: true,
                title: '<img src="styles/legend/perkebunan_fix_3.png" /> perkebunan_fix'
            });
var format_sawah_fix_4 = new ol.format.GeoJSON();
var features_sawah_fix_4 = format_sawah_fix_4.readFeatures(json_sawah_fix_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_fix_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_fix_4.addFeatures(features_sawah_fix_4);
var lyr_sawah_fix_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_fix_4, 
                style: style_sawah_fix_4,
                popuplayertitle: 'sawah_fix',
                interactive: true,
                title: '<img src="styles/legend/sawah_fix_4.png" /> sawah_fix'
            });
var format_ladang_fix_5 = new ol.format.GeoJSON();
var features_ladang_fix_5 = format_ladang_fix_5.readFeatures(json_ladang_fix_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ladang_fix_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ladang_fix_5.addFeatures(features_ladang_fix_5);
var lyr_ladang_fix_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ladang_fix_5, 
                style: style_ladang_fix_5,
                popuplayertitle: 'ladang_fix',
                interactive: true,
                title: '<img src="styles/legend/ladang_fix_5.png" /> ladang_fix'
            });
var format_hutan_fix_6 = new ol.format.GeoJSON();
var features_hutan_fix_6 = format_hutan_fix_6.readFeatures(json_hutan_fix_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_fix_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_fix_6.addFeatures(features_hutan_fix_6);
var lyr_hutan_fix_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_fix_6, 
                style: style_hutan_fix_6,
                popuplayertitle: 'hutan_fix',
                interactive: true,
                title: '<img src="styles/legend/hutan_fix_6.png" /> hutan_fix'
            });
var format_desa_parungkamal_7 = new ol.format.GeoJSON();
var features_desa_parungkamal_7 = format_desa_parungkamal_7.readFeatures(json_desa_parungkamal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_parungkamal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_parungkamal_7.addFeatures(features_desa_parungkamal_7);
var lyr_desa_parungkamal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_parungkamal_7, 
                style: style_desa_parungkamal_7,
                popuplayertitle: 'desa_parungkamal',
                interactive: true,
                title: '<img src="styles/legend/desa_parungkamal_7.png" /> desa_parungkamal'
            });
var format_desa_karanggayam_8 = new ol.format.GeoJSON();
var features_desa_karanggayam_8 = format_desa_karanggayam_8.readFeatures(json_desa_karanggayam_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_karanggayam_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_karanggayam_8.addFeatures(features_desa_karanggayam_8);
var lyr_desa_karanggayam_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_karanggayam_8, 
                style: style_desa_karanggayam_8,
                popuplayertitle: 'desa_karanggayam',
                interactive: true,
                title: '<img src="styles/legend/desa_karanggayam_8.png" /> desa_karanggayam'
            });
var format_desa_lumbir_9 = new ol.format.GeoJSON();
var features_desa_lumbir_9 = format_desa_lumbir_9.readFeatures(json_desa_lumbir_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_lumbir_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_lumbir_9.addFeatures(features_desa_lumbir_9);
var lyr_desa_lumbir_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_lumbir_9, 
                style: style_desa_lumbir_9,
                popuplayertitle: 'desa_lumbir',
                interactive: true,
                title: '<img src="styles/legend/desa_lumbir_9.png" /> desa_lumbir'
            });
var format_desa_kedunggede_10 = new ol.format.GeoJSON();
var features_desa_kedunggede_10 = format_desa_kedunggede_10.readFeatures(json_desa_kedunggede_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_kedunggede_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_kedunggede_10.addFeatures(features_desa_kedunggede_10);
var lyr_desa_kedunggede_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_kedunggede_10, 
                style: style_desa_kedunggede_10,
                popuplayertitle: 'desa_kedunggede',
                interactive: true,
                title: '<img src="styles/legend/desa_kedunggede_10.png" /> desa_kedunggede'
            });
var format_desa_dermaji_11 = new ol.format.GeoJSON();
var features_desa_dermaji_11 = format_desa_dermaji_11.readFeatures(json_desa_dermaji_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_dermaji_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_dermaji_11.addFeatures(features_desa_dermaji_11);
var lyr_desa_dermaji_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_dermaji_11, 
                style: style_desa_dermaji_11,
                popuplayertitle: 'desa_dermaji',
                interactive: true,
                title: '<img src="styles/legend/desa_dermaji_11.png" /> desa_dermaji'
            });
var format_desa_cirahab_12 = new ol.format.GeoJSON();
var features_desa_cirahab_12 = format_desa_cirahab_12.readFeatures(json_desa_cirahab_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_cirahab_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_cirahab_12.addFeatures(features_desa_cirahab_12);
var lyr_desa_cirahab_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_cirahab_12, 
                style: style_desa_cirahab_12,
                popuplayertitle: 'desa_cirahab',
                interactive: true,
                title: '<img src="styles/legend/desa_cirahab_12.png" /> desa_cirahab'
            });
var format_desa_cingebul_13 = new ol.format.GeoJSON();
var features_desa_cingebul_13 = format_desa_cingebul_13.readFeatures(json_desa_cingebul_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_cingebul_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_cingebul_13.addFeatures(features_desa_cingebul_13);
var lyr_desa_cingebul_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_cingebul_13, 
                style: style_desa_cingebul_13,
                popuplayertitle: 'desa_cingebul',
                interactive: true,
                title: '<img src="styles/legend/desa_cingebul_13.png" /> desa_cingebul'
            });
var format_desa_cidora_14 = new ol.format.GeoJSON();
var features_desa_cidora_14 = format_desa_cidora_14.readFeatures(json_desa_cidora_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_cidora_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_cidora_14.addFeatures(features_desa_cidora_14);
var lyr_desa_cidora_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_cidora_14, 
                style: style_desa_cidora_14,
                popuplayertitle: 'desa_cidora',
                interactive: true,
                title: '<img src="styles/legend/desa_cidora_14.png" /> desa_cidora'
            });
var format_desa_canduk_15 = new ol.format.GeoJSON();
var features_desa_canduk_15 = format_desa_canduk_15.readFeatures(json_desa_canduk_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_canduk_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_canduk_15.addFeatures(features_desa_canduk_15);
var lyr_desa_canduk_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_canduk_15, 
                style: style_desa_canduk_15,
                popuplayertitle: 'desa_canduk',
                interactive: true,
                title: '<img src="styles/legend/desa_canduk_15.png" /> desa_canduk'
            });
var format_desa_besuki_16 = new ol.format.GeoJSON();
var features_desa_besuki_16 = format_desa_besuki_16.readFeatures(json_desa_besuki_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_besuki_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_besuki_16.addFeatures(features_desa_besuki_16);
var lyr_desa_besuki_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_besuki_16, 
                style: style_desa_besuki_16,
                popuplayertitle: 'desa_besuki',
                interactive: true,
                title: '<img src="styles/legend/desa_besuki_16.png" /> desa_besuki'
            });
var format_bangunan_17 = new ol.format.GeoJSON();
var features_bangunan_17 = format_bangunan_17.readFeatures(json_bangunan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_17.addFeatures(features_bangunan_17);
var lyr_bangunan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_17, 
                style: style_bangunan_17,
                popuplayertitle: 'bangunan',
                interactive: true,
                title: '<img src="styles/legend/bangunan_17.png" /> bangunan'
            });
var format_batas_desa_18 = new ol.format.GeoJSON();
var features_batas_desa_18 = format_batas_desa_18.readFeatures(json_batas_desa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_18.addFeatures(features_batas_desa_18);
var lyr_batas_desa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_desa_18, 
                style: style_batas_desa_18,
                popuplayertitle: 'batas_desa',
                interactive: true,
                title: '<img src="styles/legend/batas_desa_18.png" /> batas_desa'
            });
var format_jalan_fix_19 = new ol.format.GeoJSON();
var features_jalan_fix_19 = format_jalan_fix_19.readFeatures(json_jalan_fix_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_fix_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_fix_19.addFeatures(features_jalan_fix_19);
var lyr_jalan_fix_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_fix_19, 
                style: style_jalan_fix_19,
                popuplayertitle: 'jalan_fix',
                interactive: true,
                title: '<img src="styles/legend/jalan_fix_19.png" /> jalan_fix'
            });
var format_sungai_fix_20 = new ol.format.GeoJSON();
var features_sungai_fix_20 = format_sungai_fix_20.readFeatures(json_sungai_fix_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_fix_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_fix_20.addFeatures(features_sungai_fix_20);
var lyr_sungai_fix_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_fix_20, 
                style: style_sungai_fix_20,
                popuplayertitle: 'sungai_fix',
                interactive: true,
                title: '<img src="styles/legend/sungai_fix_20.png" /> sungai_fix'
            });
var format_balai_desa_21 = new ol.format.GeoJSON();
var features_balai_desa_21 = format_balai_desa_21.readFeatures(json_balai_desa_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balai_desa_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balai_desa_21.addFeatures(features_balai_desa_21);
var lyr_balai_desa_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balai_desa_21, 
                style: style_balai_desa_21,
                popuplayertitle: 'balai_desa',
                interactive: true,
                title: '<img src="styles/legend/balai_desa_21.png" /> balai_desa'
            });
var format_kantor_kecamatan_22 = new ol.format.GeoJSON();
var features_kantor_kecamatan_22 = format_kantor_kecamatan_22.readFeatures(json_kantor_kecamatan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantor_kecamatan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor_kecamatan_22.addFeatures(features_kantor_kecamatan_22);
var lyr_kantor_kecamatan_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantor_kecamatan_22, 
                style: style_kantor_kecamatan_22,
                popuplayertitle: 'kantor_kecamatan',
                interactive: true,
                title: '<img src="styles/legend/kantor_kecamatan_22.png" /> kantor_kecamatan'
            });
var format_pendidikan_23 = new ol.format.GeoJSON();
var features_pendidikan_23 = format_pendidikan_23.readFeatures(json_pendidikan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_23.addFeatures(features_pendidikan_23);
var lyr_pendidikan_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_23, 
                style: style_pendidikan_23,
                popuplayertitle: 'pendidikan',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_23.png" /> pendidikan'
            });
var format_kesehatan_24 = new ol.format.GeoJSON();
var features_kesehatan_24 = format_kesehatan_24.readFeatures(json_kesehatan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_24.addFeatures(features_kesehatan_24);
var lyr_kesehatan_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_24, 
                style: style_kesehatan_24,
                popuplayertitle: 'kesehatan',
                interactive: true,
                title: '<img src="styles/legend/kesehatan_24.png" /> kesehatan'
            });
var format_wisata_25 = new ol.format.GeoJSON();
var features_wisata_25 = format_wisata_25.readFeatures(json_wisata_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wisata_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wisata_25.addFeatures(features_wisata_25);
var lyr_wisata_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wisata_25, 
                style: style_wisata_25,
                popuplayertitle: 'wisata',
                interactive: true,
                title: '<img src="styles/legend/wisata_25.png" /> wisata'
            });
var format_tempat_ibadah_26 = new ol.format.GeoJSON();
var features_tempat_ibadah_26 = format_tempat_ibadah_26.readFeatures(json_tempat_ibadah_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempat_ibadah_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempat_ibadah_26.addFeatures(features_tempat_ibadah_26);
var lyr_tempat_ibadah_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempat_ibadah_26, 
                style: style_tempat_ibadah_26,
                popuplayertitle: 'tempat_ibadah',
                interactive: true,
                title: '<img src="styles/legend/tempat_ibadah_26.png" /> tempat_ibadah'
            });
var format_Kuburan_27 = new ol.format.GeoJSON();
var features_Kuburan_27 = format_Kuburan_27.readFeatures(json_Kuburan_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_27.addFeatures(features_Kuburan_27);
var lyr_Kuburan_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_27, 
                style: style_Kuburan_27,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_27.png" /> Kuburan'
            });
var format_Lapangan_28 = new ol.format.GeoJSON();
var features_Lapangan_28 = format_Lapangan_28.readFeatures(json_Lapangan_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_28.addFeatures(features_Lapangan_28);
var lyr_Lapangan_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_28, 
                style: style_Lapangan_28,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_28.png" /> Lapangan'
            });
var format_Toko_29 = new ol.format.GeoJSON();
var features_Toko_29 = format_Toko_29.readFeatures(json_Toko_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_29.addFeatures(features_Toko_29);
var lyr_Toko_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_29, 
                style: style_Toko_29,
                popuplayertitle: 'Toko',
                interactive: true,
                title: '<img src="styles/legend/Toko_29.png" /> Toko'
            });
var format_Tempatmakan_30 = new ol.format.GeoJSON();
var features_Tempatmakan_30 = format_Tempatmakan_30.readFeatures(json_Tempatmakan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempatmakan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempatmakan_30.addFeatures(features_Tempatmakan_30);
var lyr_Tempatmakan_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempatmakan_30, 
                style: style_Tempatmakan_30,
                popuplayertitle: 'Tempat makan',
                interactive: true,
                title: '<img src="styles/legend/Tempatmakan_30.png" /> Tempat makan'
            });
var format_Rumah_saya_31 = new ol.format.GeoJSON();
var features_Rumah_saya_31 = format_Rumah_saya_31.readFeatures(json_Rumah_saya_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_saya_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_saya_31.addFeatures(features_Rumah_saya_31);
var lyr_Rumah_saya_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_saya_31, 
                style: style_Rumah_saya_31,
                popuplayertitle: 'Rumah_saya',
                interactive: true,
                title: '<img src="styles/legend/Rumah_saya_31.png" /> Rumah_saya'
            });
var group_point = new ol.layer.Group({
                                layers: [lyr_balai_desa_21,lyr_kantor_kecamatan_22,lyr_pendidikan_23,lyr_kesehatan_24,lyr_wisata_25,lyr_tempat_ibadah_26,lyr_Kuburan_27,lyr_Lapangan_28,lyr_Toko_29,lyr_Tempatmakan_30,lyr_Rumah_saya_31,],
                                fold: 'open',
                                title: 'point'});
var group_polygon = new ol.layer.Group({
                                layers: [lyr_perkebunan_fix_3,lyr_sawah_fix_4,lyr_ladang_fix_5,lyr_hutan_fix_6,lyr_desa_parungkamal_7,lyr_desa_karanggayam_8,lyr_desa_lumbir_9,lyr_desa_kedunggede_10,lyr_desa_dermaji_11,lyr_desa_cirahab_12,lyr_desa_cingebul_13,lyr_desa_cidora_14,lyr_desa_canduk_15,lyr_desa_besuki_16,lyr_bangunan_17,],
                                fold: 'open',
                                title: 'polygon'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_batas_kecamatan_2.setVisible(true);lyr_perkebunan_fix_3.setVisible(true);lyr_sawah_fix_4.setVisible(true);lyr_ladang_fix_5.setVisible(true);lyr_hutan_fix_6.setVisible(true);lyr_desa_parungkamal_7.setVisible(true);lyr_desa_karanggayam_8.setVisible(true);lyr_desa_lumbir_9.setVisible(true);lyr_desa_kedunggede_10.setVisible(true);lyr_desa_dermaji_11.setVisible(true);lyr_desa_cirahab_12.setVisible(true);lyr_desa_cingebul_13.setVisible(true);lyr_desa_cidora_14.setVisible(true);lyr_desa_canduk_15.setVisible(true);lyr_desa_besuki_16.setVisible(true);lyr_bangunan_17.setVisible(true);lyr_batas_desa_18.setVisible(true);lyr_jalan_fix_19.setVisible(true);lyr_sungai_fix_20.setVisible(true);lyr_balai_desa_21.setVisible(true);lyr_kantor_kecamatan_22.setVisible(true);lyr_pendidikan_23.setVisible(true);lyr_kesehatan_24.setVisible(true);lyr_wisata_25.setVisible(true);lyr_tempat_ibadah_26.setVisible(true);lyr_Kuburan_27.setVisible(true);lyr_Lapangan_28.setVisible(true);lyr_Toko_29.setVisible(true);lyr_Tempatmakan_30.setVisible(true);lyr_Rumah_saya_31.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_batas_kecamatan_2,group_polygon,lyr_batas_desa_18,lyr_jalan_fix_19,lyr_sungai_fix_20,group_point];
lyr_batas_kecamatan_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_perkebunan_fix_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JNSKBNSMS': 'JNSKBNSMS', 'JNSKBNTHN': 'JNSKBNTHN', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sawah_fix_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JNSSWH': 'JNSSWH', 'TNMSWH': 'TNMSWH', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ladang_fix_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JNSSLK': 'JNSSLK', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_hutan_fix_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TKTHLT': 'TKTHLT', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_parungkamal_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_karanggayam_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_lumbir_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_kedunggede_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_dermaji_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_cirahab_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_cingebul_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_cidora_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_canduk_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_besuki_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', });
lyr_bangunan_17.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'roof_mater': 'roof_mater', 'access_roo': 'access_roo', 'building': 'building', 'building_m': 'building_m', 'addr_house': 'addr_house', 'name': 'name', });
lyr_batas_desa_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_fix_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungai_fix_20.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_balai_desa_21.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_kantor_kecamatan_22.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_pendidikan_23.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_kesehatan_24.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_wisata_25.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_tempat_ibadah_26.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'desa': 'desa', });
lyr_Kuburan_27.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'desa': 'desa', });
lyr_Lapangan_28.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'desa': 'desa', });
lyr_Toko_29.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Desa': 'Desa', });
lyr_Tempatmakan_30.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Desa': 'Desa', });
lyr_Rumah_saya_31.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_batas_kecamatan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_perkebunan_fix_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JNSKBNSMS': 'Range', 'JNSKBNTHN': 'Range', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sawah_fix_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JNSSWH': 'Range', 'TNMSWH': 'Range', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ladang_fix_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JNSSLK': 'Range', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_hutan_fix_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TKTHLT': 'Range', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_parungkamal_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_karanggayam_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_lumbir_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_kedunggede_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_dermaji_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_cirahab_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_cingebul_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_cidora_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_canduk_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_besuki_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_bangunan_17.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'roof_mater': 'TextEdit', 'access_roo': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'addr_house': 'TextEdit', 'name': 'TextEdit', });
lyr_batas_desa_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalan_fix_19.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'TextEdit', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_sungai_fix_20.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_balai_desa_21.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_kantor_kecamatan_22.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_pendidikan_23.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_kesehatan_24.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_wisata_25.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_tempat_ibadah_26.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_Kuburan_27.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'desa': 'TextEdit', });
lyr_Lapangan_28.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'desa': 'TextEdit', });
lyr_Toko_29.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Desa': 'TextEdit', });
lyr_Tempatmakan_30.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Desa': 'TextEdit', });
lyr_Rumah_saya_31.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_batas_kecamatan_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_perkebunan_fix_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JNSKBNSMS': 'no label', 'JNSKBNTHN': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sawah_fix_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JNSSWH': 'no label', 'TNMSWH': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ladang_fix_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JNSSLK': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_hutan_fix_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TKTHLT': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_parungkamal_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_karanggayam_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_lumbir_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_kedunggede_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_dermaji_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_cirahab_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_cingebul_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_cidora_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_canduk_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_besuki_16.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'luas': 'no label', });
lyr_bangunan_17.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'roof_mater': 'no label', 'access_roo': 'no label', 'building': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'name': 'no label', });
lyr_batas_desa_18.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_fix_19.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungai_fix_20.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_balai_desa_21.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_kantor_kecamatan_22.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_pendidikan_23.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_kesehatan_24.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_wisata_25.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_tempat_ibadah_26.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'desa': 'no label', });
lyr_Kuburan_27.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'desa': 'no label', });
lyr_Lapangan_28.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'desa': 'no label', });
lyr_Toko_29.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Desa': 'no label', });
lyr_Tempatmakan_30.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Desa': 'no label', });
lyr_Rumah_saya_31.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Alamat': 'no label', });
lyr_Rumah_saya_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});