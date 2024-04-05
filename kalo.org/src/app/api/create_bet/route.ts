import { db } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const data = await request.json()
        console.log("bet data: ", data)

        const user = await db.user.findFirst({
            where: {
                email: data.email
            }
        })

        if (!user) {
            const createUser = await db.user.create({
                data: {
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    walletAddress: data.walletAddress,
                    username: data.username
                }
            })

            if (!createUser) {
                throw new Error("")
            }

            const bet = await db.bets.create({
                data: {
                    condition: data.condition,
                    name: data.name,
                    currentBetCondition: data.currentBetCondition,
                    user1: data.user1,
                    betDeadline: data.betDeadline,
                    stakeAmount: data.stakeAmount,
                    userId: createUser.id
                }
            })

            if(!bet){
                throw new Error("An error occur")
            }

            return NextResponse.json(bet)
        } else {
            console.log("yesmmm")
            const bet = await db.bets.create({
                data: {
                    condition: data.condition,
                    name: data.name,
                    currentBetCondition: data.currentBetCondition,
                    user1: data.user1,
                    betDeadline: data.betDeadline,
                    stakeAmount: data.stakeAmount,
                    userId: user.id
                }
            })

            console.log("databet",bet)
            return NextResponse.json(bet)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Unauthorized' });
    }
}