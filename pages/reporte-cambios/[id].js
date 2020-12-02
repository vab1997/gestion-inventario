import React, { useState, useEffect } from "react";
import Historico from "components/Historico";
import { useRouter } from "next/router";

import { buscarHistoricoEquipo } from "firebase/client";
import Link from "next/link";
import Button from "components/Button";
import Volver from "components/icons/Volver";

export default function ReporteCambios() {
  const [cambios, setCambios] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    buscarHistoricoEquipo(id, setCambios);
  }, []);

  return (
    <>
      <Link href="/historico-cambios">
        <a>
          <Button>
            <Volver width={24} height={24} fill="#fff" />
            Volver
          </Button>
        </a>
      </Link>
      <div>
        <Historico cambios={cambios} />
      </div>
      <style jsx>{`
        div {
          margin: 16px;
          border: 1px solid #bbb;
          height: 100%;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
