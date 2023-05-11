import { useState, useEffect } from "react";
import Alert from '../components/Alert.jsx'
import ListadoRepos from "./ListadoRepos.jsx";
import Spinner from "./Spinner.jsx";

const url = import.meta.env.VITE_URL_GIT;
const cantidad = import.meta.env.VITE_CANT_CONSULTA;

const Formulario = () => {

    const [repos, setRepos] = useState([]);
    const [usuario, setUsuario] = useState('');
    const [listado, setListado] = useState(true);
    const [cargando, setCargando] = useState(false);

    const [alerta, setAlerta] = useState({});

    // useEffect que se activa cada vez que hay un cambio en busqueda
    useEffect(() => {
        //Si busqueda es true entonces se realiza un fetch 
        if (cargando) {
            try {
                fetch(`${url}/users/${usuario}/repos?per_page=${cantidad}&sort=stars&direction=desc`)
                    .then((res) => res.json())
                    .then(data => {
                        //si no existen repositorios del usuario
                        if (data?.length === 0) {
                            //se muestra "No se encontrado Repositorios." por 2 segundos
                            setListado(false);
                            setTimeout(() => {
                                setCargando(false);
                                setTimeout(() => {
                                    setListado(true);
                                }, 2000);
                            }, 1300);

                        } else {
                            //si se encontraron actualiza el estado
                            setRepos(data);
                            setTimeout(() => {
                                setCargando(false);
                            }, 1300);
                        }

                    })
            } catch (e) {
                //si la api tiene problemas con la respuesta se crea el alerta y se limpia en 1 segundo
                setAlerta({
                    msg: 'Hubo un error en la busqueda de los Repositorios.',
                    error: true
                })
                setTimeout(() => {
                    setAlerta({});
                    setCargando(false);
                }, 1500);
            }
        }
    }, [cargando])


    const handleSubmit = (e) => {
        e.preventDefault();
        //se limpia los repositorios
        setRepos([])

        //valida que el usuario no este vacio para la busqueda y genera una alerta temporal
        if ([usuario].includes('')) {
            setAlerta({
                msg: 'El campo es obligatorio.',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 1500);
            return;
        }

        //cambia el estado de la alerta y del estado cargando para poder activar el useEffect
        setAlerta({});
        setCargando(true);
    }

    const { msg } = alerta

    return (
        <>
            <h1 className='text-stone-50 font-black text-6xl font-bold capitalize'>
                Top 10 Repositorios de cada usuario
            </h1>

            <form onSubmit={handleSubmit} className='mt-5 md:mt-20  bg-white shadow rounded-lg px-10 py-5'>
                <div className='my-5'>
                    <label htmlFor="usuario" className=' uppercase text-gray-600 block text-xl font-bold'>Buscador Usuario</label>
                    <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder='Nombre de usuario.' id='usuario' name="usuario"
                        className='w-full mt-3 p-3 border rounded-xl bg-gray-100'
                    />
                </div>

                <input type="submit" value="Buscar" className="bg-rose-600 mb-5 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-rose-500 transition-colors" />
            </form>

            <div className='mt-5 md:mt-20'>
                {msg && <Alert alerta={alerta} />}
            </div>

            {cargando && <Spinner />}

            {!cargando && (repos.length > 0 ?
                <ListadoRepos repos={repos} /> :
                !listado && <p className="mt-5 bg-gray-200 rounded-lg text-center text-gray-600 uppercase py-10">No se encontraron Repositorios.</p>)
            }

        </>
    )
}

export default Formulario;