import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  if(snackHealth===true){
    return (
    <div>
      <img src={heartSolid} alt="healthy food"/>
      <p>healthy food</p>
    </div>
    ) else {
      <div>
        <img src={heartOutline} alt="unhealthy food"/>
      </div>
    }  
  }
  
}

export default HeartHealth;
