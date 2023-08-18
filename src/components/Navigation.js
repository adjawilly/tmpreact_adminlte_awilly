import { NavLink } from "react-router-dom";
import Logo from "./Logo";
function Navigation(){
    //state

    //comportement

    //affichage
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)"> <Logo></Logo> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">                        
                        <li className="nav-item">
                            <NavLink to="/" className={(nav)=>(nav.isActive? "btn btn-sm btn-success":"")}>
                                <a href="" className="nav-link">Accueil</a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={(nav)=>(nav.isActive? "btn btn-sm btn-success":"")}>
                                <a href="" className="nav-link">A propos</a>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navigation();