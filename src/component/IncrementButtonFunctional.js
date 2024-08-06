import { useEffect, useState } from "react"

const IncrementButtonFunctional = () => {
  const [state, setState] = useState({
    count: 0
  })
  
  useEffect(() => {
    console.log('Functional exists')
  }, [])
  
  useEffect(() => console.log(`Functional count: ${state.count}`))

  const onClick = () => {
    setState({
      ...state,
      count: state.count + 1
    })
  }

  return (
    <button onClick={onClick}>
      FUNCTIONAL: {state.count}
    </button>
  )
}

export default IncrementButtonFunctional