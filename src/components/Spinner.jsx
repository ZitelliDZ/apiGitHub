import '../styles/Spinner.css'


const Spinner = () => {
  return (

    <div className='flex items-center justify-center m-20 h-20 '>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>


  )
}

export default Spinner;