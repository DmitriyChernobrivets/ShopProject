import { HOME, PRODUCTS_CATEGORY, PRODUCT_BY_ID, BUCKET, NOT_FOUND } from "../constants/Routes";
import Home from "../components/Blocks/Home/Home";
import Main from "../components/Blocks/main/index";
import CardInfoContainer from "../Containers/CardInfoContainer";
import BucketContainer from "../Containers/BucketContainer";
import ErrorComponent from "../components/Shared/Errorpage/ErrorComponent";

const Routes = {
  HOME: {
    path: HOME,
    exact: true,
    component: Home
  },
  MAIN: {
    path: PRODUCTS_CATEGORY,
    exact: true,
    component: Main
  },
  INFO: {
    path: PRODUCT_BY_ID,
    exact: false,
    component: CardInfoContainer
  },
  BUCKET: {
    path: BUCKET,
    exact: false,
    component: BucketContainer
  },
  NOT_FOUND: {
    path: NOT_FOUND,
    exact: false,
    component: ErrorComponent
  }
};

export default Routes;
