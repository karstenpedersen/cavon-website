import Page from "components/containers/pagelayouts/Page";
import type { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <Page title="Engdal Elevator | 404">
      <div className="h-[calc(100vh-90px)]">
        <h1>Fejl 404</h1>
        <p>Siden kunne ikke findes.</p>
      </div>
    </Page>
  );
};

export default Custom404;
