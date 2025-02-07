import { getBasketTotal } from "../../Libs/reducer";
import { useStateValue } from "../../Libs/StateProvider";
import { Link } from "react-router-dom";
import styles from "./Subtotale.module.scss";

// function Subtotale({ id }) {
function Subtotale() {
  const [{ basket }] = useStateValue();

  // const [{ basket }, dispatch] = useStateValue();
  // const svuotacart = () => {
  //   dispatch({
  //     type: "SVUOTA-CARRELLO",
  //     id,
  //   });
  // };

  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };
  return (
    <div className={styles.Subtotale}>
      {getTotalItems() === 1 ? (
        <p>
          Subtotale ({getTotalItems()} oggetto):{" "}
          <strong>{getBasketTotal(basket)} €</strong>
        </p>
      ) : (
        <p>
          Subtotale ({getTotalItems()} oggetti):{" "}
          <strong>{getBasketTotal(basket)} €</strong>
        </p>
      )}

      <div>
        <input type="checkbox" /> Questo ordine contiene un regalo
      </div>

      <Link to="/sommario">
        <button
          disabled={getTotalItems() === 0}
          className={styles.SubBTN}
        >
          Procedi all'acquisto
        </button>
      </Link>
    </div>
  );
}

export default Subtotale;
