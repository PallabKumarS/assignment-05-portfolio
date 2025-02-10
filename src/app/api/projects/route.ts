"use server";

import dbConnect from "@/lib/dbConnect";
import { ProjectModel } from "@/schemas/project.schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const projects = await ProjectModel.find();
    return NextResponse.json({
      projects,
      message: "projects fetched successfully",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Failed to fetch projects",
      status: 500,
      error: err,
    });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    const project = await ProjectModel.create(data);
    return NextResponse.json({
      project,
      message: "project created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create project",
      status: 500,
      error,
    });
  }
}
