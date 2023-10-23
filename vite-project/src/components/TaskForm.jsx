import React, { useState } from 'react';

const TaskForm = ({ onSubmit, onOpenModal }) => {
    const [nome, setNome] = useState('');
    const [sala, setSala] = useState('');
    const [turma, setTurma] = useState('');
    const [horarioInicio, setHorarioInicio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nome, sala, turma, horarioInicio });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label>Sala:</label>
                <input
                    type="text"
                    value={sala}
                    onChange={(e) => setSala(e.target.value)}
                />
            </div>
            <div>
                <label>Turma:</label>
                <input
                    type="text"
                    value={turma}
                    onChange={(e) => setTurma(e.target.value)}
                />
            </div>
            <div>
                <label>Horário Início:</label>
                <input
                    type="text"
                    value={horarioInicio}
                    onClick={onOpenModal} // Abre o modal ao clicar no campo
                    onChange={(e) => setHorarioInicio(e.target.value)}
                />
            </div>
            <button type="submit">Adicionar Tarefa</button>
        </form>
    );
};

export default TaskForm;
