if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.signOutPage = {
    data: function() {
        return {   
        };
    },
    computed: {},
    template:  `
        <div>
    		<div> 
                <label id="signOutText">DECONNEXION</label>
            </div>
            <div> 
                <label id="textConfirmationDeconnexion">
                    Vous êtes à présent déconnecté.
                </label>
            </div>
            <div> 
                <label id="textConfirmationDeconnexion">
                    Cliquez <a href="http://127.0.0.1:8887/app/WW4.html?#/home">ici</a> pour revenir à la page principale.
                </label>
            </div>
        </div>
    `
};