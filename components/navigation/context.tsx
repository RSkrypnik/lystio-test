import { createContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from "react";

interface NavigationContextType {
  filter: object
  setFilter: Dispatch<SetStateAction<object>>
}

const initState = {
  filter: {
    rent: [0, 99999]
  },
  setFilter: () => {}
}

export const NavigationContext = createContext<NavigationContextType>(initState)

export const NavigationProvider = ({children}: PropsWithChildren) => {
  const [filter, setFilter] = useState(initState);

  return (
    <NavigationContext.Provider value={{ filter, setFilter }}>
      {children}
    </NavigationContext.Provider>
  )
}