import { all, call } from "typed-redux-saga/macro";

import { categoriesSage } from "./categories/categories.saga";
import { userSages } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(categoriesSage), call(userSages)]);
}
