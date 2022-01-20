import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/combineReducer'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './router/router'
import './styles.less'
import history from './router/history'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense
          fallback={
            <div style={{ textAlign: 'center' }}>
              <h1>Loading ....</h1>
            </div>
          }
        >
          <Router history={history} />
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App;
