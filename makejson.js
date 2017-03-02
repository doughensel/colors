const fs = require('fs');

let infoArr = [];
let output  = {};
let result  = {};

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
		let temp = [];
		for( key in output ){
			if( output.hasOwnProperty(key) && key && key != '' ){
				temp = {
					'color'  : output[key].shift(),
					'colors' : output[key]
				};
				if( temp['colors'] && temp['colors'].length <= 0 ){
					temp['colors'] = [ temp['color'] ];
				}
				result[key] = {};
				result[key] = temp;	
			}// END if(hasOwnProperty)		
		}
		fs.writeFile('colors.json', JSON.stringify(result), 'utf8' );
	}else{
		console.log( 'error reading the file' );
	}
});