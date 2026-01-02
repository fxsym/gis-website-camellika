// Loader Desa Karanggayam
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
  "layers/Batas_desa_2.js",
  "layers/RW6_3.js",
  "layers/Perkebunan_4.js",
  "layers/RW5_5.js",
  "layers/RW4_6.js",
  "layers/RW3_7.js",
  "layers/RW2_8.js",
  "layers/RW1_9.js",
  "layers/RT6_RW6_10.js",
  "layers/RT5_RW6_11.js",
  "layers/RT4_RW6_12.js",
  "layers/RT3_RW6_13.js",
  "layers/RT2_RW6_14.js",
  "layers/RT1_RW6_15.js",
  "layers/RT5_RW4_16.js",
  "layers/RT4_RW4_17.js",
  "layers/RT3_RW4_18.js",
  "layers/RT2_RW4_19.js",
  "layers/RT1_RW4_20.js",
  "layers/RT3_RW3_21.js",
  "layers/RT2_RW3_22.js",
  "layers/RT1_RW3_23.js",
  "layers/RT4_RW5_24.js",
  "layers/RT3_RW5_25.js",
  "layers/RT2_RW5_26.js",
  "layers/RT1_RW5_27.js",
  "layers/RT3_RW2_28.js",
  "layers/RT2_RW2_29.js",
  "layers/RT1_RW2_30.js",
  "layers/RT6_RW1_31.js",
  "layers/RT5_RW1_32.js",
  "layers/RT4_RW1_33.js",
  "layers/RT3_RW1_34.js",
  "layers/RT2_RW1_35.js",
  "layers/RT1_RW1_36.js",
  "layers/Hutan_Kebun_Warga_37.js",
  "layers/Building_38.js",
  "layers/Perhutani_39.js",
  "layers/Sawahh_40.js",
  "layers/Tempat_Ibadah_41.js",
  "layers/Fasilitas_Pendidikan_42.js",
  "layers/Rumah_saya_43.js",
  "layers/Clipped_44.js",
  "layers/Lapangan_45.js",
  "layers/Toko_46.js",
  "layers/Bengkel_47.js",
  "layers/Sawah_saya_48.js",
  "layers/Balai_desa_49.js",
  "layers/SPBU_50.js",
  "layers/Rumah_Tokoh_Masyarakat_51.js",
  "layers/Fasilitas_Kesehatan_52.js",
  "layers/kuburandesa_53.js",
  "layers/Jalan_Kecamatan_54.js",
  "layers/Jalan_Desa_55.js",
  "layers/Sungai_56.js"
];

/* ===============================
   3. STYLES
================================ */
const styleScripts = [
  "styles/Batas_desa_2_style.js",
  "styles/RW6_3_style.js",
  "styles/Perkebunan_4_style.js",
  "styles/RW5_5_style.js",
  "styles/RW4_6_style.js",
  "styles/RW3_7_style.js",
  "styles/RW2_8_style.js",
  "styles/RW1_9_style.js",
  "styles/RT6_RW6_10_style.js",
  "styles/RT5_RW6_11_style.js",
  "styles/RT4_RW6_12_style.js",
  "styles/RT3_RW6_13_style.js",
  "styles/RT2_RW6_14_style.js",
  "styles/RT1_RW6_15_style.js",
  "styles/RT5_RW4_16_style.js",
  "styles/RT4_RW4_17_style.js",
  "styles/RT3_RW4_18_style.js",
  "styles/RT2_RW4_19_style.js",
  "styles/RT1_RW4_20_style.js",
  "styles/RT3_RW3_21_style.js",
  "styles/RT2_RW3_22_style.js",
  "styles/RT1_RW3_23_style.js",
  "styles/RT4_RW5_24_style.js",
  "styles/RT3_RW5_25_style.js",
  "styles/RT2_RW5_26_style.js",
  "styles/RT1_RW5_27_style.js",
  "styles/RT3_RW2_28_style.js",
  "styles/RT2_RW2_29_style.js",
  "styles/RT1_RW2_30_style.js",
  "styles/RT6_RW1_31_style.js",
  "styles/RT5_RW1_32_style.js",
  "styles/RT4_RW1_33_style.js",
  "styles/RT3_RW1_34_style.js",
  "styles/RT2_RW1_35_style.js",
  "styles/RT1_RW1_36_style.js",
  "styles/Hutan_Kebun_Warga_37_style.js",
  "styles/Building_38_style.js",
  "styles/Perhutani_39_style.js",
  "styles/Sawahh_40_style.js",
  "styles/Tempat_Ibadah_41_style.js",
  "styles/Fasilitas_Pendidikan_42_style.js",
  "styles/Rumah_saya_43_style.js",
  "styles/Clipped_44_style.js",
  "styles/Lapangan_45_style.js",
  "styles/Toko_46_style.js",
  "styles/Bengkel_47_style.js",
  "styles/Sawah_saya_48_style.js",
  "styles/Balai_desa_49_style.js",
  "styles/SPBU_50_style.js",
  "styles/Rumah_Tokoh_Masyarakat_51_style.js",
  "styles/Fasilitas_Kesehatan_52_style.js",
  "styles/kuburandesa_53_style.js",
  "styles/Jalan_Kecamatan_54_style.js",
  "styles/Jalan_Desa_55_style.js",
  "styles/Sungai_56_style.js"
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
    console.log("✅ Semua script peta berhasil dimuat");
  })
  .catch(err => {
    console.error("❌ Loader error:", err);
  });
