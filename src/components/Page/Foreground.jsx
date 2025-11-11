const Foreground = ({ children }) => (
  <div
    style={{
      position: "fixed",
      inset: 50,
      padding: 20,
      boxSizing: "border-box",
      zIndex: 1,
      overflow: "auto",
    }}
  >
    {children}
  </div>
);
export default Foreground;
