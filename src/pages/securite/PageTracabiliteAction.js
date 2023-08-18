export default function PageTracabiliteAction(){
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
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Action Tracabilite </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>                
                <div class="card-body" style={{fontSize:14}}>
                
                    <form name="" id="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="ACT_LIBELLE">Libelle Tracabilite *</label>
                                    <input type="text" class="form-control" id="ACT_LIBELLE" name="ACT_LIBELLE" placeholder="Libellé Action tracabilite" value="" required/>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="ACT_CODIFICATION">Codification *</label>
                                    <input type="text" class="form-control" id="ACT_CODIFICATION" name="ACT_CODIFICATION" placeholder="Codification" value="" required/>
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
                <div class="card-body" style= {{fontSize:14}}>
                    <div class="table-responsive">

                        <table class="table table-striped" id="myTable">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Libelle Tracabilite Action</th>
                                    <th>Codification</th>
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