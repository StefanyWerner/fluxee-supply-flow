
import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  className?: string
  featured?: boolean
}

export function ModuleCard({ 
  title, 
  description, 
  icon, 
  href, 
  className,
  featured = false 
}: ModuleCardProps) {
  return (
    <Card className={cn(
      "group hover:shadow-xl transition-all duration-300 cursor-pointer slide-in",
      featured && "ring-2 ring-accent/20 bg-gradient-to-br from-accent/5 to-transparent",
      className
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200",
            featured 
              ? "bg-accent text-accent-foreground group-hover:bg-accent/90" 
              : "bg-primary text-primary-foreground group-hover:bg-primary/90"
          )}>
            {icon}
          </div>
          {featured && (
            <div className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
              Destaque
            </div>
          )}
        </div>
        <CardTitle className="text-lg group-hover:text-accent transition-colors duration-200">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-200"
          asChild
        >
          <a href={href}>
            Acessar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
