import '../../js/includeCss.js';
import tpl from './layout.html';

function Layout(){
	this.init();
}
Layout.prototype = {
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
new Layout();


