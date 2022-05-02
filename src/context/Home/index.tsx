import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'

type HomeProviderType = {
  children: ReactNode
}

type CounterType = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

type HomeContextType = {
  testContext: string
  useCounter: () => CounterType
}

const HomeContext = createContext({} as HomeContextType)

export function HomeProvider({ children }: HomeProviderType) {
  const testContext = 'testContextHome'
  const [count, setCount] = useState(0)

  const useCounter = useCallback(() => {
    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)
    const reset = () => setCount(0)
    return { count, increment, decrement, reset }
  }, [count])

  return (
    <HomeContext.Provider value={{ testContext, useCounter }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHomeContext() {
  return useContext(HomeContext)
}
