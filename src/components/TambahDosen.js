import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";


function TambahDosen() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
    {/* Include Navbar at the Top */}
    <Nav />
    <div className="p-3" style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}>
      <div className="rounded shadow p-4 bg-white" style={{ borderRadius: "20px" }}>
        {/* Back Button */}
        <Button
          variant="dark"
          className="mb-4 d-flex align-items-center"
          onClick={() => navigate("/dosen")}
        >
          <i className="bi bi-arrow-left me-2 fs-6"></i> Kembali
        </Button>

        {/* Form Header */}
        <h5 className="mb-4"><i class="bi bi-person-fill me-2"></i>Tambah Dosen</h5>

        {/* Form Fields */}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="NIP">
                <Form.Label>NIP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan NIP Dosen"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="namaLengkap">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nama Dosen"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="alamat">
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alamat"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="jenisKelamin">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select required>
                  <option value="">Pilih</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan Password"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="konfirmasiPassword">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan Konfirmasi Password"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

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

export default TambahDosen;
