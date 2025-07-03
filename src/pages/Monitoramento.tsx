
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Thermometer, 
  Wifi, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Truck,
  Package
} from "lucide-react"

const Monitoramento = () => {
  const sensors = [
    { id: "SENS-001", type: "Temperatura", location: "Armazém A", value: "22°C", status: "normal", lastUpdate: "há 2 min" },
    { id: "SENS-002", type: "Umidade", location: "Armazém B", value: "45%", status: "normal", lastUpdate: "há 1 min" },
    { id: "SENS-003", type: "GPS", location: "Veículo V-023", value: "São Paulo", status: "active", lastUpdate: "há 30 seg" },
    { id: "SENS-004", type: "Temperatura", location: "Container C-401", value: "28°C", status: "warning", lastUpdate: "há 5 min" },
    { id: "SENS-005", type: "RFID", location: "Portão Principal", value: "Ativo", status: "normal", lastUpdate: "há 10 seg" },
  ]

  const shipments = [
    { id: "ENV-001", produto: "Medicamentos", origem: "São Paulo", destino: "Rio de Janeiro", temperatura: "2-8°C", status: "Em trânsito" },
    { id: "ENV-002", produto: "Alimentos", origem: "Campinas", destino: "Belo Horizonte", temperatura: "0-4°C", status: "Entregue" },
    { id: "ENV-003", produto: "Eletrônicos", origem: "Manaus", destino: "Brasília", temperatura: "15-25°C", status: "Alerta" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "bg-green-100 text-green-800 border-green-200"
      case "warning": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "critical": return "bg-red-100 text-red-800 border-red-200"
      case "active": return "bg-blue-100 text-blue-800 border-blue-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getShipmentStatusColor = (status: string) => {
    switch (status) {
      case "Em trânsito": return "bg-blue-100 text-blue-800 border-blue-200"
      case "Entregue": return "bg-green-100 text-green-800 border-green-200"
      case "Alerta": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Monitoramento</h1>
            <p className="text-purple-100">Rastreamento ao vivo com IoT, RFID e alertas ambientais</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Sensores Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">47</div>
            <p className="text-sm text-muted-foreground">3 com alertas</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Envios Monitorados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">12</div>
            <p className="text-sm text-muted-foreground">Em tempo real</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Alertas Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">5</div>
            <p className="text-sm text-muted-foreground">2 críticos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Conformidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">98.5%</div>
            <p className="text-sm text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mapa de Rastreamento</CardTitle>
            <CardDescription>Localização em tempo real dos envios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Integração com Google Maps</p>
              <p className="text-sm text-muted-foreground mt-2">Visualização em tempo real das rotas e posições dos veículos</p>
              <Button className="mt-4">Abrir Mapa Completo</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Condições Ambientais</CardTitle>
            <CardDescription>Monitoramento de temperatura e umidade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                <div className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Armazém Refrigerado</p>
                    <p className="text-sm text-muted-foreground">Zona Crítica</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">4°C</p>
                  <p className="text-sm text-muted-foreground">Ideal: 2-8°C</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">Container C-401</p>
                    <p className="text-sm text-muted-foreground">Medicamentos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-yellow-600">28°C</p>
                  <p className="text-sm text-muted-foreground">Alerta: >25°C</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Status dos Sensores</CardTitle>
            <CardDescription>Monitoramento de dispositivos IoT</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm">
                    <th className="text-left p-2">Sensor</th>
                    <th className="text-left p-2">Tipo</th>
                    <th className="text-left p-2">Valor</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sensors.map((sensor) => (
                    <tr key={sensor.id} className="border-b hover:bg-muted/50 text-sm">
                      <td className="p-2 font-mono">{sensor.id}</td>
                      <td className="p-2">{sensor.type}</td>
                      <td className="p-2 font-semibold">{sensor.value}</td>
                      <td className="p-2">
                        <Badge className={getStatusColor(sensor.status)} variant="outline">
                          {sensor.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Envios Monitorados</CardTitle>
            <CardDescription>Rastreamento de cargas especiais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{shipment.produto}</p>
                      <p className="text-sm text-muted-foreground">{shipment.origem} → {shipment.destino}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getShipmentStatusColor(shipment.status)} variant="outline">
                      {shipment.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{shipment.temperatura}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Monitoramento
