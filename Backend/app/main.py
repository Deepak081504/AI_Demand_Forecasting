from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth
from app.routes import dataset
from app.routes import forecast
from app.routes import dashboard
from app.routes import reports

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Advanced AI Demand Forecasting Backend",
    version="1.0.0"
)

app.include_router(auth.router)
app.include_router(dataset.router)
app.include_router(forecast.router)
app.include_router(dashboard.router)
app.include_router(reports.router)


@app.get("/")
def root():
    return {"message": "API Running Successfully"}