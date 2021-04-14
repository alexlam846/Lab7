function init(){
//add your javascrip between these two lines of code
	function myEventFunction(){
		alert('Alexis Lam: ' + t1);
	}
	
	var c1 = document.getElementById('entrybutton');
	var t1 = document.getElementById('entryinput');
	
	t1.addEventListener('textcontrol');
	c1.addEventListener('click', myEventFunction);
	
	c1.addEventListener('click', function(){
		console.log('I was Clicked!');
	});
	
	
	
}
window.addEventListener('load', init);
