import img1 from '../../assets/projet-react-001.png';
import img2 from '../../assets/projet-react-002.png';
import img3 from '../../assets/projet-react-crud.png';
import img4 from '../../assets/projet-react-e-commerce.png';
import img5 from '../../assets/projet-react-tvshow.png';
import img6 from '../../assets/projet-react-004.png';
import img7 from '../../assets/projet-react-page-contact.png'

 const PROJECTS = [
    {
    id: 11,
    image: img7,
    title:"Projet Page de Contact",
    description: `Ce projet consiste en une page de contact interactive développée avec ReactJS, intégrant Web3Forms pour la gestion des soumissions de formulaire et SweetAlert2 pour afficher des notifications élégantes et dynamiques.
Grâce à ce projet, j’ai appris à configurer une solution de formulaire sécurisée et à améliorer l’expérience utilisateur avec des alertes visuelles attractives et réactives. Ce projet met l'accent sur l'ergonomie et l'intégration fluide d'outils tiers.`,
    link:"https://projet-react-page-contact.vercel.app/"
    },

    {
        id: 1,
        image: img3,
        title:"Projet CRUD avec ReactJS et JSON-Server:",
        description: `
Il s’agit d’une application web permettant d’effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur des données simulées.\n
L'application utilise ReactJS pour le front-end et JSON-Server pour simuler une API REST. \n Elle inclut la gestion de l’état avec useState et useEffect, ainsi que des requêtes API via axios.\n
Ce projet m’a permis de maîtriser les bases du développement d’applications dynamiques avec une architecture orientée API.`,
     link: "https://projet-crud-react-001-fponuflis-crameurs-projects.vercel.app/"
    },
    {
        id: 2,
        image: img4,
        title: 'Projet de site e-commerce',
        description: `
        Ce projet est un site e-commerce développé avec ReactJS, mettant l'accent sur un système de panier interactif.\n
        Les données produits sont gérées via un fichier local, ce qui a permis de structurer et manipuler les informations sans serveur externe. \nLes utilisateurs peuvent parcourir les produits, ajouter des articles au panier, modifier les quantités, et visualiser le total en temps réel.\n
        Ce projet m’a aidé à approfondir la gestion de l’état avec useState et useEffect, ainsi que la création d'une expérience utilisateur fluide et réactive.`,
        link: "https://site-e-commerce-001.vercel.app/"
    },
    {
        id: 3,
        image: img5,
        title:"Projet TvShow",
        description: `Ce projet consiste en une application développée avec ReactJS permettant de rechercher et d’afficher des informations sur des séries télévisées en utilisant une API externe.\nGrâce à ce projet, j’ai appris à intégrer des API dans une application React, à manipuler les données reçues et à gérer les états pour afficher dynamiquement les résultats. \n
Ce projet m’a également permis d’approfondir l’utilisation d’outils comme axios pour effectuer des requêtes HTTP et de concevoir une interface réactive et intuitive. 
        `,
        link: "https://tv-show-mu.vercel.app/"
    },
    {
        id: 4,
        image: img6,
        title: "Projet Recherche Maison",
        description: `
Ce projet est une application front-end développée avec ReactJS, permettant aux utilisateurs de rechercher des maisons selon divers critères.\n
Ce projet m’a permis de concevoir une interface utilisateur fluide et réactive, tout en améliorant mes compétences en création de composants intuitifs et en gestion des interactions utilisateur. \n 
J’ai également travaillé sur l’optimisation de l’expérience utilisateur grâce à une navigation claire et ergonomique.
      
        `,
        link: "https://projet-react-004-ofcx4799i-crameurs-projects.vercel.app/"
    },
    {
        id: 5,
        image: img2,
        title: "Mon deuxième projet",
        description: `
Ce projet a été développé en utilisant Vite comme environnement de développement.\n
Grâce à ce projet, j’ai appris à configurer et exploiter Vite pour bénéficier d’un temps de compilation rapide et d’un rechargement en direct optimisé.\n Cela m’a permis d’améliorer ma productivité et de mieux comprendre les avantages d’un environnement moderne pour les projets React.
        `,
        link: "https://site-vitrine-001-r53wsomuh-crameurs-projects.vercel.app/"
    },
    {
        id: 6,
        image: img1,
        title: "Mon premier site ReactJS",
        description: `Ce projet marque mes débuts avec ReactJS, où j’ai appris à créer des composants, gérer l’état avec useState, et organiser une structure de projet.\n
Il m’a permis de comprendre les bases de React, notamment la création d’une interface dynamique et la gestion des interactions utilisateur, tout en renforçant mes compétences en développement front-end.
        `,
        link: "https://site-vitrine-001-r53wsomuh-crameurs-projects.vercel.app/"
    },
    
]
export default PROJECTS