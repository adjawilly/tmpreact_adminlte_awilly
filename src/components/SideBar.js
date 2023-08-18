import LogoFinance from "./LogoFinance"
import { NavLink } from "react-router-dom";
export default function SideBar(){
    //state

    //comportement

    //affichage
    return(
        /*<div>
            SideBarFinance
        </div>*/
        //backgroundImage:`url(./backSide1.jpeg)`background:"white"
        <aside className="main-sidebar elevation-4" style={{backgroundImage:`url(./backSide2.jp)`, borderRight:"4px solid #11284b", backgroundColor:"cadetblue", color:"White"}}>
            
            <LogoFinance></LogoFinance>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item">
                            <NavLink to="/">                                
                                <a href="#" class="nav-link">
                                    <i className="fas fa-home"></i>
                                    <p>
                                        Accueil
                                    </p>
                                </a>
                            </NavLink>
                            <NavLink to="/about">                                
                                <a href="#" class="nav-link">
                                    <i className="far fa-comment"></i>
                                    <p>
                                        Aide !!
                                    </p>
                                </a>
                            </NavLink>
                        </li>
                        

                        


                        <li className="nav-item has-treeview ">
                            <a href="#" className="nav-link active">
                                <i className="far fa-file-alt"></i>
                                <p>
                                    Template LTE Willy
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/reportData">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Bulletin Salarié
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Saisie des rubriques
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Saisie Multi-Salarariés
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Absences / Congé
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Calcul Bulletin
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Editer Bulletin
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Diffuser Bulletin
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item has-treeview ">
                            <a href="#" className="nav-link active">
                                <i className="fa fa-users"></i>
                                <p>
                                    Salariés
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/reportData">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Ajout de Salarié
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Déclaratif du Salarié
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>                                                
                                                Document du Salarié
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Fiche du Salarié
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                 Liste des Salariés
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item has-treeview ">
                            <a href="#" className="nav-link active">
                                <i className="fa fa-university"></i>
                                <p>
                                    Entreprise
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/reportData">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Fiche Entreprise
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Organisation RH
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>                                                
                                                Rubriques, prime, formule
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>                                
                            </ul>
                        </li>


                        <li className="nav-item has-treeview ">
                            <a href="#" className="nav-link active">
                                <i className="fa fa-chart-pie"></i>
                                <p>
                                    Etat & Reporting
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/reportData">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-chart-line"></i>
                                            <p>
                                                Report Data
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reportGraph">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-chart-bar"></i>
                                            <p>
                                                Report Graphique
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>



                        <li className="nav-item has-treeview ">
                            <a href="#" className="nav-link active">
                                <i className="fa fa-user-circle"></i>
                                <p>
                                    Mon Compte
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/infoCompte">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Infos Compte
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/changePassword">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-genderless"></i>
                                            <p>
                                                Changer password
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-header"> Module Parametrage</li>
                        <li class="nav-item has-treeview ">
                            <a href="#" class="nav-link active">
                                <i class="fa fa-cog"></i>
                                <p>
                                    Parametres
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <NavLink to="/wProcess">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Rubriques bulletin
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/wProcess">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Formule de calcul
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/wProcess">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Planification Workflow
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item has-treeview ">
                            <a href="#" class="nav-link active">
                                <i class="fa fa-lock"></i>
                                <p>
                                      Sécurité
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <NavLink to="/profil">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Profils
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/utilisateur">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Comptes Utilisateurs
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/tracabilite">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Tracabilite
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/tracabiliteAction">                                        
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-genderless"></i>
                                            <p>
                                                Actions Tracabilite
                                            </p>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        

                    </ul>
                </nav>
            </div>
        </aside>
    );
}