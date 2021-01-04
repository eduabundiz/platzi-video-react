import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icons/play-icon.png';
import plusIcon from '../assets/static/icons/plus-icon.png';
const CarouselItem = ({cover,title,year,contentRating, duration}) => (
    <div className="carousel-item">
        <img src={cover} className="carousel-item__img" alt={title}/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--icon" src={playIcon} alt="Play"/>
                <img className="carousel-item__details--icon" src={plusIcon} alt="Agregar"/>
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}
 
export default CarouselItem;