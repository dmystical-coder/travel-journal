import Card from './Card'
import data from '../data'

const Main = () => {
    const cards = data.map((card) => {
        return (
            <Card key={card.id} card={card} />
        )
    })

    return (
        <main className="main">
            <div className="main__content">
                {cards}
            </div>
        </main>
    )
}

export default Main