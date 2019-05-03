import Loadable from "react-loadable";
import Loader from "../components/Shared/Preloader/loader";

import { HOME, PRODUCTS_CATEGORY, PRODUCT_BY_ID, BUCKET, NOT_FOUND } from "../constants/Routes";

const Routes = {
  HOME: {
    path: HOME,
    exact: true,
    component: Loadable({
      loader: () => import("../components/Blocks/Home/Home"),
      loading: Loader
    })
  },

  MAIN: {
    path: PRODUCTS_CATEGORY,
    exact: true,
    component: Loadable({
      loader: () => import("../Containers/MainContainer"),
      loading: Loader
    })
  },
  INFO: {
    path: PRODUCT_BY_ID,
    exact: false,
    component: Loadable({
      loader: () => import("../Containers/CardInfoContainer"),
      loading: Loader
    })
  },
  BUCKET: {
    path: BUCKET,
    exact: false,
    component: Loadable({
      loader: () => import("../Containers/BucketContainer"),
      loading: Loader
    })
  },
  NOT_FOUND: {
    path: NOT_FOUND,
    exact: false,
    component: Loadable({
      loader: () => import("../components/Shared/Errorpage/ErrorComponent"),
      loading: Loader
    })
  }
};

export default Routes;
