from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Try to import email monitor routes
try:
    from api.projects.email_monitor.routes import router as email_router
    EMAIL_MONITOR_AVAILABLE = True
except ImportError as e:
    print(f"Warning: Could not import email monitor: {e}")
    EMAIL_MONITOR_AVAILABLE = False

app = FastAPI(
    title="NextWave Lab API",
    description="Experimental Python Projects and Automation Tools",
    version="1.0.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://nextwave.au"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/healthcheck")
async def healthcheck():
    projects = []
    if EMAIL_MONITOR_AVAILABLE:
        projects.append("email-monitor")
    
    return {
        "status": "success", 
        "message": "NextWave Lab API Active",
        "version": "1.0.0",
        "available_projects": projects
    }

@app.get("/api/")
async def root():
    return {
        "message": "Welcome to NextWave Lab API",
        "docs": "/api/docs",
        "health": "/api/healthcheck"
    }

@app.get("/api/test")
async def test():
    return {
        "message": "API is working!",
        "python": "3.12",
        "email_monitor": EMAIL_MONITOR_AVAILABLE
    }

# Register Email Monitor routes if available
if EMAIL_MONITOR_AVAILABLE:
    app.include_router(
        email_router, 
        prefix="/api/lab", 
        tags=["Email Monitor"]
    )
    print("[OK] Email Monitor routes registered")
else:
    print("[WARNING] Email Monitor routes not available")
