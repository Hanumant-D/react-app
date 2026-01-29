import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from '../pages/Team';
import Standings from '../pages/Standings';
import AxiosPage from '../pages/AxiosPage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AxiosPage />} />
                <Route path="/team" element={<Team />} />
                <Route path='/standings' element={<Standings />} />
            </Routes>
        </Router>
    );
}