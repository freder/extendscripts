#include "../../_libs/underscore-1.4.4.js"


function log(msg) {
	$.writeln(msg);
}
function warn(msg) {
	log("WARNING: " + msg);
}
function error(msg) {
	log("ERROR: " + msg);
}


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
	with (doc.viewPreferences) {
		try {
			horizontalMeasurementUnits = old_x_units;
			verticalMeasurementUnits = old_y_units;
		}
		catch (e) {
			alert("could not reset custom measurement units.");
		}
	}
}


function create_layer(doc, _name) {
	try {
		doc.layers.add({name: _name});
	} catch (e) {
		// layer already exists
	}
}


function current_page_number() {
	return app.activeWindow.activePage.name;
}


function get_filename(path) {
	return _.last(
		path.split( get_path_delimiter() )
	);
}


function remove_file_extension(filename) {
	return filename.replace(/\..+$/, "");
}


function get_path_delimiter() {
	if ($.os.match(/Windows/i)) {
		return "\\";
	} else {
		return "/";
	}
}
