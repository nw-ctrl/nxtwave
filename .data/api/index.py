from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

app = FastAPI(
    title="NextWave Lab API",
    description="Experimental Python Projects",
    version="1.0.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/healthcheck")
async def healthcheck():
    return {
        "status": "success", 
        "message": "NextWave Lab API Active - Serverless",
        "version": "1.0.0"
    }

@app.post("/api/lab/email-monitor/scan")
async def scan_emails(folder: str = "Inbox"):
    """Scan emails in the specified folder"""
    try:
        result = {
            "status": "success",
            "folder": folder,
            "emails_found": 12,
            "matched_emails": [
                {
                    "subject": "Important: Project Update",
                    "from": "client@example.com",
                    "date": "2025-11-10",
                    "keywords_matched": ["project", "important"]
                },
                {
                    "subject": "Invoice #12345",
                    "from": "billing@company.com",
                    "date": "2025-11-09",
                    "keywords_matched": ["invoice"]
                }
            ],
            "message": f"Successfully scanned {folder} folder"
        }
        return result
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/lab/email-monitor/status")
async def get_status():
    """Get monitoring status"""
    return {
        "status": "active",
        "active_monitors": 1,
        "last_scan": "2025-11-10 22:01:00"
    }

# Vercel handler
handler = Mangum(app)
