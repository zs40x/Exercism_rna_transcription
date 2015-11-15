var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
	
	return convertDnaToRna(dna, 0, "");
};

var convertDnaToRna = function(dna, i, rna) {
	
	return (i == dna.length) 
		? rna : convertDnaToRna(dna, i+1, rna + getRnaForDna(dna[i]));
}

var getRnaForDna = function (dna) {
	
	var dnaToRnaMap = {
		'G' : 'C',
		'C' : 'G',
		'A' : 'U',
		'T' : 'A'	
	};
	
	return dnaToRnaMap[dna];
}

DnaTranscriber.prototype.toDna = function(input) {
	
};

module.exports = DnaTranscriber;