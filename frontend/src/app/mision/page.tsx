export default function MisionPage() {
  return (
    <div className='max-w-4xl mx-auto p-6 min-h-screen'>
      <h1 className='text-3xl font-bold text-blueP mb-8 text-center'>
        Nuestra Misión
      </h1>

      <div className='space-y-6 text-gray-700'>
        <p className='text-lg leading-relaxed'>
          En el corazón de nuestra empresa textil late un compromiso
          inquebrantable:
          <span className='text-blueP font-semibold'>
            {' '}
            crear prendas que marquen la diferencia
          </span>
          . Nos dedicamos a diseñar y producir indumentaria de alta calidad que
          no solo satisface las necesidades estéticas de nuestros clientes, sino
          que también respeta los principios de sostenibilidad ambiental.
        </p>

        <div className='bg-verde bg-opacity-10 p-6 rounded-lg border-l-4 border-verde'>
          <h2 className='text-xl font-semibold text-blueP mb-3'>
            Nuestros Pilares
          </h2>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Innovación en diseño textil con tendencias actuales</li>
            <li>Uso de materiales orgánicos y reciclados</li>
            <li>Procesos de producción eco-amigables</li>
            <li>Relaciones éticas con proveedores locales</li>
          </ul>
        </div>

        <p className='text-lg leading-relaxed'>
          Cada prenda que creamos lleva consigo nuestro sello de responsabilidad
          social. Implementamos sistemas de producción circular que reducen el
          desperdicio textil en un 40%de nuestros procesos. Nuestra meta es transformar la industria de la
          moda mediante prácticas que equilibren el éxito comercial con el
          bienestar planetario.
        </p>
      </div>
    </div>
  );
}
