<?php /* text editor */ ?>

<div class="container">
    <button class="btn btn-primary" onclick="Addtext()">Add Texto</button>

    <div id="text-controls" class="form-group">
        <label for="opacity">Opacity: </label>
        <input value="100" class="form-control" type="range" bind-value-to="opacity" id="opacity">
        <input type="color" class="form-control" value="" id="color" size="10">
        <label for="font-family" style="display:inline-block">Font family:</label>
        <select id="font-family">
        <option value="arial">Arial</option>
        <option value="helvetica" selected>Helvetica</option>
        <option value="myriad pro">Myriad Pro</option>
        <option value="delicious">Delicious</option>
        <option value="verdana">Verdana</option>
        <option value="georgia">Georgia</option>
        <option value="courier">Courier</option>
        <option value="comic sans ms">Comic Sans MS</option>
        <option value="impact">Impact</option>
        <option value="monaco">Monaco</option>
        <option value="optima">Optima</option>
        <option value="hoefler text">Hoefler Text</option>
        <option value="plaster">Plaster</option>
        <option value="engagement">Engagement</option>
      </select>
        <br>
        <label for="text-align" style="display:inline-block">Text align:</label>
        <select id="text-align">
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
        <option value="justify">Justify</option>
      </select>
        <div>
            <label for="text-bg-color">Background color:</label>
            <input type="color" class="form-control" value="" id="text-bg-color" size="10">
        </div>
        <div>
            <label for="text-lines-bg-color">Background text color:</label>
            <input type="color" class="form-control" value="" id="text-lines-bg-color" size="10">
        </div>
        <div>
            <label for="text-stroke-color">Stroke color:</label>
            <input type="color" class="form-control" value="" id="text-stroke-color">
        </div>
        <div>


            <label for="text-stroke-width">Stroke width:</label>
            <input type="range" class="form-control" value="1" min="1" max="5" id="text-stroke-width">
        </div>
        <div>
            <label for="text-font-size">Font size:</label>
            <input type="range" class="form-control" value="" min="1" max="120" step="1" id="text-font-size">
        </div>
        <div>
            <label for="text-line-height">Line height:</label>
            <input type="range" class="form-control" value="" min="0" max="10" step="0.1" id="text-line-height">
        </div>

        <div id="text-controls-additional" class="form-group">
            <input type='checkbox' class="form-check" name='fonttype' id="text-cmd-bold"> Bold

            <input type='checkbox' class="form-check" name='fonttype' id="text-cmd-italic"> Italic

            <input type='checkbox' class="form-check" name='fonttype' id="text-cmd-underline"> Underline
        </div>
    </div>

</div>
