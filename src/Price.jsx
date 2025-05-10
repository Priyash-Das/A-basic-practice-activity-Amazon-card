function Price({ oldPrice, newPrice }) {
  let oldStyle = { textDecorationLine: "line-through" };
  let newStyle = { fontWeight: "bold" };
  let styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    width: "100%",
  };

  return (
    <div style={styles}>
      <span style={oldStyle}>&#x20B9;{oldPrice}</span>
      &nbsp; &nbsp;
      <span style={newStyle}>&#x20B9;{newPrice}</span>
    </div>
  );
}

export default Price;
