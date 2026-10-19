# VM Signature — site de conciergerie

Application React 19 + TypeScript + Vite + Tailwind CSS v4.

## Démarrage

```bash
npm install
npm run dev
npm run build
```

## Personnalisation

- Modifier les coordonnées, la zone, les textes et les visuels dans `src/config.ts`.
- Ajouter uniquement de vrais logements au tableau `properties` dans `src/config.ts` ; leurs liens de réservation sont fournis individuellement.
- Les photos actuellement utilisées sont les fichiers `assets/` hérités de la version précédente ; confirmer leurs droits d'utilisation avant toute publication officielle.
- Services et coordonnées repris de la version précédente, à faire confirmer par l'entreprise.
- Compléter les mentions légales, l'identité du responsable de traitement et les durées de conservation avant la mise en production publique.

## Formulaire sécurisé côté serveur

Route `/api/contact` pour Vercel, validation serveur, champ anti-spam invisible, encodage HTML, pas de clé exposée au navigateur. Ajouter sur Vercel : `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (adresse d'envoi d'un domaine vérifié chez Resend), `CONTACT_TO_EMAIL` (adresse destinataire). Tant que ces variables ne sont pas présentes, l'API renvoie une erreur 503 claire : aucun faux accusé de réception.

Pour un trafic important, ajouter une limitation de débit via une solution persistante (Upstash Redis / Vercel WAF) et un contrôle anti-bot côté serveur.

## Publication

Projet Vercel existant : `vm-signature-site`. Les chemins de pages utilisent une réécriture SPA dans `vercel.json`.

## À valider

L’identité légale et le statut exact des prestations, le droit d'usage des images, les coordonnées, les modalités de réservation et les obligations RGPD doivent être confirmés avant une communication officielle.
