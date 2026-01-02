// Global variable to store map layers
let mapLayers = [];
let mapInitialized = false;
let featureDatabase = [];
let highlightLayer;

// Wait for map to be fully initialized
function getAllLayers(layerArray) {
    let allLayers = [];
    layerArray.forEach(layer => {
        if (layer.getLayers) {
            allLayers = allLayers.concat(getAllLayers(layer.getLayers().getArray()));
        } else {
            allLayers.push(layer);
        }
    });
    return allLayers;
}

function initializeMapLayers() {
    if (typeof map !== 'undefined' && map.getLayers) {
        mapLayers = getAllLayers(map.getLayers().getArray());
        if (mapLayers.length > 0) {
            mapInitialized = true;
            console.log(`Map initialized with ${mapLayers.length} layers`);

            // Set all layers to visible by default (except keep base maps as is)
            for (let i = 2; i < mapLayers.length; i++) {
                if (mapLayers[i] && mapLayers[i].setVisible) {
                    try {
                        mapLayers[i].setVisible(true);
                    } catch (error) {
                        console.warn(`Cannot set visibility for layer ${i}:`, error);
                    }
                }
            }

            updateToggleStates();
            return true;
        }
    }
    return false;
}

// Fungsi untuk mengindeks semua features dari layers
function indexAllFeatures() {
    featureDatabase = [];
    mapLayers.forEach((layer, layerIndex) => {
        if (layer.getSource && typeof layer.getSource === 'function') {
            const source = layer.getSource();
            if (source && source.getFeatures) {
                const features = source.getFeatures();
                features.forEach(feature => {
                    const properties = feature.getProperties();
                    const geometry = feature.getGeometry();
                    const toggleElement = document.querySelector(`[data-layer="${layerIndex}"]`);
                    const layerName = toggleElement ?
                        toggleElement.closest('.layer-item').querySelector('.layer-name').textContent :
                        `Layer ${layerIndex}`;
                    featureDatabase.push({
                        layerIndex: layerIndex,
                        layerName: layerName,
                        feature: feature,
                        geometry: geometry,
                        properties: properties,
                        searchText: createSearchText(properties)
                    });
                });
            }
        }
    });
    console.log(`Indexed ${featureDatabase.length} features`);
}

// Toggle All Layers Function - Single Switch
function toggleAllLayersSwitch(toggleElement) {
    if (!mapInitialized) {
        console.warn('Map not yet initialized. Please wait...');
        return;
    }

    // Check current state
    const isCurrentlyActive = toggleElement.classList.contains('active');
    const newState = !isCurrentlyActive;

    // Skip base maps (layer 0 and 1)
    for (let i = 2; i < mapLayers.length; i++) {
        const layer = mapLayers[i];
        if (layer) {
            try {
                layer.setVisible(newState);
            } catch (error) {
                console.warn(`Cannot toggle layer ${i}:`, error);
            }
        }
    }

    // Update all toggle switches di layer items
    document.querySelectorAll('.layer-item .toggle-switch').forEach(toggle => {
        const layerIndex = parseInt(toggle.getAttribute('data-layer'));
        // Skip base maps
        if (layerIndex >= 2) {
            if (newState) {
                toggle.classList.add('active');
            } else {
                toggle.classList.remove('active');
            }
        }
    });

    // Update toggle all switch visual
    if (newState) {
        toggleElement.classList.add('active');
    } else {
        toggleElement.classList.remove('active');
    }

    console.log(`All layers ${newState ? 'enabled' : 'disabled'}`);
}

// Fungsi untuk membuat teks pencarian dari properties
function createSearchText(properties) {
    let searchTerms = [];
    const searchFields = ['Nama', 'nama', 'name', 'NAME', 'Jenjang', 'Alamat', 'alamat', 'Jenis', 'jenis', 'Keterangan', 'keterangan'];
    searchFields.forEach(field => {
        if (properties[field]) {
            searchTerms.push(properties[field].toString().toLowerCase());
        }
    });
    return searchTerms.join(' ');
}

// Fungsi untuk mencari features
function searchFeatures(searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return [];
    const term = searchTerm.toLowerCase();
    const results = [];
    featureDatabase.forEach(item => {
        if (item.searchText.includes(term)) {
            results.push(item);
        }
    });
    return results.slice(0, 10);
}

// Fungsi untuk zoom ke feature
function zoomToFeature(featureData) {
    const geometry = featureData.geometry;
    if (!geometry || !map) return;

    const layer = mapLayers[featureData.layerIndex];
    if (layer) {
        layer.setVisible(true);
        const toggleElement = document.querySelector(`[data-layer="${featureData.layerIndex}"]`);
        if (toggleElement) {
            toggleElement.classList.add('active');
        }
    }

    const view = map.getView();
    const extent = geometry.getExtent();
    view.fit(extent, {
        duration: 1000,
        padding: [100, 100, 100, 100],
        maxZoom: 18
    });

    highlightFeature(featureData.feature);
}

