"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X as XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>,
) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose(props: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>,
) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/60",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col bg-background shadow-lg outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:duration-200 data-[state=closed]:duration-150",
          "data-[state=open]:ease-out data-[state=closed]:ease-in",
          side === "right" &&
            [
              "inset-y-0 right-0",
              "h-[100dvh]",
              "w-[min(92vw,420px)]",
              "border-l",
              "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
            ].join(" "),
          side === "left" &&
            [
              "inset-y-0 left-0",
              "h-[100dvh]",
              "w-[min(92vw,420px)]",
              "border-r",
              "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
            ].join(" "),
          side === "top" &&
            [
              "inset-x-0 top-0",
              "max-h-[85dvh]",
              "w-full",
              "border-b",
              "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
            ].join(" "),
          side === "bottom" &&
            [
              "inset-x-0 bottom-0",
              "max-h-[85dvh]",
              "w-full",
              "border-t",
              "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
            ].join(" "),
          "overscroll-contain",
          className,
        )}
        {...props}
      >
        <div className="min-h-0 flex-1 overflow-auto p-4 bg-white">
          {children}
        </div>

        <SheetPrimitive.Close
          data-slot="sheet-close"
          className={cn(
            "absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl",
            "opacity-80 transition-opacity hover:opacity-100",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:pointer-events-none",
          )}
          aria-label="Close panel"
        >
          <XIcon aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("space-y-2", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
