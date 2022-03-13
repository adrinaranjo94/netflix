import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <AppRouter>
        <Content />
      </AppRouter>
    </>
  );
}

export default App;
