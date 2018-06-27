import '../../js/includeCss.js';
import tpl from './table.html';

function Table(){
	this.init();
}
Table.prototype = {
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
new Table();

