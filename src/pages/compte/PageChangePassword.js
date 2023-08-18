export default function PageChangePassword(){
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
                    <li class="fas fa-chevron-right" aria-current="page"> <a href="#"> Changement Password </a> </li>
                </ol>
            </nav>

            <div class="card" style={{marginTop:5}}>       
                <div class="card-header bg-primary">
                    Formulaire changement de Password
                </div>         
                <div class="card-body" style={{fontSize:14}}>
                
                    <form action="">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <input type="hidden" class="form-control" id="login" name="login" placeholder="Email / Login" value="" required/>

                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" id="password" name="password" placeholder="password" required/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user-lock"></i></span>
                                    </div>
                                    <input type="password" class="form-control" id="password_new" name="password_new" placeholder="nouveau password" required/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user-lock"></i></span>
                                    </div>
                                    <input type="password" class="form-control" id="password_new_verif" name="password_new_verif" placeholder="réecrivez le nouveau password" required/>
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
        </div>
    );
}