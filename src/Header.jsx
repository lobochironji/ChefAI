import chefLogo from 'C:/Programming/React/chefclaude-app/src/chef.svg'
export default function Header(){
    return(
    <header>
        <img src={chefLogo} alt="Image of robot chef" className="logo"/>
        <h1>ChefAI</h1>
    </header>
    )
}