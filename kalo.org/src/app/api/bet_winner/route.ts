import { db } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log(data);

        const user = await db.user.findFirst({
            where: {
                email: data.email
            }
        });

        if (!user) {
            throw new Error("User not found");
        }

        const bet = await db.bets.findFirst({
            where: {
                id: data.id
            }
        });

        if (!bet) {
            throw new Error("Bet not found");
        }

        let updatedBet;
        let winnerUserId;

        if (bet.user1Answer === bet.answer && user.username === bet.user1Name) {
            winnerUserId = user.id;
        } else if (bet.user2Answer === bet.answer) {
            winnerUserId = bet.user2Id;
        } else {
            return NextResponse.json({ message: 'No winner. Both answers are incorrect.' });
        }

        updatedBet = await db.bets.update({
            where: { id: data.id },
            data: {
                winner: winnerUserId
            }
        });

        if (!updatedBet) {
            throw new Error("Failed to update bet");
        }

        const history = await db.history.create({
            data: {
                name: bet.name,
                betId: bet.id,
                userId: user.id,
                winner: `${updatedBet.winner}`,
                loser: `${updatedBet.loser}`,
                user2Id: `${bet.user2Id}`
            }
        });

        if (!history) {
            throw new Error("Failed to create history record");
        }

        return NextResponse.json(history);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Unauthorized' });
    }
}