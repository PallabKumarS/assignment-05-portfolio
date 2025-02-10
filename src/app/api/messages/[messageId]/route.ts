"use server";

import dbConnect from "@/lib/dbConnect";
import { MessageModel } from "@/schemas/message.schema";
import { NextResponse } from "next/server";

// DELETE a message by ID
export async function DELETE(
  req: Request,
  { params }: { params: { messageId: string } }
) {
  try {
    await dbConnect();
    const { messageId } = await params;

    await MessageModel.findByIdAndDelete(messageId);
    return NextResponse.json({
      message: "message deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete message",
      status: 500,
      error,
    });
  }
}
