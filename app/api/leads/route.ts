
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const nome =
      typeof body.nome === "string" ? body.nome.trim() : "";
    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";
    const whatsapp =
      typeof body.whatsapp === "string"
        ? body.whatsapp.trim()
        : "";

    if (nome.length < 2 || nome.length > 100) {
      return NextResponse.json(
        { erro: "Informe um nome válido." },
        { status: 400 }
      );
    }

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { erro: "Informe um e-mail válido." },
        { status: 400 }
      );
    }

    const numeros = whatsapp.replace(/\D/g, "");

    if (numeros.length < 10 || numeros.length > 15) {
      return NextResponse.json(
        { erro: "Informe um WhatsApp válido com DDD." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert({ nome, email, whatsapp })
      .select("id, nome, email, whatsapp, criado_em")
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { erro: "Este e-mail já está cadastrado." },
          { status: 409 }
        );
      }

      console.error("Erro ao salvar lead:", error.code);

      return NextResponse.json(
        { erro: "Não foi possível concluir o cadastro." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { mensagem: "Cadastro recebido com sucesso.", lead: data },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { erro: "Não foi possível processar a solicitação." },
      { status: 400 }
    );
  }
}
