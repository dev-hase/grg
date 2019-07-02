module.exports = {
    title: 'Goju Ryu Guide',
    description: 'Lernhilfen für Goju Ryu',
    extend: 'vuepress/theme-default',
    plugins: {
     '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "Inhalte wurden geändert",
          buttonText: "nachladen..."
        }
      }
    },
    themeConfig: {   
        serviceWorker: {
              updatePopup: true // Boolean | Object, default to undefined.
              // If set to true, the default text config will be: 
              // updatePopup: { 
              //    message: "New content is available.", 
              //    buttonText: "Refresh" 
              // }
            },
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
            ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster|Oswald:400,700&display=swap&subset=latin-ext' }],
          ]
      }

