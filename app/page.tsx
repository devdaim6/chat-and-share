"use client";
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Upload,
  Copy,
  Image as ImageIcon,
  Camera,
  X,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

// Add these type definitions
type UploadStatus = '' | 'uploading' | 'success' | 'error';

interface ChangeEvent extends React.ChangeEvent<HTMLTextAreaElement> {
  target: HTMLTextAreaElement;
}

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("");
  const [shareLink, setShareLink] = useState("");
  const [imageId, setImageId] = useState("");
  const [preview, setPreview] = useState("");
  const [isCameraMode, setIsCameraMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const BASE_URL = "/api";

  // File selection handler
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Camera mode setup
  const startCamera = async () => {
    setIsCameraMode(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  // Capture photo from camera
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (!context) return;
      
      context.drawImage(videoRef.current, 0, 0, 640, 480);

      canvasRef.current.toBlob((blob: Blob | null) => {
        if (!blob) return;
        const file = new File([blob], "captured-image.jpg", {
          type: "image/jpeg",
        });
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
        setIsCameraMode(false);
      }, "image/jpeg");
    }
  };

  // Cancel camera mode
  const cancelCamera = () => {
    if (videoRef.current && videoRef.current.srcObject instanceof MediaStream) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
    }
    setIsCameraMode(false);
  };

  // Upload handler
  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("message", message);

    try {
      setUploadStatus("uploading");
      const response = await fetch(`${BASE_URL}/upload`, {
        method: "POST",
        body: formData,
     
        headers: {
          'Accept': 'application/json',
          "Access-Control-Allow-Origin":"*"
        }
      });

      const data = await response.json();
      setShareLink(`${data.imageId}`);
      setImageId(data.imageId);
      setUploadStatus("success");
    } catch (error) {
      setUploadStatus("error");
      console.error("Upload failed:", error);
    }
  };

  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
  };

  // Update the message handler
  const handleMessageChange = (e: ChangeEvent) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">ImageShare</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Image/Camera Input Section */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {isCameraMode ? (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      className="w-full h-64 object-cover rounded"
                    />
                    <canvas
                      ref={canvasRef}
                      width="640"
                      height="480"
                      className="hidden"
                    />
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-4">
                      <Button onClick={captureImage} className="bg-green-500">
                        <Camera className="mr-2 h-4 w-4" /> Capture
                      </Button>
                      <Button onClick={cancelCamera} variant="destructive">
                        <X className="mr-2 h-4 w-4" /> Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" className="cursor-pointer">
                      {preview ? (
                        <Image
                          src={preview}
                          alt="Preview"
                          className="max-h-64 mx-auto object-cover rounded"
                          width={640}
                          height={480}
                        />
                      ) : (
                        <div className="space-y-2">
                          <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
                          <p>Click to select an image</p>
                        </div>
                      )}
                    </label>
                  </>
                )}
              </div>

              {/* Camera/Upload Options */}
              <div className="flex space-x-2">
                <Button
                  onClick={startCamera}
                  variant="outline"
                  className="flex-1"
                >
                  <Camera className="mr-2 h-4 w-4" /> Open Camera
                </Button>
                <Button
                  onClick={() => {
                    const input = document.getElementById("fileInput");
                    if (input) input.click();
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </Button>
              </div>

              {/* Message Input */}
              <Textarea
                placeholder="Add a message to your image (optional)"
                value={message}
                onChange={handleMessageChange}
                className="w-full"
                maxLength={500}
              />

              {/* Upload Button */}
              <Button
                onClick={handleUpload}
                disabled={!selectedFile || uploadStatus === "uploading"}
                className="w-full"
              >
                <Upload className="mr-2 h-4 w-4" />
                {uploadStatus === "uploading" ? "Uploading..." : "Share Image"}
              </Button>

              {/* Share Link Section */}
              {uploadStatus === "success" && (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      value={shareLink}
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(`/receive?id=${imageId}`, "_blank")
                      }
                      variant="outline"
                      title="Open receive page"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {uploadStatus === "error" && (
                <Alert variant="destructive">
                  <AlertDescription>
                    Failed to upload image. Please try again.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
