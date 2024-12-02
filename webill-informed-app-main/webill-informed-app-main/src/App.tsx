import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/create-account" element={<CreateAccount />} />
                {/* ... other routes ... */}
            </Routes>
        </Router>
    );
}

export default App; 