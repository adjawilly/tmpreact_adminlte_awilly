import axios from "axios";
import { useEffect, useState } from "react";

function Pays(){
    //state
    const [data, setData] = useState([]);
    const [nbre, setNbre] = useState(250);

    //changement
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all",)
             .then((resultat)=>setData(resultat.data))
             //.then((resultat)=>console.log(resultat.data))
    },[]);

    let actionChange = (event)=>{
        setNbre(event.target.value);
    }

    //affichage
    return(
        <div className="listePays row">
            <ul className="radio-container">
                <input type="range" min="1" max="250" value={nbre} onChange={actionChange} />
            </ul>
            <h1>Liste des {data.length} Pays</h1>
            {
                data
                    .sort((a,b)=>(b.population-a.population))
                    .slice(0,nbre)
                    .map((d,index)=>(
                    <div key={index} className="card col-sm-2">
                        <div className="card-text">{d.name.official} : {d.population.toLocaleString()} habitants</div>
                        <img src={d.flags.svg} width="100" height="100%" alt="" /> 
                    </div>
                ))
            }            
        </div>
    );
}

export default Pays;


/**
 * 
 *  <table className="table">
                <thead>
                    <tr>
                        <td>Libelle</td>
                        <td>Sigle</td>
                        <td>Option</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d)=>(                            
                            <tr key="">
                                <td>{d.name.official}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
 */