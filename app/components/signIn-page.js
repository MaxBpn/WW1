if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.signInPage = {
    data: function() {
        return {   
        };
    },
    computed: {},
    template:  `
        <div>
    		<form>
            <label id="signUpText">CONNEXION</label>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="pseudo" class="form-control" id="inputUser" placeholder="Pseudo">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <input type="password" class="form-control" id="inputPassword" placeholder="Mot de passe">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                      <button type="submit" class="btn btn-primary">Valider</button>
                    </div>
                </div>
                <a href="http://127.0.0.1:8887/app/WW4.html?#/signUp" id="pasInscritText">Pas encore inscrit ?</a>
            </form>
        </div>
    `
};