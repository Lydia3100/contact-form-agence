import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="h-full bg-black/40 flex items-center justify-center">
        <ContactForm />
      </div>
    </main>
  );
}