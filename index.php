<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.min.css">
    <?php /*
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/dropzone.min.css">
*/ ?>

</head>

<header>
    <!-- Nav tabs -->
    <div class="row">
        <div class="col-md-6">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#teeselector">T-shirt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#imgupl">Image Uploader</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#textedit">Text Editor</a>
                </li>
                <li class="nav-pills ml-2">
                    <a class="nav-link active" data-toggle="tab" id="delete-item">
                         <i class="fa fa-trash-o" aria-hidden="true"></i> Elemento
                     </a>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <div class="btn btn-outline-primary active" id="frontebtn">Fronte</div>
                </li>
                <li class="nav-item">
                    <div class="btn btn-outline-secondary" id="retrobtn">Retro</div>
                </li>
            </ul>
        </div>
    </div>

</header>


<body>
    <div class="container py-2">
        <div class="row">

            <div class="col-md-6">

                <!-- Tab panes -->
                <div class="tab-content">
                    <div id="teeselector" class="container tab-pane active"><br>
                        <h3>T-shirt</h3>
                        <?php include 'tshirtselector.php'?>
                    </div>
                    <div id="imgupl" class="container tab-pane fade"><br>
                        <h3>ImageUploader</h3>

                        <?php  include 'uploader/main.php' ?>

                    </div>
                    <div id="textedit" class="container tab-pane fade"><br>
                        <h3>Text Editor</h3>
                        <?php include 'texteditor.php'?>
                    </div>
                    <div id="menu2" class="container tab-pane fade"><br>
                        <h3>Menu 2</h3>

                    </div>
                </div>
            </div>


            <div class="flex-column" id="canvas-container">
                <div id="screenshot_fronte" class="tee-background whitetee">
                    <div class="p-2" id="magliettafronte">
                        <canvas class="print-space" id="Fcanvas" width="245" height="400" style="border:1px solid #ccc"></canvas>
                    </div>

                </div>
                <div id="screenshot_retro" class="tee-background whitetee">
                    <div class="p-2" id="magliettaretro">
                        <canvas class="print-space" id="Rcanvas" width="245" height="400" style="border:1px solid #FF0000"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <!--Seconda riga dedicata al bottone di invio-->
        <div class="row">

            <?php include 'submit.php' ?>

        </div>

    </div>


    <script src="js/jquery-3.2.1.slim.min.js"></script>
    <script src="js/html2canvas.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/dropzone.min.js"></script>
    <script src="js/fabric.min.js"></script>
    <script src="js/texteditor.js"></script>
    <script src="js/mainfabrictee.js"></script>




</body>




</html>
