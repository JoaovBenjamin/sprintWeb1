//Importando o componente para minha pagina
import Cep from "../Componentes/Cep";
import HeaderEndereco from "../Componentes/HeaderEndereco";

function Endereco(){
    return(
        <>
            <HeaderEndereco></HeaderEndereco>
            <Cep></Cep>
        </>
    )
}

export default Endereco