// Loader Desa Cingebul
// ===============================
// LOADER SEQUENTIAL
// ===============================
function loadScriptsSequential(list) {
  return list.reduce((promise, src) => {
    return promise.then(() => new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(`Gagal load: ${src}`);
      document.body.appendChild(s);
    }));
  }, Promise.resolve());
}

/* ===============================
   1. PLUGIN / RESOURCE
================================ */
const pluginScripts = [
  "./resources/Autolinker.min.js"
];

/* ===============================
   2. LAYERS (DATA)
================================ */
const layerScripts = [
  "layers/desa_cingebul_2.js",
  "layers/RW_Cingebul_3.js",
  "layers/sungai_cingebul_4.js",
  "layers/jalan_cingebul_5.js",
  "layers/tempatmakan_6.js",
  "layers/tempat_ibadah_7.js",
  "layers/pendidikan_8.js",
  "layers/Bangunan_9.js",
  "layers/Kesehatan_10.js",
  "layers/Balaidesa_11.js"
];

/* ===============================
   3. STYLES
================================ */
const styleScripts = [
  "styles/desa_cingebul_2_style.js",
  "styles/RW_Cingebul_3_style.js",
  "styles/sungai_cingebul_4_style.js",
  "styles/jalan_cingebul_5_style.js",
  "styles/tempatmakan_6_style.js",
  "styles/tempat_ibadah_7_style.js",
  "styles/pendidikan_8_style.js",
  "styles/Bangunan_9_style.js",
  "styles/Kesehatan_10_style.js",
  "styles/Balaidesa_11_style.js"
];

/* ===============================
   4. EKSEKUSI
================================ */
loadScriptsSequential(pluginScripts)
  .then(() => loadScriptsSequential(layerScripts))
  .then(() => loadScriptsSequential(styleScripts))
  .then(() => loadScriptsSequential(["layers/layers.js"]))
  .then(() => loadScriptsSequential(["resources/qgis2web.js"]))
  .then(() => {
    console.log("✅ Semua script peta Desa Cingebul berhasil dimuat");
  })
  .catch(err => {
    console.error("❌ Loader error:", err);
  });
