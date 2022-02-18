import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>PTD in SEOUL</h1>
      <Button text={"HEY"} />
    </div>
  );
}

export default App;
