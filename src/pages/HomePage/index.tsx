import { Header } from "../../components/Header/Header";
import { Cards } from "../../components/HomePage/Cards";
import { Footer } from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <div>
        <div className="bg-home-banner min-h-[450px] bg-center bg-cover bg-no-repeat px-8 md:px-8 xl:px-40 py-40 flex flex-wrap items-center bg-bgPrimary">
          <h1 className="w-full text-white text-5xl mb-4">
            Bienvenido a PolpoEvents
          </h1>
        </div>
        <div className="px-20 py-12">
          <div className="text-3xl text-white font-bold mb-12">
            Recomendados para ti
          </div>
          <Cards />
          <div className="text-3xl text-white font-bold my-12">
            Eventos
          </div>
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
