import React,{useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'Mukesh Ambani',
            url:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089'
        },
        {
            name:'Ratan Tata',
            url:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2Fb0c032466eb88b109f20d7d9f6b4e0a8%2F0x0.jpg'
        },

    ])
    const swiped = (direction, nametoDelete) => {
        console.log('removing:'+ nametoDelete);
    }
    const outOfFrame = (name) => {
        console.log(name +'left the screen!')
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_container">
            {people.map(person=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)} 
                >
                    <div 
                    className="card" 
                    style={{backgroundImage :`url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}

            </div>
        </div>
    )
}

export default TinderCards
