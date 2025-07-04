
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const TrackingMap = () => {
  const { toast } = useToast()

  const handleOpenFullMap = () => {
    toast({
      title: "Mapa Completo",
      description: "Abrindo visualização completa do mapa de rastreamento...",
    })
    // Aqui você implementaria a abertura do mapa completo
    console.log("Abrindo mapa completo")
  }

  return (
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
          <Button className="mt-4" onClick={handleOpenFullMap}>Abrir Mapa Completo</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TrackingMap
