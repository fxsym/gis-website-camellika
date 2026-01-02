// Loader Desa Parungkamal
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
  "layers/Desa_parungkamal_2.js",
  "layers/sungai_parungkamal_3.js",
  "layers/jalan_desa_parungkamal_4.js",
  "layers/bangunan_desa_parungkamal_5.js",
  "layers/balaidesa_parungkamal_6.js",
  "layers/tempatibadah_parungkamal_7.js",
  "layers/tempatmakan_parungkamal_8.js",
  "layers/toko_parungkamal_9.js",
  "layers/pendidikan_parungkamal_10.js",
  "layers/kesehatan_parungkamal_11.js"
];

/* ===============================
   3. STYLES
================================ */
const styleScripts = [
  "styles/Desa_parungkamal_2_style.js",
  "styles/sungai_parungkamal_3_style.js",
  "styles/jalan_desa_parungkamal_4_style.js",
  "styles/bangunan_desa_parungkamal_5_style.js",
  "styles/balaidesa_parungkamal_6_style.js",
  "styles/tempatibadah_parungkamal_7_style.js",
  "styles/tempatmakan_parungkamal_8_style.js",
  "styles/toko_parungkamal_9_style.js",
  "styles/pendidikan_parungkamal_10_style.js",
  "styles/kesehatan_parungkamal_11_style.js"
];

/* ===============================
   4. EKSEKUSI
================================ */
loadScriptsSequential(pluginScripts)
  .then(() => loadScriptsSequential(layerScripts))
  .then(() => loadScriptsSequential(styleScripts))
  .then(() => loadScriptsSequential(["./layers/layers.js"]))
  .then(() => loadScriptsSequential(["./resources/qgis2web.js"]))
  .then(() => {
    console.log("✅ Peta Desa Parungkamal berhasil dimuat");
  })
  .catch(err => {
    console.error("❌ Loader error:", err);
  });
