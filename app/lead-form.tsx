
"use client";

import { useState, type FormEvent } from "react";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMensagem("");
    setCarregando(true);

    try {
      const resposta = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, whatsapp }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        setMensagem(resultado.erro || "Não foi possível realizar o cadastro.");
        return;
      }

      setMensagem("Cadastro realizado com sucesso!");
      setNome("");
      setEmail("");
      setWhatsapp("");
    } catch {
      setMensagem("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section id="cadastro" className="bg-[#f4eae2] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-xl">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-[#a35e48]">
          Fique por dentro
        </p>

        <h2 className="mt-3 text-center text-3xl font-semibold">
          Receba novidades da Kaori
        </h2>

        <p className="mt-4 text-center leading-7 text-[#78675e]">
          Cadastre seus dados para conhecer nossas coleções e receber
          novidades.
        </p>

        <form
          onSubmit={enviarFormulario}
          className="mt-8 space-y-4 rounded-3xl bg-white p-6 md:p-8"
        >
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm font-medium">
              Nome completo
            </label>
            <input
              id="nome"
              name="nome"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="w-full rounded-xl border border-[#d7c2b5] px-4 py-3 outline-none focus:border-[#754735]"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-[#d7c2b5] px-4 py-3 outline-none focus:border-[#754735]"
              placeholder="voce@exemplo.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">
              WhatsApp com DDD
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              required
              minLength={10}
              maxLength={20}
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
              className="w-full rounded-xl border border-[#d7c2b5] px-4 py-3 outline-none focus:border-[#754735]"
              placeholder="(92) 99999-9999"
            />
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full rounded-full bg-[#754735] px-6 py-4 font-medium text-white transition hover:bg-[#583426] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {carregando ? "Enviando..." : "Quero receber novidades"}
          </button>

          <p aria-live="polite" role="status" className="text-center text-sm">
            {mensagem}
          </p>

          <p className="text-xs leading-5 text-[#78675e]">
            Seus dados serão utilizados para contato e novidades da Kaori.
          </p>
        </form>
      </div>
    </section>
  );
}
