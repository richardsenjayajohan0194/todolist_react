import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { email } = body;

    const exist = await prisma.users.findUnique({
        where: {
            email: email
        },
        select: {
            username: true,
            email: true,
        }
    });

    if(exist){
        return new NextResponse("Email already exists", { status: 400 })
    }

    return NextResponse.json(email);
}