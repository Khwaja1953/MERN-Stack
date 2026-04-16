import React from 'react'
// import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Error';

const Section1 = React.lazy(()=>import("./Component/Section1"));

const App = () => {
  return (
    <div>
      <nav>

        <NavLink to={"/"}>
          Home
        </NavLink>
        <NavLink to={"/section"}>Section</NavLink>
      </nav>
      <h1>Lazy load in react.....</h1>
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route path='/' element={<Section2/>}/>
        <Route path='/section' element={
          <Suspense fallback={<div>Loading......please wait</div>}>
            <Section1/>
          </Suspense>
        }/>
      </Routes>
        </ErrorBoundary>
    </div>
  )
}

export default App