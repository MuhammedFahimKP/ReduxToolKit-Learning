import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reserVationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface Props {
  name: string;
  index: number;
}

export default function ReserVationCard({ name, index }: Props) {
  const dispact = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispact(removeReservation(index));
        dispact(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </div>
  );
}
