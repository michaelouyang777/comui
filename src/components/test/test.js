import '../../js/includeCss.js';
import tpl from './test.html';

function test(){
	this.init();
}
test.prototype = {
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
new test();


