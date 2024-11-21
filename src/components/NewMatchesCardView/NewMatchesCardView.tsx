import React from 'react';
import './NewMatchesCardView.scss'; // Import the CSS file

const cards = [
    { id: 1, name: 'Shanaya', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Kiara', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Rutvi', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Shrey', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
];

const NewMatchesCardView: React.FC = () => {
    return (
        <div className="new-matches-card-view-container">
            {cards.map(card => (
                <div className="new-matches-card-view" key={card.id}>
                    <img src={card.image} alt={card.name} className="new-matches-card-view-image" />
                    <div className="new-matches-card-view-name">{card.name}</div>
                </div>
            ))}
        </div>
    );
};

export default NewMatchesCardView;
