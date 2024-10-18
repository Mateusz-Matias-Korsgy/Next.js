
const Spinner = () => {
    return (
      <>
          <div style={spinnerWrap}>
              <div style={spinner}>
                  Loading...
              </div>
          </div>
      </>
    )
  }
  
  export default Spinner
  
  
  const spinnerWrap = {
      position: "fixed",
      width: "100%",
      height: "100%",
      display: "flex",
      background: "rgb(0 0 0 / 52%)",
      top: "0",
      zIndex: "10000000",
  }
  const spinner = {
      margin: "auto",
      color: "white"
  }