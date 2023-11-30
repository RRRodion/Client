import {
    ADDCOLLECTION_ROUTE, ADDITEM_ROUTE,
    ADMIN_ROUTE,
    COLLECTION_ROUTE,
    COLLECTIONS_ROUTE,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    USERCOLLETION_ROUTE
} from "./utils/consts";
import Collections from "./pages/Collections";
import Auth from "./pages/Auth"
import Admin from "./pages/Admin";
import Item from "./pages/Item";
import collection from "./pages/Collection";
import UserCollection from "./pages/UserCollection";
import AddCollection from "./pages/AddCollection";
import AddItem from "./pages/AddItem";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USERCOLLETION_ROUTE,
        Component: UserCollection
    },
    {
        path: ADDCOLLECTION_ROUTE,
        Component: AddCollection
    },
    {
        path: ADDITEM_ROUTE,
        Component: AddItem
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