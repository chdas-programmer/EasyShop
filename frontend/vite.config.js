// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api/": "http://localhost:5000",
//       "/uploads/":"http://localhost:5000"
      
//     },
//   },
  
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env files
dotenv.config();

const isDev = process.env.NODE_ENV ;

export default defineConfig({
  plugins: [react()],
  server: {
     
          "/api/": "https://easyshop-izc5.onrender.com",
          "/uploads/": "https://easyshop-izc5.onrender.com",
        
      
  },
  build: {
    outDir: "dist", // Output directory for build files
  },
});

