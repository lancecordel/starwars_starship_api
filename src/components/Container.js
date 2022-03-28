import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/constant";
import StarShipCard from "./StarShipCard";
import Header from "./Header";

function Container(props) {
    const [ships, setShips] = useState([]);

    async function fetchData(){
        try{
        const {data} = await axios.get(BASE_URL);
        const {results} = data
        setShips(results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        console.log(ships)
        fetchData()
    },[])

  return (
    <div className="container">
        <Header/>
        {
            ships.map((ship, index) =>{
                return (
                    <div className="starshipcard">
                        <StarShipCard name={ship.name}
                         key={index} crew={ship.crew} 
                         speed={ship.max_atmosphering_speed}
                         class={ship.starship_class}
                         />
                    </div>
                )
            })
        }                
    </div>
  )
}

export default Container