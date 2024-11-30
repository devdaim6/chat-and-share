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
  Loader,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Add these type definitions
type UploadStatus = "" | "uploading" | "success" | "error";

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
  const [cameraError, setCameraError] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
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
    setCameraError("");

    try {
      // Check if mediaDevices API is supported
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Camera access is not supported in this browser");
      }

      // Request camera access with more permissive constraints
      const constraints = {
        video: true // Simplified constraints to improve compatibility
      };

      // First try to get any video stream
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      // Once we have a basic stream, try to get the environment camera if available
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter(device => device.kind === 'videoinput');
      
      // If we have multiple cameras, try to use the environment facing one
      if (cameras.length > 1) {
        const envCamera = cameras.find(camera => 
          camera.label.toLowerCase().includes('back') || 
          camera.label.toLowerCase().includes('environment')
        );
        
        if (envCamera) {
          // Stop the current stream
          stream.getTracks().forEach(track => track.stop());
          
          // Try to get the environment camera stream
          const envStream = await navigator.mediaDevices.getUserMedia({
            video: {
              deviceId: { exact: envCamera.deviceId },
              width: { ideal: 1920 },
              height: { ideal: 1080 }
            }
          });
          
          if (videoRef.current) {
            videoRef.current.srcObject = envStream;
            await videoRef.current.play();
          }
        } else {
          // If no environment camera found, use the initial stream
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            await videoRef.current.play();
          }
        }
      } else {
        // If only one camera, use the initial stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      }

    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraError(
        err instanceof Error
          ? err.message
          : "Could not access camera. Please check permissions."
      );
      console.log(cameraError);
      setIsCameraMode(false);
    }
  };

  // Capture photo from camera
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (!context) return;

      // Get the actual video dimensions
      const { videoWidth, videoHeight } = videoRef.current;

      // Set canvas size to match video
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Flip horizontally if using front camera
      if (videoRef.current.style.transform.includes('scaleX(-1)')) {
        context.scale(-1, 1);
        context.translate(-videoWidth, 0);
      }

      context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

      canvasRef.current.toBlob(
        (blob: Blob | null) => {
          if (!blob) return;
          const file = new File([blob], "captured-image.jpg", {
            type: "image/jpeg",
          });
          setSelectedFile(file);
          setPreview(URL.createObjectURL(file));
          setIsCameraMode(false);

          // Stop camera stream
          if (videoRef.current?.srcObject instanceof MediaStream) {
            const stream = videoRef.current.srcObject;
            stream
              .getTracks()
              .forEach((track: MediaStreamTrack) => track.stop());
          }
        },
        "image/jpeg",
        0.8
      );
    }
  };

  // Cancel camera mode
  const cancelCamera = () => {
    if (videoRef.current && videoRef.current.srcObject instanceof MediaStream) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
    }
    setIsCameraMode(false);
    setCameraError("");
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
      <div className="min-h-[90vh] bg-gradient-to-br from-gray-50 to-gray-100 p-0 sm:p-0 md:p-0">
        <div className="max-w-screen mx-auto">
          <Card className="transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-black w-full text-center">
                Image Share
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
              {/* Image/Camera Input Section */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-3 sm:p-4 text-center hover:border-gray-400 transition-all duration-300 bg-gray-50">
                {isCameraMode ? (
                  <div className="relative min-h-[250px] sm:min-h-[350px] max-h-[400px]">
                    <video
                      ref={videoRef}
                      autoPlay
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <canvas
                      ref={canvasRef}
                      width="640"
                      height="480"
                      className="hidden"
                    />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                      <Button
                        onClick={captureImage}
                        className="bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Camera className="mr-2 h-4 w-4" /> Capture
                      </Button>
                      <Button
                        onClick={cancelCamera}
                        variant="destructive"
                        className="shadow-lg hover:shadow-xl transition-all duration-300"
                      >
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
                    <label
                      htmlFor="fileInput"
                      className="cursor-pointer flex min-h-[250px] sm:min-h-[350px] max-h-[400px] items-center justify-center"
                    >
                      {preview ? (
                        <Image
                          src={preview}
                          alt="Preview"
                          className="max-h-[250px] sm:max-h-[350px] w-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
                          width={1280}
                          height={720}
                        />
                      ) : (
                        <div className="space-y-3 text-gray-500">
                          <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400" />
                          <p className="text-base sm:text-lg">
                            Click to select an image
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400">
                            Supports JPG, PNG, WebP
                          </p>
                        </div>
                      )}
                    </label>
                  </>
                )}
              </div>

              {/* Camera/Upload Options */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  onClick={startCamera}
                  variant="outline"
                  className="flex-1 py-4 sm:py-6 border-2 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <Camera className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Open Camera
                </Button>
                <Button
                  onClick={() => {
                    const input = document.getElementById("fileInput");
                    if (input) input.click();
                  }}
                  variant="outline"
                  className="flex-1 py-4 sm:py-6 border-2 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  <Upload className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Upload Image
                </Button>
              </div>

              {/* Message Input */}
              <Textarea
                placeholder="Add a message to your image (optional)"
                value={message}
                onChange={handleMessageChange}
                className="w-full min-h-[40px]  border-2 focus:ring-2 focus:ring-gray-200 transition-all duration-300"
                maxLength={500}
              />

              {/* Upload Button */}
              <Button
                onClick={handleUpload}
                disabled={!selectedFile || uploadStatus === "uploading"}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white transition-all duration-300 w-full py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                {uploadStatus === "uploading" ? (
                  <Loader size="sm" className="text-white" />
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Share
                    Image
                  </>
                )}
              </Button>

              {/* Share Link Section */}
              {uploadStatus === "success" && (
                <div className="space-y-2 sm:space-y-3 bg-gray-50 p-3 sm:p-4 rounded-lg border-2">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Share your image with this link:
                  </p>
                  <div className="flex gap-2">
                    <Input
                      value={shareLink}
                      readOnly
                      className="font-mono text-xs sm:text-sm bg-white flex-1"
                    />
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      title="Copy to clipboard"
                      className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => router.push(`/receive?id=${imageId}`)}
                      variant="outline"
                      title="Open receive page"
                      className="hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {uploadStatus === "error" && (
                <Alert
                  variant="destructive"
                  className="bg-red-50 border-2 border-red-200"
                >
                  <AlertDescription className="text-sm font-medium">
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
