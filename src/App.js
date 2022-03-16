import { About } from "./components/About";
import { Background } from "./components/Background";
import { Brand } from "./components/Brand";
import { ButtonHamburguer } from "./components/ButtonHamburguer";
import { Food } from "./components/Food";
import { Footer } from "./components/Footer";
import { ImageBurguer } from "./components/ImageBurguer";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { TextBurger } from "./components/TextBurger";
import { Title } from "./components/Title";

export function App() {
  return (
    <div>
      <Background>
        <Navbar>
          <Brand />
          <Menu />
          <Search />
        </Navbar>
        <ButtonHamburguer />
        <Title />
        <About />
        <ImageBurguer />
        <Food />
        <TextBurger />
        <Footer />
      </Background>
    </div>
  );
}
