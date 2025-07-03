
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Truck, 
  Route, 
  MapPin, 
  Clock, 
  DollarSign,
  Plus,
  Navigation
} from "lucide-react"

const Transporte = () => {
  const routes = [
    { id: "RT-001", origin: "São Paulo", destination: "Rio de Janeiro", vehicle: "V-023", driver: "João Silva", status: "Em andamento", distance: "430 km", eta: "14:30" },
    { id: "RT-002", origin: "Belo Horizonte", destination: "Salvador", vehicle: "V-015", driver: "Maria Santos", status: "Planejada", distance: "1.200 km", eta: "Amanhã 16:00" },
    { id: "RT-003", origin: "Curitiba", destination: "Florianópolis", vehicle: "V-008", driver: "Carlos Lima", status: "Concluída", distance: "300 km", eta: "-" },
    { id: "RT-004", origin: "Porto Alegre", destination: "Montevidéu", vehicle: "V-032", driver: "Ana Costa", status: "Em andamento", distance: "900 km", eta: "18:45" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento": return "bg-blue-100 text-blue-800 border-blue-200"
      case "Planejada": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Concluída": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Truck className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Transporte & TMS</h1>
            <p className="text-green-100">Roteirização dinâmica e multimodal com simulação de custos</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Rotas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-sm text-muted-foreground">2 em andamento</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Frota Disponível</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">15</div>
            <p className="text-sm text-muted-foreground">de 18 veículos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Economia Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">R$ 45k</div>
            <p className="text-sm text-muted-foreground">vs rota manual</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Entregas Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">23</div>
            <p className="text-sm text-muted-foreground">94% no prazo</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Simulador de Rotas</CardTitle>
                <CardDescription>Otimização automática de rotas com IA</CardDescription>
              </div>
              <Button className="gap-2">
                <Route className="w-4 h-4" />
                Nova Rota
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <MapPin className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="font-medium">Rota Otimizada SP → RJ</p>
                  <p className="text-sm text-muted-foreground">Economia de 23% vs rota tradicional</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">R$ 890</p>
                  <p className="text-sm text-muted-foreground">430 km</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <Navigation className="w-5 h-5 text-secondary" />
                <div className="flex-1">
                  <p className="font-medium">Rota Multimodal BH → SSA</p>
                  <p className="text-sm text-muted-foreground">Rodoviário + Ferroviário</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">R$ 1.450</p>
                  <p className="text-sm text-muted-foreground">1.200 km</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Custos</CardTitle>
            <CardDescription>Comparativo de modalidades de transporte</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Rodoviário</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 2,45/km</p>
                  <p className="text-sm text-muted-foreground">Mais rápido</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Route className="w-5 h-5 text-secondary" />
                  <span>Ferroviário</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 1,85/km</p>
                  <p className="text-sm text-muted-foreground">Mais econômico</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-accent" />
                  <span>Multimodal</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 2,15/km</p>
                  <p className="text-sm text-muted-foreground">Equilibrado</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Rotas em Andamento</CardTitle>
              <CardDescription>Monitoramento em tempo real das entregas</CardDescription>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Planejar Rota
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Rota</th>
                  <th className="text-left p-3">Origem → Destino</th>
                  <th className="text-left p-3">Veículo</th>
                  <th className="text-left p-3">Motorista</th>
                  <th className="text-left p-3">Distância</th>
                  <th className="text-left p-3">ETA</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.id} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{route.id}</td>
                    <td className="p-3">{route.origin} → {route.destination}</td>
                    <td className="p-3 font-mono text-sm">{route.vehicle}</td>
                    <td className="p-3">{route.driver}</td>
                    <td className="p-3">{route.distance}</td>
                    <td className="p-3">
                      {route.eta !== "-" && <Clock className="w-4 h-4 inline mr-1" />}
                      {route.eta}
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(route.status)}>
                        {route.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Transporte
