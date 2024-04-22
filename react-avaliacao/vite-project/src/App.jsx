import Festajunina2 from './assets/Festajunina2.jpg'
import Festajunina3 from './assets/Festajunina3.jpg'
import Festajunina4 from './assets/Festajunina4.jpg'
import Festajunina5 from './assets/Festajunina5.jpg'
import Festajunina6 from './assets/Festajunina6.jpg'
import Festajunina7 from './assets/Festajunina7.jpg'
import images from '/images.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={images} className="images" alt="images" />
        <img src={Festajunina2} className="Festajunina2" alt="Festa Junina 2" />
        <img src={Festajunina3} className="Festajunina3" alt="Festa Junina 3" />
        <img src={Festajunina4} className="Festajunina4" alt="Festa Junina 4" />
        <img src={Festajunina5} className="Festajunina5" alt="Festa Junina 5" />
        <img src={Festajunina6} className="Festajunina6" alt="Festa Junina 6" />
        <img src={Festajunina7} className="Festajunina7" alt="Festa Junina 7" />
      </div>
      <h1>Festa Junina</h1>
      <h2>Você está sendo convidado para a nossa tão esperada Festa Junina SESI SENAI,
        vamos festejar juntos. </h2>
        <h3> Rodovia BR 101 nº km 211, 7235 - Distrito Industrial, São José - SC, 88104-800 DAS 9:00 até as 12:40</h3>
    </>
  )
}

export default App
