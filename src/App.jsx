import Formulario from "./components/Formulario.jsx";

const App = () => {
  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center ">
      <div className="md:w-4/5 lg:w-4/5 xl:w-3/5 ">
        <Formulario />
      </div>
    </main>
  )
}

export default App;