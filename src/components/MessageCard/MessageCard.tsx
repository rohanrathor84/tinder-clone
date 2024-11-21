import React from 'react';
import "./MessageCard.scss";

const cards = [
    { id: 1, name: 'Shanaya', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 2, name: 'Kiara', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 3, name: 'Rutvi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 4, name: 'Shrey', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100', message: "You got new message" },
];

const MessageCard: React.FC = () => {
    return (
        <div className='message_card_container'>
            {cards.map((card, index) => (
                <div className='message_card_sub_container' key={card.id}>
                    <div className='message_card_view'>
                        <img className='message_card_image' src={card.image} alt={card.name} />
                        <div className='message_card_name_view'>
                            <div className='message_card_name'>{card.name}</div>
                            <div className='message_card_message'>{card.message}</div>
                        </div>
                    </div>
                    {index !== cards.length - 1 ? <div className='seperator' /> : <></>}
                </div>
            ))}
        </div>
    )
}

export default MessageCard