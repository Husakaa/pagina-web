import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const Legal = ({ type }: { type: 'privacy' | 'terms' | 'cookies' }) => {
    const getContent = () => {
        switch (type) {
            case 'privacy':
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

                            <p>
                                En <strong>Anubis AI Agency</strong> ("nosotros", "nuestro" o "la Agencia"), nos comprometemos a proteger y respetar su privacidad.
                                Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos su información personal cuando visita nuestro sitio web
                                o utiliza nuestros servicios de consultoría e implementación de Inteligencia Artificial.
                            </p>
                            <p>
                                Cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD) de España.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">1. Responsable del Tratamiento</h3>
                            <p>
                                <strong>Identidad:</strong> Anubis AI Agency<br />
                                <strong>Domicilio:</strong> Avenida Gran Bretaña 7, 29651 Málaga, España<br />
                                <strong>Email de contacto:</strong> contacto@anubisaiagency.com
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">2. Información que Recopilamos</h3>
                            <p>Podemos recopilar y procesar los siguientes datos:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Datos de Identificación:</strong> Nombre, apellidos, dirección de correo electrónico, número de teléfono y empresa.</li>
                                <li><strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, versión, configuración de zona horaria, sistema operativo y plataforma.</li>
                                <li><strong>Datos de Uso:</strong> Información sobre cómo utiliza nuestro sitio web, productos y servicios.</li>
                                <li><strong>Datos de Marketing:</strong> Sus preferencias para recibir comunicaciones de marketing de nuestra parte.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">3. Finalidad del Tratamiento</h3>
                            <p>Utilizamos sus datos personales para los siguientes fines:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Prestación de Servicios:</strong> Para gestionar su cuenta, procesar sus pedidos y ofrecerle nuestros servicios de consultoría.</li>
                                <li><strong>Mejora del Servicio:</strong> Para administrar nuestro sitio web y para operaciones internas, incluyendo resolución de problemas, análisis de datos y pruebas.</li>
                                <li><strong>Comunicaciones:</strong> Para enviarle actualizaciones sobre sus proyectos, boletines informativos (si ha dado su consentimiento) y responder a sus consultas.</li>
                                <li><strong>Seguridad:</strong> Para mantener nuestro sitio seguro y prevenir el fraude.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">4. Base Legal para el Tratamiento</h3>
                            <p>Nuestra base legal para el tratamiento de sus datos personales incluye:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Ejecución de un Contrato:</strong> Necesario para cumplir con nuestros compromisos contractuales con usted.</li>
                                <li><strong>Consentimiento:</strong> Cuando usted nos ha dado permiso explícito para procesar sus datos (por ejemplo, suscripción a newsletter).</li>
                                <li><strong>Interés Legítimo:</strong> Necesario para nuestros intereses comerciales legítimos (por ejemplo, mejorar nuestros servicios), siempre que no prevalezcan sus derechos fundamentales.</li>
                                <li><strong>Obligación Legal:</strong> Necesario para cumplir con una obligación legal o regulatoria.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">5. Destinatarios de los Datos</h3>
                            <p>No vendemos sus datos personales a terceros. Sin embargo, podemos compartir sus datos con:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Proveedores de Servicios:</strong> Terceros que nos prestan servicios de TI, administración de sistemas y marketing (ej. proveedores de hosting, herramientas de análisis).</li>
                                <li><strong>Asesores Profesionales:</strong> Abogados, auditores y aseguradoras.</li>
                                <li><strong>Autoridades:</strong> Cuando sea requerido por ley.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">6. Transferencias Internacionales</h3>
                            <p>
                                Algunos de nuestros proveedores externos pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En tales casos, nos aseguramos de que sus datos estén protegidos mediante la implementación de salvaguardas adecuadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">7. Sus Derechos</h3>
                            <p>Bajo el RGPD, usted tiene derecho a:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Solicitar acceso a sus datos personales.</li>
                                <li>Solicitar la corrección de sus datos personales.</li>
                                <li>Solicitar la supresión de sus datos personales ("derecho al olvido").</li>
                                <li>Oponerse al tratamiento de sus datos personales.</li>
                                <li>Solicitar la limitación del tratamiento de sus datos.</li>
                                <li>Solicitar la portabilidad de sus datos.</li>
                                <li>Retirar su consentimiento en cualquier momento.</li>
                            </ul>
                            <p>Para ejercer cualquiera de estos derechos, por favor contáctenos en legal@anubis-ai.agency.</p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">8. Seguridad de los Datos</h3>
                            <p>
                                Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan accidentalmente, se utilicen o se acceda a ellos de forma no autorizada, se alteren o se divulguen. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tengan una necesidad comercial de conocerlos.
                            </p>
                        </div>
                    </>
                );
            case 'terms':
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-8">Términos y Condiciones de Uso</h1>
                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

                            <p>
                                Estos Términos y Condiciones ("Términos") rigen el uso de los servicios ofrecidos por <strong>Anubis AI Agency</strong> ("nosotros", "nuestro") a través de nuestro sitio web y nuestros servicios de consultoría.
                                Al acceder a nuestro sitio web o contratar nuestros servicios, usted acepta estar legalmente vinculado por estos Términos.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">1. Definiciones</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>"Cliente":</strong> Cualquier persona física o jurídica que contrata nuestros servicios.</li>
                                <li><strong>"Servicios":</strong> Consultoría, desarrollo, implementación y formación en Inteligencia Artificial.</li>
                                <li><strong>"Entregables":</strong> Cualquier software, informe, documento o material creado por nosotros para el Cliente.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">2. Prestación de Servicios</h3>
                            <p>
                                Nos comprometemos a prestar los Servicios con un nivel razonable de habilidad y cuidado profesional. Trabajaremos en estrecha colaboración con el Cliente para definir el alcance, los plazos y los objetivos de cada proyecto.
                                Cualquier cambio en el alcance del proyecto deberá ser acordado por escrito y puede estar sujeto a cargos adicionales.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">3. Propiedad Intelectual</h3>
                            <p>
                                A menos que se acuerde lo contrario por escrito:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Propiedad Preexistente:</strong> Cada parte conserva la propiedad de su propiedad intelectual preexistente.</li>
                                <li><strong>Entregables:</strong> Tras el pago completo de los honorarios, transferimos al Cliente los derechos de propiedad intelectual sobre los Entregables finales específicos creados para él.</li>
                                <li><strong>Herramientas y Metodologías:</strong> Nos reservamos el derecho de utilizar nuestras herramientas, bibliotecas, metodologías y conocimientos generales (know-how) en otros proyectos.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">4. Confidencialidad</h3>
                            <p>
                                Ambas partes acuerdan mantener la confidencialidad de toda la información confidencial revelada por la otra parte durante la vigencia del contrato y por un período de 5 años después de su terminación.
                                Esto incluye secretos comerciales, planes de negocio, datos de clientes y cualquier información técnica no pública.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">5. Honorarios y Pagos</h3>
                            <p>
                                Los honorarios por nuestros Servicios se detallarán en la propuesta comercial o contrato específico. Las facturas son pagaderas dentro de los 30 días siguientes a su fecha de emisión, salvo acuerdo en contrario.
                                Nos reservamos el derecho de suspender los Servicios si los pagos no se realizan a tiempo.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">6. Limitación de Responsabilidad</h3>
                            <p>
                                En la máxima medida permitida por la ley, Anubis AI Agency no será responsable por daños indirectos, incidentales, especiales o consecuentes (incluyendo pérdida de beneficios, datos o interrupción del negocio) que surjan de o estén relacionados con nuestros Servicios.
                                Nuestra responsabilidad total agregada se limitará al monto total pagado por el Cliente por los Servicios en los 12 meses anteriores al reclamo.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">7. Garantías</h3>
                            <p>
                                No garantizamos que nuestros Servicios sean ininterrumpidos o libres de errores. Las soluciones de Inteligencia Artificial son probabilísticas por naturaleza y pueden no ser 100% precisas en todas las situaciones.
                                El Cliente es responsable de verificar los resultados generados por la IA antes de tomar decisiones críticas basadas en ellos.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">8. Ley Aplicable y Jurisdicción</h3>
                            <p>
                                Estos Términos se regirán e interpretarán de acuerdo con las leyes de España. Cualquier disputa que surja en relación con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Málaga, España.
                            </p>
                        </div>
                    </>
                );
            case 'cookies':
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
                        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                            <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

                            <p>
                                Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en el sitio web de <strong>Anubis AI Agency</strong> y cómo puede gestionarlas.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">1. ¿Qué son las cookies?</h3>
                            <p>
                                Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su ordenador o dispositivo móvil. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">2. ¿Cómo utilizamos las cookies?</h3>
                            <p>Utilizamos cookies para los siguientes propósitos:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cookies Estrictamente Necesarias:</strong> Son esenciales para que pueda navegar por el sitio web y utilizar sus funciones. Sin estas cookies, no se pueden proporcionar los servicios que ha solicitado.</li>
                                <li><strong>Cookies de Rendimiento y Análisis:</strong> Recopilan información sobre cómo los visitantes utilizan nuestro sitio web (por ejemplo, qué páginas visitan con más frecuencia). Utilizamos esta información para mejorar el funcionamiento de nuestro sitio. (Ej. Google Analytics).</li>
                                <li><strong>Cookies de Funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que realiza (como su nombre de usuario, idioma o región) y proporcione funciones mejoradas y más personales.</li>
                                <li><strong>Cookies de Publicidad y Marketing:</strong> Se utilizan para ofrecer anuncios más relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio y para medir la eficacia de las campañas publicitarias.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8">3. Cookies de Terceros</h3>
                            <p>
                                En algunos casos, utilizamos cookies proporcionadas por terceros de confianza. Por ejemplo, utilizamos Google Analytics para ayudarnos a comprender cómo utiliza el sitio y cómo podemos mejorar su experiencia.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8">4. Gestión de Cookies</h3>
                            <p>
                                La mayoría de los navegadores web le permiten controlar las cookies a través de la configuración de sus preferencias. Sin embargo, si limita la capacidad de los sitios web para establecer cookies, puede empeorar su experiencia general de usuario, ya que dejará de ser personalizada para usted.
                            </p>
                            <p>Para obtener más información sobre cómo gestionar y eliminar las cookies, visite <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a>.</p>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow container px-6 mx-auto py-32 max-w-4xl">
                {getContent()}
            </main>
            <Footer />
        </div>
    );
};
