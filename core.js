/* coreJS JavaScript Application Framework */

function dbg(variable) {
	console.log(variable);
}

function coreJS(appName) {
    this.appName = appName;
    this.elems = {};
    var baseTag = 'div';
    var baseTypeInsert = 'append';
    var innerHTML='';
    var baseAttr = 'class';
    var baseAttrVal = 'cjs';
    var workArea = $('#workArea');
    if (appName=='DOMCreatr') {
        workArea = $('body')
    }
    var runned = false;

    this.render = function() {
			if (runned) {
            $.each( this.elems, function( key, value ) {
							if (this['obj'].params.runRender) {
									var typeInsert = this['obj'].main.typeInsert;
									switch (typeInsert) {
                        case 'prepend':
                            workArea.prepend(value);
                            break;
                        case 'append':
                            workArea.append(value);
                            break;
                        case 'after':
                            workArea.after(value);
                            break;
                        default :
                            workArea.append(value);
                    }
                }
            });
        }
    };

    this.run = function() {
			runned = true;
			this.title(this.appName);
			this.render();
    };

    this.title = function(titleName) {
        $('head').find('title').html(titleName);
    };
    this.createElem = function(obj) {
        if (!obj.main.tag) {
            tag = baseTag;
        }
        if (!obj.main.typeInsert) {
            typeInsert = baseTypeInsert;
        }

        if (!obj.main.attrObj) {
            attr = baseAttr;
            attrVal = baseAttrVal;
        } else {
            attr = obj.main.attrObj.attr;
            attrVal =  obj.main.attrObj.attrVal;
        }
        var elem = document.createElement(obj.main.tag);
        elem.innerHTML = obj.main.innerHTML;
        elem.setAttribute(attr,attrVal);
        elem.setAttribute('class','cjs');
        this.elems[obj.main.objName] = elem;
        this.elems[obj.main.objName]['obj'] = obj;
        return elem;
    };

	this.createAppWrapper = function(obj) {
		HTML = '<!DOCTYPE html><html><head><meta charset="UTF-8"> <title></title> </head> <body> </body> </html>';
		$('html').html(HTML);
		this.includeJS('https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js');
	};
	this.includeJS = function(path) {
		elem = '<script src="'+path+'"></script>';
		$('head').append(elem);
	};
	this.includeCSS = function(path) {
        elem = '<link rel="stylesheet" href="'+path+'">';
        $('head').append(elem);
    };

    this.reload = function() {

    };

    this.stop = function() {
        runned = false;
    };
};
