import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Ошибка 404: Страница не найдена</h2>
            <p>Извините, запрашиваемая вами страница не существует.</p>
            <button onClick={() => navigate(-1)}>Назад</button> |{' '}
            <button onClick={() => navigate('/')}>На главную</button>
        </div>
    );
};

