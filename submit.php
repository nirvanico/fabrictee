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
                <form>
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input class="form-control" id="nome" placeholder="Inserisci qua il tuo nome" type="text">
                    </div>
                    <div class="form-group">
                        <label for="cognome">Cognome</label>
                        <input class="form-control" id="cognome" placeholder="Inserisci il tuo cognome" type="text">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input class="form-control" id="email" placeholder="Inserisci la tua mail" type="email">
                    </div>
                    <div class="form-group">
                        <label for="quantita">Quantità di pezzi</label>
                        <input class="form-control form-control-sm" id="quantita" placeholder="1" type="number">
                    </div>
                    <div class="form-group">
                        <label for="colore">Colore</label>
                        <div class="btn-group form-control" role="group" aria-label="colore">
                            <button type="button" class="btn btn-light mx-1 bianco">Bianco</button>
                            <button type="button" class="btn mx-1 nero">Nero</button>
                        </div>
                    </div>
                    <a class="btn btn-primary" id="convert" data-toggle="collapse" href="#anteprima" aria-expanded="false" aria-controls="anteprima">
Anteprima delle magliette  </a>
                </form>

                <div class="collapse" id="anteprima">
                    <div class="container-fluid">

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
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
                <button type="button" class="btn btn-primary"><i class="fa fa-paper-plane-o" aria-hidden="true"></i>
 Invia!</button>
            </div>
        </div>
    </div>
</div>
