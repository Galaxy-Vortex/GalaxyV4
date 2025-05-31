import { ChemicalServer } from "chemicaljs";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

// Load environment variables from .env file if present
dotenv.config();

// Server configuration
const CONFIG = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  LOG_LEVEL: process.env.LOG_LEVEL || "common",
  MAX_REQUEST_LIMIT: process.env.MAX_REQUEST_LIMIT || 100,
  REQUEST_WINDOW_MS: process.env.REQUEST_WINDOW_MS || 15 * 60 * 1000, // 15 minutes
};

// Initialize Chemical Server
const [app, listen] = new ChemicalServer({
  default: "scramjet",
  uv: "true",
  scramjet: "true",
  rh: "false",
});

// Setup access logging
// Using import.meta.url to get the directory path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const accessLogPath = path.join(logsDir, 'access.log');
const accessLogStream = fs.createWriteStream(accessLogPath, { flags: 'a' });

// Apply middleware
app.use(morgan(CONFIG.LOG_LEVEL, { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: CONFIG.REQUEST_WINDOW_MS,
  max: CONFIG.MAX_REQUEST_LIMIT,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Serve static files
app.use(express.static("public", {
  index: "index.html",
  extensions: ["html"],
  maxAge: '1d' // Cache static assets for 1 day
}));

// API Routes
const apiRouter = express.Router();

// Health check endpoint
apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    environment: CONFIG.NODE_ENV
  });
});

// Version endpoint
apiRouter.get('/version', (req, res) => {
  res.status(200).json({
    version: '1.0.0',
    name: 'Galaxy Network API',
    server: 'ChemicalJS'
  });
});

// Example data endpoint
apiRouter.get('/data', (req, res) => {
  res.status(200).json({
    message: 'Data retrieved successfully',
    data: {
      galaxies: ['Milky Way', 'Andromeda', 'Triangulum'],
      stars: ['Sun', 'Proxima Centauri', 'Betelgeuse'],
      planets: ['Earth', 'Mars', 'Jupiter']
    }
  });
});

// Mount API routes
app.use('/api', apiRouter);

// Chemical server specific setup
app.serveChemical();

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    error: err.name || 'Internal Server Error',
    message: CONFIG.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// Start server
listen(CONFIG.PORT, () => {
  console.log("░██████╗░░█████╗░██╗░░░░░░█████╗░██╗░░██╗██╗░░░██╗");
  console.log("██╔════╝░██╔══██╗██║░░░░░██╔══██╗╚██╗██╔╝╚██╗░██╔╝");
  console.log("██║░░╚██╗██╔══██║██║░░░░░██╔══██║░██╔██╗░░░╚██╔╝░░");
  console.log("╚██████╔╝██║░░██║███████╗██║░░██║██╔╝╚██╗░░░██║░░░");
  console.log("░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░");
  console.log(`Server running in ${CONFIG.NODE_ENV} mode`);
  console.log(`Listening on: http://localhost:${CONFIG.PORT}`);
  console.log(`Access logs: ${accessLogPath}`);
  console.log(`Security: enabled with Helmet and rate limiting`);
  console.log(`API available at: http://localhost:${CONFIG.PORT}/api`);
});
