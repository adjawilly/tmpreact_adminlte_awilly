export default function PageInfoCompte(){
    //state

    //comportement

    //affichage
    return(
        <div>
            <nav style={{bsBreadcrumbDivider:'>'}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="fa fa-home"><a href="#"> Home </a> </li>
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Informations du Compte </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>                
                <div class="card-body" style={{fontSize:14}}>
                
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label for="">Civilite</label>
                                <input type="text" class="form-control" value="" disabled />
                            </div>
                            <div class="form-group">
                                <label for="">Nom Prénoms </label>
                                <input type="text" class="form-control" value="" disabled />
                            </div>
                            <div class="form-group">
                                <label for="">Email </label>
                                <input type="text" class="form-control" value="" disabled />
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label for="">Type de Compte</label>
                                <input type="text" class="form-control" value="" disabled />
                            </div>
                            <div class="form-group">
                                <label for="">Login </label>
                                <input type="text" class="form-control" value="" disabled />
                            </div>
                        </div>
                    </div>


                </div>
            </div>




            <div class="card" style={{marginTop:20}}>
                <div class="card-header">
                    <h4>Liste de vos Profils ....</h4>
                </div>
                <div class="card-body" style={{fontSize:14}}>
                    <div class="table-responsive">

                        <table class="table table-striped" id="myTable">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Profil</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
            </div>





        </div>
    );
}