import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({
          message: "Validation failed",
          errors: error.errors
        });
      } else {
        // Return general server error
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          message: "An error occurred while processing your request"
        });
      }
    }
  });

  // Get all contact submissions (admin functionality)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        message: "An error occurred while fetching contact submissions"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
