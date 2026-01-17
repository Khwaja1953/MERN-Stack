import { useEffect, useState } from "react"

const Section = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    } );
    console.log(theme)
    useEffect(() => {

        localStorage.setItem("theme", theme);
    }, [theme])
    return (
        <div className={`${theme == 'light' ? "light" : 'dark'}`} >
            <div className="flex justify-between items-center">
                <h1>i am header</h1> <button onClick={() => { setTheme(theme => theme == 'light' ? "dark" : "light") }} className={`border mt-3 mr-3 rounded-2xl w-16 h-6 overflow-hidden`}><div className={`border h-6 w-6  rounded-full relative  ${theme == 'dark'?'left-10 bg-white':'left-0'} duration-200 bg-black`}></div></button>
            </div> 
            <div >
                i am body
            </div>
        </div>
    )
}
export default Section