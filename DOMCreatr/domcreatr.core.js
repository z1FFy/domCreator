/**
* Created by denis.kushenko on 28.07.2015.
*/
function dbg(variable) {
console.log(variable);
}

$(document).ready(function() {
	z = new coreJS('DOMCreatr');

	var wrapper = document.createElement('div').attr({'id':'wrapper'});
	var headerR = z('div', { 'id':'header', 'class':'head' });
	var logo =  z('img', { 'id':'logo', 'src':'/img/logo.jpg' });

	app.render(
		wrapper.in (
			headerR.in (
				logo
			)
		)
	);




 //'div#wrapper' {
	//	'div#header' {
	//		'img#logo[src='/img/logo.png']'
	//	}
	//	'ul#menu' {
	//		'li'{
	//			'a.link[href='index.php']'.val('Index')
	//		}
	//	}
	//}
 //
 //










	var header = {
 			tag: 'div',
			attrs : {
				'id' : 'header',
				'class' : 'head'
			},
			inner:  {
				tag : 'img',
				attrs : {
					'src' : '/img/logo.jpg'
				}
		}
	};


	app.createElem(obj);
	app.run();

});