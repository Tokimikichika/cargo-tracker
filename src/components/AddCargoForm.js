import React, { useState } from 'react';

const AddCargoForm = ({ cities, addCargo }) => {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    destination: '',
    departureDate: '',
    status: 'Ожидает отправки',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.origin || !formData.destination || !formData.departureDate) {
      alert('Все поля должны быть заполнены!');
      return;
    }
    addCargo(formData);
    setFormData({ name: '', origin: '', destination: '', departureDate: '', status: 'Ожидает отправки' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Название груза</label>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Пункт отправления</label>
        <select
          className="form-select"
          value={formData.origin}
          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
        >
          <option value="">Выберите город</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Пункт назначения</label>
        <select
          className="form-select"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
        >
          <option value="">Выберите город</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Дата отправления</label>
        <input
          type="date"
          className="form-control"
          value={formData.departureDate}
          onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить груз
      </button>
    </form>
  );
};

export default AddCargoForm;
