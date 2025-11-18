import { createLetsTalkInquiry } from '@/lib/backend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        switch (data.type) {
            case 'LetsTalk':
                await createLetsTalkInquiry(data)
                break;

            default:
                break;
        }


        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 201 }
        );
    } catch (err: any) {
        console.error('Error in POST /api/submit:', err);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
}
