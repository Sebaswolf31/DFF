export default function ManualEticaPage() {
  const principios = [
    {
      titulo: 'Integridad y Transparencia',
      contenido:
        'Mantenemos canales abiertos de comunicación con stakeholders y publicamos informes anuales de sostenibilidad.',
      color: 'bg-blueP bg-opacity-10',
    },
    {
      titulo: 'Calidad y Sostenibilidad',
      contenido:
        'Certificaciones GOTS y OEKO-TEX en el 100% de nuestras prendas. Auditorías ambientales trimestrales.',
      color: 'bg-blueP bg-opacity-10',
    },
    {
      titulo: 'Trabajo Digno',
      contenido:
        "Programa 'Bienestar Textil' que incluye capacitación continua, seguro médico y horarios flexibles.",
      color: 'bg-blueP bg-opacity-10',
    },
    {
      titulo: 'Diversidad e Inclusión',
      contenido:
        'Política de equidad de género con 50% de puestos directivos ocupados por mujeres para 2026.',
      color: 'bg-blueP bg-opacity-10',
    },
    {
      titulo: 'Relaciones con Proveedores',
      contenido:
        'Sistema de evaluación ética con 50 criterios verificables. Visitas sorpresa a plantas productivas.',
      color: 'bg-blueP bg-opacity-10',
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6 min-h-screen'>
      <h1 className='text-3xl font-bold text-blueP mb-8 text-center'>
        Manual de Ética
      </h1>

      <div className='space-y-6'>
        <p className='text-lg text-gray-700 text-center mb-8'>
          Nuestro compromiso ético se materializa en 5 pilares fundamentales que
          guían cada decisión empresarial y operación diaria.
        </p>

        <div className='grid gap-6 md:grid-cols-2'>
          {principios.map((principio, index) => (
            <div
              key={index}
              className={`${principio.color} p-6 rounded-xl transition-transform hover:scale-105`}
            >
              <h3 className='text-xl font-semibold text-blueP mb-3'>
                {principio.titulo}
              </h3>
              <p className='text-gray-700'>{principio.contenido}</p>
            </div>
          ))}
        </div>

        <div className='mt-8 p-4 bg-verde bg-opacity-10 rounded-lg text-center'>
          <p className='font-semibold text-blueP'>
            Canal Ético: confeccionesdfyf@gmail.com | Línea Confidencial:
            320-560-9044
          </p>
        </div>
      </div>
    </div>
  );
}
