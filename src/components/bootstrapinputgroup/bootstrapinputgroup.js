import '../../js/includeCss.js';
import tpl from './bootstrapinputgroup.html';

function Bootstrapinputgroup(){
	this.init();
}
Bootstrapinputgroup.prototype = {
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
new Bootstrapinputgroup();

