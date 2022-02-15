import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios.get( API + "/snacks" )
    .then((res)=>{
      setSnacks(res.data.payload);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="Snacks">
      <section>
        <div className="table">
            {/* <div>{snack.image}</div>
            <div>{snack.is_healthy}</div>
            <div>{snack.name}</div> */}
          <div>
          {snacks.map((snack) => {
            return <Snack key={snack.id} snack={snack} />
          })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Snacks;