import RepoCard from "./RepoCard"

const ListadoRepos = ({ repos }) => {
    return (
        <>
            <div className='my-10 bg-white shadow rounded-lg px-10 py-5'>
                <div className='my-5'>
                    {repos.length > 0 &&
                        (
                            <>
                                <div className="flex flex-row gap-3">
                                    <img className="w-20 h-20 rounded-full" src={`${repos[0].owner.avatar_url}`} alt={`${repos[0].full_name}`} />
                                    <div className="flex flex-col gap-2">
                                        <p className=" font-bold">Login : <span className=" font-normal">{repos[0].owner.login}</span></p>
                                        <p className=" font-bold">Perfil : <span className=" font-normal">{repos[0].owner.html_url}</span></p>
                                        <p className=" font-bold">Total de repositorios : <span className=" font-normal">{repos.length}</span></p>
                                    </div>
                                </div>

                                {repos.map(repo => (
                                    <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </>
                        ) 
                    }
                </div>
            </div>
        </>
    )
}

export default ListadoRepos;