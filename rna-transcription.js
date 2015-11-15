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

DnaTranscriber.prototype.toDna = function(rna) {
	
	return convertRnaToDna(rna, 0, "");
};

var convertRnaToDna = function(rna, i, dna) {
	
	return (i == rna.length) 
		? dna : convertRnaToDna(rna, i+1, dna + getDnaForRna(rna[i]));
}

var getDnaForRna = function (rna) {
	
	var rnaToDnaMap = {
		'C' : 'G',
		'G' : 'C',
		'U' : 'A',
		'A' : 'T'	
	};
	
	return rnaToDnaMap[rna];
}

module.exports = DnaTranscriber;