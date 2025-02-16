import { FaRegSquareCheck } from "react-icons/fa6";
import "./App.css";
import CardList from "./components/Card/CardList";
import ExpandableCardItem from "./components/Card/ExpandableCardItem";
import ToggleCardItem from "./components/Card/ToggleCardItem";

function App() {
  return (
    <div className="App">
      {/* <ThemeChooser /> */}
      {/* <Dashboard /> */}
      <CardList>
        <ExpandableCardItem
          title="Autonomous Program"
          icon={FaRegSquareCheck}
          previewInfo={["BR-A2", "BR-L3", "BR-L2"]}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          explicabo iure fugit rem maxime magni, ipsam blanditiis vitae illo
          nemo sit cum non deserunt nihil tempora. Incidunt, quis. Dignissimos,
          atque.
        </ExpandableCardItem>
        <ToggleCardItem
          isEnabled
          title="Enable Taxi"
          onToggle={() => console.log("Toggled!")}
          icon={FaRegSquareCheck}
        />
        <ExpandableCardItem
          title="Autonomous Program"
          icon={FaRegSquareCheck}
          previewInfo={["BR-A2", "BR-L3", "BR-L2"]}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          explicabo iure fugit rem maxime magni, ipsam blanditiis vitae illo
          nemo sit cum non deserunt nihil tempora. Incidunt, quis. Dignissimos,
          atque.
        </ExpandableCardItem>
      </CardList>
    </div>
  );
}

export default App;
