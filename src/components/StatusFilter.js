import React from 'react';

const StatusFilter = ({ statuses, currentFilter, onFilterChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="statusFilter" className="form-label">
        Фильтр по статусу:
      </label>
      <select
        id="statusFilter"
        className="form-select"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Все</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;
