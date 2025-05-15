export default function VisionPage() {
  return (
    <div className='max-w-4xl mx-auto p-6 min-h-screen'>
      <h1 className='text-3xl font-bold text-blueP mb-8 text-center'>
        Nuestra Visión
      </h1>

      <div className='space-y-6 text-gray-700'>
        <p className='text-lg leading-relaxed'>
          Ser reconocidos como líderes en la industria de la confección,
          impulsando una moda ética y sostenible que genere un impacto positivo
          en la comunidad y el medio ambiente a través de prácticas
          empresariales responsables.
          <span className='text-verde font-semibold'> Nuestra ambición </span>
          es diseñar y producir prendas que no solo destaquen por su estilo y
          calidad, sino que también respeten los recursos naturales y valoren a
          las personas que forman parte de nuestra cadena de valor.
        </p>

        <p className='text-lg leading-relaxed'>
          <span className='text-verde font-semibold'> Nuestra aspiración </span>
          es ser un motor de cambio en las comunidades, apoyando iniciativas que
          empoderen a artesanos, mujeres y jóvenes, al mismo tiempo que
          fomentamos la educación sobre sostenibilidad. Queremos construir un
          legado donde la moda sea una herramienta para unir personas, preservar
          el planeta y generar un impacto transformador y duradero.
        </p>

        <div className='relative pl-8 border-l-2 border-blueP'>
          <div className='absolute w-4 h-4 bg-verde rounded-full -left-[9px] top-0'></div>
          <h3 className='text-xl font-semibold text-blueP mb-2'>
            Objetivos Estratégicos 2025-2030
          </h3>
          <ul className='space-y-3'>
            <li>
              • Posicionarnos como una de las 5 marcas líderes en moda ética y
              sostenible en nuestro mercado
            </li>
            <li>
              • Reducir la huella de carbono de nuestra cadena de producción en
              un 40% para 2030, en comparación con la línea base de 2025, y
              alcanzar la neutralidad de carbono en nuestras operaciones
              directas para 2028.
            </li>
            <li>
              • Impactar positivamente a 5,000 personas en comunidades locales a
              través de programas de emprendimiento, capacitación y empleo justo
              para 2030.
            </li>
            <li>
              • Incrementar la base de clientes comprometidos con la moda
              sostenible, logrando que el 70% de nuestras ventas provengan de
              consumidores recurrentes para 2030.
            </li>
          </ul>
        </div>

        <p className='text-lg leading-relaxed bg-blueP bg-opacity-5 p-4 rounded'>
          Soñamos con un mundo donde cada prenda refleje el valor y la dignidad
          de quienes la crean. Visualizamos talleres en los que cada colaborador
          se sienta valorado, seguro y justamente recompensado. Creemos que la
          moda puede ser una fuerza de amor y respeto, capaz de transformar
          vidas y comunidades mientras cuida del planeta que compartimos.
        </p>
      </div>
    </div>
  );
}
