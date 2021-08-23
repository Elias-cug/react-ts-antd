import React from "react"
interface EditorProps {
  detail: string
}
const Editor: React.FC<EditorProps> = (props) => {
  const {detail} = props
  return (
    <div>{detail}</div>
  )
}

export default Editor