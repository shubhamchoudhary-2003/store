"use client"

import * as React from "react"
import { LinkProps } from "next/link"
import { useParams } from "next/navigation"
import { Link, LinkOwnProps } from "./Link"
import { ButtonLink, ButtonOwnProps } from "./Button"

export const LocalizedLink = <RouteInferType extends any>({
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> &
  LinkProps<RouteInferType> &
  LinkOwnProps) => {
  const { countryCode } = useParams()

  return (
    <Link {...props} href={`/${countryCode}${href}`}>
      {children}
    </Link>
  )
}

export const LocalizedButtonLink = <RouteInferType extends any>({
  children,
  href,
  ...props
}: ButtonOwnProps &
  Omit<LinkProps<RouteInferType>, "passHref"> & {
    className?: string
    children?: React.ReactNode
  }) => {
  const { countryCode } = useParams()

  return (
    <ButtonLink {...props} href={`/${countryCode}${href}`}>
      {children}
    </ButtonLink>
  )
}
