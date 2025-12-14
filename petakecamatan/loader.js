// Loader petakecamatan
function loadScriptsSequential(list) {
  return list.reduce((promise, src) => {
    return promise.then(() => new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    }));
  }, Promise.resolve());
}

/* ===============================
   1. PLUGIN / DEPENDENCY AWAL
================================ */
const pluginScripts = [
  "resources/photon-geocoder-autocomplete.min.js",
  "resources/Autolinker.min.js",
];

/* ===============================
   2. LAYER FILES
================================ */
const layerScripts = [
  "layers/batas_kecamatan_1.js",
  "layers/batas_desa_2.js",
  "layers/perkebunan_fix_3.js",
  "layers/sawah_fix_4.js",
  "layers/ladang_fix_5.js",
  "layers/hutan_fix_6.js",
  "layers/desa_parungkamal_7.js",
  "layers/desa_karanggayam_8.js",
  "layers/desa_lumbir_9.js",
  "layers/desa_kedunggede_10.js",
  "layers/desa_dermaji_11.js",
  "layers/desa_cirahab_12.js",
  "layers/desa_cingebul_13.js",
  "layers/desa_cidora_14.js",
  "layers/desa_canduk_15.js",
  "layers/desa_besuki_16.js",
  "layers/bangunan_17.js",
  "layers/jalan_fix_18.js",
  "layers/sungai_fix_19.js",
  "layers/balai_desa_20.js",
  "layers/kantor_kecamatan_21.js",
  "layers/pendidikan_22.js",
  "layers/kesehatan_23.js",
  "layers/wisata_24.js",
  "layers/tempat_ibadah_25.js",
  "layers/Kuburan_26.js",
  "layers/Lapangan_27.js",
  "layers/Toko_28.js",
  "layers/Tempatmakan_29.js",
  "layers/Rumah_saya_30.js",
];

/* ===============================
   3. STYLE FILES
================================ */
const styleScripts = [
  "styles/batas_kecamatan_1_style.js",
  "styles/batas_desa_2_style.js",
  "styles/perkebunan_fix_3_style.js",
  "styles/sawah_fix_4_style.js",
  "styles/ladang_fix_5_style.js",
  "styles/hutan_fix_6_style.js",
  "styles/desa_parungkamal_7_style.js",
  "styles/desa_karanggayam_8_style.js",
  "styles/desa_lumbir_9_style.js",
  "styles/desa_kedunggede_10_style.js",
  "styles/desa_dermaji_11_style.js",
  "styles/desa_cirahab_12_style.js",
  "styles/desa_cingebul_13_style.js",
  "styles/desa_cidora_14_style.js",
  "styles/desa_canduk_15_style.js",
  "styles/desa_besuki_16_style.js",
  "styles/bangunan_17_style.js",
  "styles/jalan_fix_18_style.js",
  "styles/sungai_fix_19_style.js",
  "styles/balai_desa_20_style.js",
  "styles/kantor_kecamatan_21_style.js",
  "styles/pendidikan_22_style.js",
  "styles/kesehatan_23_style.js",
  "styles/wisata_24_style.js",
  "styles/tempat_ibadah_25_style.js",
  "styles/Kuburan_26_style.js",
  "styles/Lapangan_27_style.js",
  "styles/Toko_28_style.js",
  "styles/Tempatmakan_29_style.js",
  "styles/Rumah_saya_30_style.js",
];

/* ===============================
   4. EKSEKUSI LOADING
================================ */
loadScriptsSequential(pluginScripts)
  .then(() => loadScriptsSequential(layerScripts))
  .then(() => loadScriptsSequential(styleScripts))
  .then(() => {
    console.log("All layers & styles loaded");

    // layers.js
    const layersMain = document.createElement("script");
    layersMain.src = "./layers/layers.js";
    layersMain.onload = () => {
      console.log("layers.js loaded");

      // qgis2web.js (TERAKHIR)
      const qgis = document.createElement("script");
      qgis.src = "./resources/qgis2web.js";
      document.body.appendChild(qgis);
    };

    document.body.appendChild(layersMain);
  })
  .catch(err => {
    console.error("Error loading scripts:", err);
  });
