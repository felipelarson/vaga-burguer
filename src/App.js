import { About } from "./components/About";
import { Background } from "./components/Background"
import { Brand } from "./components/Brand";
import { ButtonHamburguer } from "./components/ButtonHamburguer";
import { Footer } from "./components/Footer";
import { ImageBurguer } from "./components/ImageBurguer";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Title } from "./components/Title";

export function App() {
  return (
    <div>
      <Background>
        <Navbar>
          <Brand />
          <Menu />
          <Search />
          <ButtonHamburguer />
        </Navbar>
        <Title />
        <About />
        <ImageBurguer />
        <Footer />
      </Background>
    </div>
  );
}
