import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Argazo SL",
  description: "Política de privacidad de Argazo SL.",
};

export default function Privacidad() {
  return (
    <main className="flex-1 py-8 animate-fade-up">
      <Link
        href="/"
        className="text-sea-mid text-[0.9rem] no-underline hover:underline mb-8 inline-block"
      >
        &larr; Volver al inicio
      </Link>

      <h1 className="font-heading text-[2.2rem] font-normal leading-[1.15] mb-8 text-sea-deep">
        Política de Privacidad
      </h1>

      <div className="space-y-6 text-[0.95rem] leading-[1.8] text-kelp">
        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            Responsable
          </h2>
          <p>
            Argazo SL · CIF B-XXXXXXXX · A Coruña, España ·{" "}
            <strong>[email@argazo.es]</strong>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            Datos que recopilamos
          </h2>
          <p>
            Este sitio web no recoge, almacena ni trata datos personales de ningún
            tipo. No utilizamos formularios, cookies, herramientas de analítica ni
            tecnologías de seguimiento.
          </p>
          <p className="mt-2">
            El único enlace externo dirige a WhatsApp. Al utilizarlo, abandonas este
            sitio y quedas sujeto a la{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sea-mid underline hover:text-sea-deep"
            >
              política de privacidad de WhatsApp
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            Alojamiento
          </h2>
          <p>
            El sitio está alojado en Vercel Inc. (EE.&nbsp;UU.), que puede registrar
            datos técnicos de conexión (dirección IP, navegador) en sus propios
            servidores. Puedes consultar su{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sea-mid underline hover:text-sea-deep"
            >
              política de privacidad
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            Tus derechos
          </h2>
          <p>
            Conforme al RGPD y la LOPD-GDD, puedes ejercer tus derechos de acceso,
            rectificación, supresión, oposición, limitación y portabilidad escribiendo
            a <strong>[email@argazo.es]</strong>. También puedes reclamar ante la{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sea-mid underline hover:text-sea-deep"
            >
              Agencia Española de Protección de Datos
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            Cambios
          </h2>
          <p>
            Si en el futuro recopilamos datos personales, actualizaremos esta página
            antes de hacerlo.
          </p>
        </section>
      </div>
    </main>
  );
}
