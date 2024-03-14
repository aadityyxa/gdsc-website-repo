import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Podcast from "./pages/podcast/podcast.jsx";
import Events from './pages/events/events.jsx';
import Error from "./pages/error/error.jsx";
import Contact from "./pages/contact/contact.jsx";
import JoinUs from "./pages/join-us/joinus.jsx";
import Homepage from "./pages/homepage/homepage.jsx";
import Members from './pages/members/members.jsx'; 
import PastEvents from "./pages/past-events/past.jsx";
import UpcomingEvents from './pages/upcoming-events/upcoming.jsx';
import Projects1 from "./pages/projects/projects-page-1/projects1.jsx";
import Projects2 from './pages/projects/projects-page-1/projects2.jsx'; 

const Router = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Homepage />,
            errorElement:<Error />
        }, 
        {
            path:'/events', 
            element:<Events />
        }, 
        {
            path:'/podcast', 
            element:<Podcast />
        }, 
        {
            path:'/contact',
            element: <Contact />
        },
        {
            path: '/join',
            element: <JoinUs />
        }, 
        {
            path:'/members',
            element:<Members />
        }, 
        {
            path:'/upcoming',
            element:<UpcomingEvents />
        },
        {
            path:'/past',
            element:<PastEvents />
        }, 
        {
            path:'/projects',
            element:<Projects1/>
        },
        {
            path:'/project',
            element:<Projects2/>
        }
    ])


    return(
        <RouterProvider router={router} />
    )
}

export default Router; 