import './App.css';
import React from 'react'
import ComponentA from './components/ComponentA'


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div>
      <UserContext.Provider value={'Alex Klink'}>
        <ChannelContext.Provider value={'VSCode'}>
          <ComponentA></ComponentA>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
