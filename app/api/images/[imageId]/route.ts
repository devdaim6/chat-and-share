import { NextRequest, NextResponse } from "next/server";
import { Image, connectDB } from "@/app/lib/models";

export async function GET(
  request: Request,
  { params }: { params: { imageId: string } }
) {
  try {
    await connectDB();

    const { imageId } = await params;

    const image = await Image.findOne({ imageId });

    if (!image) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: image.message,
      imageData: image.imageData,
    });
  } catch (error) {
    console.error("Retrieve error:", error);
    return NextResponse.json(
      { error: "Could not retrieve image" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { imageId: string } }
) {
  try {
    await connectDB();

    const { imageId } = await params;
    const result = await Image.findOneAndDelete({ imageId });

    if (!result) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Could not delete image" },
      { status: 500 }
    );
  }
}
