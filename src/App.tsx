import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store";

import CustomerCard from "./components/CustomerCard";
import ReserVationCard from "./components/ReserVationCard";

import "./App.css";
import { addReservation } from "./features/reserVationSlice";

function App() {
  const reservationRef = useRef<HTMLInputElement | null>(null);
  const reservatons = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispact = useDispatch();

  const handleAddReservations = () => {
    if (reservationRef.current?.value == "" || reservationRef.current === null)
      return;
    dispact(addReservation(reservationRef.current.value));
    reservationRef.current.value = "";
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservatons.map((name, index) => (
                <ReserVationCard key={index} index={index} name={name} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input ref={reservationRef} />
            <button onClick={() => handleAddReservations()}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
