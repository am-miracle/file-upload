"use server"

import { utapi } from "@/server/uploadthing";

export async function uploadFiles(formData: FormData) {
  try {
    const files = formData.get("file") as File;
    const response = await utapi.uploadFiles(formData);
    console.log(response)
    return response;
  } catch (error) {
    return "Image Upload failed"
  }
}