import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Argazo SL",
  description: "Política de privacidad y protección de datos de Argazo SL.",
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
        <p>
          Última actualización: 6 de febrero de 2026
        </p>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            1. Responsable del tratamiento
          </h2>
          <ul className="list-none space-y-1">
            <li><strong>Denominación social:</strong> Argazo SL</li>
            <li><strong>CIF:</strong> B-XXXXXXXX</li>
            <li><strong>Domicilio social:</strong> [Dirección], A Coruña, España</li>
            <li><strong>Correo electrónico:</strong> [email@argazo.es]</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            2. Datos que recopilamos
          </h2>
          <p>
            En Argazo SL podemos recopilar los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Datos de navegación (cookies, dirección IP, tipo de navegador)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            3. Finalidad del tratamiento
          </h2>
          <p>Los datos personales recogidos serán tratados con las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Gestionar las solicitudes de contacto y consultas recibidas.</li>
            <li>Prestar los servicios contratados.</li>
            <li>Enviar comunicaciones comerciales, siempre que el usuario haya dado su consentimiento expreso.</li>
            <li>Cumplir con las obligaciones legales aplicables.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            4. Base jurídica del tratamiento
          </h2>
          <p>
            El tratamiento de sus datos personales se basa en:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              <strong>Consentimiento del interesado</strong> (art. 6.1.a RGPD): cuando el
              usuario envía un formulario de contacto o se comunica voluntariamente con nosotros.
            </li>
            <li>
              <strong>Ejecución de un contrato</strong> (art. 6.1.b RGPD): cuando el
              tratamiento es necesario para la prestación de los servicios solicitados.
            </li>
            <li>
              <strong>Interés legítimo</strong> (art. 6.1.f RGPD): para la mejora de
              nuestros servicios y la seguridad de la plataforma.
            </li>
            <li>
              <strong>Obligación legal</strong> (art. 6.1.c RGPD): para el cumplimiento
              de obligaciones fiscales y mercantiles.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            5. Plazo de conservación
          </h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para cumplir con
            la finalidad para la que fueron recogidos y para determinar las posibles
            responsabilidades derivadas de dicha finalidad. En el caso de datos de clientes,
            se conservarán durante la vigencia de la relación contractual y, una vez
            finalizada, durante los plazos legalmente establecidos (mínimo 5 años conforme
            al Código de Comercio).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            6. Destinatarios de los datos
          </h2>
          <p>
            Los datos personales no se cederán a terceros, salvo obligación legal. En caso
            de utilizar proveedores de servicios (hosting, correo electrónico, herramientas
            de análisis), estos actuarán como encargados del tratamiento y habrán suscrito
            los correspondientes contratos de encargo de tratamiento conforme al art. 28 del RGPD.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            7. Transferencias internacionales
          </h2>
          <p>
            En el caso de que algunos de nuestros proveedores de servicios se encuentren
            fuera del Espacio Económico Europeo, nos aseguramos de que ofrezcan garantías
            adecuadas conforme al RGPD, como cláusulas contractuales tipo aprobadas por
            la Comisión Europea o decisiones de adecuación.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            8. Derechos del interesado
          </h2>
          <p>
            De acuerdo con el RGPD y la Ley Orgánica 3/2018 de Protección de Datos
            Personales y garantía de los derechos digitales (LOPD-GDD), usted tiene
            derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Acceso:</strong> conocer si tratamos sus datos y obtener una copia.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            <li><strong>Limitación:</strong> solicitar la restricción del tratamiento en ciertos casos.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
          </ul>
          <p className="mt-3">
            Para ejercer estos derechos, puede contactar con nosotros en{" "}
            <strong>[email@argazo.es]</strong>. Deberá acreditar su identidad adjuntando
            copia de su DNI o documento equivalente.
          </p>
          <p className="mt-2">
            Asimismo, tiene derecho a presentar una reclamación ante la{" "}
            <strong>Agencia Española de Protección de Datos (AEPD)</strong> en{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sea-mid underline hover:text-sea-deep"
            >
              www.aepd.es
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            9. Cookies
          </h2>
          <p>
            Este sitio web puede utilizar cookies propias y de terceros para mejorar la
            experiencia del usuario, analizar el tráfico y personalizar el contenido. El
            usuario puede configurar su navegador para rechazar cookies o ser avisado
            cuando se envíen. Para más información, consulte nuestra política de cookies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            10. Seguridad
          </h2>
          <p>
            Argazo SL adopta las medidas técnicas y organizativas necesarias para
            garantizar la seguridad de los datos personales y evitar su alteración,
            pérdida, tratamiento o acceso no autorizado, conforme al estado de la
            tecnología y la naturaleza de los datos almacenados.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[1.4rem] text-sea-deep mb-3">
            11. Modificaciones
          </h2>
          <p>
            Argazo SL se reserva el derecho a modificar la presente política de
            privacidad para adaptarla a novedades legislativas o jurisprudenciales.
            En caso de cambios significativos, se informará al usuario a través de
            este sitio web.
          </p>
        </section>
      </div>
    </main>
  );
}
