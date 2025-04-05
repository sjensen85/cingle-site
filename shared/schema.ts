import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  service: text("service"),
  message: text("message"),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  userId: integer("user_id").references(() => users.id),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true,
  userId: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Define the relationships
export const usersRelations = relations(users, ({ many }) => ({
  contactSubmissions: many(contactSubmissions)
}));

export const contactSubmissionsRelations = relations(contactSubmissions, ({ one }) => ({
  user: one(users, {
    fields: [contactSubmissions.userId],
    references: [users.id]
  })
}));
