import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage'))
const Login = lazy(() => import('../pages/Access/Login'))
const Register = lazy(() => import('../pages/Access/Register'))
const ViewEvent = lazy(() => import('../pages/Events/ViewEvent'))

function App () {
    return(
        <Suspense fallback={<h1>Loading...</h1>}>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        element={ <HomePage /> }
                    />
                    <Route 
                        path="/login" 
                        element={ <Login /> }
                    />
                    <Route 
                        path="/register" 
                        element={ <Register /> }
                    />
                    <Route 
                        path="/view_event" 
                        element={ <ViewEvent /> }
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;