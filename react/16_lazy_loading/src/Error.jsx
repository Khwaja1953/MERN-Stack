function Fallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  );
}
export default Fallback