
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-auto p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* Future routes for other modules */}
                  <Route path="/inventario" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Inventário em desenvolvimento</h1></div>} />
                  <Route path="/transporte" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Transporte em desenvolvimento</h1></div>} />
                  <Route path="/monitoramento" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Monitoramento em desenvolvimento</h1></div>} />
                  <Route path="/governanca" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Governança em desenvolvimento</h1></div>} />
                  <Route path="/avaliacao" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Avaliação em desenvolvimento</h1></div>} />
                  <Route path="/capacitacao" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Capacitação em desenvolvimento</h1></div>} />
                  <Route path="/financeiro" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Módulo Financeiro em desenvolvimento</h1></div>} />
                  <Route path="/perfil" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Perfil do Fornecedor em desenvolvimento</h1></div>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
