import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();

        if (!username || !email || !password) {
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'public', 'users', `${username}.txt`);
        const userData = `Username: ${username}\nEmail: ${email}\nPassword: ${password}`;

        fs.writeFile(filePath, userData, (err) => {
            if (err) {
                console.error(err);
                return NextResponse.json({ success: false, message: 'Failed to register' }, { status: 500 });
            }
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ success: false, message: 'Method not allowed' }, { status: 405 });
}
