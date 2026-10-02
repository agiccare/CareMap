var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_centers_1 = new ol.format.GeoJSON();
var features_centers_1 = format_centers_1.readFeatures(json_centers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centers_1.addFeatures(features_centers_1);
var lyr_centers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centers_1, 
                style: style_centers_1,
                popuplayertitle: 'centers',
                interactive: true,
                title: '<img src="styles/legend/centers_1.png" /> centers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_centers_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_centers_1];
lyr_centers_1.set('fieldAliases', {'caremap_id': 'caremap_id', 'provider_name': 'provider_name', 'provider_type': 'provider_type', 'address': 'address', 'postcode': 'postcode', 'city': 'city', 'state': 'state', 'latitude': 'latitude', 'longitude': 'longitude', 'tel_no': 'tel_no', 'email': 'email', 'website': 'website', 'social_media_links': 'social_media_links', 'gender_specific': 'gender_specific', 'residential_care': 'residential_care', 'day_care': 'day_care', 'respite_care': 'respite_care', 'dementia_care': 'dementia_care', 'palliative_care': 'palliative_care', 'post_hospitalization_rehab': 'post_hospitalization_rehab', 'critical_insurance_intake': 'critical_insurance_intake', 'shuttle_transport': 'shuttle_transport', 'care_services_summary': 'care_services_summary', 'bed_capacity': 'bed_capacity', 'current_occupancy': 'current_occupancy', 'available_beds': 'available_beds', 'no_of_nurses': 'no_of_nurses', 'nurse_qualification': 'nurse_qualification', 'no_of_caregivers': 'no_of_caregivers', 'caregiver_qualification': 'caregiver_qualification', 'in_house_doctor, yes/no': 'in_house_doctor, yes/no', 'regular_contract_doctor_visit, yes/no': 'regular_contract_doctor_visit, yes/no', 'doctor_visit_frequency': 'doctor_visit_frequency', 'meals_provided, yes/no': 'meals_provided, yes/no', 'language_support': 'language_support', 'facilities': 'facilities', 'fee_general_min': 'fee_general_min', 'fee_general_max': 'fee_general_max', 'single_room_min': 'single_room_min', 'single_room_max': 'single_room_max', 'twin_room_min': 'twin_room_min', 'twin_room_max': 'twin_room_max', 'shared_room_definition': 'shared_room_definition', 'shared_room_min': 'shared_room_min', 'shared_room_max': 'shared_room_max', 'deposit_terms': 'deposit_terms', 'fee_inclusions': 'fee_inclusions', 'fee_exclusions': 'fee_exclusions', 'additional_charges': 'additional_charges', 'jkm_registration_no': 'jkm_registration_no', 'jkm_registration_start': 'jkm_registration_start', 'jkm_registration_expiry': 'jkm_registration_expiry', 'jkm_status': 'jkm_status', 'moh_ckaps_status': 'moh_ckaps_status', 'moh_ckaps_registration_no': 'moh_ckaps_registration_no', });
lyr_centers_1.set('fieldImages', {'caremap_id': 'TextEdit', 'provider_name': 'TextEdit', 'provider_type': 'TextEdit', 'address': 'TextEdit', 'postcode': 'Range', 'city': 'TextEdit', 'state': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel_no': 'TextEdit', 'email': 'TextEdit', 'website': 'TextEdit', 'social_media_links': 'TextEdit', 'gender_specific': 'TextEdit', 'residential_care': 'CheckBox', 'day_care': 'CheckBox', 'respite_care': 'CheckBox', 'dementia_care': 'CheckBox', 'palliative_care': 'CheckBox', 'post_hospitalization_rehab': 'CheckBox', 'critical_insurance_intake': 'TextEdit', 'shuttle_transport': 'TextEdit', 'care_services_summary': 'TextEdit', 'bed_capacity': 'TextEdit', 'current_occupancy': 'TextEdit', 'available_beds': 'TextEdit', 'no_of_nurses': 'TextEdit', 'nurse_qualification': 'TextEdit', 'no_of_caregivers': 'TextEdit', 'caregiver_qualification': 'TextEdit', 'in_house_doctor, yes/no': 'CheckBox', 'regular_contract_doctor_visit, yes/no': 'CheckBox', 'doctor_visit_frequency': 'TextEdit', 'meals_provided, yes/no': 'CheckBox', 'language_support': 'TextEdit', 'facilities': 'TextEdit', 'fee_general_min': 'TextEdit', 'fee_general_max': 'TextEdit', 'single_room_min': 'TextEdit', 'single_room_max': 'TextEdit', 'twin_room_min': 'TextEdit', 'twin_room_max': 'TextEdit', 'shared_room_definition': 'TextEdit', 'shared_room_min': 'TextEdit', 'shared_room_max': 'TextEdit', 'deposit_terms': 'TextEdit', 'fee_inclusions': 'TextEdit', 'fee_exclusions': 'TextEdit', 'additional_charges': 'TextEdit', 'jkm_registration_no': 'TextEdit', 'jkm_registration_start': 'TextEdit', 'jkm_registration_expiry': 'TextEdit', 'jkm_status': 'TextEdit', 'moh_ckaps_status': 'TextEdit', 'moh_ckaps_registration_no': 'TextEdit', });
lyr_centers_1.set('fieldLabels', {'caremap_id': 'no label', 'provider_name': 'no label', 'provider_type': 'no label', 'address': 'no label', 'postcode': 'no label', 'city': 'no label', 'state': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'tel_no': 'no label', 'email': 'no label', 'website': 'no label', 'social_media_links': 'no label', 'gender_specific': 'no label', 'residential_care': 'no label', 'day_care': 'no label', 'respite_care': 'no label', 'dementia_care': 'no label', 'palliative_care': 'no label', 'post_hospitalization_rehab': 'no label', 'critical_insurance_intake': 'no label', 'shuttle_transport': 'no label', 'care_services_summary': 'no label', 'bed_capacity': 'no label', 'current_occupancy': 'no label', 'available_beds': 'no label', 'no_of_nurses': 'no label', 'nurse_qualification': 'no label', 'no_of_caregivers': 'no label', 'caregiver_qualification': 'no label', 'in_house_doctor, yes/no': 'no label', 'regular_contract_doctor_visit, yes/no': 'no label', 'doctor_visit_frequency': 'no label', 'meals_provided, yes/no': 'no label', 'language_support': 'no label', 'facilities': 'no label', 'fee_general_min': 'no label', 'fee_general_max': 'no label', 'single_room_min': 'no label', 'single_room_max': 'no label', 'twin_room_min': 'no label', 'twin_room_max': 'no label', 'shared_room_definition': 'no label', 'shared_room_min': 'no label', 'shared_room_max': 'no label', 'deposit_terms': 'no label', 'fee_inclusions': 'no label', 'fee_exclusions': 'no label', 'additional_charges': 'no label', 'jkm_registration_no': 'no label', 'jkm_registration_start': 'no label', 'jkm_registration_expiry': 'no label', 'jkm_status': 'no label', 'moh_ckaps_status': 'no label', 'moh_ckaps_registration_no': 'no label', });
lyr_centers_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});