//Importando os componentes que vou utilizar
import HeaderHome from "../Componentes/HeaderHome";
import Footer from "../Componentes/Footer";
import BodyHome from "../Componentes/BodyHome";
 
// Criando a function que vai retornar todos os componentes que criei
function Home(){
    return(
        <>
            <HeaderHome></HeaderHome>
            <BodyHome></BodyHome>
            <Footer></Footer>
        </>
    )
}

//Exportando minha function para ser utilizado no "App.jxs"
export default Home;