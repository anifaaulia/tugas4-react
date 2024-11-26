import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function TambahSesi() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
          style={{ borderRadius: "20px" }}
        >
          {/* Back Button */}
          <Button
            variant="dark"
            className="mb-4 d-flex align-items-center"
            onClick={() => navigate("/ujian")}
          >
            <i className="bi bi-arrow-left me-2 fs-6"></i>Kembali
          </Button>

          {/* Form Header */}
          <h5 className="mb-4">
            <i className="bi bi-stopwatch me-2"></i>Tambah Sesi
          </h5>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            {/* Nama Sesi */}
            <Form.Group controlId="namaSesi" className="mb-3">
              <Form.Label>Nama Sesi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Sesi"
                required
              />
            </Form.Group>

            {/* Ujian */}
            <Form.Group controlId="ujian" className="mb-3">
              <Form.Label>Ujian</Form.Label>
              <Form.Select required>
                <option value="">Pilih Ujian</option>
                {/* Add more options dynamically */}
                <option value="ujian-1">Ujian 1</option>
                <option value="ujian-2">Ujian 2</option>
              </Form.Select>
            </Form.Group>

            {/* Waktu Mulai and Waktu Selesai */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="waktuMulai">
                  <Form.Label>Waktu Mulai</Form.Label>
                  <Form.Control type="datetime-local" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="waktuSelesai">
                  <Form.Label>Waktu Selesai</Form.Label>
                  <Form.Control type="datetime-local" required />
                </Form.Group>
              </Col>
            </Row>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-2">
              <button type="submit" className="btn btn-dark d-flex align-items-center">
                <i className="bi bi-floppy me-2 fs-6"></i>Simpan
              </button>
              <button type="reset" className="btn btn-warning d-flex align-items-center">
                <i className="bi bi-x-circle me-2 fs-5"></i>Reset
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default TambahSesi;
