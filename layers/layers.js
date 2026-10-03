var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AgedCareCenters_1 = new ol.format.GeoJSON();
var features_AgedCareCenters_1 = format_AgedCareCenters_1.readFeatures(json_AgedCareCenters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgedCareCenters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgedCareCenters_1.addFeatures(features_AgedCareCenters_1);
var lyr_AgedCareCenters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgedCareCenters_1, 
                style: style_AgedCareCenters_1,
                popuplayertitle: 'Aged Care Centers',
                interactive: true,
                title: '<img src="styles/legend/AgedCareCenters_1.png" /> Aged Care Centers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AgedCareCenters_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AgedCareCenters_1];
lyr_AgedCareCenters_1.set('fieldAliases', {'center': 'Center Name', 'address': 'Address', 'postcode': 'Postcode', 'city': 'City', 'state': 'State', 'latitude': 'Latitude', 'longitude': 'longitude', 'tel_no': 'Tel No', 'email': 'Email', 'website': 'Website', 'care_services_summary': 'Services', 'overall_concept': 'Concept', });
lyr_AgedCareCenters_1.set('fieldImages', {'center': 'TextEdit', 'address': 'TextEdit', 'postcode': 'Range', 'city': 'TextEdit', 'state': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel_no': 'TextEdit', 'email': 'TextEdit', 'website': 'TextEdit', 'care_services_summary': 'TextEdit', 'overall_concept': 'TextEdit', });
lyr_AgedCareCenters_1.set('fieldLabels', {'center': 'header label - visible with data', 'address': 'header label - visible with data', 'postcode': 'inline label - visible with data', 'city': 'inline label - visible with data', 'state': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'tel_no': 'header label - visible with data', 'email': 'header label - visible with data', 'website': 'header label - visible with data', 'care_services_summary': 'header label - visible with data', 'overall_concept': 'header label - visible with data', });
lyr_AgedCareCenters_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});