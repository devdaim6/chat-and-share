"use client";
import ImageReceiver from "@/components/ImageReciever";
import { Loader } from "@/components/ui/loader";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ReceivePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ReceiveContent />
    </Suspense>
  );
};

const ReceiveContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <ImageReceiver initialId={id} />;
};

export default ReceivePage;
