var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
	
	return convertDnaToRna(dna, 0, "");
};

var convertDnaToRna = function(dna, i, rna) {
	
	return (i == dna.length) 
		? rna : convertDnaToRna(dna, i+1, rna + getRnaForDna(dna[i]));
}

var getRnaForDna = function (dna) {
	
	switch(dna) {
		case 'G':
			return 'C';
		case 'C':
			return 'G';
		case 'A':
			return 'U';
		case 'T':
			return 'A';
	}
}

DnaTranscriber.prototype.toDna = function(input) {
	
};

module.exports = DnaTranscriber;