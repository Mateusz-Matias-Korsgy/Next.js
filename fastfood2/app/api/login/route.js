import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const usersDirectory = path.join(process.cwd(), 'public', 'users');
        const files = fs.readdirSync(usersDirectory);

        for (const file of files) {
            const filePath = path.join(usersDirectory, file);
            const userData = fs.readFileSync(filePath, 'utf-8');

            const [usernameLine, emailLine, passwordLine] = userData.split('\n');
            const savedEmail = emailLine.split(': ')[1];
            const savedPassword = passwordLine.split(': ')[1];

            if (savedEmail === email && savedPassword === password) {
                return new Response(JSON.stringify({ success: true }), { status: 200 });
            }
        }

        return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { status: 401 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'An error occurred' }), { status: 500 });
    }
}

export async function GET() {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), { status: 405 });
}
