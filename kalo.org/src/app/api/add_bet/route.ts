import { db } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const data  = await request.json()
        console.log(data)
        const bet = await db.bets.create({
            data: {
              condition: data.condition,
                userId: data.userId,
                currentBetCondition: data.currentBetCondition,
                winner: data.winner,
                loser: data.loser,
                betDeadline: data.betDeadline,
                stakeAmount: data.stakeAmount,
            }
          })

          if(!bet){
            console.log("an error occur")
            throw new Error("An error occurred")
          }

          console.log(bet)
        return NextResponse.json(bet)
    } catch (error) {
      console.log(error)
        return NextResponse.json({ message: 'Unauthorized' });
    }
}