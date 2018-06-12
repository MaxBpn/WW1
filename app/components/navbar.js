if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.navbar = {
	data: function() {
        return {
            filterName: '',
        };
    },
    computed: {
        homePage: function() {
            return `/home`
        },
        moviesPage: function() {
            return `/movies`
        },
        seriesPage: function() {
            return `/series`
        },
        signInPage: function() {
            return `/signIn`
        },
        signOutPage: function() {
            return `/signOut`
        }
    },
    methods: {},
    template: `
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" id="whichWatcher">WHICH WATCHER</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto" mt-2 mt-lg-0>
                <li class="nav-item active">
                    <router-link v-bind:to="homePage">
                        <a class="nav-link" id="homePage" data-toggle="tab" href="#home" role="tab" aria-selected="false"><span class="fa fa-home"></span></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link v-bind:to="moviesPage">
                        <a class="nav-link" id="moviesPage" data-toggle="tab" href="#movies" role="tab" aria-selected="false">FILMS</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link v-bind:to="seriesPage">
                        <a class="nav-link" id="seriesPage" data-toggle="tab" href="#series" role="tab" aria-selected="false">SÉRIES</a>
                    </router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input id="searchInput" class="searchInput" v-model="filterName" placeholder="Search">
                <button type="button" class="btn btn-link" id="boutonRechercher"><span class="fa fa-search"></span></button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                    <router-link v-bind:to="signInPage">
                        <a class="nav-link" id="signInPage" data-toggle="tab" href="#signInPage" role="tab" aria-selected="false"><span class="fa fa-user"></span></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link v-bind:to="signOutPage">
                        <a class="nav-link" id="signOutPage" data-toggle="tab" href="#signOutPage" role="tab" aria-selected="false"><span class="fa fa-power-off"></span></a>
                    </router-link>
                </li>
            </ul>
          </div>
        </nav>
    </div> 
    `,
};