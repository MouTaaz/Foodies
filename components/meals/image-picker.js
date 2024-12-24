"use client";

import { useRef, useState } from "react";
import css from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ lable, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imgeRef = useRef();
  function handlePick() {
    imgeRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={css.picker}>
      <label htmlFor={name}>{lable}</label>
      <div className={css.controls}>
        <div className={css.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image slected by you" fill />
          )}
        </div>
        <input
          className={css.input}
          required
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          ref={imgeRef}
          onChange={handleImageChange}
        />
        <button className={css.button} onClick={handlePick}>
          Pick Your Image
        </button>
      </div>
    </div>
  );
}
