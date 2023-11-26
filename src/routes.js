import {
    ADMIN_ROUTE,
    COLLECTION_ROUTE,
    COLLECTIONS_ROUTE,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Collections from "./pages/Collections";
import Auth from "./pages/Auth"
import Admin from "./pages/Admin";
import Item from "./pages/Item";
import collection from "./pages/Collection";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes = [
    {
        path: COLLECTIONS_ROUTE,
        Component: Collections
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: Item
    },
    {
        path: COLLECTION_ROUTE + '/:id',
        Component: collection
    }
]