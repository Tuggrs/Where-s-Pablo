// Initialize the map
const map = L.map("map").setView([54.8967203620812, 23.918424209387393], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(map);
 

const myClusters = window.L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<div class="cluster-div">' + cluster.getChildCount() + '</div>',
    })
  }
});

//marker
const marker1 = L.marker([54.895590476452476, 23.913636355635177]);
marker1.bindPopup("<b>KITM Pablo! Original Pablo! Look up.</b>").openPopup();
const marker2 = L.marker([54.8967203620812, 23.918424209387393]);
marker2.bindPopup("<b>Moving Pablo! Commonly found in class 107 on Robert's belongings.</b>").openPopup();
const marker3 = L.marker([53.337070270840954, -2.855452892121094]);
marker3.bindPopup("<b>Travelling Pablo! Look for him at Liverpool John Lennon Airport around Gate 12.</b>").openPopup();
const marker4 = L.marker([54.8955521121707, 23.91400110493063]);
marker4.bindPopup("<b>KITM Pablo! 2 + 2 * 11</b>").openPopup();
const marker5 = L.marker([54.89564254014664, 23.91284538026565]);
marker5.bindPopup("<b>Shopping Pablo! Look up.</b>").openPopup();
const marker6 = L.marker([54.895456947008526, 23.92102076989977]);
marker6.bindPopup("<b>Dead Pablo! Sticker gone.</b>").openPopup();
const marker7 = L.marker([54.89561890743095, 23.913750612203376]);
marker7.bindPopup("<b>Dead Pablo! Sticker gone.</b>").openPopup();

myClusters.addLayer(marker1);
myClusters.addLayer(marker2);
myClusters.addLayer(marker3);
myClusters.addLayer(marker4);
myClusters.addLayer(marker5);
myClusters.addLayer(marker6);
myClusters.addLayer(marker7);

map.addLayer(myClusters);