import { Fragment, useState } from 'react'
import styles from './styles.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <h1>{count}</h1>
      <button className={styles.qweQWE} onClick={() => setCount(count + 1)}>Increment</button>
    </Fragment>
  )
}
