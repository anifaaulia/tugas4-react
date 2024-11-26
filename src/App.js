import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import Router and related components
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Mapel from './components/Mapel';
import Kelas from './components/Kelas';
import Siswa from './components/Siswa';
import Dosen from './components/Dosen';
import Ujian from './components/Ujian';
import Sesi from './components/Sesi';
import Laporan from './components/Laporan';
import TambahMapel from './components/TambahMapel';
import TambahKelas from './components/TambahKelas';
import TambahDosen from './components/TambahDosen';
import TambahSiswa from './components/TambahSiswa';
import TambahUjian from './components/TambahUjian';
import DetailUjian from './components/DetailUjian';
import TambahSesi from './components/TambahSesi';
import DosenPage from './components/DosenPage';
import SiswaPage from './components/SiswaPage';
import DetailSoal from './components/DetailSoal';
import PengerjaanSoal from './components/PengerjaanSoal';

function App() {
  // List of routes where the Sidebar should not appear
  const noSidebarRoutes = ["/login", "/dosen-page", "/siswa-page", "/detail-soal", "/pengerjaan"];

  // Layout Component
  function Layout({ children }) {
    const location = useLocation();

    // Check if the current route is in the noSidebarRoutes
    const showSidebar = !noSidebarRoutes.includes(location.pathname);

    return (
      <div className="container-fluid" style={{ backgroundColor: '#D3D3D3', minHeight: '100vh' }}>
        <div className="row">
          {showSidebar && (
            <div className="col-2 bg-custom vh-100">
              <Sidebar />
            </div>
          )}
          <div className={showSidebar ? 'col' : 'col-12'}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mapel" element={<Mapel />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/siswa" element={<Siswa />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/ujian" element={<Ujian />} />
          <Route path="/sesi" element={<Sesi />} />
          <Route path="/tambah-mapel" element={<TambahMapel />} />
          <Route path="/tambah-kelas" element={<TambahKelas />} />
          <Route path="/tambah-dosen" element={<TambahDosen />} />
          <Route path="/tambah-siswa" element={<TambahSiswa />} />
          <Route path="/tambah-ujian" element={<TambahUjian />} />
          <Route path="/tambah-sesi" element={<TambahSesi />} />
          <Route path="/detail-ujian" element={<DetailUjian />} />
          <Route path="/laporan-nilai" element={<Laporan />} />
          <Route path="/dosen-page" element={<DosenPage />} />
          <Route path="/siswa-page" element={<SiswaPage />} />
          <Route path="/detail-soal" element={<DetailSoal />} />
          <Route path="/pengerjaan" element={<PengerjaanSoal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
