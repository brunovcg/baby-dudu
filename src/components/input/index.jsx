function Input ({error, placeholder, label, onChange}) {


  return(
    <div style={{width: "100%", height: "fit-content", display: "flex", justifyContent: "center"}}>
      <label htmlFor={`input-${label}`}>{label}</label> 
      <input onChange={onChange} style={{width: "90%", paddingLeft: "5px", height: "40px"}} placeholder={placeholder} id={`input-${label}`}/>
      <div>{error || ""}</div>
    </div>
  )
}

export default Input