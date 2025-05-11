import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { FavoritesProvider } from "./contexts/FavoriteContext/FavoritesContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
