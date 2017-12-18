//nascondi e mostra i canvas


$("#retrobtn").click(function () {

    $("#magliettafronte").hide();
    $("#magliettaretro").show();
    if ($("#frontebtn").hasClass("active") == true) {
        $("#frontebtn").removeClass("active");
        $("#retrobtn").addClass("active");

    }

});

$("#frontebtn").click(function () {
    $("#magliettaretro").hide();
    $("#magliettafronte").show();
    if ($("#retrobtn").hasClass("active") == true) {
        $("#retrobtn").removeClass("active");
        $("#frontebtn").addClass("active");

    }
});


// bottone elimina 

$(document).on('click', "#delete-item", function () {
    if (fronte.getActiveObject()) {
        fronte.remove(fronte.getActiveObject());
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


// canvas Fronte
Dropzone.autoDiscover = false;
var fronte = new fabric.Canvas('Fcanvas');
var imgUpload = new Dropzone("#img-upload", {
    url: "uploader/upload.php",
    dictDefaultMessage: "Clicca qua per caricare la tua immagine"
});
imgUpload.on("success", function () {

    $("#upl-info").removeClass("alert-info");
    $("#upl-info").addClass("alert-success");
    $("#upl-info").html("File has been uploaded successfully. Click to upload another.")
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
        fronte.add(img).renderAll();
        fronte.setActiveObject(img);
    });
};

imgUpload.on("addedfile", function (file) {
    reader.readAsDataURL(file);
});

// canvas retro
Dropzone.autoDiscover = false;
var retro = new fabric.Canvas('Rcanvas');
var imgUploadR = new Dropzone("#img-upload", {
    url: "uploader/upload.php",
    dictDefaultMessage: "Clicca qua per caricare la tua immagine"
});
imgUploadR.on("success", function () {

    $("#upl-info").removeClass("alert-info");
    $("#upl-info").addClass("alert-success");
    $("#upl-info").html("File has been uploaded successfully. Click to upload another.")
});
var r_reader = new FileReader();
r_reader.onload = function (event_r) {
    var r_data = event_r.target.result;
    fabric.Image.fromURL(r_data, function (imgr) {
        let scale = 300 / imgr.width;

        imgr.set({
            scaleX: scale,
            scaleY: scale
        });
        retro.add(imgr).renderAll();
        retro.setActiveObject(imgr);
    });
};

imgUploadR.on("addedfile", function (file_r) {
    r_reader.readAsDataURL(file_r);
});
