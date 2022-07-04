import Button from "../../../../components/button";
const Edit = ({onClick}) => {
  return (
    <Button
    onClick={onClick}
      backgroundColor="var(--red)"
      otherStyles={{
        position: "absolute",
        top: "15px",
        right: "15px",
        fontSize: "12px",
        height: "40px"
      }}
    >
      Edit
    </Button>
  );
};

export default Edit;
