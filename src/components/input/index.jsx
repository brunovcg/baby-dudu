function Input({ error, placeholder, label, onChange, value }) {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <label htmlFor={`input-${label}`}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        style={{
          width: "90%",
          paddingLeft: "5px",
          height: "40px",
          border: "1px solid var(--green)",
        }}
        placeholder={placeholder}
        id={`input-${label}`}
      />
      <div>{error || ""}</div>
    </div>
  );
}

export default Input;
