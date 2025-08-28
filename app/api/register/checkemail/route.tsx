import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { email } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse("Invalid email format", {status: 400});
    }

    const exist = await prisma.users.findUnique({
        where: {
            email: email
        },
        select: {
            username: true,
            email: true,
        }
    });
    // const exist = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${email}`;

    if(exist){
        return new NextResponse("Email already exists", { status: 400 });
    }

    return NextResponse.json(email);
}