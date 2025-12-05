import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect } from "react";

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
          <Toaster />
          <div className="min-h-screen w-full">
            {/* Background element */}
            <div className={cn(
              "fixed inset-0 -z-10 transition-all duration-300",
              // Light theme - more visible pink
              "bg-linear-to-br from-pink-100 to-pink-50",
              // Dark theme - gradient
              "dark:bg-linear-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
            )} />
            
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
