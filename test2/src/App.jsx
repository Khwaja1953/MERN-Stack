import React from 'react'
import Component1 from './Component1'
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import Fallback from './Error';
// import Component2 from './Component2'
const Component2 = React.lazy(()=> import('./Component2'));

const App = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>home</Link>
        <Link to={"/com"}>Component2</Link>
      </div>
      <h1>Hello world </h1>
      <Component1/>
      <ErrorBoundary FallbackComponent={Fallback} onError={()=>{}}>

      <Routes>
        <Route path='/' element={<Component1/>}/>
        <Route path='/com' element={
          <Suspense fallback={<div>Loading......</div>}>
      <Component2/>
      </Suspense> 
    }      />
      </Routes>
    </ErrorBoundary>


    </div>
  )
}

export default App