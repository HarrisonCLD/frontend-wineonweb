import { Suspense, useEffect } from "react";
import { Await, useLoaderData, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "../../shared/navbar/navbar";
import NavbarBackoffice from "@components/shared/navbarBackoffice";
import IsLoading from "@messagebox/loadingbox";

import { useData } from "../../../providers/data.provider";

import { set_status } from "@services/user.service";

export default function BackOffice() {
  const { informations } = useLoaderData();
  const { setInformationsData, formdata } = useData();
  const dispatch = useDispatch();

  useEffect(() => {
    setInformationsData(informations);
    if (Object.keys(informations).length > 0) {
      dispatch(set_status({ status: "signin" }));
    }
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
