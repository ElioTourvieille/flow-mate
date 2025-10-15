import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    email: v.string(),
    name: v.string(),
    image: v.optional(v.string()),
    emailVerified: v.optional(v.boolean()),
    updatedAt: v.string(),
  }),

  projects: defineTable({
    name: v.string(),
    clientEmail: v.string(),
    status: v.union(v.literal("active"), v.literal("completed")),
    currentStep: v.number(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  workflows: defineTable({
    projectId: v.id("projects"),
    steps: v.array(v.id("steps")),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),
  
  steps: defineTable({
    projectId: v.id("projects"),
    title: v.string(),
    description: v.optional(v.string()),
    order: v.number(),
    requiredClientAction: v.optional(v.boolean()),
    completed: v.boolean(),
    dueDate: v.optional(v.string()),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),
  

});