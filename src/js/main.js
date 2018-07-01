import Layer from '../components/layer/layer.js';
import '../css/reset.scss';
import '../css/style.scss';

const App = function(){
	var dom = document.getElementById("app");
	var layer = new Layer();
	dom.innerHTML = layer.tpl;
}
new App();