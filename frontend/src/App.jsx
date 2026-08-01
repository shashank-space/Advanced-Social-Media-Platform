import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import { NotificationProvider } from "./context/NotificationProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { PostProvider } from "./context/PostProvider";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SocketProvider>
          <NotificationProvider>
            <PostProvider>
              <AppRoutes />
            </PostProvider>
          </NotificationProvider>
        </SocketProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}