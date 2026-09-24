// Renders the Leaflet map and the location lists (Meal / Experiences / Key
// Venues) from the PLACES array in places-data.js. Every marker and every
// list row opens the place directly in Google Maps.
(function () {
  if (typeof PLACES === "undefined" || !window.L) return;

  var CATEGORY_META = {
    meal:       { pinClass: "leaflet-pin--meal",  label: "Meal" },
    experience: { pinClass: "leaflet-pin--exp",   label: "Experience" },
    venue:      { pinClass: "leaflet-pin--venue", label: "Key Venue" },
  };

  function gmapsUrl(place) {
    var q = encodeURIComponent(place.name + " Busan");
    return "https://www.google.com/maps/search/?api=1&query=" + q + "&query_place_id=" + place.placeId;
  }

  function pinIcon(category, index) {
    var cls = (CATEGORY_META[category] || CATEGORY_META.venue).pinClass;
    return L.divIcon({
      className: "",
      html: '<div class="leaflet-pin ' + cls + '"><span>' + (index + 1) + "</span></div>",
      iconSize: [26, 26],
      iconAnchor: [13, 26],
      popupAnchor: [0, -24],
    });
  }

  // ---- Map ----
  var map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  var bounds = [];
  var counters = {};

  PLACES.forEach(function (place) {
    counters[place.category] = counters[place.category] || 0;
    var idx = counters[place.category]++;
    var marker = L.marker([place.lat, place.lng], { icon: pinIcon(place.category, idx) }).addTo(map);
    var meta = CATEGORY_META[place.category] || CATEGORY_META.venue;
    var popupHtml =
      '<p class="map-popup__eyebrow">' + meta.label + (place.sub ? " · " + place.sub : "") + "</p>" +
      '<p class="map-popup__title">' + place.name + "</p>" +
      '<a class="map-popup__link" href="' + gmapsUrl(place) + '" target="_blank" rel="noopener">Open in Google Maps &#8594;</a>';
    marker.bindPopup(popupHtml);
    bounds.push([place.lat, place.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [32, 32] });
  }
  map.on("focus", function () { map.scrollWheelZoom.enable(); });
  map.on("blur", function () { map.scrollWheelZoom.disable(); });

  // ---- Lists ----
  function renderList(containerId, category) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var items = PLACES.filter(function (p) { return p.category === category; });
    el.innerHTML = items
      .map(function (p, i) {
        return (
          '<a class="place-row" href="' + gmapsUrl(p) + '" target="_blank" rel="noopener">' +
          '<span class="capsule-index">' + (i + 1) + "</span>" +
          '<span class="place-row__name">' + p.name + (p.sub ? ' <span style="font-weight:400;color:var(--charcoal-70);">— ' + p.sub + "</span>" : "") + "</span>" +
          '<span class="place-row__addr">' + p.address + "</span>" +
          '<span class="place-row__arrow">Google Maps &#8594;</span>' +
          "</a>"
        );
      })
      .join("");
  }

  renderList("list-meal", "meal");
  renderList("list-experiences", "experience");
  renderList("list-venues", "venue");
})();
