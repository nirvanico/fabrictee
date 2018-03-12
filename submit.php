<?php
$form_key = md5(microtime(true));
$_SESSION['form_key'] = $form_key;
?>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#ModalPreview"><i class="fa fa-envelope-open-o" aria-hidden="true"></i>

 Richiedi preventivo</button>

    <!-- Modal -->
    <div class="modal fade" id="ModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modulo invio preventivo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                </div>
                <div class="modal-body">
                    <form id="submitmail" method="post" action="save_image.php">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input class="form-control" id="nome" placeholder="Inserisci qua il tuo nome" type="text" required>
                            <div class="valid-feedback">Success! You've done it.</div>
                            <small class="invalid-feedback">Questo è un campo obbligatorio</small>
                        </div>
                        <div class="form-group">
                            <label for="cognome">Cognome</label>
                            <input class="form-control" id="cognome" placeholder="Inserisci il tuo cognome" type="text" required>
                            <div class="valid-feedback">Success! You've done it.</div>
                            <small class="invalid-feedback">Questo è un campo obbligatorio</small>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input class="form-control" id="email" placeholder="Inserisci la tua mail" type="email" required>
                            <div class="valid-feedback">Success! You've done it.</div>
                            <small class="invalid-feedback">Sicuro di aver scritto una mail valida? </small>
                        </div>
                        <div class="form-group">
                            <label for="quantita">Quantità di pezzi</label>
                            <input class="form-control form-control-sm" id="quantita" placeholder="1" type="number" required>
                            <div class="valid-feedback">Success! You've done it.</div>
                            <small class="invalid-feedback">Questo è un campo obbligatorio</small>
                        </div>
                        <div class="form-group">
                            <div class="alert alert-warning my-2">Attezione! Ricordarsi di scegliere il colore</div>
                            <label for="colore">Colore</label>
                            <select class="form-control" id="colore" required>
                              <option selected>Scegli il colore</option>
                              <option value="bianco">Bianco</option>
                              <option value="nero">Nero</option>
                            </select>
                        </div>
                        <div class="g-recaptcha form-group" data-sitekey="6LfcFEwUAAAAAD4V9HdOr1VEIGkBxAzz0Xbi1CMD"></div>
                        <a class="btn btn-success" id="convert" data-toggle="collapse" href="#anteprima" aria-expanded="false" aria-controls="anteprima" required>
Anteprima delle magliette  </a>
                    </form>

                    <div class="collapse" id="anteprima">
                        <div class="container-fluid" id=mail_screenshot>

                            <!-- questo div viene messo come "visibile" dal bottone id=convert -->
                            <div class="row">
                                <div class="col-md-6">
                                    <h2 class="text-center">Fronte</h2>
                                    <div id="FrontplaceHolder"></div>
                                </div>
                                <div class="col-md-6">
                                    <h2 class="text-center">Retro</h2>
                                    <div id="RetroplaceHolder"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- test x la preview -->
                    <?php /*
                <div id="imageHolder">
                    
                </div>
                <div id="imagesrc"></div>
                <!-- fine test -->
                */?>
                    <input type="hidden" value="<?php echo $form_key; ?>" />
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
                        <button type="button" form="submitmail" id="convertformail" class="btn btn-primary">
                        
                        </button>

                    </div>
                </div>
            </div>
        </div>
