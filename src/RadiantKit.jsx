import { RadiantKitProvider, RadiantKitCanvas } from "@radiantkit/react";
import RadiantKitComponent from "./RadiantKitComponent";

const RadiantKit = () => {
  return (
    <RadiantKitProvider>
      <RadiantKitComponent />
      <RadiantKitCanvas />
    </RadiantKitProvider>
  )
}

export default RadiantKit