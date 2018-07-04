const path = require('path')
const ROOT = path.resolve(__dirname)

module.exports = {
	'js/button': {
		// 入口js
		"src": ROOT + "./../src/components/button/button.js",
		// 输出的文件名
		"tpl": "button.html"										
	},
	'js/form': {
		"src": ROOT + "./../src/components/form/form.js",
		"tpl": "form.html"
	},
	'js/table': {
		"src": ROOT + "./../src/components/table/table.js",
		"tpl": "table.html"
	},
	'js/pannel': {
		"src": ROOT + "./../src/components/pannel/pannel.js",
		"tpl": "pannel.html"
	},
	'js/layout': {
		"src": ROOT + "./../src/components/layout/layout.js",
		"tpl": "layout.html"
	},
	'js/bootstrapbutton': {
		"src": ROOT + "./../src/components/bootstrapbutton/bootstrapbutton.js",
		"tpl": "bootstrapbutton.html"
	},
	'js/bootstrapinputgroup': {
		"src": ROOT + "./../src/components/bootstrapinputgroup/bootstrapinputgroup.js",
		"tpl": "bootstrapinputgroup.html"
	},
	'js/navbar': {
		"src": ROOT + "./../src/components/navbar/navbar.js",
		"tpl": "navbar.html"
	},
	'js/block': {
		"src": ROOT + "./../src/components/block/block.js",
		"tpl": "block.html"
	}
}