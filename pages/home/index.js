import Sidebar from "components/Sidebar";
import Header from "components/Header";
import useUser from "hooks/useUser";

export default function HomePage() {
  const user = useUser();

  return (
    <>
      <Header />
      <div>
        <Sidebar />
      </div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}
