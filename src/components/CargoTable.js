import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const statusColors = {
  "Ожидает отправки": "bg-warning",
  "В пути": "bg-primary",
  "Доставлен": "bg-success",
};

const CargoTable = ({ cargos, onStatusChange }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Номер груза</th>
        <th>Название</th>
        <th>Статус</th>
        <th>Откуда</th>
        <th>Куда</th>
        <th>Дата отправления</th>
      </tr>
    </thead>
    <tbody>
      {cargos.map((cargo) => (
        <tr key={cargo.id}>
          <td>{cargo.id}</td>
          <td>{cargo.name}</td>
          <td>
            <select
              className={`form-select ${statusColors[cargo.status]}`}
              value={cargo.status}
              onChange={(e) => onStatusChange(cargo.id, e.target.value)}
            >
              <option>Ожидает отправки</option>
              <option>В пути</option>
              <option>Доставлен</option>
            </select>
          </td>
          <td>{cargo.origin}</td>
          <td>{cargo.destination}</td>
          <td>{cargo.departureDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CargoTable;
