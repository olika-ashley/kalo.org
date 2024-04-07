import { db } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {

        const bet = await db.bets.findFirst({
            where:{}
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