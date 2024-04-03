import { db } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const data  = await request.json()
        console.log(data)
        const user = await db.user.create({
            data: {
              email: data.email,
              name: data.firstName,
              walletAddress: data.walletAddress,
              username: data.username,
            }
          })

          if(!user){
            console.log("an error occur")
            throw new Error("An error occurred")
          }

          console.log(user)
        return NextResponse.json(user)
    } catch (error) {
      console.log(error)
        return NextResponse.json({ message: 'Unauthorized' });
    }
}