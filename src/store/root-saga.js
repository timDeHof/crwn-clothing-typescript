import { all, call } from "redux-saga/effects";

import { categoriesSage } from "./categories/categories.saga";
import { userSages } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSage), call(userSages)]);
}
