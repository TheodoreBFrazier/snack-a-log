import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
  });

  const addSnack = () => {
    axios
      .post(`${API}/snacks`, snack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          required
         />
         <label htmlFor="url">Image:</label>
         <input
           id="url"
           type="text"
           pattern="http[s]*://.+"
           value={snack.url}
           placeholder="http://"
           onChange={handleTextChange}
         />
         <label htmlFor="fiber">Fiber:</label>
         <input
           id="fiber"
           type="number"
           value={snack.fiber}
         />
         <label htmlFor="protein">Protein:</label>
         <input
           id="protein"
           type="number"
           value={snack.protein}
         />
         <label htmlFor="added_sugar">Added Sugar:</label>
         <input
           id="addedsugar"
           type="number"
           value={snack.added_sugar}
         />
         <label htmlFor="is_healthy">Healthy</label>
         <input
           id="is_healthy"
           type="checkbox"
           onChange={handleCheckboxChange}
           checked={snack.is_healthy}
         />

         <br />
         <input type="submit" />
      </form>
    </div>
  );
}

export default SnackNewForm;