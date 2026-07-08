from sqlalchemy import inspect, select, func, text
from sqlalchemy.orm import Session 

def table_exists(table, engine):
    inspector = inspect(engine)
    return inspector.has_table(table)

def table_is_populated(table:str, engine):
    with Session(engine) as session:
        select_statement = select(func.count()).select_from(text(table))
        result = session.scalars(select_statement).first()
        return [result > 0, result]
    

