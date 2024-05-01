"use client"
import React from "react";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import Files from "@/components/Files";


export default function Home() {
  const [imageData, setImageData] = React.useState("");
  const [pdfData, setPdfData] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    e.productImage = imageData;
    e.pdfData = pdfData;
    console.log(e.pdfData)
  }

  return (
    <main className="h-fit flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl">
        <div className="text-center">
          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Uploadthing File Upload!
          </h2>
          <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
        </div>
          <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Image</label>
              {imageData && (
                <button
                  type="button"
                  onClick={() => setImageData("")}
                  className="py-1 px-3 focus:outline-none hover:bg-gray-200">+ edit image</button>
              )}
            </div>
            {imageData ? (
              <div className="col-span-6 sm:col-span-4 shadow">
                <Image
                  src={imageData}
                  alt="productImage"
                  width="1000" height="100"
                  className="object-cover w-full h-[250px]"
                />
              </div>
            ) : (
                <>
                  <UploadDropzone
                    endpoint={'productImage'}
                    onClientUploadComplete={(res: any) => {
                      console.log("files", res);
                      setImageData(res?.[0].url)
                      window.alert("Upload completed")
                    }}
                    onUploadError={(error) => {
                      window.alert(`${error?.message}`)
                    }}
                    // className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50
                    // bg-slate-800 ut-label:text-lg ut-label:text-white ut-allowed-content:ut-uploading:text-red-300"
                  // appearance={{
                  //     button:
                  //       "ut-button:ut-readying:bg-red-500/50 bg-red-500 ut-uploading:cursor-not-allowed after:bg-orange-400 rounded-r-none",
                  //       container: "bg-slate-800 ut-label:text-lg ut-label:text-white ut-allowed-content:ut-uploading:text-red-300",
                  //   }}
                  />
              </>
            )}
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
              {pdfData && (
                <button
                  type="button"
                  onClick={() => setPdfData("")}
                  className="py-1 px-3 focus:outline-none hover:bg-gray-200">+ edit pdf</button>
              )}
            </div>
            {pdfData ? (
              <a target="_blank" href={pdfData?.[0]?.url} className="col-span-6 sm:col-span-4 text-red-400 underline">
                {pdfData?.[0]?.name}
              </a>
            ) : (
                <>
                <UploadButton
                  endpoint={'productPdf'}
                  onClientUploadComplete={(url: any) => {
                    console.log("files", url);
                    setPdfData(url)
                    window.alert("Upload completed")
                  }}
                />
              </>
            )}
            </div>
            <p className="text-sm text-gray-300">
                <span>File type: doc,pdf,types of images</span>
          </p>
            <button type="submit" className="p-2 w-full flex justify-center bg-blue-500 text-gray-100 rounded-full tracking-wide
                font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
              Upload
            </button>
          </form>
      </div>
    </main>
  );
}
