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
                    user1Name: createUser.username,
                    userId: createUser.id,
                    user1Answer: data.userAnswer,
                    betDeadline: data.betDeadline,
                    stakeAmount: data.stakeAmount, 
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
                    user1Name: user.username,
                    userId: user.id,
                    user1Answer: data.userAnswer,
                    betDeadline: data.betDeadline,
                    stakeAmount: data.stakeAmount, 
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