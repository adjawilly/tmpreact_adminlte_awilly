export default function HeaderFinance(){
    //state

    //comportement

    //affichage
    return (
        //navbar navbar-expand-sm navbar-dark bg-dark
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    
                </li>
            </ul>

            <form className="form-inline ml-3">
                <div class="input-group input-group-sm">
                    <input class="form-control form-control-navbar" type="search" placeholder="Recherche" aria-label="Recherche" />
                    <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        
                        <span className="badge badge-warning navbar-badge fas fa-bell">0</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">0 Notification</span>
                        <a href="#" className="dropdown-item dropdown-footer">Voir toutes les Notifications</a>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">                    
                        <span className="fas fa-user-circle">Bienvenue</span> NOM PRENOMS                  
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider"></div>
                        <div className="float-left text-muted text-sm">Mes Roles utilisateurs</div>
                        
                        <div className="dropdown-divider"></div>
                        <a href="~/Connexion/logout" className="dropdown-item">
                            Se Déconnecter
                        </a>
                    </div>
                </li>
            </ul>

        </nav>
    );
}
