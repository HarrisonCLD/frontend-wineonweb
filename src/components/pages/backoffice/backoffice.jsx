import { Suspense, useEffect } from "react";
import { Await, useLoaderData, Outlet } from "react-router-dom";

import Navbar from "../../shared/navbar/navbar";
import NavbarBackoffice from "@components/shared/navbarBackoffice";
import IsLoading from "@messagebox/loadingbox";

import { useData } from "../../../providers/data.provider";

export default function BackOffice() {
  const { informations } = useLoaderData();
  const { setInformationsData, formdata } = useData();

  useEffect(() => {
    setInformationsData(informations);
  }, [informations]);

  return (
    <section className="backoffice">
      <Navbar />
      <div className="back">
        <Suspense fallback={<IsLoading />}>
          <Await resolve={informations}>
            {() => (
              <>
                <NavbarBackoffice />
                <Outlet />
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
