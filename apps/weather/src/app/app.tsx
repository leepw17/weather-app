// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages';
import { Header } from './layouts/header';

export type LocationContextType = {
  location: string | null;
  setLocation: (location: string | null) => void;
};

export const LocationContext = createContext<LocationContextType>({
  location: null,
  setLocation: () => console.warn(),
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export function App() {
  const [location, setLocation] = useState<string | null>(null);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <Header />
      <RouterProvider router={router} />
    </LocationContext.Provider>
  );
}

export default App;
