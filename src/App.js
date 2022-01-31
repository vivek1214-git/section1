import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      
      title: "Cofee",
      amount: 280,
      date: new Date(2022, 5, 22),
    },

    {  title: "Toilet Paper", amount: 20, date: new Date(2021, 4, 21) },

    {  title: "Tea", amount: 200, date: new Date(2020, 3, 20) },
    {
      
      title: "Milk",
      amount: 220,
      date: new Date(2021, 7, 25),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
     <Expenses items={expenses} />
    </div>
  );
}

export default App;
