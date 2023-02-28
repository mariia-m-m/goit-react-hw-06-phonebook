import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));
const MainContacts = lazy(() => import('../pages/MainContacts/MainContacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-06-phonebook">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route exact path="/" element={<Phonebook />} />
                <Route path="/main_contacts" element={<MainContacts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
