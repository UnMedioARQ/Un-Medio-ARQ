import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <HeroSection
        title="Contacto"
        subtitle="Estamos aquí para responder a tus inquietudes y comenzar a trabajar juntos en tu próximo proyecto"
        imageUrl="https://images.pexels.com/photos/7613483/pexels-photo-7613483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fullHeight={false}
      />

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle
                title="Ponte en contacto"
                subtitle="Queremos escuchar sobre tu proyecto y cómo podemos ayudar a hacerlo realidad"
              />

              <ContactForm />
            </div>

            <div ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-primary-50 p-8 rounded-lg h-full"
              >
                <h3 className="text-2xl mb-8">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="mt-1 mr-4 text-accent-600" />
                    <div>
                      <h4 className="font-medium mb-1">Dirección</h4>
                      <p className="text-gray-600">
                        Av. Los Sargazos 1855, Local 11<br />
                        Viña Del Mar, Valparaíso.<br />
                        Chile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={24} className="mt-1 mr-4 text-accent-600" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                      proyectos@unmedioarq.com<br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={24} className="mt-1 mr-4 text-accent-600" />
                    <div>
                      <h4 className="font-medium mb-1">Teléfono</h4>
                      <p className="text-gray-600">
                        +56 9 8830 1489<br />
                        +56 9 5484 8020
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock size={24} className="mt-1 mr-4 text-accent-600" />
                    <div>
                      <h4 className="font-medium mb-1">Horario de Atención</h4>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 - 18:00<br />
                        Sábados: 10:00 - 13:00 (con cita previa)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Síguenos en redes sociales</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/unmedioarq"
                      className="w-10 h-10 rounded-full bg-primary-900 text-white flex items-center justify-center hover:bg-accent-600 transition-colors"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61557454216285"
                      className="w-10 h-10 rounded-full bg-primary-900 text-white flex items-center justify-center hover:bg-accent-600 transition-colors"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://cl.linkedin.com/company/unmedioarq"
                      className="w-10 h-10 rounded-full bg-primary-900 text-white flex items-center justify-center hover:bg-accent-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://maps.app.goo.gl/FdMkudTQVvd1HU1y8"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de UnMedioARQ"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;