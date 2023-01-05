
import ThemeProvider from "./theme";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
