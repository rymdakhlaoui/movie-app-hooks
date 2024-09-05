import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import './MovieCard.css'

function MovieCard({movie}) {
  return (
    <Card className='movieCard' style={{ width: '18rem' }}>
      <Card.Img className='MovieImg' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.rate} Stars</Card.Text>
        <ReactStars value={movie.rate} edit={false} size={25}/>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;