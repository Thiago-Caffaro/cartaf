import "./cards.css"
import Card from "../modules/card.jsx"
function Cards() {
  return (
    <div>
        <div className="carta ">
            <div id="title">
                <p>Caracteríscticas suas que eu amo</p>
                <p>(E coisas que me fazem feliz de estar com você)</p> 
            </div>
            <div id="cards">
                <Card color="#000000">A forma como você sorri</Card>
                <Card color="#7C7C7C">Como você se preocupa comigo</Card>
                <Card color="#656565">Nossas conversar diárias</Card>
                <Card color="#8334AA">Nossa confiança mútua</Card>
                <Card color="#000000">O seu jeito de agir</Card>
                <Card color="#7C7C7C">O seu estilo e como se veste</Card>
                <Card color="#656565">A nossa amizades</Card>
                <Card color="#8334AA">A visão que tem sobre mim</Card>
                <Card color="#000000">O jeito que fica animada com algo</Card>
                <Card color="#7C7C7C">O planejamento do nosso futuro</Card>
                <Card color="#656565">Acho você extremamente fofa kkkskk</Card>
                <Card color="#8334AA">O seu modo de pensar</Card>
                <Card color="#000000">O seu corpo</Card>
                <Card color="#7C7C7C">O seu abraço</Card>
                <Card color="#656565">A segurança que me trás</Card>
                <Card color="#8334AA">A nosso pacto de metadinha kkkkkk</Card>
            </div>
        </div>
    </div>
  )
}

export default Cards
