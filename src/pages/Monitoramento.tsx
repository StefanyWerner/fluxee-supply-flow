
import { MapPin } from "lucide-react"
import MonitoringStats from "@/components/monitoring/MonitoringStats"
import TrackingMap from "@/components/monitoring/TrackingMap"
import EnvironmentalConditions from "@/components/monitoring/EnvironmentalConditions"
import SensorTable from "@/components/monitoring/SensorTable"
import ShipmentList from "@/components/monitoring/ShipmentList"

const Monitoramento = () => {
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

      <MonitoringStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrackingMap />
        <EnvironmentalConditions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SensorTable />
        <ShipmentList />
      </div>
    </div>
  )
}

export default Monitoramento
