import React, { useState } from 'react';
import CargoTable from './components/CargoTable';
import AddCargoForm from './components/AddCargoForm';
import StatusFilter from './components/StatusFilter';

const App = () => {
  const [cargos, setCargos] = useState([
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26",
    },
  ]);
  const [filter, setFilter] = useState("");

  const cities = ["Москва", "Казань", "Санкт-Петербург", "Екатеринбург"];
  const statuses = ["Ожидает отправки", "В пути", "Доставлен"];

  // Добавление нового груза
  const addCargo = (newCargo) => {
    if (!newCargo.name || !newCargo.origin || !newCargo.destination || !newCargo.departureDate) {
      alert("Все поля формы должны быть заполнены!");
      return;
    }

    setCargos([
      ...cargos,
      { ...newCargo, id: `CARGO${cargos.length + 1}` },
    ]);
  };

  // Обновление статуса груза с проверкой
  const updateCargoStatus = (id, newStatus) => {
    const today = new Date();
    const updatedCargos = cargos.map((cargo) => {
      if (cargo.id === id) {
        const departureDate = new Date(cargo.departureDate);

        if (newStatus === "Доставлен" && departureDate > today) {
          alert(
            `Ошибка: Нельзя изменить статус груза на "Доставлен", так как дата отправления (${cargo.departureDate}) находится в будущем.`
          );
          return cargo; // Возвращаем без изменений
        }

        return { ...cargo, status: newStatus };
      }
      return cargo;
    });

    setCargos(updatedCargos);
  };

  const filteredCargos = filter
    ? cargos.filter((cargo) => cargo.status === filter)
    : cargos;

  return (
    <div className="container">
      <h1 className="my-4">Отслеживание грузов</h1>
      <AddCargoForm cities={cities} addCargo={addCargo} />
      <StatusFilter
        statuses={statuses}
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      <CargoTable cargos={filteredCargos} onStatusChange={updateCargoStatus} />
    </div>
  );
};

export default App;
