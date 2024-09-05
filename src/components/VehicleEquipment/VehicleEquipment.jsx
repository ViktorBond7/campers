// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./VehicleEquipment.module.css";
import { selectChangeVehicle } from "../../redux/filters/selectors";
import { changeVehicle } from "../../redux/filters/slice";

const VehicleEquipment = () => {
  const equipment = [
    { id: 1, label: "AC", icon: "🌬️" },
    { id: 2, label: "Automatic", icon: "🔧" },
    { id: 3, label: "Kitchen", icon: "🍽️" },
    { id: 4, label: "TV", icon: "📺" },
    { id: 5, label: "Shower/WC", icon: "🚿" },
  ];

  const dispatch = useDispatch();
  const visibleVehicle = useSelector(selectChangeVehicle);

  console.log("444444444444444", visibleVehicle);

  return (
    <div className={css.equipmentList}>
      {equipment.map((item) => (
        <label
          key={item.label}
          className={`${css.card} ${
            visibleVehicle.includes(item.label) ? css.selected : ""
          }`}
          onClick={() => dispatch(changeVehicle(item.label))}
        >
          <input
            type="checkbox"
            checked={visibleVehicle}
            onChange={() => dispatch(changeVehicle(item.label))}
            className={css.hiddenCheckbox}
          />
          <div className={css.icon}>{item.icon}</div>
          <div className={css.label}>{item.label}</div>
        </label>
      ))}
    </div>
  );
};
export default VehicleEquipment;
