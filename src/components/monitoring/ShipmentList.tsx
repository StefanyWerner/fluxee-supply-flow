
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package } from "lucide-react"

interface Shipment {
  id: string
  produto: string
  origem: string
  destino: string
  temperatura: string
  status: string
}

const ShipmentList = () => {
  const shipments: Shipment[] = [
    { id: "ENV-001", produto: "Medicamentos", origem: "São Paulo", destino: "Rio de Janeiro", temperatura: "2-8°C", status: "Em trânsito" },
    { id: "ENV-002", produto: "Alimentos", origem: "Campinas", destino: "Belo Horizonte", temperatura: "0-4°C", status: "Entregue" },
    { id: "ENV-003", produto: "Eletrônicos", origem: "Manaus", destino: "Brasília", temperatura: "15-25°C", status: "Alerta" },
  ]

  const getShipmentStatusColor = (status: string) => {
    switch (status) {
      case "Em trânsito": return "bg-blue-100 text-blue-800 border-blue-200"
      case "Entregue": return "bg-green-100 text-green-800 border-green-200"
      case "Alerta": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
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
  )
}

export default ShipmentList
