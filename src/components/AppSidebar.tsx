
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  BarChart3, 
  Package, 
  Truck, 
  MapPin, 
  Shield, 
  Star, 
  GraduationCap, 
  DollarSign, 
  User,
  Menu,
  Bell,
  MessageCircle,
  Home
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { useToast } from "@/hooks/use-toast"

const homeItems = [
  { title: "Tela Inicial", url: "/", icon: Home },
]

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "Inventário & ABC/JIT", url: "/inventario", icon: Package },
  { title: "Transporte & TMS", url: "/transporte", icon: Truck },
  { title: "Monitoramento", url: "/monitoramento", icon: MapPin },
  { title: "Governança", url: "/governanca", icon: Shield },
  { title: "Avaliação", url: "/avaliacao", icon: Star },
]

const businessItems = [
  { title: "Capacitação", url: "/capacitacao", icon: GraduationCap },
  { title: "Financeiro", url: "/financeiro", icon: DollarSign },
  { title: "Perfil", url: "/perfil", icon: User },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
      isActive 
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm" 
        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    }`

  const isCollapsed = state === "collapsed"

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <div className="flex flex-col items-center justify-center p-6 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="/lovable-uploads/baabdc93-8f7f-4f79-940a-4b94e9460622.png" 
                alt="Fluxee Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-sidebar-foreground">Fluxee</h1>
              <p className="text-sm text-sidebar-foreground/70 mt-1">O fluxo que sua empresa precisa</p>
            </div>
          </div>
        )}
        <SidebarTrigger className="text-sidebar-foreground hover:text-sidebar-primary mt-4" />
      </div>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {homeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-semibold uppercase tracking-wider mb-2">
            {!isCollapsed && "Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-semibold uppercase tracking-wider mb-2">
            {!isCollapsed && "Negócios"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {businessItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center">
              <User className="w-4 h-4 text-sidebar-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Carlos Silva</p>
              <p className="text-xs text-sidebar-foreground/70 truncate">Microfornecedor</p>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  )
}
