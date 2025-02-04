import ReactMarkDown from 'react-markdown'
export default function Recipe(props){
    return (
    <section ref={props.targetRef} className="recipe" aria-live='polite'>
        <h2>Chef Claude Recommends:</h2>
        <ReactMarkDown>{props.recipe}</ReactMarkDown>
    </section>)
}