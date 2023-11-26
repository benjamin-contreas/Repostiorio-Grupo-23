function AboutUs() {
    return (
      <div
        className='relative h-screen bg-cover bg-center'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        {/* Div para oscurecer la imagen */}
        <div className='absolute inset-0 bg-black opacity-40'></div>
  
        <div className='absolute px-20 py-10 inset-0 flex justify-center'>
          <p className='text-white text-justify'>
            Bienvenidos a nuestro proyecto de Diseño de Software en la Universidad
            Adolfo Ibáñez. Somos un equipo apasionado de tres estudiantes de
            ingeniería comprometidos con la creación de soluciones innovadoras y
            eficientes. En este proyecto, exploramos las complejidades del diseño
            de software, aplicando nuestros conocimientos teóricos a situaciones
            del mundo real. Nuestra misión es desarrollar una aplicación que no
            solo cumpla con los requisitos técnicos, sino que también brinde una
            experiencia excepcional para el usuario. A través de la colaboración y
            el esfuerzo conjunto, aspiramos a crear un producto que marque la
            diferencia en el ámbito del diseño de software. Estamos emocionados de
            compartir que nuestra página se ha construido con tecnologías
            modernas. Utilizamos React para la creación de componentes
            interactivos y una interfaz de usuario dinámica. Además, hemos
            empleado Tailwind CSS para el diseño y la estilización, aprovechando
            su potente enfoque de clases utilitarias. Agradecemos la oportunidad
            de aplicar lo que hemos aprendido en nuestras clases y estamos
            emocionados de compartir nuestro enfoque creativo y nuestras
            habilidades técnicas con ustedes. ¡Gracias por visitar nuestra página
            y ser parte de nuestro viaje!
          </p>
        </div>
  
        {/* Tarjetas de los integrantes del grupo debajo del párrafo */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 absolute bottom-10 left-1/2 transform -translate-x-1/2'>
          <div className='bg-gray-900 p-4 rounded-md mb-4'>
            <p className='text-white text-xl'>Benjamín Contreras</p>
          </div>
          <div className='bg-gray-900 p-4 rounded-md mb-4'>
            <p className='text-white text-xl'>Nicolás Durán</p>
          </div>
          <div className='bg-gray-900 p-4 rounded-md mb-4'>
            <p className='text-white text-xl'>Sebastián Barthou</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  