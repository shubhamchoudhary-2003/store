"use client"

// External components
import * as React from "react"
import { useParams, usePathname } from "next/navigation"
import { Popover, Select } from "react-aria-components"

// Components
import {
  UiSelectButton,
  UiSelectIcon,
  UiSelectListBox,
  UiSelectListBoxItem,
  UiSelectValue,
} from "@/components/ui/Select"
import { updateRegion } from "@lib/data/cart"

export const RegionSwitcher: React.FC<{
  countryOptions: {
    country: string | undefined
    region: string
    label: string | undefined
  }[]
  className?: string
  selectButtonClassName?: string
  selectIconClassName?: string
}> = ({
  countryOptions,
  className,
  selectButtonClassName,
  selectIconClassName,
}) => {
  const pathName = usePathname()
  const { countryCode } = useParams()
  const currentPath = pathName.split(`/${countryCode}`)[1]

  return (
    <Select
      selectedKey={`${countryCode}`}
      onSelectionChange={(key) => {
        updateRegion(`${key}`, currentPath)
      }}
      className={className}
      aria-label="Select country"
    >
      <UiSelectButton className={selectButtonClassName}>
        <UiSelectValue>
          {(item) =>
            typeof item.selectedItem === "object" &&
            item.selectedItem !== null &&
            "country" in item.selectedItem &&
            typeof item.selectedItem.country === "string"
              ? item.selectedItem.country.toUpperCase()
              : item.defaultChildren
          }
        </UiSelectValue>
        <UiSelectIcon className={selectIconClassName} />
      </UiSelectButton>
      <Popover className="max-w-61 w-full">
        <UiSelectListBox>
          {countryOptions.map((country) => (
            <UiSelectListBoxItem
              key={country.country}
              id={country.country}
              value={country}
            >
              {country.label}
            </UiSelectListBoxItem>
          ))}
        </UiSelectListBox>
      </Popover>
    </Select>
  )
}
