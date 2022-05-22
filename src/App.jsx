/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./componants/ColorfulMessage";

const App = () => {
  //    変数、　　　　関数、　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　初期値
  const [num, setNum] = useState(0);
  const [showFace, setShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onFaceShow = () => {
    setShowFace(!showFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFace || setShowFace(true);
      } else {
        showFace && setShowFace(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>test</h1>
      <ColorfulMessage color="blue">こんにちは</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onFaceShow}>onn/off</button>
      <p>{num}</p>
      {showFace && <p>(^ ^)</p>}
    </>
  );
};

export default App;
