// Loader Peta desa
function loadScriptsSequential(list) {
  return list.reduce((promise, src) => {
    return promise.then(() => new Promise(resolve => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      document.body.appendChild(s);
    }));
  }, Promise.resolve());
}

const layerScripts = [
  "layers/Batas_desa_0.js",
  "layers/RW6_1.js",
  "layers/RW5_2.js",
  "layers/RW4_3.js",
  "layers/RW3_4.js",
  "layers/RW2_5.js",
  "layers/RW1_6.js",
  "layers/RT6_RW6_7.js",
  "layers/RT5_RW6_8.js",
  "layers/RT4_RW6_9.js",
  "layers/RT3_RW6_10.js",
  "layers/RT2_RW6_11.js",
  "layers/RT1_RW6_12.js",
  "layers/RT5_RW4_13.js",
  "layers/RT4_RW4_14.js",
  "layers/RT3_RW4_15.js",
  "layers/RT2_RW4_16.js",
  "layers/RT1_RW4_17.js",
  "layers/RT3_RW3_18.js",
  "layers/RT2_RW3_19.js",
  "layers/RT1_RW3_20.js",
  "layers/RT4_RW5_21.js",
  "layers/RT3_RW5_22.js",
  "layers/RT2_RW5_23.js",
  "layers/RT1_RW5_24.js",
  "layers/RT3_RW2_25.js",
  "layers/RT2_RW2_26.js",
  "layers/RT1_RW2_27.js",
  "layers/RT6_RW1_28.js",
  "layers/RT5_RW1_29.js",
  "layers/RT4_RW1_30.js",
  "layers/RT3_RW1_31.js",
  "layers/RT2_RW1_32.js",
  "layers/RT1_RW1_33.js",
  "layers/Hutan_Kebun_Warga_34.js",
  "layers/Building_35.js",
  "layers/Perkebunan_36.js",
  "layers/Perhutani_37.js",
  "layers/Sawahh_38.js",
  "layers/Tempat_Ibadah_39.js",
  "layers/Kuburan_40.js",
  "layers/Fasilitas_Pendidikan_41.js",
  "layers/Rumah_saya_42.js",
  "layers/Warung_makan_43.js",
  "layers/Lapangan_44.js",
  "layers/Toko_45.js",
  "layers/Bengkel_46.js",
  "layers/Sawah_saya_47.js",
  "layers/Balai_desa_48.js",
  "layers/SPBU_49.js",
  "layers/Rumah_Tokoh_Masyarakat_50.js",
  "layers/Fasilitas_Kesehatan_51.js",
  "layers/Jalan_Kecamatan_52.js",
  "layers/Jalan_Desa_53.js",
  "layers/Sungai_54.js"
];

const styleScripts = [
  "styles/Batas_desa_0_style.js",
  "styles/RW6_1_style.js",
  "styles/RW5_2_style.js",
  "styles/RW4_3_style.js",
  "styles/RW3_4_style.js",
  "styles/RW2_5_style.js",
  "styles/RW1_6_style.js",
  "styles/RT6_RW6_7_style.js",
  "styles/RT5_RW6_8_style.js",
  "styles/RT4_RW6_9_style.js",
  "styles/RT3_RW6_10_style.js",
  "styles/RT2_RW6_11_style.js",
  "styles/RT1_RW6_12_style.js",
  "styles/RT5_RW4_13_style.js",
  "styles/RT4_RW4_14_style.js",
  "styles/RT3_RW4_15_style.js",
  "styles/RT2_RW4_16_style.js",
  "styles/RT1_RW4_17_style.js",
  "styles/RT3_RW3_18_style.js",
  "styles/RT2_RW3_19_style.js",
  "styles/RT1_RW3_20_style.js",
  "styles/RT4_RW5_21_style.js",
  "styles/RT3_RW5_22_style.js",
  "styles/RT2_RW5_23_style.js",
  "styles/RT1_RW5_24_style.js",
  "styles/RT3_RW2_25_style.js",
  "styles/RT2_RW2_26_style.js",
  "styles/RT1_RW2_27_style.js",
  "styles/RT6_RW1_28_style.js",
  "styles/RT5_RW1_29_style.js",
  "styles/RT4_RW1_30_style.js",
  "styles/RT3_RW1_31_style.js",
  "styles/RT2_RW1_32_style.js",
  "styles/RT1_RW1_33_style.js",
  "styles/Hutan_Kebun_Warga_34_style.js",
  "styles/Building_35_style.js",
  "styles/Perkebunan_36_style.js",
  "styles/Perhutani_37_style.js",
  "styles/Sawahh_38_style.js",
  "styles/Tempat_Ibadah_39_style.js",
  "styles/Kuburan_40_style.js",
  "styles/Fasilitas_Pendidikan_41_style.js",
  "styles/Rumah_saya_42_style.js",
  "styles/Warung_makan_43_style.js",
  "styles/Lapangan_44_style.js",
  "styles/Toko_45_style.js",
  "styles/Bengkel_46_style.js",
  "styles/Sawah_saya_47_style.js",
  "styles/Balai_desa_48_style.js",
  "styles/SPBU_49_style.js",
  "styles/Rumah_Tokoh_Masyarakat_50_style.js",
  "styles/Fasilitas_Kesehatan_51_style.js",
  "styles/Jalan_Kecamatan_52_style.js",
  "styles/Jalan_Desa_53_style.js",
  "styles/Sungai_54_style.js"
];

Promise
  .all([
    loadScriptsSequential(layerScripts),
    loadScriptsSequential(styleScripts)
  ])
  .then(() => {
    console.log("All layer & style scripts loaded.");

    // LOAD layers.js
    const layerMain = document.createElement("script");
    layerMain.src = "./layers/layers.js";
    layerMain.onload = () => {

      console.log("layers.js loaded");

      // *** BARU load qgis2web.js ***
      const qgis = document.createElement("script");
      qgis.src = "./resources/qgis2web.js";
      document.body.appendChild(qgis);
    };
    document.body.appendChild(layerMain);
  });