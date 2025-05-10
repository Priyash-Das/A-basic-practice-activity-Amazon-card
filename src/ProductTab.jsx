import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="iQOO 12 5G" idx={0} />
      <Product title="OnePlus 13R 5G" idx={1} />
      <Product title="iPhone 16" idx={2} />
      <Product title="Samsung Galaxy S24 Ultra" idx={3} />
    </div>
  );
}

export default ProductTab;
