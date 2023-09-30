import React from "react";
import cn from "classnames";

export type LoadingSpinnerProps = {
  className?: string;
  big?: boolean;
};

export default function LoadingSpinner({
  className,
  big,
}: LoadingSpinnerProps): React.ReactElement | null {
  return (
    <div
      className={cn(
        className,
        "animate-spin",
        "rounded-full",
        "border-solid",
        "border-primary-700",
        "border-t-primary-400",
        big ? cn("border-8", "w-16", "h-16") : cn("border-4", "w-5", "h-5")
      )}
    />
  );
}
