import './card.component.css';

export default function CardComponent(props) {

    const { name, release, rating } = props;
    return (
        <div className="card-container">
            <div className='card-movie-name'>{name}</div>
            <div className='release-date'>Release date: {release}</div>
            <div className='rating-text'>
                <img src={require('../assets/star.png')} alt="star" className='star-img' />
                <span style={{ marginLeft: 2, marginRight: 2 }} />{rating}</div>
        </div>
    )
}