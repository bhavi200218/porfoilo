import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect } from "react";
import { FloatingElements } from "@/components/floating-elements";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen w-full">
            {/* Background element */}
            <div className={cn(
              "fixed inset-0 -z-10 transition-all duration-300",
              // Light theme
              "bg-gradient-to-br from-background to-muted/10",
              // Dark theme
              "dark:from-gray-900 dark:to-gray-950"
            )}>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
              </div>
              <FloatingElements />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <Router />
            </div>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
