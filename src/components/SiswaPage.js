import React from 'react'; 
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';  
import { useNavigate } from "react-router-dom";

function Dashboard() {   
    const navigate = useNavigate();

  return (     
    <div>       

      {/* Welcome Banner */}       
      <Container className="mt-4">         
        <Card style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>            
          <Card.Body>             
            <h5 className="text-center">Selamat Datang <span style={{ color: 'green' }}>Anifa Aulia Abdari</span></h5>           
          </Card.Body>         
        </Card>       
      </Container>        

      {/* Exam Info */}       
      <Container className="mt-4">         
        <Card style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>       
          <Card.Header className="text-center">             
            <h5>Ujian Tengah Semester (UTS)</h5>           
          </Card.Header>           
          <Card.Body>             
            <Row className="mb-3">               
              <Col sm={4}><strong>Mata Pelajaran</strong></Col>               
              <Col sm={8}>Matematika</Col>             
            </Row>             
            <Row className="mb-3">               
              <Col sm={4}><strong>Kelas</strong></Col>               
              <Col sm={8}>Teknik Informatika - A</Col>             
            </Row>             
            <Row className="mb-3">               
              <Col sm={4}><strong>Sesi</strong></Col>               
              <Col sm={8}>Sesi 2</Col>             
            </Row>             
            <Row className="mb-3">               
              <Col sm={4}><strong>Mulai</strong></Col>               
              <Col sm={8}>2024-08-18 22:21:00</Col>             
            </Row>             
            <Row className="mb-3">               
              <Col sm={4}><strong>Selesai</strong></Col>               
              <Col sm={8}>2024-08-19 22:21:00</Col>             
            </Row>             
            <div className="text-center">               
              <Button variant="success" size="lg"  onClick={() => navigate("/detail-soal")}>Kerjakan</Button>             
            </div>      
          </Card.Body>         
        </Card>       
      </Container>     
    </div>   
  ); 
}  

export default Dashboard;
