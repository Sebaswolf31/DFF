export default function VisionPage() {
  return (
    <div className='max-w-4xl mx-auto p-6 min-h-screen'>
      <h1 className='text-3xl font-bold text-blueP mb-8 text-center'>
        Nuestra Visión
      </h1>

      <div className='space-y-6 text-gray-700'>
        <p className='text-lg leading-relaxed'>
          Aspiramos a ser el referente continental en moda sostenible para 2030,
          liderando la transición hacia una industria textil completamente
          circular.
          <span className='text-verde font-semibold'> Nuestra ambición</span> se
          extiende más allá de la creación de prendas: buscamos revolucionar
          todo el ecosistema de la moda.
        </p>

        <div className='relative pl-8 border-l-2 border-blueP'>
          <div className='absolute w-4 h-4 bg-verde rounded-full -left-[9px] top-0'></div>
          <h3 className='text-xl font-semibold text-blueP mb-2'>
            Objetivos Estratégicos 2025-2030
          </h3>
          <ul className='space-y-3'>
            <li>• Reducir huella de carbono en un 60%</li>
            <li>• Capacitar a 10,000 trabajadores en técnicas sostenibles</li>
            <li>• Implementar programa de reciclaje textil en 15 países</li>
            <li>• Alcanzar cero desperdicios en procesos productivos</li>
          </ul>
        </div>

        <p className='text-lg leading-relaxed bg-blueP bg-opacity-5 p-4 rounded'>
          Visualizamos una red global de talleres éticos donde cada empleado
          recibe salarios justos y beneficios integrales. Nuestra meta es
          demostrar que la excelencia en diseño y la responsabilidad ambiental
          pueden coexistir, inspirando a otras empresas a unirse a esta
          transformación ecológica.
        </p>
      </div>
    </div>
  );
}
