import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <AppRouter>
        <Navbar />
        <Header />
      </AppRouter>
    </>
  );
}

export default App;
