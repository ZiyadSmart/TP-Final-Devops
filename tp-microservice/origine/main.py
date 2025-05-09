from fastapi import FastAPI, Query
import requests

app = FastAPI()

origine_data = {
    "Carottes": "Tarn-et-Garonne",
    "Pommes": "Lot-et-Garonne",
    "Poireaux": "Haute-Garonne",
    "Tomates": "Pyrénées-Orientales",
    "Poires": "Aveyron",
    "Salades": "Aude",
    "Navets": "Gers",
    "Fraises": "Dordogne",
    "Courgettes": "Hérault",
    "Aubergines": "Vaucluse",
}

@app.get("/origine")
def get_origine(produit: str = Query(...)):
    if produit not in origine_data:
        return {"erreur": "Produit inconnu"}

    return {
        "produit": produit,
        "origine": origine_data[produit]
    }
