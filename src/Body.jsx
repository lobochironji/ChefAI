import React from 'react'
import { useRef, useEffect} from 'react';
import Recipe from './Recipe';
import IngredientsList from './Ingredients-list';
import { getRecipeFromMistral } from 'C:/Programming/React/chefclaude-app/src/ai.js';
export default function Body()
{
    const targetRef = useRef(null);
    const [ingredients,setIngredients] = React.useState([]);
    const [recipe,setRecipe] = React.useState(null);
    const [warning, setWarning] = React.useState(""); 
    const ingredientsList = ingredients.map((ingredient) => 
    <section key={ingredient} className="ingredientsList">
        <li>{ingredient}
        <button id={ingredient} className="hiddenbutton" onClick={removeItem}></button>
        </li>
    </section>)

    function removeItem(index){
        const copyIngredients = [...ingredients]
        copyIngredients.splice(ingredients.indexOf(index.target.id),1);
        // setIngredients(() => ingredients);
        setIngredients((prevIngredients) => prevIngredients = copyIngredients)
    }

    function getIngredient(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient").trim();
        if (newIngredient === "") {
            setWarning("Ingredient cannot be empty!");
        } else if (ingredients.includes(newIngredient)) {
            setWarning("This ingredient is already in the list!");
        } else {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
            setWarning("");
        }
        event.currentTarget.reset();
    }
    
    const [requestRecipe,setRequestRecipe] = React.useState(false);
    requestRecipe === true ? recipe && setRequestRecipe(false) : null
    if (requestRecipe === true){
        if(recipe === !null){
            setRequestRecipe(false)
        }
        else{}
    }
    else{}
    async function getRecipe(){
        setRecipe(null);
        setRequestRecipe(true);
        const storedRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(storedRecipe);
    }

    useEffect(() => {
        if (recipe) {
          targetRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }, [recipe]);

    
    return(
       <main >
        <div className="mainsection">
            <form onSubmit={getIngredient} className="input">
                <input 
                className="textbox" 
                placeholder="e.g. oregano" 
                name="ingredient"
                />
                <button type="submit">+ Add Ingredients</button>
            </form>
            {warning && <p className="warning">{warning}</p>}
            {ingredients.length > 0 && <IngredientsList
            ingredientsListArray = {ingredientsList}
            ingredientsarraylength = {ingredients.length}
            getRecipe = {getRecipe}
            recipe = {recipe}
            requestRecipe = {requestRecipe}
            />}
        </div>
            {recipe && <Recipe 
            recipe={recipe}
            targetRef={targetRef}
            /> }
        </main>
    )
}
