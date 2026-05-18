from sqlalchemy import Column, Integer, String
from app.database import Base


class Dataset(Base):
    __tablename__ = "datasets"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String(255))
    rows = Column(Integer)