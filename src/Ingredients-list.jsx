export default function Ingredientlist(props){    

    
    return  (
        <section>
            <h2 className="ingredient-list">Ingredients on hand :</h2>
            <ul className="ingredients-ullist">
                {props.ingredientsListArray}
            </ul>
            {props.ingredientsarraylength > 4 &&
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a Recipe?</h3>
                    <p>Get a recipe from your list of ingredients</p>
                </div>
                {(props.requestRecipe && !props.recipe)? <img src= "https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif" className="loadingIcon"/>:null}
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}
