import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from './directory-item.styles';

import { Link } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p><Link to={`shop/${title}`}>Shop Now</Link></p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem