/* =====================================================================
   Configuration de la plateforme en ligne — le SEUL fichier à remplir.
   Ces valeurs Firebase ne sont pas secrètes : elles identifient le projet.
   La sécurité repose sur les règles Firestore et l'enregistrement des appareils.
   Ne mettez JAMAIS ici un mot de passe, un code d'enregistrement ou une clé privée.
   ===================================================================== */
window.CRM_CONFIG = {
  mode: 'hybrid',
  platformName: 'CRM Ventes & Distribution',
  firebase: {
    apiKey: "AIzaSyBxDe3g02Nfv0UUmKQvapemCNAsM_wmFVE",
    authDomain: "crm-distribution.firebaseapp.com",
    projectId: "crm-distribution",
    storageBucket: "crm-distribution.firebasestorage.app",
    messagingSenderId: "85545665358",
    appId: "1:85545665358:web:0b863f52028a45eee3541f"
  },
  pollSec: 60,        // vérification des nouveautés (secondes)
  inviteHours: 72     // validité d'un lien d'enregistrement (heures)
};
