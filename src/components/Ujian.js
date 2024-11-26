import React from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Ujian() {
  const navigate = useNavigate();

  return (
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
      {/* Include Navbar */}
      <Nav />

      <div className="container mt-4">
        {/* Header and Search Section */}
        <div
          className="d-flex justify-content-between align-items-center mb-4"
        >
          {/* Add Button */}
          <button
            type="button"
            className="btn btn-dark d-flex align-items-center"
            onClick={() => navigate("/tambah-ujian")} // Navigate to Add Exam page
          >
            <i className="bi bi-plus-circle me-2"></i> Tambah
          </button>

          {/* Search Input */}
          <InputGroup style={{ width: "400px" }}>
            <Form.Control
              type="text"
              placeholder="Masukkan kata kunci dan enter..."
              aria-label="Search"
            />
            <Button variant="outline-secondary">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </div>

        {/* Table Section */}
        <div
          className="rounded shadow p-4 bg-white"
          style={{ borderRadius: "20px" }}
        >
          <Table striped bordered hover responsive>
          <thead className="table-dark">
              <tr>
                <th>NO.</th>
                <th>UJIAN</th>
                <th>PELAJARAN</th>
                <th>KELAS</th>
                <th>JUMLAH SOAL</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ujian Tengah Semester (UTS)</td>
                <td>Matematika</td>
                <td>Teknik Informatika - A</td>
                <td>5</td>
                <td>
                  <Button variant="dark" size="sm">
                    <i className="bi bi-eye-fill"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ujian Tengah Semester (UTS)</td>
                <td>Bahasa Indonesia</td>
                <td>Teknik Informatika - B</td>
                <td>5</td>
                <td>
                  <Button variant="dark" size="sm" onClick={() => navigate("/detail-ujian")}>
                    <i className="bi bi-eye-fill"></i>
                    
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>Showing 1 to 2 of 2 entries</div>
            <div className="d-flex gap-2">
              <Button variant="outline-dark" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline-dark" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ujian;