// Fungsi untuk highlight feature
function highlightFeature(feature) {
    if (highlightLayer) {
        map.removeLayer(highlightLayer);
    }

    const highlightStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#f5576c',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(245, 87, 108, 0.2)'
        }),
        image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({
                color: '#f5576c'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffffff',
                width: 2
            })
        })
    });

    const highlightFeature = feature.clone();
    highlightLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [highlightFeature]
        }),
        style: highlightStyle,
        zIndex: 1000
    });

    map.addLayer(highlightLayer);

    setTimeout(() => {
        if (highlightLayer) {
            map.removeLayer(highlightLayer);
            highlightLayer = null;
        }
    }, 3000);
}

// Fungsi helper untuk search layer names
function searchLayerNames(searchTerm) {
    const allLayers = document.querySelectorAll('.layer-item');
    const matches = [];
    allLayers.forEach(item => {
        const layerName = item.querySelector('.layer-name').textContent.toLowerCase();
        const layerGroup = item.closest('.layer-group').querySelector('.layer-group-title').textContent;
        const layerIndex = item.querySelector('.toggle-switch').getAttribute('data-layer');
        if (layerName.includes(searchTerm)) {
            matches.push({
                type: 'layer',
                name: item.querySelector('.layer-name').textContent,
                group: layerGroup,
                layerIndex: layerIndex,
                element: item
            });
        }
    });
    return matches;
}

// Fungsi untuk mendapatkan nama tampilan feature
function getFeatureDisplayName(featureData) {
    const props = featureData.properties;
    const nameFields = ['Nama', 'nama', 'name', 'NAME', 'Jenis', 'jenis'];
    for (let field of nameFields) {
        if (props[field]) {
            return props[field];
        }
    }
    const otherFields = ['Jenjang', 'Alamat', 'Keterangan'];
    for (let field of otherFields) {
        if (props[field]) {
            return props[field];
        }
    }
    return 'Feature tanpa nama';
}

// Fungsi global untuk zoom dari hasil pencarian
window.zoomToFeatureFromSearch = function (layerIndex, featureIndex) {
    const featureData = featureDatabase[featureIndex];
    if (featureData) {
        zoomToFeature(featureData);
        if (window.innerWidth <= 768) {
            document.getElementById('layerPanel').classList.add('collapsed');
            document.getElementById('hamburgerMenu').classList.remove('active');
        }
        const searchInput = document.getElementById('layerSearch');
        const searchResults = document.getElementById('searchResults');
        searchInput.value = '';
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }
};

// Check map initialization periodically
window.addEventListener('load', function () {
    let attempts = 0;
    const maxAttempts = 20;
    const checkInterval = setInterval(function () {
        attempts++;
        if (initializeMapLayers()) {
            clearInterval(checkInterval);
            document.getElementById('loading-screen').classList.add('hidden');
            console.log('Map ready!');
            setTimeout(() => {
                indexAllFeatures();
            }, 2000);
        } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            document.getElementById('loading-screen').classList.add('hidden');
            console.warn('Map initialization timeout');
        }
    }, 500);
});

// Toggle layer visibility
function toggleLayer(layerIndex, toggleElement) {
    if (!mapInitialized) {
        console.warn('Map not yet initialized. Please wait...');
        return;
    }
    if (layerIndex < 0 || layerIndex >= mapLayers.length) {
        console.error(`Layer index ${layerIndex} out of bounds (0-${mapLayers.length - 1})`);
        return;
    }
    const layer = mapLayers[layerIndex];
    if (!layer) {
        console.warn(`Layer at index ${layerIndex} is undefined`);
        return;
    }
    try {
        const isVisible = layer.getVisible();
        layer.setVisible(!isVisible);
        toggleElement.classList.toggle('active');
    } catch (error) {
        console.error(`Error toggling layer ${layerIndex}:`, error);
    }
}

// Update toggle states based on current layer visibility
function updateToggleStates() {
    document.querySelectorAll('.toggle-switch').forEach(toggle => {
        const layerIndex = parseInt(toggle.getAttribute('data-layer'));
        if (layerIndex >= 0 && layerIndex < mapLayers.length && mapLayers[layerIndex]) {
            try {
                const isVisible = mapLayers[layerIndex].getVisible();
                if (isVisible) {
                    toggle.classList.add('active');
                } else {
                    toggle.classList.remove('active');
                }
            } catch (error) {
                console.warn(`Cannot get visibility for layer ${layerIndex}`);
            }
        }
    });

    // Update toggle all switch based on layer states
    updateToggleAllState();
}

