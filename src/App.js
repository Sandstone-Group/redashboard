import "./App.css";
import Navbar from "./components/navbar";
import Datetile from "./components/datatile";
import Chart from "./components/chart";

const dataTest = [
  {
    title: "Core Paul",
    value: 14,
    suffix: "%",
    precison: 1,
    iconTitle: "Blow Me",
  },
  {
    title: "Core Michael",
    value: 10.6,
    suffix: "!",
    precison: 1,
    iconTitle: "Blow Me",
  },
  {
    title: "Core Stu",
    value: 10.6,
    suffix: "*",
    precison: 1,
    iconTitle: "Blow Me",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        {dataTest.map((e) => (
          <Datetile
            title={e.title}
            value={e.value}
            suffix={e.suffix}
            precison={e.precison}
            iconTitle={e.iconTitle}
          />
        ))}
      </div>
      {/* <Chart /> */}
    </div>
  );
}

export default App;
