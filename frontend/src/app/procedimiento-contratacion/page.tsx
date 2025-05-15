export default function ProcedimientoPage() {
  const fases = [
    {
      titulo: 'Definición de Necesidades',
      pasos: [
        'Análisis de puestos con equipo multidisciplinario',
        'Aprobación presupuestaria por área financiera',
      ],
    },
    {
      titulo: 'Planificación del Proceso',
      pasos: [
        'Elaboración de cronograma detallado',
        'Formación de comité con representantes de 3 áreas',
      ],
    },
    {
      titulo: 'Atracción de candidatos',
      pasos: [
        'Anunciar las vacantes en portales de empleo, redes sociales y sitios especializados en confecciones',
        'Fomentar que los empleados actuales recomienden candidatos',
      ],
    },
    {
      titulo: 'Recepción de solicitudes',
      pasos: [
        'Establecer un plazo para la recepción de CVs',
        'Filtrar currículos según criterios básicos (experiencia, educación)',
      ],
    },
    {
      titulo: 'Entrevistas y evaluaciones',
      pasos: [
        'Realizar entrevistas telefónicas o virtuales para conocer mejor a los candidatos',
        'Aplicar pruebas técnicas relacionadas con confecciones (costura, diseño, etc.)',
      ],
    },
    {
      titulo: 'Referencias y verificación',
      pasos: [
        'Contactar a empleadores anteriores para validar la experiencia y desempeño',
        'Asegurarse de que no existan antecedentes negativos relevantes',
      ],
    },
    {
      titulo: 'Selección final',
      pasos: [
        'Reunir al comité para discutir los resultados de las entrevistas y evaluaciones',
        'Elegir al candidato más adecuado y documentar la decisión',
      ],
    },
    {
      titulo: 'Oferta de empleo',
      pasos: [
        'Redactar la carta de oferta con detalles sobre salario, beneficios y condiciones laborales',
        'Estar abierto a discutir condiciones si el candidato lo requiere',
      ],
    },

    {
      titulo: 'Incorporación',
      pasos: [
        'Organizar el espacio de trabajo y materiales necesarios',
        'Proporcionar formación sobre la cultura de la empresa, políticas y procedimientos',
      ],
    },

    {
      titulo: 'Evaluación del Proceso',
      pasos: [
        'Análisis de métricas de contratación',
        'Encuestas de satisfacción a nuevos empleados',
      ],
    },
  ];

  let contadorGlobal = 1;
  const fasesConNumeracion = fases.map((fase) => {
    const pasosNumerados = fase.pasos.map((paso) => {
      return { numero: contadorGlobal++, texto: paso };
    });
    return { ...fase, pasos: pasosNumerados };
  });

  return (
    <div className='max-w-4xl mx-auto p-6 min-h-screen'>
      <h1 className='text-3xl font-bold text-blueP mb-8 text-center'>
        Proceso de Contratación
      </h1>

      <div className='space-y-6'>
        <p className='text-lg text-gray-700 text-center mb-8'>
          Sistema meritocrático que garantiza igualdad de oportunidades y
          transparencia en cada etapa del proceso selectivo.
        </p>

        <div className='space-y-4'>
          {fasesConNumeracion.map((fase, index) => (
            <div
              key={index}
              className='border rounded-lg p-4 hover:border-blueP transition-colors'
            >
              <div className='flex items-start mb-3'>
                <div className='bg-blueP text-white w-8 h-8 rounded-full flex items-center justify-center mr-3'>
                  {index + 1}
                </div>
                <h3 className='text-xl font-semibold text-blueP pt-1'>
                  {fase.titulo}
                </h3>
              </div>
              <ul className='space-y-2 ml-11'>
                {fase.pasos.map((paso, idx) => (
                  <li key={idx} className='text-gray-700 flex items-start'>
                    <span className='text-verde font-bold mr-2'>
                      {paso.numero}.
                    </span>
                    {paso.texto}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mantenemos la sección de datos clave */}
        <div className='mt-8 p-4 bg-blueP bg-opacity-10 rounded-lg'>
          <h3 className='text-lg font-semibold text-blueP mb-2'>Datos Clave</h3>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='flex items-center gap-2'>
              <span className='text-verde font-bold'>→</span>
              <span>Tiempo promedio de contratación: 21 días</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-verde font-bold'>→</span>
              <span>Ratio de diversidad: 60% mujeres en puestos técnicos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}