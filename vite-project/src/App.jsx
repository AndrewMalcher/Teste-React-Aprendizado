import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TaskForm from './components/TaskForm';
import TimePickerModal from './components/TimePickerModal';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddTask = () => {
    setFormVisible(true);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmitTask = ({ nome, sala, turma, horarioInicio }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const newTasks = {
      ...tasks,
      [formattedDate]: [
        ...(tasks[formattedDate] || []),
        { nome, sala, turma, horarioInicio, horarioFim: '' }
      ]
    };
    setTasks(newTasks);
    setFormVisible(false);
  };

  return (
    <div className="App">
      <div className="calendar-container">
        <h1>Calendário</h1>
        <Calendar onChange={handleChange} value={date} />
      </div>
      <div className="task-list">
        <h2>Lista de Tarefas</h2>
        {tasks[date.toISOString().split('T')[0]] && (
          <ul>
            {tasks[date.toISOString().split('T')[0]].map((task, index) => (
              <li key={index}>
                {task.nome} - {task.sala} - {task.turma} - {task.horarioInicio} - {task.horarioFim}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>
      {formVisible && (
        <div className="task-form">
          <TaskForm onSubmit={handleSubmitTask} onOpenModal={handleOpenModal} />
        </div>
      )}
      {modalVisible && (
        <TimePickerModal
          onClose={handleCloseModal}
          onSelectTime={handleSelectTime}
        />
      )}
    </div>
  );
  
}

export default App;
