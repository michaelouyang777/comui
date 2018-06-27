import '../../js/includeCss.js';
import tpl from './form.html';

function Form(){
	this.init();
}
Form.prototype = {
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
new Form();
//export default Form;

