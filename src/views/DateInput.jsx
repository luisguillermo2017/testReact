import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const CustomInput = ({ value, onClick }) => (
    <input
      type="text"
      value={value}
      onClick={onClick}
      readOnly={true}
      placeholder="Selecciona una fecha"
    />
  );

  return (
    <div>
      <label>Selecciona una fecha:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={<CustomInput />}
        showYearDropdown
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DateInput;