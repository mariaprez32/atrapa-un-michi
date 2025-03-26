import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { FavoritesProvider } from "./contexts/FavoriteContext/FavoritesContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
