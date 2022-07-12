import React, { useEffect } from "react";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";

export default function IDE() {
    const textRef = React.useRef();
  const [code, setCode] = React.useState(
    `def hello(): \n print("hello world")`
  );
  useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
  }, []);
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
