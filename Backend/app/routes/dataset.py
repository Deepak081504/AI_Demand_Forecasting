from fastapi import APIRouter, UploadFile, File
import pandas as pd

router = APIRouter(prefix="/dataset", tags=["Dataset"])


@router.post("/upload")
async def upload_dataset(file: UploadFile = File(...)):

    if file.filename.endswith('.csv'):
        df = pd.read_csv(file.file)
    else:
        df = pd.read_excel(file.file)

    df.drop_duplicates(inplace=True)
    df.fillna(0, inplace=True)

    return {
        "filename": file.filename,
        "rows": len(df),
        "columns": list(df.columns)
    }