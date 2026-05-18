from fastapi import APIRouter

router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"]
)

@router.get("/{dataset_id}")
def generate_forecast(dataset_id: int):

    predictions = [2500, 3000, 3500]

    return {
        "dataset_id": dataset_id,
        "future_predictions": predictions
    }