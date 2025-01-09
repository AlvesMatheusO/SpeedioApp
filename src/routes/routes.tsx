import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
    const isAuthenticated = false;
    const loading = false;

    return (

        // If isAuthenticated equals true => AppRoutes else AuthRoutes
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}