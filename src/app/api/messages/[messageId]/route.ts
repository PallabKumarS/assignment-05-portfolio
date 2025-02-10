"use server";

import dbConnect from "@/lib/dbConnect";
import { MessageModel } from "@/schemas/message.schema";
import { NextRequest, NextResponse } from "next/server";

// DELETE a message by ID
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(req: NextRequest, context: any) {
  try {
    await dbConnect();
    const { messageId } = await context.params;

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
