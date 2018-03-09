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
        var scale = 300 / img.width;

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

    // Prendo gli elementi front e retro
    var canvasFront = document.getElementById('screenshot_fronte');
    var canvasRetro = document.getElementById('screenshot_retro');
    // Prendo il display originale (block o none) per ripristinarlo successivamente
    var originalStyleFront = jQuery(canvasFront).css('display');
    var originalStyleRetro = jQuery(canvasRetro).css('display');

    // Forzo il block sul fronte e nascondo il retro
    jQuery(canvasFront).css('display', 'block');
    jQuery(canvasRetro).css('display', 'none')

    html2canvas(canvasFront).then(function (canvas) {
        // Aggiunta del canvas fronte all'anteprima
        jQuery("#FrontplaceHolder").html(canvas);
        // Nascondo elemento fronte, mostro retro
        jQuery(canvasFront).css('display', 'none');
        jQuery(canvasRetro).css('display', 'block');

        // Ripeto l'operazione dentro la promise, perché essendo asincrona può andare in conflitto
        html2canvas(canvasRetro).then(function (canvas) {
            jQuery("#RetroplaceHolder").html(canvas);
            jQuery(canvasFront).css('display', originalStyleFront);
            jQuery(canvasRetro).css('display', originalStyleRetro);
        });
    });


});



$('#convertformail').click(function () {
    var screenshot4mail = document.getElementById('mail_screenshot');
    html2canvas(screenshot4mail).then(function (to_email) {

        var dataURL = to_email.toDataURL()
        

        $('#image_id').html(to_email); //test se stampa il div
        $.ajax({

            url: "save_image.php",
            type: "POST",
            data: {
                imgbase64: dataURL
            },
            dataType: 'json',
        
        }).done(function (o) {
            console.log('saved');
            // If you want the file to be visible in the browser 
            // - please modify the callback in javascript. All you
            // need is to return the url to the file, you just saved 
            // and than put the image in your browser.
        });
    });

});





//sfondo del canvas

fronte.setBackgroundImage('img/grid.png', fronte.renderAll.bind(fronte));
retro.setBackgroundImage('img/grid.png', retro.renderAll.bind(retro));
