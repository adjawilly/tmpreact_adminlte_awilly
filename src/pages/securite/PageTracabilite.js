export default function PageTracabilite(){
    //state
    
    //comportement

    //affichage
    return(
        <div>
            <nav style={{bsBreadcrumbDivider:'>'}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="fa fa-home"><a href="#"> Home </a> </li>
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Sécurité </a> </li>
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Tracabilite </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>                
                <div class="card-header">
                    <h4>Liste des Logs ...</h4>
                </div>
                <div class="card-body" style={{fontSize:14}}>
                    <div class="table-responsive">

                        <table class="table table-striped table-hover" id="myTable">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Responsable de l'action</th>
                                    <th>Action</th>
                                    <th>Codification</th>
                                    <th>Description</th>
                                    <th>Objet </th>
                                    <th>Champ et valeur</th>
                                    <th>Date Action</th>
                                </tr>
                            </thead>
                        </table>



                    </div>
                </div>
            </div>



        </div>
    );
}