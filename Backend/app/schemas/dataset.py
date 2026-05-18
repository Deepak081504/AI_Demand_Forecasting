from pydantic import BaseModel


class DatasetSchema(BaseModel):
    filename: str
    rows: int