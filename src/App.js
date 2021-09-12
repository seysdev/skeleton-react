import "./styles/main.scss";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { ProductsPage } from "./pages/products/products.page";

export function App() {
  return (
    <div className="wrap container mx-auto flex flex-col h-screen">
      <Header />
      <Main>
        <ProductsPage />
      </Main>
      <Footer />
    </div>
  );
}
