const fs = require('fs');

let infoArr = [];
let output  = {};

fs.readFile('colorstring.txt', 'utf8', function( err, data ){
	if( !err ){
		let raw = data;
		infoArr = data.split('\n');
		let index = '';
		for( let i=0, x=infoArr.length; i<x; i++ ){
			if( index === '' || infoArr[i].indexOf('#') === -1 ){
				index = infoArr[i];
				output[infoArr[i]] = [];
			}else{
				if( infoArr[i] != '' ){
					output[index].push(infoArr[i]);
				}
			}
		}
		fs.writeFile('colors.json', JSON.stringify(output), 'utf8' );
	}
});
