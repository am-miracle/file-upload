"use client"
import { ourFileRouter } from '@/app/api/uploadthing/core';
import { UploadDropzone } from '@/utils/uploadthing';
import React from 'react'

type FileUploadProp = {
    onChange: (url: any) => void;
    endpoint: keyof typeof ourFileRouter;
}
const FileUpload = ({
    onChange,
    endpoint,
}: FileUploadProp) => {
  return (
    <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res: any) => {
            onChange(res)
        }}
        onUploadError={(error) => {
            window.alert(`${error?.message}`)
        }}
    />
  )
}

export default FileUpload