import React, { PropsWithChildren } from "react";
import * as Select from "@radix-ui/react-select";
import cn from "classnames";
import {
  CheckIcon,
  // ChevronDownIcon,
  // ChevronUpIcon,
} from "@radix-ui/react-icons";

interface SelectItemProps extends PropsWithChildren {
  value: any;
  className?: string;
}

export const SelectItem = React.forwardRef<
  HTMLDivElement | null,
  SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn("SelectItem", className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = "SelectItem";
