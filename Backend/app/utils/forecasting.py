import pandas as pd
from sklearn.linear_model import LinearRegression

def forecast_sales(df):

    df['Month'] = range(1, len(df) + 1)

    X = df[['Month']]
    y = df['Sales']

    model = LinearRegression()
    model.fit(X, y)

    future_months = pd.DataFrame({
        'Month': [len(df)+1, len(df)+2, len(df)+3]
    })

    predictions = model.predict(future_months)

    return predictions.tolist()