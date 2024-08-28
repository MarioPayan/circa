from data import Data
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
from fastapi.responses import HTMLResponse
from typing import List
from models import Coffee, Variety

app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:3000",
]
host = "http://127.0.0.1:8000"

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

data = Data()


@app.get("/", response_class=HTMLResponse)
async def get_endpoints():
    links = []
    for route in app.routes:
        if hasattr(route, "methods"):
            full_path = f"{host}{route.path}"
            link = f'<a href="{full_path}">{full_path}</a><br>'
            links.append(link)
    html_content = "<h2>Clickable Endpoints:</h2>" + "".join(links)
    return HTMLResponse(content=html_content)


@app.get("/coffee/", response_model=List[Coffee])
async def get_coffees():
    return data.get_coffees()


@app.get("/coffee/{slug}", response_model=Coffee)
async def get_coffee(slug: str):
    coffee = data.get_coffee_by_slug(slug)
    if not coffee:
        raise HTTPException(status_code=404, detail="Coffee not found")
    return coffee


@app.get("/variety/", response_model=List[Variety])
async def get_varieties():
    return data.get_varieties()


@app.get("/variety/{slug}", response_model=Variety)
async def get_variety(slug: str):
    variety = data.get_variety_by_slug(slug)
    if not variety:
        raise HTTPException(status_code=404, detail="Variety not found")
    return variety
