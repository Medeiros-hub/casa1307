import React from 'react'

interface DescriptionCardProps {
  Icon: React.ElementType
  title: string
  description: string
}

export function DescriptionCard({
  Icon,
  title,
  description,
}: DescriptionCardProps) {
  return (
    <div className="w-96 min-w-[15.3125rem] space-y-3 sm:w-auto sm:flex-1">
      <div className="w-fit rounded-md bg-mauve-primary p-4">
        {Icon && <Icon className="size-8 text-mint-500" />}
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold leading-7">{title}</h2>
        <p className="leading-6">{description}</p>
      </div>
    </div>
  )
}
