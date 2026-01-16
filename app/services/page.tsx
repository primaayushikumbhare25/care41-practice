export default function ServicesPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Services</h1>
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
