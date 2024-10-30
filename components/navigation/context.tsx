import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

export interface FilterState {
  rent: number[];
}

export interface NavigationContextType {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
}

const initFilterState: FilterState = {
  rent: [0, 99999],
};

export const NavigationContext = createContext<NavigationContextType>({
  filter: initFilterState,
  setFilter: () => {},
});

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<FilterState>(initFilterState);

  return (
    <NavigationContext.Provider value={{ filter, setFilter }}>
      {children}
    </NavigationContext.Provider>
  );
};