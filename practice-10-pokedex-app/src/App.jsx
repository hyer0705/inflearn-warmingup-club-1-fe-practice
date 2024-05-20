import Header from "./components/Header";
import Input from "./components/Input";
import PokemonGallery from "./components/pokemon/PokemonGallery";

function App() {
  return (
    <>
      <Header />
      <Input />
      <PokemonGallery />
      <div className="flex justify-center mb-8">
        <button className="bg-slate-900 rounded-md border-0 text-white font-semibold py-2 px-4">
          MORE
        </button>
      </div>
    </>
  );
}

export default App;
