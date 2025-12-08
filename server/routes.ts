import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactRouter } from "./api/contact/route";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // API Routes
  app.use('/api/contact', contactRouter);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  return httpServer;
}
