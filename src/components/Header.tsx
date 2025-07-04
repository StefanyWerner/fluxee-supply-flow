
import { Bell, MessageCircle, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"

export function Header() {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      toast({
        title: "Pesquisa realizada",
        description: `Buscando por: ${searchTerm}`,
      })
      // Aqui você pode implementar a lógica de pesquisa real
      console.log("Pesquisando por:", searchTerm)
    }
  }

  const handleNotifications = () => {
    toast({
      title: "Notificações",
      description: "Você tem 7 notificações não lidas",
    })
    // Aqui você pode abrir um modal ou navegar para página de notificações
  }

  const handleMessages = () => {
    toast({
      title: "Mensagens",
      description: "Você tem 3 mensagens não lidas",
    })
    // Aqui você pode abrir um modal ou navegar para página de mensagens
  }

  const handleProfile = () => {
    navigate("/perfil")
  }

  const handleSettings = () => {
    toast({
      title: "Configurações",
      description: "Abrindo configurações...",
    })
    // Aqui você pode implementar navegação para configurações
  }

  const handleSupport = () => {
    toast({
      title: "Suporte",
      description: "Entrando em contato com o suporte...",
    })
    // Aqui você pode implementar sistema de suporte
  }

  const handleLogout = () => {
    toast({
      title: "Logout",
      description: "Saindo do sistema...",
      variant: "destructive"
    })
    // Aqui você implementaria a lógica de logout
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }

  return (
    <header className="h-16 border-b bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <form onSubmit={handleSearch} className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Pesquisar..." 
            className="pl-10 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative" onClick={handleMessages}>
          <MessageCircle className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
            3
          </Badge>
        </Button>

        <Button variant="ghost" size="icon" className="relative" onClick={handleNotifications}>
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
            7
          </Badge>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">CS</span>
              </div>
              <span className="text-sm font-medium">Carlos Silva</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleProfile}>Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettings}>Configurações</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSupport}>Suporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={handleLogout}>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
