from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/{dataset_id}")
def get_dashboard(dataset_id: int):

    return {
        "dataset_id": dataset_id,
        "total_sales": 50000,
        "forecast_accuracy": "95%",
        "top_product": "Laptop"
    }