function Button ({children, onClick, backgroundColor, size}){

  const buttonSize = () => {
    switch (size) {
      case "large":
        return "80px"
      case "medium":
        return "80px"
      default:
        return "40px"
    }
  }


  return <button style={{width: buttonSize(), height: "50px", color: "var(--white)", backgroundColor: backgroundColor}} onClick={onClick}>{children}</button>
}

export default Button