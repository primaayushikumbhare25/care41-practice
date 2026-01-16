export default function PackagesPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Packages</h1>
    </div>
  );
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: "32px",
    fontWeight: "600",
  },
};
