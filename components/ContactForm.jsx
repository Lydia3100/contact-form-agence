"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    type: "",
    message: "",
    jour: "Lundi",
    heure: "7h",
    minute: "0m",
  });

  const [disponibilites, setDisponibilites] = useState([
    "Lundi à 9h45",
    "Lundi à 9h45",
  ]);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addDisponibilite = () => {
    const dispo = `${formData.jour} à ${formData.heure}${formData.minute}`;
    setDisponibilites((prev) => [...prev, dispo]);
  };

  const removeDisponibilite = (index) => {
    setDisponibilites((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const payload = {
      ...formData,
      disponibilites,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Erreur lors de l’envoi.");
        return;
      }

      setStatus("Message envoyé avec succès.");

      setFormData({
        civilite: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        type: "",
        message: "",
        jour: "Lundi",
        heure: "7h",
        minute: "0m",
      });

      setDisponibilites([]);
    } catch (error) {
      setStatus("Erreur serveur.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1050px] px-6 py-3 text-white"
    >
      <h1 className="text-[28px] font-extrabold uppercase mb-4">
        Contactez l’agence
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-[16px] font-bold uppercase mb-4">
            Vos coordonnées
          </h2>

          <div className="flex gap-6 text-[14px] mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="civilite"
                value="Mme"
                checked={formData.civilite === "Mme"}
                onChange={handleChange}
                className="accent-white"
              />
              Mme
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="civilite"
                value="M"
                checked={formData.civilite === "M"}
                onChange={handleChange}
                className="accent-white"
              />
              M
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full rounded-full bg-white/95 px-5 py-3 text-[14px] text-gray-700 outline-none"
              placeholder="Nom"
              required
            />

            <input
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full rounded-full bg-white/95 px-5 py-3 text-[14px] text-gray-700 outline-none"
              placeholder="Prénom"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-full bg-white/95 px-5 py-3 text-[14px] text-gray-700 outline-none"
              placeholder="Adresse mail"
              required
            />
          </div>

          <div>
            <input
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full rounded-full bg-white/95 px-5 py-3 text-[14px] text-gray-700 outline-none"
              placeholder="Téléphone"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[16px] font-bold uppercase mb-4">
            Votre message
          </h2>

          <div className="flex flex-wrap gap-6 text-[14px] mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="Demande de visite"
                checked={formData.type === "Demande de visite"}
                onChange={handleChange}
                className="accent-white"
              />
              Demande de visite
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="Être rappelé.e"
                checked={formData.type === "Être rappelé.e"}
                onChange={handleChange}
                className="accent-white"
              />
              Être rappelé.e
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="Plus de photos"
                checked={formData.type === "Plus de photos"}
                onChange={handleChange}
                className="accent-white"
              />
              Plus de photos
            </label>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[140px] rounded-[24px] bg-white/95 px-5 py-3 text-[14px] text-gray-700 outline-none resize-none"
            placeholder="Votre message"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
        <div>
          <h2 className="text-[16px] font-bold uppercase mb-4">
            Disponibilités pour une visite
          </h2>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <select
              name="jour"
              value={formData.jour}
              onChange={handleChange}
              className="rounded-full bg-white/95 px-4 py-2 text-[14px] text-gray-700 outline-none"
            >
              <option>Lundi</option>
              <option>Mardi</option>
              <option>Mercredi</option>
              <option>Jeudi</option>
              <option>Vendredi</option>
            </select>

            <select
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              className="rounded-full bg-white/95 px-4 py-2 text-[14px] text-gray-700 outline-none"
            >
              <option>7h</option>
              <option>8h</option>
              <option>9h</option>
              <option>10h</option>
              <option>11h</option>
            </select>

            <select
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              className="rounded-full bg-white/95 px-4 py-2 text-[14px] text-gray-700 outline-none"
            >
              <option>0m</option>
              <option>15m</option>
              <option>30m</option>
              <option>45m</option>
            </select>

            <button
              type="button"
              onClick={addDisponibilite}
              className="rounded-full bg-purple-700 px-6 py-2 text-[14px] font-bold uppercase text-white"
            >
              Ajouter dispo
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {disponibilites.map((dispo, index) => (
              <div
                key={index}
                className="flex w-fit items-center gap-2 rounded-full bg-white/85 px-4 py-1 text-[12px] text-gray-600"
              >
                <span>{dispo}</span>
                <button type="button" onClick={() => removeDisponibilite(index)}>
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button
            type="submit"
            className="rounded-full bg-[#f7b500] px-8 py-2 text-[14px] font-bold uppercase text-white shadow-lg"
          >
            Envoyer
          </button>

          {status && <p className="text-sm text-white">{status}</p>}
        </div>
      </div>
    </form>
  );
}