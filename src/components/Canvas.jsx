import React, { useState, useRef, useEffect, useCallback } from "react";
import app from "../firebase/app";

const Canvas = ({ color, lineWidth }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");

  const clearBackground = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    clearBackground();
  }, [clearBackground]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    const ctx = ctxRef.current;
    ctx.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const ctx = ctxRef.current;
    const { offsetX: x, offsetY: y } = nativeEvent;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const save = () => {
    const canvas = canvasRef.current;
    setImage(canvas.toDataURL("image/png"));
  };

  const sendToFirebase = async () => {
    if (!authorName) return;
    const data = {
      image,
      name : authorName,
      uid: "admin",
      uName: "admin",
      createdAt: new Date().toLocaleString(),
    };
    const firebaseRef = app.database().ref("cavnases");
    try {
      const res = await firebaseRef.push(data);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }

    setImage(null);
    setAuthorName("");
  };

  return (
    <div className='canvas'>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid" }}
        width='800'
        height='500'
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
      ></canvas>
      <button onClick={save}> Save </button>
      {image && (
        <div className='popup-container'>
          <div className='popup'>
            <h3>Name Your Project!</h3>
            <input
              type='text'
              autoFocus
              value={authorName}
              onChange={e => setAuthorName(e.target.value)}
            />
            <button onClick={sendToFirebase}>Save file</button>
          </div>
        </div>
      )}
      <button onClick={clearBackground}> Clear </button>
    </div>
  );
};

export default Canvas;
