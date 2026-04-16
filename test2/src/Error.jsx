function Fallback({error, resetErrorBoundary}){
return(
    <div role="alert">
      <p>Something went wrong:</p>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
)
}
export default Fallback