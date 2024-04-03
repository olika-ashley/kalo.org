import { db } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const data  = await request.json()
        console.log(data)
        const history = await db.history.create({
            data: {
              condition: data.condition,
                userId: data.userId,
                betId: data.betId,
            }
          })

          if(!history){
            console.log("an error occur")
            throw new Error("An error occurred")
          }

          console.log(history)
        return NextResponse.json(history)
    } catch (error) {
      console.log(error)
        return NextResponse.json({ message: 'Unauthorized' });
    }
}