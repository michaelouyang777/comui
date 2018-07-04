import '../../js/includeCss.js';
import tpl from './block.html';

function Block(){
	this.init();
}
Block.prototype = {
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
new Block();