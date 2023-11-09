
function Home() {
    return (
        <>
            <div className="bg-[#5EB7DE] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Sua saúde em 1º lugar
                        </h2>
                        <p className='text-xl'>
                            A farmácia que cuida da sua saúde!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Ver Promoções
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://www.quickin.io/wp-content/uploads/2022/03/7.-HEADER-2560x1709-_-SAUDE-MENTAL-DOS-FUNCIONARIOS.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home