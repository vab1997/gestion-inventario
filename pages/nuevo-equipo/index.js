import Header from "components/Header";
import Sidebar from "components/Sidebar";

export default function NuevoEquipo() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contenido"></div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .contenido {
          padding: 4px 0 4px 16px;
        }
        h1 {
          color: red;
        }
      `}</style>
    </>
  );
}
