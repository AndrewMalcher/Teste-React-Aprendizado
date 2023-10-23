import React from 'react';

const TimePickerModal = ({ onClose, onSelectTime }) => {
    const times = [
        '7h05', '7h25', '7h55', '8h15', '8h25',
        '8h45', '9h05', '9h25', '9h45', '10h05'
    ];

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Selecione um Horário</h2>
                <ul>
                    {times.map((time) => (
                        <li key={time} onClick={() => onSelectTime(time)}>{time}</li>
                    ))}
                </ul>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default TimePickerModal;
