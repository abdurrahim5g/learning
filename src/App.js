import "./App.css";
import Questions from "./components/Questions/Questions";
import QuizPrivider from "./Quiz/QuizPrivider";

function App() {
  return (
    <div className="App">
      <QuizPrivider>
        <Questions></Questions>
      </QuizPrivider>
    </div>
  );
}

export default App;
