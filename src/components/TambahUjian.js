import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function TambahUjian() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
      {/* Include Navbar */}
      <Nav />

      <div className="container mt-4">
        {/* Form Section */}
        <div
          className="rounded shadow p-4 bg-white"
          style={{ borderRadius: "20px", margin: "auto" }}
        >
          {/* Back Button */}
          <Button
            variant="dark"
            className="mb-4 d-flex align-items-center"
            onClick={() => navigate("/Ujian")}
          >
            <i className="bi bi-arrow-left me-2 fs-6"></i>Kembali
          </Button>

          {/* Form Header */}
          <h5 className="mb-4">
            <i className="bi bi-pencil-square me-2"></i>Tambah Ujian
          </h5>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            {/* Nama Ujian */}
            <Form.Group controlId="namaUjian" className="mb-3">
              <Form.Label>Nama Ujian</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Ujian"
                required
              />
            </Form.Group>

            {/* Mata Pelajaran and Kelas */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="mataPelajaran">
                  <Form.Label>Mata Pelajaran</Form.Label>
                  <Form.Select required>
                    <option value="">Pilih Mata Pelajaran</option>
                    {/* Add more options dynamically */}
                    <option value="matematika">Matematika</option>
                    <option value="bahasa-indonesia">Bahasa Indonesia</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="kelas">
                  <Form.Label>Kelas</Form.Label>
                  <Form.Select required>
                    <option value="">Pilih Kelas</option>
                    {/* Add more options dynamically */}
                    <option value="kelas-a">Teknik Informatika - A</option>
                    <option value="kelas-b">Teknik Informatika - B</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Deskripsi */}
            <Form.Group controlId="deskripsi" className="mb-4">
              <Form.Label>Deskripsi</Form.Label>
              <textarea
                id="editor"
                className="form-control"
                placeholder="Masukkan Deskripsi Ujian"
                rows="5"
                required
              ></textarea>
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-dark d-flex align-items-center">
                <i class="bi bi-floppy me-2 fs-6"></i>Simpan
            </button>
            <button type="button" className="btn btn-warning d-flex align-items-center">
                <i class="bi bi-x-circle me-2 fs-5"></i>Reset
            </button>
             </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default TambahUjian;
