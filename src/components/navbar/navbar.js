import '../../js/includeCss.js';
import tpl from './navbar.html';

function Navbar(){
	this.init();
}
Navbar.prototype = {
	init: function(){
		this.bindDom();
	},
	bindDom: function(){
		var dom = document.getElementById('app');
		var div = document.createElement('div');
		div.innerHTML = tpl;
		dom.appendChild(div);
	}
}
new Navbar();
