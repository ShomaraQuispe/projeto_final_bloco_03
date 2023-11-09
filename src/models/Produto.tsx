import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  laboratorio: string;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}

