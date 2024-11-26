import React from "react";
import { Form, Button, Table } from "react-bootstrap";
import Nav from "./Nav";

function Nilai() {
  return (
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
      {/* Include Navbar */}
      <Nav />

      <div className="container mt-4">
        {/* Filter Section */}
        <div
          className="rounded shadow p-4 bg-white mb-4"
          style={{ borderRadius: "20px", margin: "auto" }}
        >
          {/* Filter Header */}
          <h5 className="mb-4">
            <i className="bi bi-funnel-fill me-2"></i>Filter Nilai Ujian
          </h5>

          {/* Filter Form */}
          <Form>
            <Form.Group controlId="ujian" className="mb-3">
              <Form.Label>Ujian</Form.Label>
              <Form.Select>
                <option value="">Pilih Ujian</option>
                {/* Add more options dynamically if needed */}
                <option value="ujian1">Ujian Tengah Semester (UTS)</option>
                <option value="ujian2">Ujian Akhir Semester (UAS)</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="dark" type="button" className="d-flex align-items-center">
                <i className="bi bi-funnel-fill me-2 fs-6"></i>Filter
              </Button>
            </div>
          </Form>
        </div>

        {/* Report Section */}
        <div
          className="rounded shadow p-4 bg-white"
          style={{ borderRadius: "20px", margin: "auto" }}
        >
          {/* Report Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>
              <i className="bi bi-graph-up-arrow me-2"></i>Laporan Nilai Ujian
            </h5>
            <Button variant="success" className="d-flex align-items-center">
              <i className="bi bi-file-earmark-excel me-2"></i>Download Excel
            </Button>
          </div>

          {/* Table */}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Ujian</th>
                <th>Sesi</th>
                <th>Nama Siswa</th>
                <th>Kelas</th>
                <th>Pelajaran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ujian Tengah Semester (UTS)</td>
                <td>Sesi 2</td>
                <td>Anifa Aulia</td>
                <td>Teknik Informatika - A</td>
                <td>Matematika</td>
              </tr>
              {/* Add more rows dynamically as needed */}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Nilai;
