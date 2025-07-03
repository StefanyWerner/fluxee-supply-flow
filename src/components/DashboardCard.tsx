
import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon?: ReactNode
  className?: string
}

export function DashboardCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon, 
  className 
}: DashboardCardProps) {
  return (
    <Card className={cn("hover:shadow-lg transition-all duration-200 slide-in", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {change && (
          <p className={cn(
            "text-xs flex items-center gap-1",
            changeType === "positive" && "text-green-600",
            changeType === "negative" && "text-red-600",
            changeType === "neutral" && "text-muted-foreground"
          )}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
