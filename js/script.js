function init(){
//add your javascrip between these two lines of code
	function myEventFunction(){
		alert('Alexis Lam: ' + t1.value);
	}
	
	var c1 = document.getElementById('entrybutton');
	
	c1.addEventListener('click', myEventFunction);
	
	c1.addEventListener('click', function(){
		console.log('I was Clicked!');
		s1.innerHTML = t1.value;
	});
	
}
window.addEventListener('load', init);
asdf