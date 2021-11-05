export default function Splash() {
  return (
    <div
      className="welcome"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          background: "#000a",
          textAlign: "center",
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="display">welcome</h1>
      </div>
    </div>
  );
}
