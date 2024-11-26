import React from "react";
import { Card, Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function DetailSoal() {
    const navigate = useNavigate();

  return (
    <div>

      {/* Main Content */}
      <Container className="mt-4">
        <Button variant="secondary" className="mb-3" onClick={() => navigate("/siswa-page")}>
          ← Kembali
        </Button>

        <Row>
          {/* Left Card: Deskripsi Ujian */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header className="text-center">
                <h5>Deskripsi Ujian</h5>
              </Card.Header>
              <Card.Body>
                <p>Ujian Tengah Semester (UTS)</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Card: Detail Peserta */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header className="text-center">
                <h5>Detail Peserta</h5>
              </Card.Header>
              <Card.Body>
                <Row className="mb-3">
                  <Col sm={4}>
                    <strong>NISN</strong>
                  </Col>
                  <Col sm={8}>000000</Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}>
                    <strong>Nama Lengkap</strong>
                  </Col>
                  <Col sm={8}>Anifa Aulia Abdari</Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}>
                    <strong>Kelas</strong>
                  </Col>
                  <Col sm={8}>Teknik Informatika - A</Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}>
                    <strong>Ujian</strong>
                  </Col>
                  <Col sm={8}>Ujian Tengah Semester (UTS)</Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}>
                    <strong>Mata Pelajaran</strong>
                  </Col>
                  <Col sm={8}>Matematika</Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}>
                    <strong>Durasi</strong>
                  </Col>
                  <Col sm={8}>20 Menit</Col>
                </Row>
                <div className="text-center">
                  <Button variant="success" size="lg" onClick={() => navigate("/pengerjaan")}>
                    Mulai
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailSoal;
