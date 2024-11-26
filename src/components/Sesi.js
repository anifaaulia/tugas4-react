import React from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


function Sesi() {
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
            onClick={() => navigate("/tambah-sesi")} // Navigate to Add Student page
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
          style={{ borderRadius: "20px"}}
        >
          <Table striped bordered hover responsive>
            <thead style={{ backgroundColor: "#343a40", color: "white" }}>
              <tr>
                <th>No.</th>
                <th>Ujian</th>
                <th>Sesi</th>
                <th>Siswa</th>
                <th>Mulai</th>
                <th>Selesai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Ujian Tengah Semester (UTS)
                  <br />
                  <span className="text-muted">
                    <i>Kelas: Teknik Informatika - A</i>
                  </span>
                  <br />
                  <span className="text-muted">
                    <i>Pelajaran: Matematika</i>
                  </span>
                </td>
                <td>Sesi 2</td>
                <td>0</td>
                <td>2024-08-18 22:21:00</td>
                <td>2024-08-19 22:21:00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Ujian Tengah Semester (UTS)
                  <br />
                  <span className="text-muted">
                    <i>Kelas: Teknik Informatika - B</i>
                  </span>
                  <br />
                  <span className="text-muted">
                    <i>Pelajaran: Bahasa Indonesia</i>
                  </span>
                </td>
                <td>Sesi 1</td>
                <td>2</td>
                <td>2024-08-18 22:19:00</td>
                <td>2024-08-19 22:19:00</td>
              </tr>
              {/* Add more rows dynamically */}
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

export default Sesi;
