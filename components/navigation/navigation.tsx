import * as Select from "@radix-ui/react-select";
import { SelectItem } from "@/components/base";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { NavigationContext } from "./context";

const items = [
  {
    label: "Rent",
    key: "rent",
    items: [
      {
        label: "All",
        value: [0, 99999],
      },
      {
        label: "300-500",
        value: [300, 500],
      },
      {
        label: "400-800",
        value: [400, 800],
      },
      {
        label: "800-1000",
        value: [800, 1000],
      },
      {
        label: "10000-20000",
        value: [1100, 2000],
      },
    ],
  },
  { label: "Bath" },
  { label: "Property type" },
  { label: "Beds/baths" },
  { label: "Living rooms" },
  { label: "Pets" },
  { label: "Deposit" },
];

export const Navigation = () => {
  const { filter, setFilter } = useContext(NavigationContext);

  return (
    <div className="flex py-[17.5px] px-4 bg-white">
      <div className="flex gap-4">
        {items.map(({ label, key, items }, idx) => {
          return items ? (
            <Select.Root
              // @ts-expect-error radix ui type issue https://github.com/radix-ui/primitives/issues/3180
              value={filter}
              onValueChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  [key]: value,
                }))
              }
              key={idx}
            >
              <Select.Trigger className="SelectTrigger" aria-label="Food">
								<Select.Value>
									<div className="flex text-[#000000] text-[15px]/[22.5px] items-center gap-2.5">{label}</div>
								</Select.Value>
                <Select.Icon className="SelectIcon">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="SelectContent">
                  <Select.ScrollUpButton className="SelectScrollButton">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="SelectViewport">
                    {items?.map(({ label, value }, idx) => (
                      <SelectItem value={value} key={idx}>
                        {label}
                      </SelectItem>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          ) : (
            <div
              className="flex text-[#000000] text-[15px]/[22.5px] items-center gap-2.5"
              key={idx}
            >
              {label}
              <ChevronDownIcon />
            </div>
          );
        })}
      </div>
    </div>
  );
};
