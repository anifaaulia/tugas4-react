import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="m-2 d-flex align-items-center">
        <i className="bi bi-mortarboard-fill text-white me-3 fs-4"></i>
        <span className="brand-name"> UJIAN ONLINE </span>
        <button className="btn btn-warning ms-5 d-flex align-items-center rounded-pill">
          <i className="text-white me-2"></i>
          <span className="fw-bold">PRO</span>
        </button>
      </div>
      <hr className="text-light" />
      <Nav className="flex-column list-group list-group-flush">
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="py-2 text-white">
            <i className="bi bi-speedometer2 fs-4 me-2"></i>
            <span>Dashboard</span>
          </Nav.Link>
        </Nav.Item>
        <hr className="text-light" />
        <Nav.Item>
          <Nav.Link as={Link} to="/mapel" className="py-2 text-white">
            <i className="bi bi-bookmarks fs-4 me-2"></i>
            <span>Mata Pelajaran</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/kelas" className="py-2 text-white">
            <i className="bi bi-back fs-4 me-2"></i>
            <span>Kelas</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/siswa" className="py-2 text-white">
            <i className="bi bi-people-fill fs-4 me-2"></i>
            <span>Siswa</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/dosen" className="py-2 text-white">
            <i className="bi bi-people-fill fs-4 me-2"></i>
            <span>Dosen</span>
          </Nav.Link>
        </Nav.Item>
        <hr className="text-light" />
        <Nav.Item>
          <Nav.Link as={Link} to="/ujian" className="py-2 text-white">
            <i className="bi bi-pencil-square fs-4 me-2"></i>
            <span>Ujian</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/sesi" className="py-2 text-white">
            <i className="bi bi-stopwatch fs-4 me-2"></i>
            <span>Sesi Ujian</span>
          </Nav.Link>
        </Nav.Item>
        <hr className="text-light" />
        <Nav.Item>
          <Nav.Link as={Link} to="/laporan-nilai" className="py-2 text-white">
            <i className="bi bi-graph-up-arrow fs-4 me-2"></i>
            <span>Laporan Nilai</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