// Function to update toggle all switch state
function updateToggleAllState() {
    const toggleAllSwitch = document.getElementById('toggleAllSwitch');
    if (!toggleAllSwitch) return;

    // Check if any layer (except base maps) is visible
    let anyLayerVisible = false;
    for (let i = 2; i < mapLayers.length; i++) {
        if (mapLayers[i] && mapLayers[i].getVisible && mapLayers[i].getVisible()) {
            anyLayerVisible = true;
            break;
        }
    }

    // Update toggle all switch
    if (anyLayerVisible) {
        toggleAllSwitch.classList.add('active');
    } else {
        toggleAllSwitch.classList.remove('active');
    }
}

// Toggle group collapse/expand
function toggleGroup(groupId) {
    const groupList = document.getElementById('group-' + groupId);
    const toggleIcon = document.getElementById('toggle-' + groupId);
    groupList.classList.toggle('collapsed');
    toggleIcon.classList.toggle('collapsed');
}

// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const layerPanel = document.getElementById('layerPanel');
const panelClose = document.getElementById('panelClose');

hamburgerMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
    layerPanel.classList.toggle('collapsed');
});

panelClose.addEventListener('click', function (e) {
    e.stopPropagation();
    layerPanel.classList.add('collapsed');
    hamburgerMenu.classList.remove('active');
});

document.addEventListener('click', function (e) {
    if (!layerPanel.contains(e.target) &&
        !hamburgerMenu.contains(e.target) &&
        !layerPanel.classList.contains('collapsed')) {
        layerPanel.classList.add('collapsed');
        hamburgerMenu.classList.remove('active');
    }
});

layerPanel.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Search functionality
const searchInput = document.getElementById('layerSearch');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm.length === 0) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
    }

    const layerMatches = searchLayerNames(searchTerm);
    const featureMatches = searchFeatures(searchTerm);
    const allMatches = [...layerMatches, ...featureMatches];

    if (allMatches.length > 0) {
        searchResults.innerHTML = allMatches.map(match => {
            if (match.type === 'layer') {
                return `
                    <div class="search-result-item" onclick="scrollToLayer(this)" data-layer="${match.layerIndex}">
                        <div class="search-result-icon">📁</div>
                        <div class="search-result-info">
                            <div class="search-result-name">${match.name}</div>
                            <div class="search-result-layer">${match.group}</div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="search-result-item" onclick="zoomToFeatureFromSearch(${match.layerIndex}, ${featureDatabase.indexOf(match)})" data-feature="${featureDatabase.indexOf(match)}">
                        <div class="search-result-icon">📍</div>
                        <div class="search-result-info">
                            <div class="search-result-name">${getFeatureDisplayName(match)}</div>
                            <div class="search-result-layer">${match.layerName}</div>
                        </div>
                    </div>
                `;
            }
        }).join('');
        searchResults.classList.add('active');
    } else {
        searchResults.innerHTML = '<div class="search-result-item" style="pointer-events: none;">Tidak ada hasil</div>';
        searchResults.classList.add('active');
    }
});

// Scroll to layer from search results
function scrollToLayer(element) {
    const layerIndex = element.getAttribute('data-layer');
    const targetToggle = document.querySelector(`.toggle-switch[data-layer="${layerIndex}"]`);

    if (targetToggle) {
        const parentGroup = targetToggle.closest('.layer-list');
        if (parentGroup && parentGroup.classList.contains('collapsed')) {
            const groupId = parentGroup.id.replace('group-', '');
            toggleGroup(groupId);
        }

        targetToggle.closest('.layer-item').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        const layerItem = targetToggle.closest('.layer-item');
        layerItem.style.background = 'linear-gradient(135deg, rgba(240, 147, 251, 0.3) 0%, rgba(245, 87, 108, 0.3) 100%)';
        setTimeout(() => {
            layerItem.style.background = '';
        }, 1000);
    }

    searchInput.value = '';
    searchResults.classList.remove('active');
    searchResults.innerHTML = '';
}

// Add hover effects to layer items
document.querySelectorAll('.layer-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(3px)';
    });
    item.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

// Close search results when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }
});

console.log('Enhanced Layer Search with Zoom loaded!');

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const dropdownToggle = document.getElementById('dropdownToggle');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Mobile dropdown toggle
if (dropdownToggle) {
    const dropdownNavLink = dropdownToggle.querySelector('.nav-link');

    if (dropdownNavLink) {
        dropdownNavLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                dropdownToggle.classList.toggle('active');
            }
        });
    }
}

// Close menu when clicking on a dropdown item - TIDAK PERLU PREVENT DEFAULT
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Biarkan link bekerja normal, hanya tutup menu
        if (menuToggle && navMenu && dropdownToggle) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            dropdownToggle.classList.remove('active');
        }
    });
});

// Close menu when clicking on non-dropdown nav links
document.querySelectorAll('.nav-link').forEach(link => {
    if (!link.closest('#dropdownToggle')) {
        link.addEventListener('click', () => {
            if (menuToggle && navMenu) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (menuToggle && navMenu && dropdownToggle) {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            dropdownToggle.classList.remove('active');
        }
    }
});