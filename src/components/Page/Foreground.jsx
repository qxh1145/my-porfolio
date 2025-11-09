const Foreground = ({ children }) => (
  <div
    style={{
      position: "fixed",
      inset: 50,              // trùng viền với Background
      padding: 20,            // cách trong box đúng 40px
      boxSizing: "border-box",
      zIndex: 1,              // nằm trên Background
      overflow: "auto",
    }}
  >
    {children}
  </div>
);
export default Foreground;
