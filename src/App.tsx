import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout/RootLayout';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      id: 'root',
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
