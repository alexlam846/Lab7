function init(){
//add your javascrip between these two lines of code
	function myEventFunction(){
		alert('Alexis Lam: ' + c1);
	}
	
	var c1 = document.getElementById('entrybutton');
	var t1 = document.getElementById('entryinput');
	
	c1.addEventListener('click', myEventFunction);
	
	c1.addEventListener('click', function(){
		console.log('I was Clicked!');
	});
	
	t1.addEventListener('textcontrol')
	
}
window.addEventListener('load', init);
