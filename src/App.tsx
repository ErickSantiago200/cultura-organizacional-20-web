import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import ProcesoAprendizaje from './pages/ProcesoAprendizaje/ProcesoAprendizaje';
import MecanismosCompartir from './pages/MecanismosCompartir/MecanismosCompartir';
import CafesDelConocimiento from './pages/CafesDelConocimiento/CafesDelConocimiento';
import CafeDelConocimiento from './pages/CafeDelConocimiento/CafeDelConocimiento';
import LaboratorioPedagogico from './pages/LaboratorioPedagogico/LaboratorioPedagogico';
import SeccionPendiente from './pages/SeccionPendiente/SeccionPendiente';
import LegacyRedirect from './components/LegacyRedirect/LegacyRedirect';
import {
  compartirSecciones,
  mensajeSeccionPendiente,
  procesoAprendizajeContent,
} from './content/procesoAprendizaje';
import {
  laboratorioPedagogicoContent,
  laboratorioSecciones,
} from './content/laboratorioPedagogico';
import { mecanismosCompartirContent } from './content/mecanismosCompartir';
import Premiaciones from './pages/Premiaciones/Premiaciones';
import Premiacion from './pages/Premiacion/Premiacion';
import MemoriaEntidad from './pages/MemoriaEntidad/MemoriaEntidad';
import BancoBuenasPracticas from './pages/BancoBuenasPracticas/BancoBuenasPracticas';
import FeriaConocimiento from './pages/FeriaConocimiento/FeriaConocimiento';
import CulturaOrganizacional from './pages/CulturaOrganizacional/CulturaOrganizacional';
import LineaDeTiempo from './pages/LineaDeTiempo/LineaDeTiempo';
import HitoLineaTiempo from './pages/HitoLineaTiempo/HitoLineaTiempo';
import Bipal from './pages/Bipal/Bipal';
import Linka from './pages/Linka/Linka';
import BancoInformacion from './pages/BancoInformacion/BancoInformacion';
import BancoSeccion from './pages/BancoSeccion/BancoSeccion';
import SistemaReuniones from './pages/SistemaReuniones/SistemaReuniones';
import EntrevistasServidores from './pages/EntrevistasServidores/EntrevistasServidores';
import ServidoresQueSeRetiran from './pages/ServidoresQueSeRetiran/ServidoresQueSeRetiran';
import ExDirectores from './pages/ExDirectores/ExDirectores';
import NotFound from './pages/NotFound/NotFound';

const GRUPOS = mecanismosCompartirContent.basePath;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* Compartir conocimiento (antes "Proceso de Aprendizaje Organizacional") */}
          <Route path="proceso-de-aprendizaje-organizacional">
            <Route index element={<ProcesoAprendizaje />} />
            <Route path="feria-del-conocimiento" element={<FeriaConocimiento />} />
            <Route path="laboratorio-pedagogico">
              <Route index element={<LaboratorioPedagogico />} />
              <Route
                path=":seccionId"
                element={
                  <SeccionPendiente
                    items={laboratorioSecciones}
                    message={mensajeSeccionPendiente}
                    backTo={laboratorioPedagogicoContent.basePath}
                    backLabel={laboratorioPedagogicoContent.sectionBackLabel}
                  />
                }
              />
            </Route>

            {/* Cafés y Premiaciones ahora viven en Grupos transversales: las
                URLs anteriores redirigen para no romper enlaces guardados. */}
            <Route
              path="cafes-del-conocimiento"
              element={<LegacyRedirect to={`${GRUPOS}/cafes-del-conocimiento`} />}
            />
            <Route
              path="cafe-del-conocimiento/:id"
              element={<LegacyRedirect to={`${GRUPOS}/cafes-del-conocimiento/2026/:id`} />}
            />
            <Route path="premiaciones" element={<LegacyRedirect to={`${GRUPOS}/premiaciones`} />} />
            <Route
              path="premiaciones/:id"
              element={<LegacyRedirect to={`${GRUPOS}/premiaciones/:id`} />}
            />

            <Route
              path=":seccionId"
              element={
                <SeccionPendiente
                  items={compartirSecciones}
                  message={mensajeSeccionPendiente}
                  backTo={procesoAprendizajeContent.basePath}
                  backLabel={procesoAprendizajeContent.sectionBackLabel}
                />
              }
            />
          </Route>

          {/* Grupos transversales (antes "Mecanismos para Compartir el Conocimiento") */}
          <Route path="mecanismos-para-compartir-el-conocimiento">
            <Route index element={<MecanismosCompartir />} />
            <Route path="cafes-del-conocimiento">
              <Route index element={<CafesDelConocimiento />} />
              <Route path=":anio/:numero" element={<CafeDelConocimiento />} />
            </Route>
            {/* URL anterior de los cafés (numeración sin año): eran los de 2026. */}
            <Route
              path="cafe-del-conocimiento/:id"
              element={<LegacyRedirect to={`${GRUPOS}/cafes-del-conocimiento/2026/:id`} />}
            />
            <Route path="premiaciones">
              <Route index element={<Premiaciones />} />
              {/* URL anterior: era la actividad del 27 de mayo (hoy, segunda premiación). */}
              <Route
                path="primeras-premiaciones"
                element={<LegacyRedirect to={`${GRUPOS}/premiaciones/segunda-premiacion`} />}
              />
              <Route path=":id" element={<Premiacion />} />
            </Route>
          </Route>

          {/* Memoria de la entidad */}
          <Route path="memoria-de-la-entidad">
            <Route index element={<MemoriaEntidad />} />
            <Route path="buenas-practicas" element={<BancoBuenasPracticas />} />
            <Route path="linea-de-tiempo-de-la-entidad">
              <Route index element={<LineaDeTiempo />} />
              <Route path="cultura-organizacional-2-0" element={<CulturaOrganizacional />} />
              <Route path="bipal" element={<Bipal />} />
              <Route path="linka" element={<Linka />} />
              <Route path="banco-de-informacion-de-perfiles-academicos-y-laborales">
                <Route index element={<BancoInformacion />} />
                <Route path="sistemas-de-reuniones" element={<SistemaReuniones />} />
                <Route path=":seccionId" element={<BancoSeccion />} />
              </Route>
              <Route path=":hitoId" element={<HitoLineaTiempo />} />
            </Route>
            <Route path="entrevistas-a-servidores">
              <Route index element={<EntrevistasServidores />} />
              <Route path="servidores-que-se-retiran" element={<ServidoresQueSeRetiran />} />
              <Route path="ex-directores" element={<ExDirectores />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
