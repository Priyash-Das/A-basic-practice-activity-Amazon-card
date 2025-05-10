function Image({ src, alt }) {
  let styles = {
    paddingTop: "20px",
    width: "90%",
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  return <img src={src} alt={alt} style={styles} />;
}

export default Image;
