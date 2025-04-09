import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { username } = body;

    const exist = await prisma.users.findUnique({
        where: {
            username: username
        },
        select: {
            username: true,
            email: true,
        }
    });

    if(exist){
        return new NextResponse("user already exists", { status: 400 })
    }

    return NextResponse.json(username);
}