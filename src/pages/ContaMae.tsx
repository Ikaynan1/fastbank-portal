import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CreditCard, TrendingUp, TrendingDown } from "lucide-react";

export default function ContaMae() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Conta Mãe</h1>
            <p className="text-muted-foreground">Gerenciamento da conta principal</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SALDO ATUAL</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-fastbank-blue">R$ 32,40</div>
              <p className="text-xs text-muted-foreground">Saldo disponível para saque</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TOTAL RECEBIDO</CardTitle>
              <TrendingUp className="h-4 w-4 text-fastbank-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-fastbank-green">R$ 1.247,50</div>
              <p className="text-xs text-muted-foreground">De contas filhas</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TOTAL SACADO</CardTitle>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">R$ 1.215,10</div>
              <p className="text-xs text-muted-foreground">Histórico de saques</p>
            </CardContent>
          </Card>
        </div>

        {/* Ações da Conta Mãe */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Ações Disponíveis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="bg-fastbank-blue hover:bg-fastbank-blue/90 h-16 text-lg">
                <DollarSign className="w-6 h-6 mr-3" />
                Solicitar Saque
              </Button>
              <Button variant="outline" className="h-16 text-lg">
                <CreditCard className="w-6 h-6 mr-3" />
                Histórico de Transações
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Informações Importantes */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Informações da Conta Mãe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">SAQUE AUTORIZADO</Badge>
              <span className="text-sm">Apenas para chave PIX de sua titularidade.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">RECEBIMENTO AUTOMÁTICO</Badge>
              <span className="text-sm">Valores das contas filhas são transferidos automaticamente após dedução de taxas.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">DÉBITO ABERTURA</Badge>
              <span className="text-sm">R$ 1,50 será debitado para cada nova conta filha criada.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}