import '../../js/includeCss.js';
import tpl from './bootstrappanel.html';

function Bootstrappanel(){
	this.init();
}
Bootstrappanel.prototype = {
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
new Bootstrappanel();

