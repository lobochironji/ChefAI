import chefLogo from '/src/assets/chef.svg'
export default function Header(){
    return(
    <header>
        <img src={chefLogo} alt="Image of robot chef" className="logo"/>
        <h1>ChefAI</h1>
    </header>
    )
}