import './Cards.css'

const Cards = (props) => {


    return(
        <div className='cards'>
            <h3 className='card-title'>{props.title}</h3>
            <img className='card-img' src={props.img} alt="Product" />
            <p className='card-desc'>{props.desc}</p>
            <p className='card-price'>{props.price}</p>
            <button className='card-button'>Añadir</button>
        </div>
    )
}

export default Cards