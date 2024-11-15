"use client";

import React, { useState, useEffect, useCallback } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { AlertTriangle, DownloadCloud, Trash2 } from "lucide-react";

import { toast } from "sonner";

import { Loader } from "@/components/ui/loader";

import Image from "next/image";

const BASE_URL = "/api";
const ImageReceiver = ({ initialId }: { initialId: string | null }) => {
  const [imageId, setImageId] = useState(initialId || "");
  const [imageData, setImageData] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleRetrieveImage = async () => {
    setImageData(null);
    setMessage("");
    await withMinimumLoading(async () => {
      try {
        const response = await fetch(`${BASE_URL}/images/${imageId}`);
        if (!response.ok) {
          throw new Error("Image not found or has expired");
        }

        const data = await response.json();
        setImageData(data.imageData);
        setMessage(data.message);

        if (data.message) {
          toast.success("Image retrieved successfully");
        }
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "An error occurred",
          {
            icon: <AlertTriangle className="h-5 w-5" />,
          }
        );
      }
    }, setLoading);
  };

  useEffect(() => {
    if (initialId) {
      void handleRetrieveImage();
    }
  }, [initialId, handleRetrieveImage]);

  const withMinimumLoading = useCallback(
    async (
      operation: () => Promise<void>,
      loadingState: (isLoading: boolean) => void
    ) => {
      const startTime = Date.now();
      loadingState(true);

      try {
        await operation();
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, 400 - elapsedTime);

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        loadingState(false);
      }
    },
    []
  );

  const handleDeleteImage = async () => {
    await withMinimumLoading(async () => {
      try {
        const response = await fetch(`${BASE_URL}/images/${imageId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete image");
        }

        setImageData(null);
        setMessage("");
        toast.success("Image deleted successfully");
        window.location.href = "/receive";
      } catch (err) {
        console.log(err);
        toast.error("Failed to delete image");
      }
    }, setIsDeleting);
  };

  const downloadImage = async () => {
    if (!imageData) return;

    await withMinimumLoading(async () => {
      try {
        const link = document.createElement("a");
        link.href = imageData;
        link.download = "shared-image.webp";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started");
      } catch (err) {
        console.log(err);
        toast.error("Failed to download image");
      }
    }, setIsDownloading);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl">Receive Image</CardTitle>
            {imageData && (
              <div className="flex space-x-2">
                <Button
                  onClick={downloadImage}
                  variant="outline"
                  size="sm"
                  className="text-green-600 transition-all duration-200"
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <Loader size="sm" />
                  ) : (
                    <DownloadCloud className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  onClick={handleDeleteImage}
                  variant="outline"
                  size="sm"
                  className="text-red-600 transition-all duration-200"
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <Loader size="sm" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-4">
            {!initialId && (
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter shared image ID"
                  value={imageId}
                  onChange={(e) => setImageId(e.target.value)}
                  className="flex-grow transition-all duration-200"
                  disabled={loading}
                />
                <Button
                  onClick={handleRetrieveImage}
                  disabled={!imageId || loading}
                  className="transition-all duration-200"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <Loader size="sm" />
                      <span className="ml-2">Retrieving...</span>
                    </div>
                  ) : (
                    "Retrieve Image"
                  )}
                </Button>
              </div>
            )}

            <div className="relative min-h-[200px]">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                  <Loader
                    size="lg"
                    text="Loading image..."
                    className="scale-110"
                  />
                </div>
              ) : (
                imageData && (
                  <div className="space-y-4 animate-fadeIn">
                    {message && (
                      <div className="bg-gray-100 p-3 rounded text-gray-700 transition-opacity duration-300">
                        <strong>Message:</strong> {message}
                      </div>
                    )}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 transition-all duration-300">
                      <Image
                        src={imageData}
                        alt="Shared"
                        width={500}
                        height={500}
                        className="max-h-[500px] mx-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImageReceiver;
