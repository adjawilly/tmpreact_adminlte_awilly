export default function PageUtilisateur(){
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
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Sécurité </a> </li>
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Utilisateurs </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>                
                <div class="card-body" style={{fontSize:14}}>

                    <form action="">
                        <div class="row">
                            <div class="col-12 col-sm-6">                           

                                <div class="form-group">
                                    <label for="RAP_COM_CODE">Type de Compte *</label>
                                    <select class="form-control selectAutocompletion" name="UTI_TYC_CODE" id="UTI_TYC_CODE">                                   
                                        <option value="">Option</option>                                    
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="UTI_LOGIN" id="labelLogin">Login *</label>
                                    <input type="text" class="form-control" id="UTI_LOGIN" name="UTI_LOGIN" placeholder="Login" value="" required/>
                                </div>
                                <div class="form-group">
                                    <label for="UTI_EMAIL">Email *</label>
                                    <input type="text" class="form-control" id="UTI_EMAIL" name="UTI_EMAIL" placeholder="Email" value="" required />
                                </div>
                                <div class="form-group">
                                    <label for="UTI_PRF_CODE">Profil *</label>
                                    <select class="form-control" name="UTI_PRF_CODE" id="UTI_PRF_CODE" multiple>
                                        <option value="">Admin</option>  
                                        <option value="">Gestionnaire</option>  
                                        <option value="">Utilisateur</option>  
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="UTI_CIVILITE">Civilite *</label>
                                    <select class="form-control" name="UTI_CIVILITE" id="UTI_CIVILITE">
                                        <option value="Mme" >Mme</option>
                                        <option value="Mlle" >Mlle</option>
                                        <option value="M." >M.</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="UTI_NOM">Nom *</label>
                                    <input type="text" class="form-control" id="UTI_NOM" name="UTI_NOM" placeholder="Nom" value="" required/>
                                </div>
                                <div class="form-group">
                                    <label for="UTI_PRENOMS">Prénoms *</label>
                                    <input type="text" class="form-control" id="UTI_PRENOMS" name="UTI_PRENOMS" placeholder="Prénoms" value="" required/>
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
                    <h4>Liste des ......</h4>
                </div>
                <div class="card-body" style={{fontSize:14}}>
                    <div class="table-responsive">

                        <table class="table table-striped" id="myTable">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Type de Compte</th>
                                    <th>Nom & Prénoms</th>
                                    <th>Login</th>
                                    <th>Email</th>
                                    <th>Profil</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                        </table>

                    </div>
                </div>
            </div>








        </div>
    );
}