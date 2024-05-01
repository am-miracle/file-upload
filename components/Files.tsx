"use client"
import React from "react";

export default function Files({ data, handleDelete }: any) {
  console.log(data)
  return (
    <>
      {data.length > 0 && (
        <ul>
          {data.map((file: any) => (
            <li key={file.id} className="flex items-center justify-between">
              <a href={file.key} target="_blank" rel="noreferrer"
                className="text-blue-500 hover:underline text-xl"
              >
                {file.name}
              </a>
              <button onClick={() => handleDelete(file.key)}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

