import logo from "./logo.svg";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";

import { useRef, useState, useEffect } from "react";
function App() {
  const signatureRef = useRef({});

  const [imageData, setImageData] = useState("");

  const saveSignature = signature => {
    setImageData(signature);
  };

  const limpiar = () => {
    signatureRef.current.clear();
    saveSignature(null);
  };

  useEffect(
    () => {
      console.log(imageData);
    },
    [imageData]
  );

  return (
    <div className="App">
      <h1>Signature manual</h1>
      <hr />

      <div className="content">
        <SignatureCanvas
          canvasProps={{
            width: 500,
            height: 200,
            style: { border: "1px solid #000000" }
          }}
          minWidth={2}
          maxWidth={3}
          penColor="black"
          ref={signatureRef}
          onEnd={() =>
            saveSignature(
              signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
            )}
        />
        <br />
        <button
          onClick={() => {
            limpiar();
          }}
        >
          Clear
        </button>
        <div className="preclass">
          {imageData}
        </div>
      </div>
    </div>
  );
}

export default App;
