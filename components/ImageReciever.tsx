"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Download, DownloadCloud, Trash2 } from "lucide-react";
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

  const handleRetrieveImage = useCallback(async () => {
    if (!imageId) return;

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
  }, [imageId]);

  useEffect(() => {
    if (initialId) {
      void handleRetrieveImage();
    }
  }, [initialId]); // Remove handleRetrieveImage from dependencies

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-0 sm:p-0 md:p-0">
      <div className="h-full  w-full mx-auto">
        <Card className="transition-all min-h-[80vh]  duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm h-full">
          <CardHeader className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-black w-full text-center">
              Recieve Image
            </CardTitle>
            {imageData && (
              <div className="flex space-x-3">
                <Button
                  onClick={downloadImage}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 hover:bg-blue-50 hover:border-blue-300 border-2 shadow-sm hover:shadow transition-all duration-300 rounded-lg font-medium"
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <Loader size="sm" className="text-blue-600" />
                  ) : (
                    <>
                      <DownloadCloud className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Download</span>
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleDeleteImage}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:bg-red-50 hover:border-red-300 border-2 shadow-sm hover:shadow transition-all duration-300 rounded-lg font-medium"
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <Loader size="sm" className="text-red-600" />
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4 mr-2 text-red-600" />
                      <span>Delete</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-6 pt-4 sm:pt-6">
            {!initialId && (
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Input
                  placeholder="Enter shared image ID"
                  value={imageId}
                  onChange={(e) => setImageId(e.target.value)}
                  className="flex-grow transition-all duration-300 border-2 focus:ring-2 focus:ring-gray-200"
                  disabled={loading}
                />
                <Button
                  onClick={handleRetrieveImage}
                  disabled={!imageId || loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white transition-all duration-300 w-full sm:w-auto"
                >
                  {loading ? (
                    <Loader size="sm" className="text-white" />
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" /> Retrieve Image
                    </>
                  )}
                </Button>
              </div>
            )}

            <div className="relative">
              {loading ? (
                <div className="flex items-center justify-center min-h-[60vh] transition-opacity duration-300">
                  <Loader
                    size="lg"
                    text="Loading image..."
                    className="scale-110"
                  />
                </div>
              ) : (
                imageData && (
                  <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                    {message && (
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-black border border-gray-200 transition-all duration-300 text-sm sm:text-base">
                        <strong>Message:</strong> {message}
                      </div>
                    )}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-2 sm:p-4 bg-gray-50 hover:border-gray-400 transition-all duration-300 min-h-[60vh]">
                      <Image
                        src={imageData}
                        alt="Shared"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-contain rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02]"
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
