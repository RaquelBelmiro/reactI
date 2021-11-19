import livros from '../data/database'

const Card = () => {
  return(
    <>
    {
      livros.map( livro =>
      <div key={livro.id}>
      <img src={livro.capa} alt={livro.nome} />
      <h3>{livro.nome}</h3>
      <h4>{livro.autora}</h4>
      <p>{livro.descricao}</p>
      </div>
    )}
    </>
   )
 }
 
 export default Card;