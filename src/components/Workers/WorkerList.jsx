import React, { useState } from "react";
import Card from "../UI/Card";
import "./Workers.css";

function WorkerList({ workers, setWorkers }) {
  const [hoveredWorkerId, setHoveredWorkerId] = useState(null);

  const mouseEnterHandle = (id) => {
    setHoveredWorkerId(id);
  };
  const mouseLeaveHandle = () => {
    setHoveredWorkerId(null);
  };

  const deleteWorker = (id) =>{
    setWorkers(
        workers.filter((item)=>item.id !==id)
    )
  }

  if (workers.length<1) {
    return (
        <Card>
            <h1>Çalışan Bulunmamakta</h1>
            <p>Çalışan Eklemek İçin Yukarıdaki Form'u Doldurun</p>
        </Card>
    )
    
  }

  return (
    <>
      <Card>
        <div className="workerListDiv d-flex flex-column w-100">
          <div className="workerListHeader d-flex justify-content-between mx-4 ">
            <span className="fw-bold">Çalışan</span>
            <span className="fw-bold">Maaş</span>
          </div>
          <hr />
          <div className="workerListBody">
            {workers?.map((item) => {
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => mouseEnterHandle(item.id)}
                  onMouseLeave={mouseLeaveHandle}
                  className={`d-flex justify-content-between rounded transition align-items-center mx-4 p-2 ${
                    hoveredWorkerId === item.id ? "shadow text-decoration-line-through bg-danger-subtle" : ""
                  }`}
                  onClick={()=>deleteWorker(item.id)}
                >
                  <span>{item.workerName}</span>
                  <span className="text-success fw-bold ">
                    {item.workerSalary} ₺
                  </span>
                </li>
              );
            })}
          </div>
          <hr className="mt-4"/>
          <p className="text-center">Herhangi bir çalışanı çıkartmak için üzerine tıklayınız.</p>
        </div>
      </Card>
    </>
  );
}

export default WorkerList;
