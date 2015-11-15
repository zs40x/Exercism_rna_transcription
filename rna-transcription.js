var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
	switch(input) {
		case 'G':
			return 'C';
		case 'C':
			return 'G';
		case 'A':
			return 'U';
		case 'T':
			return 'A';
	}
};

DnaTranscriber.prototype.toDna = function(input) {
	
};

module.exports = DnaTranscriber;