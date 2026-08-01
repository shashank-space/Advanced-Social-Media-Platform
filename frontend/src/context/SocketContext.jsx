/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";


import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const { user } = useAuth();

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!user) return;

    const newSocket = io(
      "http://localhost:5000",
      {
        withCredentials: true,
      }
    );

    newSocket.on("connect", () => {
      console.log(
        "Socket Connected:",
        newSocket.id
      );

      newSocket.emit(
        "join-user",
        user._id
      );
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, [user]);

  const value = useMemo(
    () => ({ socket }),
    [socket]
  );

  return (
    <SocketContext.Provider
      value={value}
    >
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () =>
  useContext(SocketContext);