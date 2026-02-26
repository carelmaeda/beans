import * as React from "react"
import { cn } from "@/lib/utils"

/* ---------------------------------------------
 * Variants
 * -------------------------------------------*/

type CardSize = "default" | "sm"

const cardVariants: Record<CardSize, string> = {
  default: "gap-3 rounded-xl py-6 text-sm",
  sm: "rounded-lg py-4 text-sm",
}

/* ---------------------------------------------
 * Card
 * -------------------------------------------*/

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: CardSize }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "ring-foreground/10 bg-card text-card-foreground group/card flex flex-col overflow-hidden ring-1 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        cardVariants[size],
        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Header
 * -------------------------------------------*/

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-xl",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        "group-data-[size=default]/card:px-6 group-data-[size=sm]/card:px-4",
        "group-data-[size=default]/card:[.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4",
        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Title
 * -------------------------------------------*/

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Description
 * -------------------------------------------*/

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Action
 * -------------------------------------------*/

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Content
 * -------------------------------------------*/

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "group-data-[size=default]/card:px-6 group-data-[size=sm]/card:px-4",
        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Footer
 * -------------------------------------------*/

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl",
        "group-data-[size=default]/card:px-6 group-data-[size=sm]/card:px-4",
        "group-data-[size=default]/card:[.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",
        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------------------
 * Exports
 * -------------------------------------------*/

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
