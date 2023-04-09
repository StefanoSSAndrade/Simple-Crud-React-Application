import { Home } from './components/Home'
import "./global.css"
import styles from "./App.module.css"
import { Header } from './components/Header'

export const App = () => {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Home />
      </div>
    </div>
  )
}

