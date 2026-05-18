from fastapi import APIRouter
from app.routes import reports

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)

@router.get("/excel/{dataset_id}")
def export_excel(dataset_id: int):

    return {
        "message": f"Excel report generated for dataset {dataset_id}"
    }


@router.get("/pdf/{dataset_id}")
def export_pdf(dataset_id: int):

    return {
        "message": f"PDF report generated for dataset {dataset_id}"
    }