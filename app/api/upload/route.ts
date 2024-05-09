// import { utapi } from "@/server/uploadthing";
// import { NextResponse } from "next/server";

// export async function OPTIONS(req: Request) {
//     if (req.method == "GET") {
//         try {
//             const res = await utapi.listFiles();
//             console.log(res)
//             return NextResponse.json(res)
//         } catch (error) {
//             console.error(error);
//         }
//     } else if (req.method == "POST") {
//         try {
//             const { fileKeys } = await req.json()
//             const res = await utapi.deleteFiles(fileKeys);
//             console.log(res)
//             return NextResponse.json(res)
//         } catch (error) {
//             console.error(error);
//         }
//      }
// }