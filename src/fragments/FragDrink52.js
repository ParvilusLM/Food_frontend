import React, {Fragment} from 'react'
import './styles/FragDrink52.scss'
import loadable from '@loadable/component'

const SFContentSect = loadable(() => import('../fragments/sousFrag/SFContentSect'))
const TagPageSect = loadable(() => import('../composants/TagPageSect'))

const tagPosts = [
    {'image':'img/u10.webp', 
        'lienPost':'', 
        'tag':'HALLOWEEN', 
        'leinTag':'', 
        'titre':'5 Boo-tiful Cocktail & Dessert Pairings for Halloween', 
        'lienTitre':'', 
        'sousTitre':'Treat yourself to the season\'s spookiest matchups.', 
        'auteur':' MADISON TRAPKIN', 
        'lienUtilisateur':'', 
        'date':'October 20, 2022'
    },
    {'image':'img/u10-1.webp', 
        'lienPost':'', 
        'tag':'COCKTAIL', 
        'leinTag':'', 
        'titre':'3 Iconic Cocktails That Changed the Way We Drink', 
        'lienTitre':'', 
        'sousTitre':'How Angostura bitters mixed their way into entertaining mainstays through the decades.', 
        'auteur':' KC HYSMITH', 
        'lienUtilisateur':'', 
        'date':'October  3, 2022'
    },
    {'image':'img/u10-2.webp', 
        'lienPost':'', 
        'tag':'RED WINE', 
        'leinTag':'', 
        'titre':'What is Chianti, Really? Chianti Classico and the Black Rooster Explained...', 
        'lienTitre':'', 
        'sousTitre':'A full-bodied look at this delicious red wine.', 
        'auteur':'ANDREW TRISKA', 
        'lienUtilisateur':'', 
        'date':'September  1, 2022'
    },
    {'image':'img/u10-3.webp', 
        'lienPost':'', 
        'tag':'LABOR DAY', 
        'leinTag':'', 
        'titre':'Level Up Your Labor Day Recipes With This Bar Cart Staple', 
        'lienTitre':'', 
        'sousTitre':'Bitters add extra oomph to festive drinks, desserts, and more.', 
        'auteur':'  KC HYSMITH', 
        'lienUtilisateur':'', 
        'date':'August 24, 2022'
    },
    {'image':'img/u10-4.webp', 
        'lienPost':'', 
        'tag':'MARGARITA', 
        'leinTag':'', 
        'titre':'Gracias Madre Offers a Taste of the Margarita’s Past & Future', 
        'lienTitre':'', 
        'sousTitre':'This all-vegan Mexican restaurant in LA is known for its clarified, translucent margarita.', 
        'auteur':' ELVA RAMIREZ', 
        'lienUtilisateur':'', 
        'date':'August  8, 2022'
    },
    {'image':'img/u10-5.webp', 
        'lienPost':'', 
        'tag':'COCKTAIL', 
        'leinTag':'', 
        'titre':'Jackson Hole Isn\'t Just for Skiing—It\'s for Sloshies Too', 
        'lienTitre':'', 
        'sousTitre':'Everything you need to know about the signature cocktail of the Mountain West.', 
        'auteur':' JENN RICE', 
        'lienUtilisateur':'', 
        'date':'August  8, 2022'
    },
    {'image':'img/u10-6.webp', 
        'lienPost':'', 
        'tag':'COCKTAIL', 
        'leinTag':'', 
        'titre':'The Magic of Miami\'s Modern Daiquiri', 
        'lienTitre':'', 
        'sousTitre':'Invented over a century ago in the tiny village of Daiquirí, Cuba, this tropical cocktail has been...', 
        'auteur':'LANE NIESET', 
        'lienUtilisateur':'', 
        'date':'August  8, 2022'
    },
    {'image':'img/u10-7.webp', 
        'lienPost':'', 
        'tag':'IRISH', 
        'leinTag':'', 
        'titre':'Skip the Hurricane—Frozen Irish Coffee Is a New Orleans Staple Worth ...', 
        'lienTitre':'', 
        'sousTitre':'The magic is in the machine.', 
        'auteur':'CHELSEA BRASTED', 
        'lienUtilisateur':'', 
        'date':'August  8, 2022'
    },
    {'image':'img/u10-8.webp', 
        'lienPost':'', 
        'tag':'COCKTAIL', 
        'leinTag':'', 
        'titre':'Rocket Fuel Is Fire Island\'s Signature Cocktail', 
        'lienTitre':'', 
        'sousTitre':'You can’t fully understand a cocktail (or a beach town) until you see it at its best—and worst.', 
        'auteur':'JOHN DEBARY', 
        'lienUtilisateur':'', 
        'date':'August  8, 2022'
    },
    {'image':'img/u10-9.webp', 
        'lienPost':'', 
        'tag':'TEQUILA', 
        'leinTag':'', 
        'titre':'9 Bevs & Bites to Toast the End of Summer', 
        'lienTitre':'', 
        'sousTitre':'Vibrant tequila cocktails + low-key recipes = our perfect warm-weather send-off.', 
        'auteur':' REBECCA FIRKSER', 
        'lienUtilisateur':'', 
        'date':'August  5, 2022'
    }
]

const contentSect1 = {
    'lienSect': '',
    'titreSect': 'Drinks52',
    'lienImg': '',
    'image': 'img/u9.webp',
    'lienTag': '',
    'tag': 'WINE',
    'lienTitre': '',
    'titre': 'This French Region Has a Wine for Every Wintry Pairing',
    'sousTitre': 'From Alsace, with love.',
    'entete': 'Latest',
    'decorImg': 'img/decor1.svg',
    'articles': [
      { 'lienTag': '', 'tag': 'HOLIDAY', 'titreLien': '', 'titre': 'Why All Your Holiday Cocktails Are Better Off With Bitters', 'sousTitre': 'Drinks made merrier with just a few dashes.' },
      { 'lienTag': '', 'tag': 'THANKSGIVING', 'titreLien': '', 'titre': 'This Cocktail Essential Is My Secret to the Best Thanksgiving Feast', 'sousTitre': 'From festive martinis to easy pie crusts, and beyond.' },
      { 'lienTag': '', 'tag': 'DRINKS', 'titreLien': '', 'titre': 'These Spiced Gin Cocktails Will Warm You From the Inside Out', 'sousTitre': 'For the holiday season, and beyond.' }
    ],
    
}

function FragDrink52() {
  return (
    <Fragment>
        <div className="fragDrink52">
            <div className="content--container">
                <div className="img--mobile-full">
                    <div className="tag--page-hero--img">
                        <div className="d1">
                            <div className="d1--1">
                                <img src="img/u8.webp" loading='lazy' alt="" className='image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="tag--page-section">
                <div className="content--section content--container drinks52--section">
                    <SFContentSect donnees={contentSect1} />
                </div>
            </section>

            <div className="ad--slot tag--page-ad--slot">
            </div>

            <section className="tag--page-section content--container">
                <TagPageSect donnees={tagPosts} />
            </section>
            
            <div className="clearfix"></div>
        </div>
        
    </Fragment>
  )
}

export default FragDrink52