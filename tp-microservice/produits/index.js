const express = require('express');
const app = express();
const port = 3000;

const produits = [
  { id: 1, nom: 'Carottes', calibre: 'Moyen', label: 'Bio' },
  { id: 2, nom: 'Pommes', calibre: 'Petit', label: 'IGP' },
  { id: 3, nom: 'Poireaux', calibre: 'Grand', label: 'Aucun' },
  { id: 4, nom: 'Tomates', calibre: 'Moyen', label: 'Label Rouge' },
  { id: 5, nom: 'Poires', calibre: 'Petit', label: 'Bio' },
  { id: 6, nom: 'Salades', calibre: 'Grand', label: 'Aucun' },
  { id: 7, nom: 'Navets', calibre: 'Moyen', label: 'Bio' },
  { id: 8, nom: 'Fraises', calibre: 'Petit', label: 'IGP' },
  { id: 9, nom: 'Courgettes', calibre: 'Grand', label: 'Label Rouge' },
  { id: 10, nom: 'Aubergines', calibre: 'Moyen', label: 'Aucun' },
];

app.get('/produits', (req, res) => {
  res.json(produits);
});

app.get('/produits/:nom', (req, res) => {
  const produit = produits.find(p => p.nom.toLowerCase() === req.params.nom.toLowerCase());
  if (!produit) return res.status(404).json({ erreur: 'Produit non trouvé' });
  res.json(produit);
});

app.listen(port, () => {
  console.log(`API Produits à l'écoute sur le port ${port}`);
});
