import {useState } from 'react';
function Navbar(){
    const [isOpen, setisOpen] = useState(false);
    function toggleState(){
        setisOpen(!isOpen);
    }
    return(
        <>
        <div style={isOpen?style.dark:style.light}>

        <h3>Navbar</h3>
        <button onClick={toggleState}>{isOpen?"Hide":"Show"}</button>
        {isOpen && (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>profile</li>
                    <li>about</li>
                </ul>
            </nav>
        )}
        </div>

        </>
    )
}
export default Navbar;
const style = {
    dark: {
        backgroundColor: "green"
    },
    light: {
        backgroundColor: "red"
    }
}