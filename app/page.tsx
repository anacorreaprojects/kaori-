import LeadForm from "./lead-form";
const produtos = [
  {
    nome: "Buquê Aurora",
    descricao: "Flores marcantes para surpreender de verdade.",
    preco: "R$ 89,90",
    emoji: "🌷",
  },
  {
    nome: "Buquê Silvestre",
    descricao: "Uma combinação natural e cheia de personalidade.",
    preco: "R$ 119,90",
    emoji: "🌻",
  },
  {
    nome: "Buquê Inesperado",
    descricao: "Um presente original para momentos especiais.",
    preco: "R$ 149,90",
    emoji: "🌹",
  },
];

export default function Home() {
  const whatsapp = "https://wa.me/5592999999999";

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#33251f]">
      <header className="flex items-center justify-between border-b border-[#eadfd5] px-6 py-5 md:px-16">
        <a href="#" className="text-3xl font-semibold tracking-[0.2em]">
          kaori<span className="text-[#a35e48]">.</span>
        </a>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#produtos">Buquês</a>
          <a href="#sobre">Nossa essência</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href="#produtos"
          className="rounded-full bg-[#754735] px-5 py-3 text-sm text-white"
        >
          Comprar agora
        </a>
      </header>

      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#a35e48]">
            Presentes com personalidade
          </p>

          <h1 className="text-5xl leading-tight font-semibold md:text-7xl">
            Flores que fogem do{" "}
            <span className="font-serif italic text-[#a35e48]">comum.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#78675e]">
            Buquês criativos para transformar sentimentos em presentes
            inesquecíveis. Surpreenda com algo tão único quanto quem você ama.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="rounded-full bg-[#754735] px-7 py-4 text-white"
            >
              Encontrar meu buquê
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d7c2b5] px-7 py-4"
            >
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-8 text-sm text-[#78675e]">
            ✿ Feitos com carinho · Presentes fora do óbvio
          </p>
        </div>

        <div className="flex min-h-[340px] items-center justify-center rounded-[2rem] bg-[#f0e2d5] p-8 md:min-h-[450px]">
          <div className="text-center">
            <div className="text-9xl">💐</div>
            <p className="mt-6 font-serif text-2xl italic text-[#754735]">
              Um presente que conta uma história.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f4eae2] px-6 py-14 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#a35e48]">
          A essência da Kaori
        </p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Não é só um buquê. É uma memória.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#78675e]">
          Acreditamos que presentear pode ser uma experiência original.
          Criamos combinações para celebrar pessoas, histórias e momentos
          especiais.
        </p>
      </section>

      <section id="produtos" className="px-6 py-16 md:px-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[#a35e48]">
          Nossa coleção
        </p>

        <h2 className="mt-3 mb-10 text-3xl font-semibold md:text-4xl">
          Escolha sua surpresa
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {produtos.map((produto) => (
            <article
              key={produto.nome}
              className="overflow-hidden rounded-3xl border border-[#eadfd5] bg-white"
            >
              <div className="flex h-56 items-center justify-center bg-[#f4eae2] text-8xl">
                {produto.emoji}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{produto.nome}</h3>

                <p className="mt-2 min-h-12 leading-6 text-[#78675e]">
                  {produto.descricao}
                </p>

                <p className="mt-4 font-medium text-[#754735]">
                  {produto.preco}
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block rounded-full border border-[#754735] px-5 py-3 text-center text-[#754735]"
                >
                  Tenho interesse
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl bg-[#754735] px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Faça alguém sorrir hoje.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
            Conte para nós quem você quer surpreender. Vamos encontrar o
            presente ideal.
          </p>

          <a
            id="contato"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full bg-white px-7 py-4 font-medium text-[#754735]"
          >
            Conversar com a Kaori
          </a>
        </div>
      </section>


  <lead-form />

      <footer className="border-t border-[#eadfd5] px-6 py-7 text-center text-sm text-[#78675e]">
        © 2026 Kaori — Presentes fora do comum.
      </footer>
    </main>
  );
}