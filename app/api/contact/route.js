import { getConnection } from "@/lib/db";

export async function POST(request) {
  console.log(process.env.DB_NAME);
  try {
    const body = await request.json();

    const {
      civilite,
      nom,
      prenom,
      email,
      telephone,
      type,
      message,
      disponibilites,
    } = body;

    if (!nom || !prenom || !email || !message) {
      return Response.json(
        { error: "Veuillez remplir les champs obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Email invalide." }, { status: 400 });
    }

    const conn = await getConnection();

    await conn.execute(
      `
      INSERT INTO contacts
      (civilite, nom, prenom, email, telephone, type_message, message, disponibilites)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        civilite,
        nom,
        prenom,
        email,
        telephone,
        type,
        message,
        JSON.stringify(disponibilites || []),
      ]
    );

    await conn.end();

    return Response.json(
      { message: "Message enregistré avec succès." },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Erreur serveur." }, { status: 500 });
  }
}