// Create Modal tool
(function(){
	const endpoint = 'colors.json';
	const colors = [];
	fetch( endpoint )
	  .then( blob => blob.json() )
	  .then( data => colors.push(...data) );

	 console.log( colors );
})();