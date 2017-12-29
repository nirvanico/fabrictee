


//
//$("#sendtext").click(function () {
//   var inputext = $('#txt_name').val();

//  var text = new fabric.Text(inputext, {
//left: 100,
//top: 100
// });
// canvas.add(text);
//});
//





// texteditor


fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.padding = 5;




function Addtext() {
    var text = new fabric.IText('Aggiungi il testo qua', {
        fontSize: 16,
        left: 20,
        top: 20
    });
    if(position == 'Rcanvas') 
			mySide = retro;
		else
			mySide = fronte;
    
    mySide.add(text).setActiveObject(text);
}



addHandler('color', function (obj) {
    setStyle(obj, 'fill', this.value);
}, 'onchange');

addHandler('opacity', function (obj) {
    setStyle(obj, 'opacity', this.value);
}, 'onchange');

addHandler('font-family', function (obj) {
    setStyle(obj, 'fontFamily', this.value);
}, 'onchange');

addHandler('text-align', function (obj) {
    setStyle(obj, 'textAlign', this.value);
}, 'onchange');

addHandler('text-bg-color', function (obj) {
    setStyle(obj, 'textBackgroundColor', this.value);
}, 'onchange');

addHandler('text-lines-bg-color', function (obj) {
    setStyle(obj, 'backgroundColor', this.value);
}, 'onchange');

addHandler('text-stroke-color', function (obj) {
    setStyle(obj, 'stroke', this.value);
}, 'onchange');

addHandler('text-stroke-width', function (obj) {
    setStyle(obj, 'strokeWidth', this.value);
}, 'onchange');

addHandler('text-font-size', function (obj) {
    setStyle(obj, 'fontSize', this.value);
}, 'onchange');

addHandler('text-line-height', function (obj) {
    setStyle(obj, 'lineHeight', this.value);
}, 'onchange');

addHandler('text-cmd-bold', function (obj) {
    setStyle(obj, 'fontWeight', this.value);
}, 'onchange');

addHandler('text-cmd-italic', function (obj) {
    setStyle(obj, 'italic', this.value);
}, 'onchange');

addHandler('text-cmd-underline"', function (obj) {
    setStyle(obj, 'underline', this.value);
}, 'onchange');

addHandler('text-cmd-linethrough', function (obj) {
    setStyle(obj, 'line-through', this.value);
}, 'onchange');

addHandler('text-cmd-overline', function (obj) {
    setStyle(obj, 'overline', this.value);
}, 'onchange');



function setStyle(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
        var style = {};
        style[styleName] = value;
        object.setSelectionStyles(style).setCoords();
    } else {
        object[styleName] = value;
    }
    mySide.renderAll();
};

function getStyle(object, styleName) {
    return (object.getSelectionStyles && object.isEditing) ?
        object.getSelectionStyles()[styleName] :
        object[styleName];
}

function addHandler(id, fn, eventName) {
    document.getElementById(id)[eventName || 'onclick'] = function () {
        var el = this;
        if (obj = mySide.getActiveObject()) {
            fn.call(el, obj);
            mySide.renderAll();
        }
    };
}


