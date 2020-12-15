import React, {useState, useEffect} from "react"
import './App.css';
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")
  const {register, handleSubmit, errors} = useForm()
  
  const onSubmit = (data) => {
    console.log(data)}
  
  
  useEffect(() => {
    
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random", { method: "GET",
    headers: {
      "x-rapidapi-key": "6769fc4edbmsh022653918a3cbd9p1d66ddjsne185340ac03d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": true
    }})
    .then(res =>res.json())
    .then(json => setJoke(json.text))
   
  }, [count])
  
    return (
    <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} required name="image" type="file"/>
          <button>Submit</button>
        </form>
      {/* <button onClick={() =>setCount(count + 1)}>
      You've read {count} jokes
      </button>
    {joke} */}
    </div> 
   
   

  );
}

export default App;
