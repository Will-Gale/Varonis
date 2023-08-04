import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import AddCPU from "./pages/AddCPU"
import EditCPU from "./pages/EditCPU"

function App() {
  return (
	<div className="bg-gray-100 min-h-screen">
		<BrowserRouter>
	    <div className="App">
			<ToastContainer position="top-center" />
			<Routes>
				<Route exact path="/" element={<Home />}/>
				<Route path="/AddCPU" element={<AddCPU />}/>
				<Route path="/Edit/:id" element={<EditCPU />}/>
			</Routes>
    	</div>
	</BrowserRouter>
	</div>
  );
}

export default App;
