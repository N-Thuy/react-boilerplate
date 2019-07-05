import { call, take, put } from 'redux-saga/effects';

// The asterisk behind the function keyword tells us that this is a generator.
// eslint-disable-next-line no-unused-vars
function* fetchData() {
  // The yield keyword means that we'll wait until the (asynchronous) function
  // after it completes.
  // In this case, we wait until the FETCH_DATA action happens.
  // eslint-disable-next-line no-undef
  yield take(FETCH_DATA);
  // eslint-disable-next-line vars-on-top
  const data = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  // eslint-disable-next-line no-undef
  yield put(dataLoaded(data));
}
