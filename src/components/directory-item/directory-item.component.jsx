import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        < div className="directory-item-container" >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            < div className="body" >
                <h2>{title}</h2>
                <p><Link to={`shop/${title}`}>Shop Now</Link></p>
            </div>
        </div >
    )
}

export default DirectoryItem