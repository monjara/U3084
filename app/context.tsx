import { createContext, ReactNode, useContext } from 'react'
import { Socket } from 'socket.io-client'

type SocketProviderProps = {
  socket: Socket | undefined
  children: ReactNode
}

const context = createContext<Socket | undefined>(undefined)

export function useSocket() {
  return useContext(context)
}

export function SocketProvider({ socket, children }: SocketProviderProps) {
  return <context.Provider value={socket}>{children}</context.Provider>
}
