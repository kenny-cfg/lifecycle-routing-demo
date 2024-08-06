import { useState } from "react"

const IncrementButtonFunctional = () => {
  const [state, setState] = useState({
    count: 0
  })

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