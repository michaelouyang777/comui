import '../../js/includeCss.js';
import tpl from './button.html';

function Button(){
	this.init();
}
Button.prototype = {
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
new Button();
//export default Button;

