import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Package, 
  Search, 
  AlertTriangle, 
  TrendingDown, 
  Plus,
  Filter
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Inventario = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { toast } = useToast()

  const inventoryItems = [
    { id: "ABC-123", name: "Rolamento Industrial 6202", category: "A", stock: 5, minStock: 10, location: "A1-B3", status: "low" },
    { id: "DEF-456", name: "Parafuso M8x20", category: "C", stock: 250, minStock: 100, location: "C2-D1", status: "ok" },
    { id: "GHI-789", name: "Filtro de Óleo HD-320", category: "B", stock: 0, minStock: 5, location: "B1-A2", status: "critical" },
    { id: "JKL-012", name: "Correia Dentada 5M-850", category: "A", stock: 15, minStock: 8, location: "A2-C1", status: "ok" },
    { id: "MNO-345", name: "Vedação O-Ring 25x3", category: "C", stock: 85, minStock: 50, location: "C1-B2", status: "ok" },
  ]

  const handleNewItem = () => {
    toast({
      title: "Novo Item",
      description: "Abrindo formulário para adicionar novo item ao inventário...",
    })
  }

  const handleFilters = () => {
    toast({
      title: "Filtros",
      description: "Abrindo opções de filtro avançado...",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-red-100 text-red-800 border-red-200"
      case "low": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-green-100 text-green-800 border-green-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "critical": return "Crítico"
      case "low": return "Baixo"
      default: return "OK"
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Inventário & ABC/JIT</h1>
            <p className="text-blue-100">Controle inteligente de estoques com classificação ABC</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total de Itens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1,247</div>
            <p className="text-sm text-muted-foreground">+12 este mês</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Alertas Críticos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-sm text-muted-foreground">Sem estoque</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Estoque Baixo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">8</div>
            <p className="text-sm text-muted-foreground">Abaixo do mínimo</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Valor Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 2.8M</div>
            <p className="text-sm text-muted-foreground">Em estoque</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Gestão de Inventário</CardTitle>
              <CardDescription>Controle de estoque com classificação ABC e alertas JIT</CardDescription>
            </div>
            <Button className="gap-2" onClick={handleNewItem}>
              <Plus className="w-4 h-4" />
              Novo Item
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar itens por código ou nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2" onClick={handleFilters}>
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Código</th>
                  <th className="text-left p-3">Item</th>
                  <th className="text-left p-3">Categoria</th>
                  <th className="text-left p-3">Estoque</th>
                  <th className="text-left p-3">Mínimo</th>
                  <th className="text-left p-3">Localização</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{item.id}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">
                      <Badge variant="outline">{item.category}</Badge>
                    </td>
                    <td className="p-3 font-semibold">{item.stock}</td>
                    <td className="p-3 text-muted-foreground">{item.minStock}</td>
                    <td className="p-3 font-mono text-sm">{item.location}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(item.status)}>
                        {getStatusText(item.status)}
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

export default Inventario
