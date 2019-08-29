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
                ['/kata/allgemein/', 'Kata - Allgemein'],
                '/kata/taikyoku/',
                '/kata/gekisai/',
                '/kata/sanchin/',
                '/kata/tensho/',
                '/kata/saifa/',
                '/kata/seiyunchin/',
                '/kata/Sanseru/',
                '/kata/Shisochin/',
                '/kata/Seisan/',
                '/kata/Sepai/',
                '/kata/Kururunfa/',
                '/kata/Suparinpei/',
              ]
            },
            {
              title: 'Kumite',
              children: [
                ['/kumite/kumite_ura/', 'Kumite Ura Allgemein'],
                ['/kumite/kumite_ura_1-3/', 'Kumite Ura 1-3'],
                ['/kumite/kumite_ura_4-6/', 'Kumite Ura 4-6'],
                ['/kumite/kumite_ura_7-9/', 'Kumite Ura 7-9'],
                ['/kumite/kumite_ura_10-12/', 'Kumite Ura 10-12'],
                ['/kumite/nage_waza/', 'Nage Waza Allgemein'],
                ['/kumite/nage_waza_1-3/', 'Nage Waza 1-3'],
                ['/kumite/nage_waza_4-6/', 'Nage Waza 4-6'],
                ['/kumite/nage_waza_7-9/', 'Nage Waza 7-9'],
                ['/kumite/nage_waza_10-12/', 'Nage Waza 10-12'],
              ]
            },
                      {
              title: 'Techniken',
              children: [
                ['/techniken/mawashi-uke/', 'Mawashi Uke'],
                ['/techniken/shuto-uke/', 'Shuto Uke'],
              ]
            },
            {
              title: 'Prüfungsordnung',
              children: [
                ['/pruefungsordnung/1_kyu/', '1. Kyu (braun)'],
                ['/pruefungsordnung/2_kyu/', '2. Kyu (braun)'],
                ['/pruefungsordnung/3_kyu/', '3. Kyu (braun)'],
                ['/pruefungsordnung/4_kyu/', '4. Kyu (blau)'],
                ['/pruefungsordnung/5_kyu/', '5. Kyu (blau)'],
                ['/pruefungsordnung/6_kyu/', '6. Kyu (grün)'],
                ['/pruefungsordnung/7_kyu/', '7. Kyu (orange)'],
                ['/pruefungsordnung/8_kyu/', '8. Kyu (gelb)'],
                ['/pruefungsordnung/9_kyu/', '9. Kyu (weiß)'],
              ]
            },
                      {
              title: 'Kobudo',
              children: [
                ['/kobudo/Shushi-no-Kun_Sho/', 'Shûshi-no-Kun (Shô)'],
                ['/kobudo/Sakugawa-no-Kun_Sho/', 'Sakugawa-no-Kun (Shô)'],
                ['/kobudo/Maezato-no-Tekko/', 'Maezato-no-Tekko'],
                ['/kobudo/Chikin-Shitahaku-no-Sai/', 'Chikin-Shitahaku-no-Sai'],
                ['/kobudo/Hamahiga-no-Tunfa/', 'Hamahiga-no-Tunfa'],
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
            ['link', { rel: 'icon', href: '/logox.png' }],
            ['link', { rel: 'aplle-touch-icon', href: '/logox.png' }],
            ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com/', crossorigin: 'anonymous' }],
            ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster|Oswald:400,700&display=swap&subset=latin-ext' }],
          ]
      }

