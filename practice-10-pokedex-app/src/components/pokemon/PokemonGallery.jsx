export default function PokemonGallery() {
  return (
    <main className="grid grid-cols-5 gap-8 px-32 mb-8">
      {new Array(20).fill(0).map((v, i) => (
        <div className="h-52 border rounded-xl bg-blue-300" key={i}>
          {v}
        </div>
      ))}
    </main>
  );
}
