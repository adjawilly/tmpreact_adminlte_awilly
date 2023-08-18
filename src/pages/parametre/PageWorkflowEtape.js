import { NavLink } from "react-router-dom";
export default function PageWorkflowEtape(){
    //state
    const messageEchec ="";
    const messageOk ="";
    //comportement

    //affichage
    return(
        <div>
            <nav style={{bsBreadcrumbDivider:'>'}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="fa fa-home"><a href="#"> Home </a> </li>
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Parametre </a> </li>
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Etape Workflow </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>
                <div class="card-header"> 
                    <NavLink to="/wProcess">                        
                        <a href="" class="btn btn-sm btn-dark"> 
                            <i className="fas fa-arrow-circle-left"></i> Retour
                        </a> 
                    </NavLink>
                    Processus demande d'achat
                </div> 
                <div class="card-text" style={{fontSize:12,color:"GrayText"}}>
                    *Toutes les étapes d'un workflow (fulx de validation) s'executent au sein de l'unité organisationelle de l'initiateur de la demande.
                    Toutes les étapes qui s'executeront en dehors de l'unité organisationelle de l'initiateur, doivent etre aiguillées avec le champ « Scale Out de flux »
                </div>               
                <div class="card-body">
                
                    <form name="" id="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 col-sm-6">                                
                                <div class="form-group">
                                    <label for="PRF_LIBELLE">Niveau Etape *</label>
                                    <input type="number" min="1" max="5" class="form-control" id="PRF_LIBELLE" name="PRF_LIBELLE" placeholder="Niveau Etape" value="" required />
                                </div>
                                <div class="form-group">
                                    <label for="PRF_LIBELLE">Libelle Etape *</label>
                                    <input type="text" class="form-control" id="PRF_LIBELLE" name="PRF_LIBELLE" placeholder="Processus" value="" required />
                                </div>
                                <div class="form-group">
                                    <label for="UTI_PRF_CODE">Profil conserné*</label>
                                    <select class="form-control" name="UTI_PRF_CODE" id="UTI_PRF_CODE" multiple>
                                        <option value="">Admin</option>  
                                        <option value="">Gestionnaire</option>  
                                        <option value="">Utilisateur</option>  
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="PRF_DESCRIPTION">Description</label>
                                    <textarea class="form-control" id="PRF_DESCRIPTION" name="PRF_DESCRIPTION" placeholder="Description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="PRF_LIBELLE">Scale Out du flux? si oui précisez l'UO</label>                                    
                                    <select class="form-control" name="UTI_PRF_CODE" id="UTI_PRF_CODE" multiple>
                                        <option value="">DRH</option>  
                                        <option value="">DFC</option>  
                                        <option value="">DMG</option>  
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="PRF_LIBELLE">Statut (actif/inactif) *</label>
                                    <input type="number" class="form-control" id="PRF_LIBELLE" name="PRF_LIBELLE" placeholder="TAG" value="" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary float-left">Enregistrer </button>
                                <span style={{color:"coral"}} class="float-left">{messageEchec}</span>
                                <span style={{color:"darkseagreen", fontSize:16, fontWeight:"bold"}} class="float-left">{messageOk}</span>
                        
                            </div>                            
                        </div>
                    </form>

                </div>
            </div>






            <div class="card" style={{marginTop:20}}>
                <div class="card-header">
                    <h4>Liste des .... </h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">

                        <table class="table table-striped" id="myTable">
                            <thead>
                                <tr>
                                    <th>Niveau Etape</th>
                                    <th>Libelle Etape</th>
                                    <th>Profils</th>
                                    <th>Description</th>
                                    <th>Scale Out</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>Etape 1</td>
                                <td>Etape de soumission de la demande</td>
                                <td>Admin, Utilisateur</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>...</td>
                                <td>actif</td>
                            </tr>
                            <tr>
                                <td>Etape 2</td>
                                <td>Etape de validation du chef de service</td>
                                <td>Admin, chef de service</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>...</td>
                                <td>actif</td>
                            </tr>
                            <tr>
                                <td>Etape 3</td>
                                <td>Etape de validation du DRH</td>
                                <td>Admin, Gestionnaire RH</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>DRH</td>
                                <td>actif</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>



        </div>
    );
}