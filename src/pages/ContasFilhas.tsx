import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  Search, 
  Plus, 
  RotateCcw, 
  DollarSign, 
  ArrowUpDown, 
  Info, 
  FileText, 
  Settings,
  Loader2
} from "lucide-react";

interface ContaFilha {
  cpf: string;
  nome: string;
  saldo: string;
  chavePix: string;
  nascimento: string;
  criacao: string;
  posseAte: string;
}

const contasFilhas: ContaFilha[] = [
  {
    cpf: "72935324072",
    nome: "JOSE CARLOS SANTOS DA SILVA",
    saldo: "R$ 32,40",
    chavePix: "72935324072",
    nascimento: "03/06/1974",
    criacao: "24/07/2025 23:06",
    posseAte: "29/07/2025 23:06"
  },
  {
    cpf: "23950872892",
    nome: "JADEN PRESCOTT PAXTON",
    saldo: "R$ 32,40",
    chavePix: "23950872892",
    nascimento: "29/05/1998",
    criacao: "24/07/2025 23:06",
    posseAte: "29/07/2025 23:06"
  },
  {
    cpf: "10872054845",
    nome: "SILVANA MARTINS DA SILVA",
    saldo: "R$ 32,40",
    chavePix: "10872054845",
    nascimento: "27/08/1971",
    criacao: "24/07/2025 23:06",
    posseAte: "29/07/2025 23:06"
  },
  {
    cpf: "55334024700",
    nome: "VANDA CASSINO",
    saldo: "R$ 32,40",
    chavePix: "55334024700",
    nascimento: "14/04/1960",
    criacao: "23/07/2025 23:12",
    posseAte: "30/07/2025 16:56"
  },
  {
    cpf: "19073774764",
    nome: "ANA TORRES HERMSDORFF",
    saldo: "R$ 32,40",
    chavePix: "19073774764",
    nascimento: "04/05/2001",
    criacao: "20/07/2025 20:03",
    posseAte: "30/07/2025 17:17"
  },
  {
    cpf: "05612492537",
    nome: "ANTONIO BORGES DA SILVA",
    saldo: "R$ 32,40",
    chavePix: "05612492537",
    nascimento: "13/06/1980",
    criacao: "20/07/2025 20:03",
    posseAte: "25/07/2025 20:03"
  },
  {
    cpf: "86603398516",
    nome: "VANDERLEI LIMA SANTOS",
    saldo: "R$ 32,40",
    chavePix: "86603398516",
    nascimento: "18/08/1998",
    criacao: "20/07/2025 20:03",
    posseAte: "27/07/2025 20:49"
  },
  {
    cpf: "61646148215",
    nome: "MARIA ELISABETE SILVA DE SOUSA",
    saldo: "R$ 32,40",
    chavePix: "61646148215",
    nascimento: "27/07/1973",
    criacao: "18/07/2025 00:32",
    posseAte: "26/07/2025 01:02"
  },
  {
    cpf: "09881297605",
    nome: "ELIANE CORREIA DA SILVA",
    saldo: "R$ 32,40",
    chavePix: "09881297605",
    nascimento: "19/04/1973",
    criacao: "18/07/2025 00:32",
    posseAte: "26/07/2025 22:50"
  },
  {
    cpf: "03378782340",
    nome: "MARINA ALVES BARBOSA",
    saldo: "R$ 32,40",
    chavePix: "03378782340",
    nascimento: "14/07/1978",
    criacao: "18/07/2025 00:32",
    posseAte: "26/07/2025 23:10"
  }
];

// Função para gerar dados aleatórios brasileiros
const generateRandomContaFilha = (): ContaFilha => {
  const nomesBrasileiros = [
    "JOSÉ SILVA", "MARIA SANTOS", "ANTONIO OLIVEIRA", "ANA COSTA", "CARLOS SOUZA",
    "FRANCISCA LIMA", "PAULO FERREIRA", "ADRIANA RODRIGUES", "JOÃO ALVES", "JULIANA PEREIRA",
    "MARCOS GOMES", "LUCIANA MARTINS", "PEDRO RIBEIRO", "CAMILA CARVALHO", "RAFAEL BARBOSA",
    "FERNANDA ARAÚJO", "EDUARDO DIAS", "PATRÍCIA FERNANDES", "RICARDO MELO", "AMANDA ROCHA",
    "ROBERTO CARDOSO", "VANESSA TORRES", "GUSTAVO NASCIMENTO", "PRISCILA CASTRO", "DANIEL AZEVEDO"
  ];

  // Gerar CPF aleatório (11 dígitos)
  const generateCPF = () => {
    return Math.floor(Math.random() * 90000000000 + 10000000000).toString();
  };

  // Gerar data de nascimento aleatória (1960-2005)
  const generateBirthDate = () => {
    const year = Math.floor(Math.random() * (2005 - 1960 + 1)) + 1960;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  };

  // Data e hora atual
  const now = new Date();
  const currentDateTime = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  const cpf = generateCPF();
  const nome = nomesBrasileiros[Math.floor(Math.random() * nomesBrasileiros.length)];

  return {
    cpf,
    nome,
    saldo: "R$ 32,40",
    chavePix: cpf,
    nascimento: generateBirthDate(),
    criacao: currentDateTime,
    posseAte: "" // Não usado mais
  };
};

