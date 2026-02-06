import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center animate-fade-up">
      <h1 className="font-heading text-[2.8rem] font-normal leading-[1.15] mb-6 text-sea-deep max-[500px]:text-[2.2rem]">
        Creamos
        <br />
        <em className="italic text-sea-mid">soluciones sencillas.</em>
      </h1>
      <p className="text-[1.05rem] leading-[1.7] text-kelp mb-10">
        Software, aplicaciones y herramientas digitales — diseñadas para
        resolver problemas reales sin complejidad innecesaria.
      </p>
      <WhatsAppButton phoneNumber="34600000000" />
    </main>
  );
}
