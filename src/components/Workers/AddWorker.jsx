import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddWorker( {setWorkers}) {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredSalary, setEnteredSalary] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addWorkerHandle = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length < 2 || +enteredSalary < 5000) {
      setIsValid(false)
      return 
    }
    setWorkers((prevState)=>[
      ...prevState,
      {
        id: Math.floor(Math.random()*1000),
        workerName : enteredWorkerName,
        workerSalary : enteredSalary,
      }
    ])
    
    setEnteredSalary("");
    setEnteredWorkerName("");
  };
  return (
    <>
      <form action="" onSubmit={addWorkerHandle}>
        <Card>
          <div className="workerNameInputDiv w-50">
            <label className="form-label" htmlFor="workerNameInput">
              Çalışan Adı
            </label>
            <input
              className="form-control "
              id="workerNameInput"
              type="text"
              placeholder="Çalışan Adı Giriniz"
              value={enteredWorkerName}
              onChange={(e) => setEnteredWorkerName(e.target.value)}
            />
          </div>
          <div className="workerSalaryInputDiv w-50">
            <label className="form-label" htmlFor="workerSalaryInput">
              Çalışan Maaşı
            </label>
            <input
              className={`form-control ${!isValid ? "border-danger" : ""}`}
              id="workerSalaryInput"
              type="number"
              placeholder="Çalışan Maaşı Giriniz"
              value={enteredSalary}
              onChange={(e) => {
                setEnteredSalary(e.target.value);
                e.target.value < 5000 ? setIsValid(false) : setIsValid(true);
                
              }}
            />
          </div>
          <Button type="submit" addClasses={"w-50 btn-success"}>
            Ekle
          </Button>
        </Card>
      </form>
    </>
  );
}

export default AddWorker;
