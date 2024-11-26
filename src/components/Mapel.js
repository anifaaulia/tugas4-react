import React, { useState } from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


function MataPelajaran() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    { id: 1, name: "Matematika" },
    { id: 2, name: "Bahasa Indonesia" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
    {/* Include Navbar at the Top */}
    <Nav />
    
    <div className="d-flex justify-content-between mb-3 my-5">
        {/* Tombol Tambah */}
        <button
          type="button"
          className="btn btn-dark d-flex align-items-center"
          onClick={() => navigate("/tambah-mapel")} // Navigasi ke TambahMapel.js
        >
          <i className="bi bi-plus-circle me-2"></i> Tambah
        </button>
      <InputGroup className="text-start" style={{ width: "300px" }}>
        <Form.Control
          type="text"
          placeholder="Masukkan kata kunci dan enter..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button variant="outline-secondary">
            <i class="bi bi-search fs-6"></i>
        </Button>
      </InputGroup>
    </div>
  
    {/* Table with surrounding space */}
    <div className="rounded shadow p-4 bg-white" style={{ borderRadius: "20px" }}>
      <Table bordered hover responsive className="mb-0">
        <thead className="table-dark">
          <tr className="text-center">
            <th>NO.</th>
            <th>NAMA MATA PELAJARAN</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td>{index + 1}</td>
              <td className="text-start">{item.name}</td>
              <td>
                <Button variant="primary" className="me-2">
                  <i className="bi bi-pencil"></i>
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  
      {/* Pagination */}
      <div className="d-flex justify-content-end mt-3">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )}  

export default MataPelajaran;
