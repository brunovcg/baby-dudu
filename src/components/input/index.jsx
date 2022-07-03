function Input({ error, placeholder, label, onChange, value, type = "input" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <label htmlFor={`input-${label}`}>{label}</label>
      {type === "input" ? (
        <input
          value={value}
          onChange={onChange}
          style={{
            width: "90%",
            paddingLeft: "5px",
            height: "40px",
            border: "1px solid var(--green)",
            borderRadius: "5px",
          }}
          placeholder={placeholder}
          id={`input-${label}`}
        />
      ) : (
        <textarea
          value={value}
          onChange={onChange}
          style={{
            width: "90%",
            paddingLeft: "5px",
            height: "200px",
            border: "1px solid var(--green)",
            borderRadius: "5px",
          }}
          placeholder={placeholder}
          id={`input-${label}`}
        />
      )}
      {error && <div
        style={{
          color: "var(--red)",
          paddingLeft: "5px",
          fontSize: "14px",
          fontWeight: "bold",
          height: "16px",
          width: "90%",
        }}
      >
        {error || ""}
      </div>}
    </div>
  );
}

export default Input;
