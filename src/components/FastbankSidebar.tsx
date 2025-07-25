import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  HeadphonesIcon,
  Trophy,
  LogOut,
  Settings,
  Moon,
  Sun,
} from "lucide-react";
import forceBankLogo from "@/assets/forcebank-logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Contas Filhas", url: "/contas-filhas", icon: Users },
  { title: "Conta Mãe", url: "/conta-mae", icon: CreditCard },
  { title: "Suporte", url: "/suporte", icon: HeadphonesIcon },
  { title: "Premiações", url: "/premiacoes", icon: Trophy },
];

export function FastbankSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDark, setIsDark] = useState(true);
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getNavClass = (path: string) =>
    isActive(path)
      ? "bg-primary text-primary-foreground font-medium"
      : "hover:bg-sidebar-accent text-sidebar-foreground";

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-64"} border-r border-sidebar-border`} collapsible="icon">
      <SidebarHeader className="p-6">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <img src={forceBankLogo} alt="ForceBank" className="h-16 w-auto" />
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-1">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex flex-col gap-2">
          {!collapsed && (
            <div className="mb-2">
              <div className="text-sm font-medium text-sidebar-foreground">Carlos José Fernandes</div>
              <div className="text-xs text-muted-foreground">Saldo: R$ 32,40</div>
              <div className="text-xs text-muted-foreground">Saldo clientes: R$ 0,22</div>
            </div>
          )}
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex-1 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {!collapsed && <span className="ml-2">{isDark ? "Claro" : "Escuro"}</span>}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <LogOut className="w-4 h-4" />
              {!collapsed && <span className="ml-2">Logout</span>}
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}