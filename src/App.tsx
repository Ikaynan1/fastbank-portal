import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FastbankSidebar } from "@/components/FastbankSidebar";
import Dashboard from "./pages/Dashboard";
import ContasFilhas from "./pages/ContasFilhas";
import ContaMae from "./pages/ContaMae";
import Suporte from "./pages/Suporte";
import Premiacoes from "./pages/Premiacoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark min-h-screen bg-background">
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <FastbankSidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/contas-filhas" element={<ContasFilhas />} />
                  <Route path="/conta-mae" element={<ContaMae />} />
                  <Route path="/suporte" element={<Suporte />} />
                  <Route path="/premiacoes" element={<Premiacoes />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
