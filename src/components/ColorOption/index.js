const ColorOption = ({ color }) => {
  const style = {
    backgroundColor: color,
    width: 37,
    height: 37,
    borderRadius: "50%",
    border: "none",
  };

  return <div style={style}></div>;
};

export default ColorOption;
