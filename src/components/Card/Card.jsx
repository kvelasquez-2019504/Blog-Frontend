import './card.css'
import { useNavigate } from 'react-router-dom';

export const Card = ({ publications }) => {
    const navigation = useNavigate();
    const handleClickPublication = (event) => {
        event.preventDefault();
        console.log('id publication event', event.target.id)
        navigation("/publications/" + event.target.id);
    }
    return (
        <div className='content-grid'>
            {publications.map((publication) => (
                <div key={publication._id} className="card">
                    <h3>{publication.title}</h3>
                    <p>{publication.date} </p>
                    <p>comments:
                        <span className='comments'>{publication.numberComments}</span>
                    </p>
                    <p>{publication.category}</p>
                    <button className='btn-more' onClick={handleClickPublication} id={publication._id}>VER MAS</button>
                </div>
            ))
            }
        </div>
    )
}
