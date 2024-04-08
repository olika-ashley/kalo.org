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

        const bet = await db.bets.findFirst({
            where: {id: data.betId}
        })

        if (!bet) {
            throw new Error("")
        }

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


            const betUpdate = await db.bets.update({
                where: {id : data.betId},
                data: {
                    user2Name: createUser.username,
                    user2Id: createUser.id,
                    user2Answer: bet?.user1Answer === true? false : true,
                    stake2Amount: data.stakeAmount, 
                }
            })

            if(!betUpdate){
                throw new Error("An error occur")
            }

            return NextResponse.json(betUpdate)
        } else {
            console.log("yesmmm")
            const betUpdate = await db.bets.update({
                where: {id: data.betId},
                data: {
                    user2Name: user.username,
                    user2Id: user.id,
                    user2Answer: bet.user1Answer === true? false : true,
                    stake2Amount: data.stake2Amount, 
                }
            })

            console.log("databet",betUpdate)
            return NextResponse.json(betUpdate)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Unauthorized' });
    }
}