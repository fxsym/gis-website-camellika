// Loader Desa Canduk
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
  "layers/desa_canduk_2.js",
  "layers/RW_Canduk_3.js",
  "layers/bangunan_canduk_4.js",
  "layers/sungai_canduk_5.js",
  "layers/jalan_desa_canduk_6.js",
  "layers/tempatibadah_canduk_7.js",
  "layers/balai_desa_canduk_8.js"
];

/* ===============================
   3. STYLES
================================ */
const styleScripts = [
  "styles/desa_canduk_2_style.js",
  "styles/RW_Canduk_3_style.js",
  "styles/bangunan_canduk_4_style.js",
  "styles/sungai_canduk_5_style.js",
  "styles/jalan_desa_canduk_6_style.js",
  "styles/tempatibadah_canduk_7_style.js",
  "styles/balai_desa_canduk_8_style.js"
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
    console.log("✅ Semua script peta Desa Canduk berhasil dimuat");
  })
  .catch(err => {
    console.error("❌ Loader error:", err);
  });
