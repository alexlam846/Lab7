function init(){
//add your javascrip between these two lines of code
	function myEvenFunction(){
		alert('Hello');
	}
	
	var d1 = document.getElementById('entrybutton');
	
	c1.addEventListener('click', myEventFunction);
	
	c1.addEventListener('click', function(){
		console.log('I was Clicked!');
	});
}
window.addEventListener('load', init);
