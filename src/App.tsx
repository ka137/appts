import { RouterProvider ,createBrowserRouter,ScrollRestoration} from 'react-router-dom';
import Messages from './pages/messages';
import News from './pages/news';
import Profile from './pages/profile';

function App() {
  const router = createBrowserRouter([
    {
      path: "/appts",
      element:<News/>,
    },
    {
      path: "/profile/:id",
      element:<Profile/>,
    },
    {
      path: "/messages",
      element:<Messages/>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>


  )
}

export default App;
