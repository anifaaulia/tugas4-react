import React from "react";
import { Table, Button } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function DetailUjian() {
  const navigate = useNavigate();

  return (
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
      {/* Include Navbar */}
      <Nav />

      <div className="container mt-4">
        {/* Kembali Button */}
        <Button
          variant="dark"
          className="mb-4 d-flex align-items-center"
          onClick={() => navigate("/ujian")} // Navigate back to the Ujian page
        >
          <i className="bi bi-arrow-left me-2 fs-6"></i>Kembali
        </Button>

        {/* Detail Ujian Section */}
        <div
          className="rounded shadow p-4 bg-white mb-4"
          style={{ borderRadius: "20px", maxWidth: "1000px", margin: "auto" }}
        >
          <h5 className="mb-4">
            <i className="bi bi-pencil-square me-2"></i>Detail Ujian
          </h5>
          <Table bordered>
            <tbody>
              <tr>
                <td>Nama Ujian</td>
                <td>Ujian Akhir Semester (UAS)</td>
              </tr>
              <tr>
                <td>Mata Pelajaran</td>
                <td>Bahasa Indonesia</td>
              </tr>
              <tr>
                <td>Kelas</td>
                <td>Teknik Informatika - A</td>
              </tr>
              <tr>
                <td>Jumlah Soal</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Durasi (Menit)</td>
                <td>20 Menit</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Soal Ujian Section */}
        <div
          className="rounded shadow p-4 bg-white"
          style={{ borderRadius: "20px", maxWidth: "1000px", margin: "auto" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>
              <i className="bi bi-collection me-2"></i>Soal Ujian
            </h5>
            <div>
              <Button variant="dark" className="me-2">
                <i className="bi bi-plus-circle me-2"></i>Tambah
              </Button>
              <Button variant="success">
                <i className="bi bi-upload me-2"></i>Import
              </Button>
            </div>
          </div>

          <Table striped bordered hover responsive>
            <thead style={{ backgroundColor: "#343a40", color: "white" }}>
              <tr>
                <th>No.</th>
                <th>Soal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Data */}
              <tr>
                <td>1</td>
                <td>Apa arti Pancasila?</td>
                <td>
                  <Button variant="dark" size="sm" className="me-2">
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button variant="danger" size="sm">
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sebutkan fungsi bahasa Indonesia!</td>
                <td>
                  <Button variant="dark" size="sm" className="me-2">
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button variant="danger" size="sm">
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
              {/* Add more rows dynamically */}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default DetailUjian;
