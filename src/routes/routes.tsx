import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#1D1D2E",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={60} color="#FFF"/>
      </View>
    );
  }

  return (
    // If isAuthenticated equals true => AppRoutes else AuthRoutes
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  );
}
