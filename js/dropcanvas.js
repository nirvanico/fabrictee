//nascondi e mostra i canvas
var position // modificato al click sui bottoni fronte/retro indica posizione attuale maglietta.
$('#retrobtn').click(function () {

    $('#magliettafronte').hide();
    $('#magliettaretro').show();
    if ($('#frontebtn').hasClass('active') == true) {
        $('#frontebtn').removeClass('active');
        $('#retrobtn').addClass('active');
    }
    position = 'Rcanvas';
});

$('#frontebtn').click(function () {
    $('#magliettaretro').hide();
    $('#magliettafronte').show();
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
        $('#img_tshirt').attr('src', 'img/blacktee.png');
    });
});
$(document).ready(function () {
    $('.bianco').click(function () {
        $('#img_tshirt').attr('src', 'img/whitetee.png');
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


    function screenshot() {
        html2canvas($('#Fcanvas'), {
            onrendered: function(canvas) {
                var canvasImg = canvas.toDataURL("image/jpg");
                $('#canvasImg').html('<img src="' + canvasImg + '" alt="">');
            }
        });
    }





