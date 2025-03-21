import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const MovieLoading = () => {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border border-border h-[450px] flex flex-col">
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 animate-pulse bg-muted" />

        <div className="absolute top-2 right-2 z-20">
          <div className="h-6 w-12 rounded-full animate-pulse bg-muted" />
        </div>

        <div className="absolute top-2 left-2 z-20">
          <div className="h-6 w-6 rounded-full animate-pulse bg-muted" />
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="h-7 bg-muted animate-pulse rounded w-4/5" />

        <div className="flex gap-2">
          <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
          <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
          <div className="h-5 w-14 bg-muted animate-pulse rounded-full" />
        </div>

        <div className="flex items-center gap-4">
          <div className="h-4 w-24 bg-muted animate-pulse rounded" />
          <div className="h-4 w-16 bg-muted animate-pulse rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-muted animate-pulse rounded w-full" />
          <div className="h-4 bg-muted animate-pulse rounded w-full" />
          <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieLoading;
