import { formatearFecha } from "../helpers/formatearFecha.jsx"

const RepoCard = ({ repo }) => {
    return (
        <div className="my-8 px-14 py-8 border-2 border-gray-950 rounded-2xl gap-3 flex flex-col  shadow-xl  ">
            <p className=" font-bold">Nombre del Repo : <span className=" font-normal">{repo.name}</span></p>
            <p className=" font-bold">Fecha Creación : <span className=" font-normal">{formatearFecha(repo.created_at)}</span></p>
            <p className=" font-bold">Última Modificación : <span className=" font-normal">{formatearFecha(repo.updated_at)}</span></p>
            <div className="flex flex-row gap-4 items-center">
                <a href={`${repo.clone_url}`} className="flex items-center h-10 rounded-xl text-white bg-rose-600 py-2 px-3 inline whitespace-nowrap hover:bg-rose-500 ">Url Clone</a>
                <span className="flex items-center ">{repo.clone_url}</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <a href={`${repo.comments_url}`} className="flex items-center h-10 rounded-xl text-white bg-rose-600 py-2 px-3 inline whitespace-nowrap hover:bg-rose-500 ">Comentarios</a>
                <span className="items-center break-all">{repo.comments_url}</span>
            </div>
        </div>
    )
}

export default RepoCard;