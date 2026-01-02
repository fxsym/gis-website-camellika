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
  "layers/sungai_cingebul_3.js",
  "layers/jalan_cingebul_4.js",
  "layers/Tokocopy_5.js",
  "layers/Tempat_makancopy_6.js",
  "layers/tempat_ibadahcopy_7.js",
  "layers/pendidikancopy_8.js",
  "layers/kesehatancopy_9.js",
  "layers/balai_desacopy_10.js"
];

/* ===============================
   3. STYLES
================================ */
const styleScripts = [
  "styles/desa_cingebul_2_style.js",
  "styles/sungai_cingebul_3_style.js",
  "styles/jalan_cingebul_4_style.js",
  "styles/Tokocopy_5_style.js",
  "styles/Tempat_makancopy_6_style.js",
  "styles/tempat_ibadahcopy_7_style.js",
  "styles/pendidikancopy_8_style.js",
  "styles/kesehatancopy_9_style.js",
  "styles/balai_desacopy_10_style.js"
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
    console.log("✅ Peta Desa Cingebul berhasil dimuat");
  })
  .catch(err => {
    console.error("❌ Loader error:", err);
  });
