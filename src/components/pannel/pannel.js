import '../../js/includeCss.js';
import tpl from './pannel.html';

function Pannel(){
	this.init();
}
Pannel.prototype = {
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
new Pannel();


