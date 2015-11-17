'use strict'

var DnaTranscriber = function() {};

const TO_RNA = {
	'G' : 'C', 
	'C' : 'G', 
	'A' : 'U', 
	'T' : 'A'	
};
	
const TO_DNA = {
	'C' : 'G',
	'G' : 'C',
	'U' : 'A',
	'A' : 'T'	
};

let transcribe = (sequence, directionMapping) => {

	return sequence
			.split("")
			.map( (nucleotide) => directionMapping[nucleotide] )
			.join("");
 }

DnaTranscriber.prototype.toRna = function(fromDna) {	
	
	return transcribe(fromDna, TO_RNA);
};

DnaTranscriber.prototype.toDna = function(fromRna) {

	return transcribe(fromRna, TO_DNA);
};

module.exports = DnaTranscriber;