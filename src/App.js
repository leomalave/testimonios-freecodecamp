import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestos alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio={<p>"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp cambió mi vida."</strong></p>}
        />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio={<p><strong>"freeCodeCamp fue la puerta de entrada a mi carrera</strong> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."</p>}
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio={<p>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong>freeCodeCamp me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>}
          />
          
          
      </div>
    </div>
  );
}

export default App;
