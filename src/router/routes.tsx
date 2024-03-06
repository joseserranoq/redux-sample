import { Routes,Route } from "react-router-dom";
import App from "../App";


export const routes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path="/*" />
        </Routes>
    </>
  )
}
