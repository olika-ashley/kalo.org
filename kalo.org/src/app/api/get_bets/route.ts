import { db } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const searchParam  = await request.nextUrl.searchParams.get("betId") ?? ''

        const bet = await db.bets.findFirst({
            where:{
                id: searchParam
            }
        })

        if (!bet) {
            throw new Error("An error occur")
    }

    console.log("bet: ", bet)
    return NextResponse.json(bet)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Unauthorized' });
    }
}