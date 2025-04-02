import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { name, username, email, password } = body;
    console.log(body);


    if( !name || !username || !email || !password ){
        return new NextResponse("Missing name, username, email, or password", { status: 400 });
    }

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
        data: {
            name,
            username,
            email,
            password: hashedPassword,
        }
    });

    return NextResponse.json(user);
}
