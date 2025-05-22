import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      id: 1,
      name: 'María José Almarza',
      position: 'Socia Fundadora y Directora Comercial',
      image: 'https://i.postimg.cc/ydVpB3z6/mary.jpg',
      bio: 'Arquitecta PUCV y Diplomada BIM en Revit PUC, con 5 años de experiencia en proyectos residenciales, gestión municipal y gestión de especialidades.',
    },
    {
      id: 2,
      name: 'Paolo Quevedo Balloqui',
      position: 'Socio Fundador y Director de Proyectos',
      image: 'https://i.postimg.cc/xTRvDp1m/IMG-4119.jpg',
      bio: 'Arquitecto PUCV, con 5 años de experiencia en proyectos residenciales y microvivienda, Modelación 3D y desarrollo de gráfica arquitectónica.',
    },
    {
      id: 3,
      name: 'Karla Fernández Pizarro',
      position: 'Colaboradora de proyectos',
      image: 'https://i.postimg.cc/5ykf8Mmv/karli.jpg',
      bio: 'Arquitecta PUCV de apoyo en la elaboración de documentos y planimetrías',
    },
    {
      id: 4,
      name: 'Dilan Rodríguez',
      position: 'Colaborador',
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
      bio: 'Arquitecto PUCV en formación, practicante en apoyo para la elaboración de material gráfico, planiemtrías y levantamiento con Dron',
    },
    {
      id: 5,
      name: 'Abraham Vallejo Arias',
      position: 'Socio Fundador',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Arquitecto PUCV',
    },
    {
      id: 6,
      name: 'Francisco Arancibia Torres',
      position: 'Socio Fundador',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
      bio: 'Arquitecto PUCV',
    },
  ];

  return (
    <>
      <HeroSection
        title="Sobre Nosotros"
        subtitle="Conoce quiénes somos, nuestra filosofía y nuestro enfoque del diseño arquitectónico"
        imageUrl="https://images.pexels.com/photos/4871010/pexels-photo-4871010.jpeg"
        fullHeight={false}
      />

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Nuestra Historia"
                subtitle="Un camino de innovación y compromiso con la arquitectura de calidad"
              />

              <div className="prose prose-lg max-w-none">
                <p>
                  UnMedioARQ nació en 2015 como un estudio comprometido con la creación de espacios que respondan
                  genuinamente a las necesidades de quienes los habitan, al contexto donde se insertan y a los
                  desafíos contemporáneos.
                </p>
                <p>
                  El nombre "UnMedio" refleja nuestra filosofía: la arquitectura como un medio de conexión entre
                  personas, comunidades y entornos. Nuestros proyectos buscan encontrar ese punto de equilibrio
                  donde la funcionalidad, la belleza y la sostenibilidad convergen para crear experiencias significativas.
                </p>
                <p>
                  A lo largo de estos años, hemos desarrollado proyectos en diversos contextos y escalas, siempre
                  manteniendo una visión colaborativa y un enfoque riguroso que nos permite abordar cada desafío
                  con soluciones innovadoras y sensibles.
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src="https://images.pexels.com/photos/3769150/pexels-photo-3769150.jpeg"
                    alt="Equipo de UnMedioARQ"
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg"
                    alt="Oficina de UnMedioARQ"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="mt-8">
                  <img
                    src="https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg"
                    alt="Proceso de diseño"
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/7289751/pexels-photo-7289751.jpeg"
                    alt="Proyecto en construcción"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={ref1} className="py-20 md:py-28 bg-primary-50">
        <div className="container-custom">
          <SectionTitle
            title="Nuestros Valores"
            subtitle="Principios que guían nuestro trabajo y definen nuestro compromiso con la arquitectura"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: 'Innovación',
                description: 'Exploramos constantemente nuevas formas, materiales y métodos para crear arquitectura relevante y significativa.',
                delay: 0,
              },
              {
                title: 'Contextualismo',
                description: 'Cada proyecto responde a las condiciones particulares del lugar, su cultura, clima y paisaje.',
                delay: 1,
              },
              {
                title: 'Sostenibilidad',
                description: 'Diseñamos pensando en el impacto ambiental, social y económico a largo plazo.',
                delay: 2,
              },
              {
                title: 'Colaboración',
                description: 'Creemos en el poder del trabajo colaborativo con clientes, consultores y comunidades.',
                delay: 3,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: value.delay * 0.2 }}
              >
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={ref2} className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Nuestro Equipo"
            subtitle="Profesionales apasionados por la arquitectura y el diseño de calidad, comprometidos en entregar confianza y seriedad"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-accent-700 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-primary-900 text-white">
        <div className="container-custom">
          <SectionTitle
            title="Nuestro Proceso"
            subtitle="Un enfoque metodológico que garantiza resultados de excelencia en cada proyecto"
            alignment="center"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16">
            {[
              {
                step: '01',
                title: 'Escuchar',
                description: 'Comenzamos cada proyecto entendiendo profundamente las necesidades, deseos y visión del cliente.',
              },
              {
                step: '02',
                title: 'Investigar',
                description: 'Analizamos el contexto, las condiciones del lugar y exploramos referentes relevantes.',
              },
              {
                step: '03',
                title: 'Conceptualizar',
                description: 'Desarrollamos ideas y estrategias que responden a los hallazgos de las etapas anteriores.',
              },
              {
                step: '04',
                title: 'Diseñar',
                description: 'Materializamos el concepto en soluciones arquitectónicas concretas y detalladas.',
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif text-accent-500 opacity-60 mb-4">{process.step}</div>
                <h3 className="text-2xl mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-4 right-0 transform translate-x-1/2">
                    <div className="w-16 h-0.5 bg-accent-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;