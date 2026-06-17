import  './Navbar.css'
const Navbar = (props)=>{
    const {name} = props;
    console.log(props)
    return(
        <nav>
            <div onClick={()=>{props.changeName()}} className="logo">{name}</div>
            <ul>
                <li>Home</li>
                <li>Examination</li>
                <li>Result</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Navbar