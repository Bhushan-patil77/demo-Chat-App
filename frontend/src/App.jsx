import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const socket = io('https://demo-chat-app-backend.vercel.app/', {
  withCredentials: true,
  transports: ['websocket'], // Force WebSocket as the only transport
});

function App() {

  useEffect(()=>{
    socket.on('connect', ()=>{
      socket.emit('greeting', 'hello' )
      socket.on('response', (msg)=>{
        document.write(msg)
      })
    })
  },[])


  return (
    <div>App
    </div>

  )
}

export default App