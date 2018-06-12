if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.signUpPage = {
    data: function() {
        return {   
        };
    },
    computed: {},
    template:  `
        <div>
            <form>
            <label id="signUpText">INSCRIPTION</label>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="inputNom" placeholder="Nom">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="inputPrenom" placeholder="Prénom">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="password" class="form-control" id="inputPassword" placeholder="Mot de passe">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="password" class="form-control" id="inputonfirmationPassword" placeholder="Confirmation mot de passe">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <button type="submit" class="btn btn-primary">Valider</button>
                    </div>
                </div>
            </form>
        </div>
    `
};