import { useParams } from "react-router-dom";

import { MAIN_ROUTE } from "../../types/const";

import ContainerPage from "../../components/modules/containerPage";

import GrainContent from "./components/GrainContent";
import GroundContent from './components/GroundContent';
import GrandContent from './components/GrandContent';
import NespressoContent from './components/NespressoContent';
import GreenContent from './components/GreenContent';

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "productions_details",
    link: "",
  },
];

const ProductionsDetailsPage = () => {
  const { product = "" } = useParams();

  const View = {
    grain: {
      component: GrainContent,
    },
    ground: {
      component: GroundContent,
    },
    grand: {
      component: GrandContent,
    },
    nespresso: {
      component: NespressoContent,
    },
    green: {
      component: GreenContent,
    },
  }[product];

  const ViewComponent = View?.component;

  return (
    <ContainerPage name="productions_details" breadcrumbs={breadcrumbs}>
      <div className="about-page__content d-flex justify-center">
        {ViewComponent ? <ViewComponent /> : null}
      </div>
    </ContainerPage>
  );
};

export default ProductionsDetailsPage;
