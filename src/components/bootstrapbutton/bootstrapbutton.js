import '../../js/includeCss.js';
import tpl from './bootstrapbutton.html';

function Bootstrapbutton(){
	this.init();
}
Bootstrapbutton.prototype = {
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
new Bootstrapbutton();
//export default Button;

