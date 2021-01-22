//data
const projects = [
    {
        id: 1,
        title: "Création du site Actizzy",
        text: "Réflexion des parcours utilisateurs puis développement du site",
        resume: "Brief initial : Développement d'un site de réservation d'activitées dans les hauts de France. ",
        description: "D'octobre à décembre j'ai travaillé de concert avec une collègue sur les parcours utilisateurs, le benchmark et la réalisation des wireframes. <br/> Nous avions des points hebdomadaire avec le client pour lui présenter notre avancée. Il répondait à nos questions et nous a permis d'avancer dans la bonne direction afin que le site colle le plus possible à ses besoins. <br/><br/> Dans une deuxième partie, c'est à dire à partir de décembre j'ai été responsable et en charge du développement front du site. J'avais sous ma responsabilité 1 développeur front-end qui m'a assisté dans la majeure partie du développement. <br/> Ayant travaillé les différents parcours utilisateurs en amont j'étais le référent pour toutes les questions aussi bien fonctionnelle du développeur que visuel du graphiste, sans oublier la gestion des animations ainsi que leurs pertinences.",
        livrables: "- Benchmark <br/> - Wireframes<br/> - Développement front-end <br/>",
        link: "https://www.actizzy.com",
        img: "./assets/img/actizzy.png",
        alt: "image du site actizzy",
        date: "10/2018 - 08/2019"
    },
    {
        id: 2,
        title: "Développement du site Le Figuier",
        text: "Création d'un site e-commerce sur le CMS Prestashop",
        resume: "Brief initial : Développement d'un site de réservations de plats lors d'évènement organisés en entreprise.",
        description: "Un délai assez court puisque les 2 premiers mois je n'avais que quelques heures par semaines, et elles étaient consacrées à de la recherche et de la dévouverte du thème et des fonctionnalitées. <br/> <br/> A partir de Janvier, je suis passé à mi-temps sur le projet. J'ai du suivre une maquette pour ce projet qui proposait de nombreuses animations et fonctionnalités non prévue par le thème d'origine. L'enjeux était de taille puisqu'il fallait faire vite, fonctionnel et penser au responsive assez tôt pour ne pas avoir de mauvaises surprises. De nombreux éléments devaient être administrable ce qui a complexifié la tâche. ",
        link: "https://lefiguier.fr",
        img: "./assets/img/lefiguier.png",
        alt: "image du site lefiguier",
        date: "10/2018 - 08/2019"
    },
    {
        id: 3,
        title: "Réflexion et wireframes du site Smartfone.",
        text: "Réalisation d'une étude complète dans le cadre de la création d'un site de rachat de smartphones.",
        resume: "Brief initial : Création d'un site ayant pour usage le rachat de smartphones en provenance des Etats-unis afin d'être revendu reconditionnés en France.",
        description: "J'ai consacré la première partie de mon temps à effectuer des recherches sur le sujet. <br/> - Une étude du marché des téléphones reconditionnés, <br/> - Les principaux acteurs en place, <br/> - Les utilisateurs de ce genre de services.<br/><br/>J'ai participer à de nombreuses réunions avec les clients, pour me nourir au maximum de leur savoir et de leurs connaissances.",
        livrables: "- Benchmark <br/> - Etude sur les couleurs <br/> - Questionnaire <br/> - Wireframes",
        link: "/",
        img: "./assets/img/smartfone.png",
        alt: "image des maquettes smartfone",
        date: "04/2018 - 09/2018"
    }
];

const parcours = [
    {
       id: 1,
       date: "2017-2019",
       ecole: "MASTERE UX DESIGN à l'ECV DIGITAL Paris",
       title: "Mastère en UX Design :",
       img: "./assets/img/about/content-1.jpg",
       description_first: "<p>J'ai découvert, grâce à cette formation, plusieurs choses. Tout d'abord, l'importance de l'humain dans les différents projets auxquels j'ai participé.</p><p>Mais aussi une volonté et une envie de vouloir créer et améliorer des services ou des produits afin qu'ils répondent au mieux à ce qu'on attend d'eux.",
       description_second: "<p>Mon expérience en entreprise m'a montré qu'il est souvent compliqué de mettre en pratique les savoirs appris en formation.</p><p>Il faut essayer dans chaque petite actions ou améliorations d'apporter cette sensibilité à l'UX. Chaque petite action menée à bien améliorera l'expérience gobale du service ou du produit.",
       visible: false
    },
    {
        id: 2,
        date: "2016-2017",
        ecole: "LICENCE MIM à l'IUT de Troyes",
        title: "Licence MIM :",
        img: "./assets/img/about/content-2.jpg",
        description_first: "<p>J'ai appris le développement de site web sur Framework (symfony), le développement de module sur CMS (prestashop), ou encore le développement d'application avec Ionic.</p><p>L'ambition de vouloir faire du développement de qualité, durable et simple à comprendre, étaient mes deux leitmotiv lors de cette année.</p>",
        description_second:"<p>La complexité d'apprentissage de nouveaux langages et l'évolution incroyable de ces derniers au fil des mois et des années.</p><p>Faire une veille quasi quotidienne est indispensable pour rester à la page des évolutions de ces métiers.</p>",
        visible: false
    },
    {
        id: 3,
        date: "2014-2016",
        ecole: "DUT MMI à l'IUT de Troyes",
        title: "DUT MMI :",
        img: "./assets/img/about/content-2.jpg",
        description_first: "<p>J'ai appris les bases de développement web. J'ai aussi développé mon esprit critique et ma créativité en webdesign.</p><p>Les bases du travail en groupe, les clés pour réussir un projet, l'esprit d'équipe et la capacité à communiquer avec les autres pour avancer tous ensemble vers la réussite du projet.</p>",
        description_second:"<p>Le grand nombre de matières découvertes m'a permis de savoir dans quelle domaine je voulais me tourner</p><p>J'ai acquis des compétences très utile en graphisme, en photo et en vidéo qui m'ont servi aussi bien dans le monde professionnel que dans ma sphère personnelle.</p>",
        visible: false
    }
];
const Home = {
    template: '#home',
    name: 'Home',
    data () {
        return {
            projects
        }
    }
}
const About = {
    template: '#about',
    name: 'About',
    data () {
        return {
            parcours
        }
    },
    methods: {
        BecomeVisible (i) {
            for (let index = 0; index < this.parcours.length; index++) {
                const element = this.parcours[index];
                element.visible = false
            }
            this.parcours[i].visible = true
        }
    }
}
const Portfolio = {
    template: '<p>Portfolio</p>',
    name: 'Portfolio'
}
const Skills = {
    template: '<p>Mes compétences</p>',
    name: 'Skills'
}
const Contact = {
    template: '<p>Contact</p>',
    name: 'Contact'
}

//router
const routes = [
    { path: '/', component: Home },
    { path: '/a-propos', component: About },
    { path: '/portfolio.php', component: Portfolio },
    { path: '/mes-competences.php', component: Skills },
    { path: '/contact.php', component: Contact }
]
const router = new VueRouter({
    routes
})
const vue = new Vue({
    router
}).$mount('#app')