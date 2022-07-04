function Input({
  error,
  placeholder,
  label,
  fieldType = "input",
  onChange,
  value,
  type = "text",
  showError = false,
}) {
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
      <label style={{width: "90%", color: "var(--green)"}} htmlFor={`input-${label}`}>{label}</label>
      {fieldType === "input" ? (
        <input
          value={value}
          type={type}
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
      {showError && (
        <div
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
        </div>
      )}
    </div>
  );
}

export default Input;
