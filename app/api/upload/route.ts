import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import { Image, connectDB } from '@/app/lib/models';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const file = formData.get('image') as File;
    const message = formData.get('message') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Compress and convert image
    const compressedImage = await sharp(buffer)
      .resize({
        width: 1200,
        height: 1200,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();

    // Generate unique ID
    const imageId = uuidv4();

    // Create new image document
    const newImage = new Image({
      imageId,
      message: message || '',
      imageData: `data:image/webp;base64,${compressedImage.toString('base64')}`,
    });

    // Save to database
    await newImage.save();

    return NextResponse.json({
      imageId,
      message: 'Image uploaded successfully',
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
