import React from 'react';
import "./Matches.scss";
import tinderLogoName from "../../assets/tinder-logo-with-name.png";
import IconButton from "@mui/material/IconButton";
import ShieldIcon from '@mui/icons-material/Shield';
import SearchBar from '../../components/SearchBar/SearchBar';
import NewMatchesCardView from '../../components/NewMatchesCardView/NewMatchesCardView';
import MessageCard from '../../components/MessageCard/MessageCard';

const Matches: React.FC = () => {
    return (
        <div className='matches_container'>
            <div className='matches_header'>
                <div className='matches_sub_header'>
                    <div className="logo__container">
                        <img className="logo" src={tinderLogoName} alt="tinder logo" />
                    </div>
                    <IconButton>
                        <ShieldIcon fontSize="large" className="header__icon" />
                    </IconButton>
                </div>
                <SearchBar />
            </div>
            <div className='seperator' />
            <div className='new_matches_text'>New Matches</div>
            <NewMatchesCardView />
            <div className='messages_text'>Messages</div>
            <MessageCard />
            {/* <div>No matches yet! Start swiping to get a match.</div> */}
        </div>
    )
}

export default Matches