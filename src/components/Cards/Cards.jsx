import './cards.css'

const Cards = (props) => {


    return(
        <div className='cards'>
            <h3 className='cardTitle'>{props.title}</h3>
            <img className='cardImg' src={props.img} alt="Product" />
            <p className='cardDesc'>{props.desc}</p>
            <p className='cardPrice'>{props.price}</p>
            <button className='cardButton'>Añadir</button>
        </div>
    )
}

export default Cards