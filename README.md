# Distribution CRM

Plateforme CRM multi-entreprises pour la vente et la distribution de boissons. Elle couvre le service à la clientèle, les enquêtes, les plaintes, les commandes, les dégustations, l'inspection, le TPM, la traçabilité, le marketing, les achats et la formation.

- **Fichier publié :** `index.html`, une application d'une seule page, hébergée sur GitHub Pages.
- **Données :** stockées dans Firebase Firestore, une organisation par entreprise cliente (`orgs/{organisation}`). **Ce dépôt ne contient aucune donnée d'entreprise.**
- **Accès :** l'adresse de la plateforme, un nom utilisateur (unique sur toute la plateforme) et un mot de passe. Chaque appareil utilisé est enregistré automatiquement à la connexion. Un utilisateur non administrateur ne peut avoir qu'une session ouverte à la fois.
- **Mots de passe :** jamais stockés en clair. Seule une empreinte lente (PBKDF2-SHA-256) est conservée sur le serveur.
- **Configuration :** `crm-config.js` contient la configuration web Firebase, qui n'est pas secrète. N'y mettez jamais de mot de passe ni de jeton.
- **Sécurité serveur :** `firestore.rules`, à publier dans *Firestore → Rules*.

Mise à jour de la plateforme : remplacez `index.html`, puis publiez `firestore.rules`.
