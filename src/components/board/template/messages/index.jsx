function Messages({ product = {} }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "99vw",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        paddingTop: "80px",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "Chango, cursive",
          color: "var(--orange)",
          fontSize: "25px",
          textAlign: "center"
        }}
      >
        {product.person}
      </div>
      <div
        style={{
          fontFamily: "Chango, cursive",
          color: "var(--green)",
          fontSize: "20px",
        }}
      >
        {product.name}
      </div>
      <div
        style={{
          fontFamily: "Chango, cursive",
          color: "var(--white)",
          fontSize: "20px",
          margin: "0 100px",
          textAlign: "justify"
        }}
      >
        {product.message}
      </div>
    </div>
  );
}

export default Messages;
