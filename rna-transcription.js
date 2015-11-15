var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {	
	
	return transcribe(
				dna, 
				{
					'G' : 'C', 
					'C' : 'G', 
					'A' : 'U', 
					'T' : 'A'	
				}
			);
};

DnaTranscriber.prototype.toDna = function(rna) {

	return transcribe(
				rna, 
				{
					'C' : 'G',
					'G' : 'C',
					'U' : 'A',
					'A' : 'T'	
				}
			);
};

var transcribe = function(sequence, mapping) {
	
	function transcribeChar(char) {
		return mapping[char];
	}
	
	return sequence.split("").map(transcribeChar).join("");
}

module.exports = DnaTranscriber;