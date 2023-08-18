import { NavLink } from "react-router-dom";
export default function PageWorkflowProcess(){
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
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Workflow </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>                
                <div class="card-body">
                
                    <form name="" id="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="PRF_LIBELLE">Libelle Processus *</label>
                                    <input type="text" class="form-control" id="PRF_LIBELLE" name="PRF_LIBELLE" placeholder="Processus" value="" required />
                                </div>
                                <div class="form-group">
                                    <label for="PRF_LIBELLE">TAG *</label>
                                    <input type="text" class="form-control" id="PRF_LIBELLE" name="PRF_LIBELLE" placeholder="TAG" value="" required />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="PRF_DESCRIPTION">Description</label>
                                    <textarea class="form-control" id="PRF_DESCRIPTION" name="PRF_DESCRIPTION" placeholder="Description"></textarea>
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
                                    <th>N°</th>
                                    <th>Libelle Processus</th>
                                    <th>TAG</th>
                                    <th>Description</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>Processus demande d'achat</td>
                                <td>PDA</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td> <NavLink to="/wEtape"> <a href="" class="btn btn-sm btn-primary bg-success" style={{}}>Ajouter étapes </a> </NavLink></td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>



        </div>
    );
}