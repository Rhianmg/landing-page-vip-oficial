import { type User, type InsertUser, type Purchase, type InsertPurchase, type UploadedImage, type InsertImage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPurchase(purchase: InsertPurchase): Promise<Purchase>;
  getPurchases(): Promise<Purchase[]>;
  createImage(image: InsertImage): Promise<UploadedImage>;
  getImages(): Promise<UploadedImage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private purchases: Map<string, Purchase>;
  private images: Map<string, UploadedImage>;

  constructor() {
    this.users = new Map();
    this.purchases = new Map();
    this.images = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPurchase(insertPurchase: InsertPurchase): Promise<Purchase> {
    const id = randomUUID();
    const purchase: Purchase = { 
      ...insertPurchase, 
      id,
      createdAt: new Date()
    };
    this.purchases.set(id, purchase);
    return purchase;
  }

  async getPurchases(): Promise<Purchase[]> {
    return Array.from(this.purchases.values());
  }

  async createImage(insertImage: InsertImage): Promise<UploadedImage> {
    const id = randomUUID();
    const image: UploadedImage = {
      ...insertImage,
      id,
      uploadedAt: new Date()
    };
    this.images.set(id, image);
    return image;
  }

  async getImages(): Promise<UploadedImage[]> {
    return Array.from(this.images.values());
  }
}

export const storage = new MemStorage();
