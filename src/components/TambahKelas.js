import React, { useState } from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


function TambahKelas() {
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
    {/* Tombol Tambah dan Kolom Pencarian */}
    <button
        type="button"
        className="btn btn-dark d-flex align-items-center mb-3 my-5"
        onClick={() => navigate("/kelas")}>
        <i className="bi bi-arrow-left me-2 fs-6"></i> Kembali
      </button>
  
    {/* Table with surrounding space */}
    <div className="rounded shadow p-4 bg-white" style={{ borderRadius: "20px" }}>
    
    <h5><i class="bi bi-back"></i> Tambah Kelas</h5><hr />
    <h6 className="mb-0" variant="">Nama Kelas</h6>
    <hr className="text-light mb-1" /> 
    <InputGroup className="text-start">
      <Form.Control
        type="text"
        placeholder="Masukkan Nama Kelas"
        value={searchTerm}
        onChange={handleSearch}
      />
    </InputGroup>
    <hr className="text-light mb-3" />
    <hr className="text-light mb-3" />

    {/* Container untuk tombol */}
    <div className="d-flex justify-content-end gap-2">
    <button type="button" className="btn btn-dark d-flex align-items-center">
      <i class="bi bi-floppy me-2 fs-6"></i>Simpan
      </button>
      <button type="button" className="btn btn-warning d-flex align-items-center">
      <i class="bi bi-x-circle me-2 fs-5"></i>Reset
      </button>
    </div>
    </div>
  </div>
  )}  

export default TambahKelas;
