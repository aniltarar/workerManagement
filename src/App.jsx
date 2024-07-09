import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import AddWorker from "./components/Workers/AddWorker";
import Card from "./components/UI/Card";
import WorkerList from "./components/Workers/WorkerList";
import { useState } from "react";
import EModal from "./components/UI/EModal";

function App() {
  const [workers, setWorkers] = useState([]);

  return (
    <>
      <div className="header mx-5 text-center">
        <h1>Maaş Otomasyonu</h1>
        <hr />
      </div>
      <div className="container">
        {/* <Card addClasses={"bg-primary"}>
          <h1>Örnek Card Kullanımı</h1>
        </Card> */}

        <AddWorker setWorkers={setWorkers} />
        <WorkerList workers={workers} setWorkers={setWorkers} />
        <EModal></EModal>
      </div>
    </>
  );
}

export default App;
