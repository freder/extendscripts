var old_x_units, old_y_units;

function store_measurement_units(doc) {
	with (doc.viewPreferences) {
		old_x_units = horizontalMeasurementUnits;
		old_y_units = verticalMeasurementUnits;
		horizontalMeasurementUnits = MeasurementUnits.points;
		verticalMeasurementUnits = MeasurementUnits.points;
	}
}

function restore_measurement_units(doc) {
	with (doc.viewPreferences){
		try {
			horizontalMeasurementUnits = old_x_units;
			verticalMeasurementUnits = old_y_units;
		}
		catch(e) {
			alert("could not reset custom measurement units.");
		}
	}
}
