// src/data/projetsData.ts

export interface Typeprojet {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const Projectdata: Typeprojet[] = [
  {
    id: 1,
    name: "Plateforme e-commerce",
    image: "1",
    description:
      "Application de vente en ligne moderne avec panier interactif.",
  },
  {
    id: 2,
    name: "Gestion d’université",
    image: "2",
    description:
      "Plateforme pour gérer les inscriptions, emplois du temps et notes.",
  },
  {
    id: 3,
    name: "Site de réservation d’hôtel",
    image: "3",
    description:
      "Réservation de chambres avec système de filtres et avis clients.",
  },
];
