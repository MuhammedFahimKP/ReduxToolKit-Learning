import { useDispatch } from "react-redux";
import { Customer } from "../types";
import { useRef } from "react";
import { addFoodToCustomer } from "../features/customerSlice";

interface Props extends Customer {}

export default function CustomerCard({ id, name, food }: Props) {
  const dispact = useDispatch();

  const foodInpRef = useRef<HTMLInputElement | null>(null);

  const handleAddFood = (id: string) => {
    if (foodInpRef.current?.value == "" || foodInpRef.current === null) return;
    dispact(
      addFoodToCustomer({
        id: id,
        food: foodInpRef.current.value,
      })
    );
    foodInpRef.current.value = "";
  };
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input ref={foodInpRef} />
          <button onClick={() => handleAddFood(id)}>Add</button>
        </div>
      </div>
    </div>
  );
}
