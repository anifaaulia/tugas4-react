import React from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PengerjaanSoal() {
    const navigate = useNavigate();
  return (
    <div>

      {/* Main Content */}
      <Container className="mt-4">
        <Row>
          {/* Left Section: Question */}
          <Col md={8}>
            <Card>
              <Card.Body>
                <p style={{ fontWeight: "bold" }}>Berapakah hasil dari 2 + 2 ...</p>
                <div>
                  <div className="mb-3">
                    <Button variant="outline-primary" className="w-100 text-start">
                      A. 4
                    </Button>
                  </div>
                  <div className="mb-3">
                    <Button variant="outline-primary" className="w-100 text-start">
                      B. 6
                    </Button>
                  </div>
                  <div className="mb-3">
                    <Button variant="outline-primary" className="w-100 text-start">
                      C. 5
                    </Button>
                  </div>
                  <div className="mb-3">
                    <Button variant="outline-primary" className="w-100 text-start">
                      D. 3
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline-primary" className="w-100 text-start">
                      E. 2
                    </Button>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="secondary">Selanjutnya</Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Right Section: Progress */}
          <Col md={4}>
            <Card>
              <Card.Body>
                <div className="text-center mb-3">
                  <Badge bg="success">0 dikerjakan</Badge>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  {[1, 2, 3, 4, 5].map((number) => (
                    <Button
                      key={number}
                      variant={number === 1 ? "secondary" : "outline-primary"}
                      className="m-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      {number}
                    </Button>
                  ))}
                </div>
                <div className="text-center">
                  <Button variant="danger" size="lg" onClick={() => navigate("/siswa-page")}>
                    Akhiri Ujian
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

export default PengerjaanSoal;
