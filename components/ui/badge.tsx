import { cn } from '@/lib/utils'
import * as React from 'react'

const Badge = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground', className)}
      {...props}
    />
  ),
)

Badge.displayName = 'Badge'

export { Badge }
