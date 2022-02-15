import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import solid from "../assets/heart-solid.png";
import regular from "../assets/heart-regular.png";


const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const [snack, setSnack] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(API + "/snacks/" + id)
      .then((res)=>{
        setSnack(res.data.payload);
      }).catch((err)=>{
        console.log(err);
      })
  }, [id, API]);

  const handleDelete=()=>{
    axios.delete(API + "/snacks/" + id)
      .then((res)=>{
        navigate("/snacks")
      }).catch((err)=>{
        console.log(err);
      })
  }

  return <article>
    <div>{snack.is_healthy ? <span><img src={solid}/></span> : <span><img src={regular}/></span>}</div>
    <div>{snack.name}</div>
    <div><img src={snack.image} alt={snack.name}/></div>
    <div>{snack.protein}</div>
    <div>{snack.fiber}</div>
    <div>{snack.added_sugar}</div>


    <div>
      <Link to={`/snacks`}>
        <button>Back</button>
      </Link>
    </div>
    {/* <div>
      <Link to={`/snacks/${snack.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div> */}
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  </article>
}

export default SnackDetails;