import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-[#5EB7DE] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia do Bem

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar