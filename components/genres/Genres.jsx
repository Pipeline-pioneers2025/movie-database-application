import React from 'react';
import './Genres.css'
import { useSelector } from 'react-redux';

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className='genres-container'>
            {data?.map((g) => {
                if (!genres[g]?.name) return null;
                return (
                    <div key={g} className="genre-card">
                        <span className="genre-name">{genres[g]?.name}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;