export default function ContasFilhas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState("25");
  const [contas, setContas] = useState<ContaFilha[]>(contasFilhas);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedConta, setSelectedConta] = useState<ContaFilha | null>(null);
  const [qrCode, setQrCode] = useState("");
  const { toast } = useToast();

  const filteredContas = contas.filter(conta =>
    conta.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conta.cpf.includes(searchTerm)
  );

  const handleCreateContaFilha = async () => {
    setIsCreating(true);
    
    // Simular loading de 5 segundos
    setTimeout(() => {
      const novaConta = generateRandomContaFilha();
      setContas(prev => [novaConta, ...prev]);
      
      toast({
        title: "Sucesso!",
        description: "Conta filha criada com sucesso!",
        duration: 4000,
      });
      
      setIsCreating(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Contas Filhas</h1>
            <p className="text-muted-foreground">Gerenciamento de contas filhas</p>
          </div>
        </div>

        {/* Controls */}
        <Card className="card-modern">
          <CardContent className="p-8">
            <div className="flex flex-wrap items-center gap-6">
              <Button 
                variant="forcebank"
                onClick={handleCreateContaFilha}
                disabled={isCreating}
                className="shadow-glow"
              >
                {isCreating ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4 mr-2" />
                )}
                {isCreating ? "CRIANDO..." : "CRIAR CONTA FILHA"}
              </Button>
              <Button variant="orange">
                <RotateCcw className="w-4 h-4 mr-2" />
                DEVOLVER CONTAS FILHAS
              </Button>
              <Button variant="success">
                <Download className="w-4 h-4 mr-2" />
                EXPORTAR DADOS
              </Button>
              
              <div className="flex items-center gap-4 ml-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Pesquisar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64 rounded-xl border-border/50"
                  />
                </div>
                <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
                  <SelectTrigger className="w-32 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">registros por página</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="card-modern overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-left">CONTA</TableHead>
                    <TableHead className="text-left">SALDO</TableHead>
                    <TableHead className="text-left">CHAVE PIX</TableHead>
                    <TableHead className="text-left">NASCIMENTO</TableHead>
                    <TableHead className="text-left">DATA DE CRIAÇÃO</TableHead>
                    
                    <TableHead className="text-center">AÇÕES</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {filteredContas.map((conta, index) => (
                    <TableRow key={index} className="border-b border-border hover:bg-muted/50">
                      <TableCell>
                        <div>
                          <div className="font-medium">{conta.cpf}</div>
                          <div className="text-sm text-muted-foreground">{conta.nome}</div>
                        </div>
                      </TableCell>
                       <TableCell>
                         <div>
                           <div className="font-medium">{conta.saldo}</div>
                           <div className="text-xs text-muted-foreground">Saldo da Conta Mãe: R$ 32,40</div>
                         </div>
                       </TableCell>
                      <TableCell className="font-mono text-sm">{conta.chavePix}</TableCell>
                      <TableCell>{conta.nascimento}</TableCell>
                      <TableCell>{conta.criacao}</TableCell>
                      
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button 
                                size="sm" 
                                variant="forcebank" 
                                className="h-8 w-8 p-0"
                                onClick={() => setSelectedConta(conta)}
                              >
                                <DollarSign className="w-4 h-4" />
                              </Button>
                            </SheetTrigger>
                            <SheetContent className="w-[400px] sm:w-[540px]">
                              <SheetHeader>
                                <SheetTitle className="text-left">
                                  CONTA: {selectedConta?.nome || conta.nome}
                                </SheetTitle>
                              </SheetHeader>
                              <div className="mt-6 space-y-6">
                                <div>
                                  <h3 className="text-lg font-semibold text-foreground">
                                    SALDO DA CONTA: {selectedConta?.saldo || conta.saldo}
                                  </h3>
                                </div>
                                
                                <div className="space-y-4">
                                  <div>
                                    <label htmlFor="qrcode" className="block text-sm font-medium text-foreground mb-2">
                                      Cole o QR Code aqui:
                                    </label>
                                    <Input
                                      id="qrcode"
                                      placeholder="Cole o código QR aqui..."
                                      value={qrCode}
                                      onChange={(e) => setQrCode(e.target.value)}
                                      className="w-full"
                                    />
                                  </div>
                                  
                                  <Button 
                                    variant="forcebank" 
                                    className="w-full shadow-glow"
                                    onClick={() => {
                                      if (qrCode.trim()) {
                                        toast({
                                          title: "QR Code enviado!",
                                          description: `QR Code processado para ${selectedConta?.nome || conta.nome}`,
                                          duration: 3000,
                                        });
                                        setQrCode("");
                                      } else {
                                        toast({
                                          title: "Erro",
                                          description: "Por favor, cole um QR Code válido",
                                          variant: "destructive",
                                          duration: 3000,
                                        });
                                      }
                                    }}
                                  >
                                    ENVIAR
                                  </Button>
                                </div>
                              </div>
                            </SheetContent>
                          </Sheet>
                          <Button size="sm" variant="orange" className="h-8 w-8 p-0">
                            <ArrowUpDown className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
                            <Settings className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
                            <FileText className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
                            <Info className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}