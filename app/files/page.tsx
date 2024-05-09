import React from 'react'
import Files from '@/components/Files'
import { utapi } from '@/server/uploadthing';
import CustomForm from '@/components/CustomForm';

async function getFiles() {
  const res = await utapi.listFiles();
  console.log(res)
  return res;
}

async function deleteFiles(fileKey: any) {
  const res = await utapi.deleteFiles(fileKey);
  return res;
}
const files = async () => {
  const data = await getFiles();
  const handleDelete = async (fileKey: any) => {
    "use server"
    await deleteFiles(fileKey);
    // Refresh data after deletion
    const newData = await getFiles();
    return newData;
  }
  return (
    <main className="h-fit flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl">
        {/* <Files
          data={data}
          handleDelete={handleDelete}
        /> */}
        <CustomForm />
      </div>
    </main>
  )
}

export default files;