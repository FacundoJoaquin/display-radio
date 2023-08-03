import gladys from '../../assets/gladys-videla.png'
import la17 from '../../assets/la17.png'
import './locutor.css'
const Locutor = () => {
  return (
    <div className='locutor-container'>
      <div className="radio-programa">
        <img src={la17} alt="" />
        <h2>El quinto poder</h2>
      </div>
        <img src={gladys} className='locutor-img' alt="locutor" />
    </div>
  )
}

export default Locutor