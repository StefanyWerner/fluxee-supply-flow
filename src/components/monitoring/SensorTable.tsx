
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Sensor {
  id: string
  type: string
  location: string
  value: string
  status: string
  lastUpdate: string
}

const SensorTable = () => {
  const sensors: Sensor[] = [
    { id: "SENS-001", type: "Temperatura", location: "Armazém A", value: "22°C", status: "normal", lastUpdate: "há 2 min" },
    { id: "SENS-002", type: "Umidade", location: "Armazém B", value: "45%", status: "normal", lastUpdate: "há 1 min" },
    { id: "SENS-003", type: "GPS", location: "Veículo V-023", value: "São Paulo", status: "active", lastUpdate: "há 30 seg" },
    { id: "SENS-004", type: "Temperatura", location: "Container C-401", value: "28°C", status: "warning", lastUpdate: "há 5 min" },
    { id: "SENS-005", type: "RFID", location: "Portão Principal", value: "Ativo", status: "normal", lastUpdate: "há 10 seg" },
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

  return (
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
  )
}

export default SensorTable
