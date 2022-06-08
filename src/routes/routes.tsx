import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpinerLoading } from "../components/SpinerLoading";

const HomePage = lazy(() => import('../pages/HomePage'))
const Login = lazy(() => import('../pages/Access/Login'))
const Register = lazy(() => import('../pages/Access/Register'))
const HomeAdmin = lazy(() => import('../pages/Admin/Home/homeAdmin'))
const Events = lazy(() => import('../pages/Admin/EventsAdmin/Events'))
const CreateEvent = lazy(() => import('../pages/Admin/EventsAdmin/CreateEvent'))
const ViewEventAdmin = lazy(() => import('../pages/Admin/EventsAdmin/ViewEventAdmin'))
const BasicInformation = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/BasicInformation'))
const ConfirmationForm = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/ConfirmationForm'))
const Dashboard = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/Dashboard'))
const Details = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/Details'))
const Order = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/Order'))
const OrderForm = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/OrderForm'))
const Publish = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/Publish'))
const WaitList = lazy(() => import('../pages/Admin/EventsAdmin/EditEvents/WaitList'))
const Pedidos = lazy(() => import('../pages/Admin/Pedidos/Pedidos'))
const Reportes = lazy(() => import('../pages/Admin/Reportes/Reportes'))
const VerReporte1 = lazy(() => import('../pages/Admin/Reportes/VerReporte1'))
const VerReporte2 = lazy(() => import('../pages/Admin/Reportes/VerReporte2'))
const Finanzas = lazy(() => import('../pages/Admin/Finanzas/Finanzas'))
const Settings = lazy(() => import('../pages/Admin/Settings/Settings'))
const PerfilAdd = lazy(() => import('../pages/Admin/Settings/PerfilAdd'))
const PerfilEdit = lazy(() => import('../pages/Admin/Settings/PerfilEdit'))
const ViewEvent = lazy(() => import('../pages/Events/ViewEvent'))

function App () {
    return(
        <Suspense fallback={ <SpinerLoading />}>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        element={ <HomePage /> }
                    />
                    <Route 
                        path="/home_admin" 
                        element={ <HomeAdmin /> }
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
                    <Route 
                        path="/events" 
                        element={ <Events /> } 
                    />
                    <Route 
                        path="/create_event" 
                        element={ <CreateEvent />  } 
                    />
                    <Route 
                        path="/view_event_admin" 
                        element={ <ViewEventAdmin />  } 
                    />
                    <Route 
                        path="/editar_evento/informacion_basica" 
                        element={ <BasicInformation /> }
                    />
                    <Route 
                        path="/editar_evento/confirmacion_del_pedido" 
                        element={ <ConfirmationForm /> }
                    />
                    <Route 
                        path="/editar_evento/panel_de_control" 
                        element={ <Dashboard /> }
                    />
                    <Route 
                        path="/editar_evento/detalles" 
                        element={ <Details /> }
                    />
                    <Route 
                        path="/editar_evento/pedidos" 
                        element={ <Order /> }
                    />
                    <Route 
                        path="/editar_evento/formulario_del_pedido" 
                        element={ <OrderForm /> }
                    />
                    <Route 
                        path="/editar_evento/publicaciones" 
                        element={ <Publish /> }
                    />
                    <Route 
                        path="/editar_evento/lista_de_espera" 
                        element={ <WaitList /> }
                    />
                    <Route 
                        path="/pedidos" 
                        element={  <Pedidos /> } 
                    />
                    <Route 
                        path="/reportes" 
                        element={ <Reportes /> } 
                    />
                    <Route 
                        path="/Mi_evento/Reporte/Resumen_de_ventas" 
                        element={  <VerReporte1 /> } 
                    />
                    <Route 
                        path="/Mi_evento/Reporte/Ventas_tipo_entrada" 
                        element={  <VerReporte2 /> } 
                    />
                    <Route 
                        path="/finanzas" 
                        element={ <Finanzas />} 
                    />
                    <Route 
                        path="/Configuraciones" 
                        element={  <Settings />} 
                    />
                    <Route 
                        path="/agregar_perfil" 
                        element={ <PerfilAdd />} 
                    />
                    <Route 
                        path="/editar_perfil" 
                        element={  <PerfilEdit />} 
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;