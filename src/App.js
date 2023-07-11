import { useDispatch, useSelector } from "react-redux";
import { depositMoney, withdrawMoney } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.amount);
  return (
    <div className="App">
      <button onClick={() => dispatch(withdrawMoney(150))}>Withdraw 150</button>
      <button>{selector}</button>
      <button onClick={() => dispatch(depositMoney(150))}>Deposit 150</button>
    </div>
  );
}

export default App;
