import React from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons



function Home() {
    const cards = [
        { id: 1, icon: "bi-pencil-square", label: "Ujian", count: 0, bg: "bg-dark" },
        { id: 2, icon: "bi-stopwatch", label: "Sesi Ujian", count: 0, bg: "bg-danger" },
      ];

    return (
    <div className="px-3">
        <Nav />
    <div className="container mt-4">
      <div className="row g-4">
        {cards.map((card) => (
          <div key={card.id} className="col-12 col-sm-6 col-md-3">
            <div className="card shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div
                  className={`icon ${card.bg} text-white d-flex justify-content-center align-items-center`}
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "4px", 
                  }}>
                  <i className={`bi ${card.icon} fs-2`}></i>
                </div>
                <div className="ms-3">
                  <h6 className="mb-0">{card.label}</h6>
                  <p className="mb-0 fs-5 fw-bold">{card.count}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 </div>
 
)}


export default Home;