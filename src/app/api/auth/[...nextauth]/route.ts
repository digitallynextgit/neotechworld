import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/auth";

// Create the handler with explicit content type to ensure proper JSON response
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
