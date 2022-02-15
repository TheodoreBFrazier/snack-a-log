import { Link } from "react-router-dom";
import regular from "../assets/heart-regular.png";
import solid from "../assets/heart-solid.png"



function Snack({ snack }) {
  return (
    <article className="Snack">
      {/* <h4>the sanck health</h4> */}
      <img className="fit-picture" src={snack.image} alt={snack.name}/>
      <div>{snack.is_healthy ? (<span><img src={solid} alt=""/> </span>) : (<span><img src={regular} alt=""/> </span>)}</div>
      <div><Link to={`/snacks/${snack.id}`}><h4>{snack.name}</h4></Link></div>
    </article>
  )
}

export default Snack;