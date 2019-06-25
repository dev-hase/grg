module.exports = {
    title: 'Goju Ryu Guide',
    description: 'Lernhilfen für Goju Ryu',
    plugins: ['@vuepress/pwa'],
    themeConfig: {   

        sidebar: [
            {
              title: 'Katas',
              children: [
                '/kata/taikyoku/',
                '/kata/gekisai/',
                '/kata/sanchin/',
                '/kata/tenshō/',
                '/kata/saifā/',
                '/kata/seiyunchin/',
                '/kata/Sansēru/',
                '/kata/Shisōchin/',
                '/kata/Seisan/',
                '/kata/Sēpai/',
                '/kata/Kururunfā/',
                '/kata/Sūpārinpei/',
              ]
            },
            {
              title: 'Kumite',
              children: [
                '/kumite/kumite_ura/',
                '/kumite/nage_waza/',
              ]
            },
        ],
        nav: [
          { text: 'Inhalt', link: '/inhalt.html' },
          { text: 'Info', link: '/info.html' },
        ],

      },
    head: [

        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'aplle-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Joti+One&amp;subset=latin-ext' }],
      ]
  }
