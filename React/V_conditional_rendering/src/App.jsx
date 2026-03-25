import React from 'react'
import Card from './components/Card'
import { useState } from 'react'
import Contact from './components/Contact';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [contactForm, setContactFrom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const generateData = ()=>{
    setTimeout(()=>{setLoading(false)},2000)
  }
  return (
    <div>
      <h1>Conditional Rendering...</h1>
      {/* <Card name={"khwaja"} />
      <Card />
      {
        isLogged ? <h2>welcome Back</h2> : <button onClick={() => { setIsLogged(true) }}>sign in</button>
      }
      <div>
        <div><button onClick={() => { setContactFrom(!contactForm) }}>{contactForm ? <>X</> : <>signup</>}</button></div>
        {contactForm && <Contact />}

      </div> */}

      <div>
        <button onClick={()=>{setData(true); setLoading(true); generateData()}}>Load Data</button>
        {
          data && <>
          {loading ? <div>Loading......</div>:<div>
            Hello this is our data....
            </div>}
          </>
        }
      </div>

    </div>
  )
}

export default App