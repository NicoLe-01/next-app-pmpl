import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import fetch from "isomorphic-fetch";
import Image from "next/image";
import placeholderImage from "/public/images/batik-bali.jpg";

const ImageClassifier = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [model, setModel] = useState(null);
  const [classLabels, setClassLabels] = useState(null);

  const [loading, setLoading] = useState(false);
  const [predictedClass, setPredictedClass] = useState(null);

  useEffect(() => {
    // Load Model
    const runModel = async () => {
      const model = await tf.loadLayersModel("/my_tfjs_model_v2/model.json");

      setModel(model);
      // console.log(model.outputLayers[0].units);
      // console.log('Model Loaded Successfully');
    };

    // Get alphabet JSON
    const getClassLabels = async () => {
      const res = await fetch("/label.json");

      const data = await res.json();

      setClassLabels(data);
    };

    runModel();
    getClassLabels();
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(placeholderImage);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const readImageFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);

      reader.readAsDataURL(file);

      setSelectedFile(file);
    });
  };

  const createHTMLImageElement = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new window.Image();

      img.onload = () => resolve(img);

      img.src = imageSrc;
    });
  };

  const handleImageAndPredict = async (e) => {
    if (e.target.files.length === 0) {
      setPredictedClass(null);
    }

    // allowed  file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const file = e.target.files[0];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select a valid image file JPG/JPEG/PNG/");
      return;
    }

    if (e.target.files.length === 1) {
      setLoading(true);
      const imageSrc = await readImageFile(e.target.files[0]);
      const image = await createHTMLImageElement(imageSrc);

      const [predictedClass] = tf.tidy(() => {
        const tensorImg = tf.browser
          .fromPixels(image)
          .resizeNearestNeighbor([224, 224])
          .toFloat()
          .expandDims();
        const result = model.predict(tensorImg);

        const predicted_index = result.as1D().argMax().dataSync()[0];
        console.log(predicted_index);

        const predictedClass = classLabels[predicted_index];
        console.log(predictedClass);
        return [predictedClass];
      });

      setPredictedClass(predictedClass);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#ECE5C7] mx-auto rounded-2xl h-fit text-center mb-[10rem] mt-[7rem] transition-all ease-in duration-300 w-[60%] shadow-xl">
      <div id="titleText" className="pt-8">
        <p className="font-Roboto font-bold text-center text-2xl md:text-lg xl:text-4xl transition-all ease-in duration-300">
          Batik Classifier
        </p>
      </div>

      <div
        id="signRecognition"
        className="flex flex-col lg:flex lg:m-2 items-center justify-center transition-all ease-in duration-300"
      >
        <p className="text-lg pt-5 font-semibold">
          Silahkan Upload Gambar Batik :
        </p>
        <div className="upload flex flex-col items-center justify-start basis-3/4 transition-all ease-in duration-300">
          <form className="space-x-6">
            <div className="shrink-0"></div>
            <label className="block">
              <input
                id="inputImage"
                type="file"
                className="block w-full text-lg text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0
                        file:text-sm file:font-semibold
                        file:bg-[#116A7B] file:text-white hover:file:bg-[#073d48] hover:cursor-pointer py-5 transition-all ease-in duration-300"
                name="image"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageAndPredict}
                htmlFor="inputImage"
              />{" "}
            </label>
          </form>
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="uploaded-image"
              className="h-[24rem] w-[48rem] object-contain transition-all ease-in duration-300"
            />
          )}
          {!selectedFile && (
            <Image
              src={placeholderImage}
              alt="cortupt"
              className="h-[24rem] w-[48rem] object-contain transition-all ease-in duration-300"
            />
          )}

          {/* Loader Animation */}
          <div className="flex pb-8">
            <p className="text-2xl p-5 transition-all ease-in duration-300 font-bold">
              Hasil: {predictedClass}
            </p>
            <div
              className={
                loading
                  ? "flex justify-center items-center transition-all ease-in duration-300"
                  : "flex justify-center items-center  hidden transition-all ease-in duration-300"
              }
            >
              <div className="loader bg-white p-4 rounded-full flex space-x-2 transition-all ease-in duration-300">
                <div className="w-2 h-2 bg-gray-800 rounded-full animate-[bounce_2s_ease-in_infinite]"></div>
                <div className="w-2 h-2 bg-gray-800 rounded-full animate-[bounce_2s_ease-in-out_infinite]"></div>
                <div className="w-2 h-2 bg-gray-800 rounded-full animate-[bounce_2s_ease-out_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageClassifier;
