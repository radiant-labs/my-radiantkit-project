import { useCurrentController } from '@radiantkit/react'

const RadiantKitComponent = () => {
  const { controller } = useCurrentController()

  const addRectangle = () => {
    controller && controller.addRectangle([100.0, 100.0], [100.0, 100.0])
  }

  return (
    <div>
      <button onClick={addRectangle}>Add Rectangle</button>
    </div>
  )
}

export default RadiantKitComponent