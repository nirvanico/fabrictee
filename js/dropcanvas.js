//nascondi e mostra i canvas
var position // modificato al click sui bottoni fronte/retro indica posizione attuale maglietta.
$('#retrobtn').click(function () {

    $('#screenshot_fronte').hide();
    $('#screenshot_retro').show();
    if ($('#frontebtn').hasClass('active') == true) {
        $('#frontebtn').removeClass('active');
        $('#retrobtn').addClass('active');
    }
    position = 'Rcanvas';
});

$('#frontebtn').click(function () {
    $('#screenshot_retro').hide();
    $('#screenshot_fronte').show();
    if ($('#retrobtn').hasClass('active') == true) {
        $('#retrobtn').removeClass('active');
        $('#frontebtn').addClass('active');

    }
    position = 'Fcanvas';
});


// bottone elimina 

$(document).on('click', '#delete-item', function () {
    if (fronte.getActiveObject() || retro.getActiveObject()) {
        fronte.remove(fronte.getActiveObject());
        retro.remove(retro.getActiveObject());
    }
});

// cambiare immagine maglietta


$(document).ready(function () {
    $('.nero').click(function () {
        $('.tee-background').removeClass('whitetee');
        $('.tee-background').addClass('blacktee');
        $('.nero').addClass('active');
    });
});
$(document).ready(function () {
    $('.bianco').click(function () {
        $('.tee-background').addClass('whitetee');
        $('.tee-background').removeClass('blacktee');
        $('.bianco').addClass('active')
    });
});


// canvas fronte/retro: unico caricamento con differente 'position'
Dropzone.autoDiscover = false;
var fronte = new fabric.Canvas('Fcanvas'); // carico su 2 oggetti diversi il fronte
var retro = new fabric.Canvas('Rcanvas'); // e il retro della maglietta.
var mySide = new fabric.Canvas(); // quando modifico modifico l'attuale la utilizzato
var imgUpload = new Dropzone('#img-upload', {
    url: 'uploader/upload.php',
    dictDefaultMessage: 'Clicca qua per caricare la tua immagine'
});
imgUpload.on('success', function () {

    $('#upl-info').removeClass('alert-info');
    $('#upl-info').addClass('alert-success');
    $('#upl-info').html('File has been uploaded successfully. Click to upload another.')
});
var reader = new FileReader();
reader.onload = function (event) {
    var data = event.target.result;
    fabric.Image.fromURL(data, function (img) {
        let scale = 300 / img.width;

        img.set({
            scaleX: scale,
            scaleY: scale
        });
        // modifico il generico mySide assegnandoli li lato attuale
        if (position == 'Rcanvas')
            mySide = retro;
        else
            mySide = fronte;
        mySide.add(img).renderAll();
        mySide.setActiveObject(img);
    });
};

imgUpload.on('addedfile', function (file) {
    reader.readAsDataURL(file);
});




//screenshot il fronte e il retro
$('#convert').click(function () {
    /*var FrontpngURL = fronte.toDataURL();
    var RetropngURL = retro.toDataURL();
    console.log(FrontpngURL);
    
    $('#FrontplaceHolder').html('<img src="' + FrontpngURL + '"/>');
    $('#RetroplaceHolder').html('<img src="' + RetropngURL + '"/>');*/
    //generateCanvas(document.getElementById('screenshot_fronte'), jQuery("#FrontplaceHolder"));
    //generateCanvas(document.getElementById('screenshot_retro'), jQuery("#RetroplaceHolder"));

    var canvasFront = document.getElementById('screenshot_fronte');
    var canvasRetro = document.getElementById('screenshot_retro');
    var originalStyleFront = jQuery(canvasFront).css('display');
    var originalStyleRetro = jQuery(canvasRetro).css('display');

    jQuery(canvasFront).css('display','block');

    html2canvas(canvasFront).then(function(canvas) {
        jQuery("#FrontplaceHolder").html(canvas);
        jQuery(canvasFront).css('display','none');
        jQuery(canvasRetro).css('display','block');

        html2canvas(canvasRetro).then(function(canvas) {
            jQuery("#RetroplaceHolder").html(canvas);
            jQuery(canvasFront).css('display',originalStyleFront);
            jQuery(canvasRetro).css('display',originalStyleRetro);
        });
    });


});

//sfondo del canvas
fronte.setBackgroundImage('img/grid.png', fronte.renderAll.bind(fronte));
retro.setBackgroundImage('img/grid.png', retro.renderAll.bind(retro));


