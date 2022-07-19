import React, { useEffect } from "react";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import { useSelector } from 'react-redux'
export default function IDE() {
  const algoState = useSelector((state) => state.algo.value) 
  const textRef = React.useRef();
  let algos = ["print('algo 1')","print('algo 2')","print('algo 3')","print('algo 4')"]
  const [code, setCode] = React.useState(
    algos[algoState]
  );
  useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
    setCode(algos[algoState.payload-1])
  }, [algoState]);
  return (
    <>
    <CodeEditor
          value={code}
          ref={textRef}
          language="python"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          style={{
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            fontSize: 12,
            height: "100%"
            
          }}
        />
        </>
  )
}
