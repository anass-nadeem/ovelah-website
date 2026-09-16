import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    // Just try to read the data the frontend sent
    const body = await request.json();
    
    // Immediately send a success response back without doing anything else
    return NextResponse.json({ 
      success: true, 
      message: "The API route is alive!",
      receivedData: body.email
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed t parse JSON" },
      { status: 400 }
    );
  }
} 
// testing