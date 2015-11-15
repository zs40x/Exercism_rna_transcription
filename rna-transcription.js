var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(fromDna) {	
	
	return transcribe(fromDna, toRna);
};

DnaTranscriber.prototype.toDna = function(fromRna) {

	return transcribe(fromRna, toDna);
};

var transcribe = function(sequence, mapping) {
	
	function transcribeChar(char) {
		return mapping[char];
	}
	
	return sequence
			.split("")
			.map(transcribeChar)
			.join("");
}

var toRna = {
	'G' : 'C', 
	'C' : 'G', 
	'A' : 'U', 
	'T' : 'A'	
};
	
var toDna = {
	'C' : 'G',
	'G' : 'C',
	'U' : 'A',
	'A' : 'T'	
};

module.exports = DnaTranscriber;