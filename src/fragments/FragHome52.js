import React, {Fragment} from 'react'
import './styles/FragHome52.scss'
import loadable from '@loadable/component'

const SFContentSect = loadable(() => import('../fragments/sousFrag/SFContentSect'))
const TagPageSect = loadable(() => import('../composants/TagPageSect'))

const tagPosts = [
    {'image':'img/u11-1.webp', 
        'lienPost':'', 
        'tag':'WHAT TO BUY', 
        'leinTag':'', 
        'titre':'16 New Year\'s Eve Party Essentials From the Food52 Shop', 
        'lienTitre':'', 
        'sousTitre':'Add some extra shimmer to your celebrations with these editor-approved picks.', 
        'auteur':'  CAROLINE LANGE', 
        'lienUtilisateur':'', 
        'date':'December 16, 2022'
    },
    {'image':'img/u11-2.webp', 
        'lienPost':'', 
        'tag':'GIFTS', 
        'leinTag':'', 
        'titre':'24 Gifts Food People Will Devour Immediately', 
        'lienTitre':'', 
        'sousTitre':'So basically, everyone.', 
        'auteur':' JUSTINE LEE', 
        'lienUtilisateur':'', 
        'date':'December 13, 2022'
    },
    {'image':'img/u11-3.webp', 
        'lienPost':'', 
        'tag':'WHAT TO BUY', 
        'leinTag':'', 
        'titre':'12 Edible Gifts for the Food Person in Your Life', 
        'lienTitre':'', 
        'sousTitre':'Because sometimes the best gift is one you can eat.', 
        'auteur':' JULIA GÓMEZ KRAMER', 
        'lienUtilisateur':'', 
        'date':'December  9, 2022'
    },
    {'image':'img/u11-4.webp', 
        'lienPost':'', 
        'tag':'WHAT TO BUY', 
        'leinTag':'', 
        'titre':'I\'m Getting Rid of All My Dinnerware—Except for Blates', 
        'lienTitre':'', 
        'sousTitre':'Seriously.', 
        'auteur':' KELLY VAUGHAN', 
        'lienUtilisateur':'', 
        'date':'December  8, 2022'
    },
    {'image':'img/u11-5.webp', 
        'lienPost':'', 
        'tag':'THE SHOP', 
        'leinTag':'', 
        'titre':'24 Vibrant Kitchen Essentials', 
        'lienTitre':'', 
        'sousTitre':'From a brilliant glass cruet to a bright whistling tea kettle, our shop has you covered.', 
        'auteur':' JULIA GÓMEZ KRAMER', 
        'lienUtilisateur':'', 
        'date':'December  5, 2022'
    },
    {'image':'img/u11-6.webp', 
        'lienPost':'', 
        'tag':'WINTER', 
        'leinTag':'', 
        'titre':'Yes, a Space Heater Can Be Safe. Here’s How', 
        'lienTitre':'', 
        'sousTitre':'Get cozy—safely—with this expert advice.', 
        'auteur':' CAMRYN RABIDEAU', 
        'lienUtilisateur':'', 
        'date':'December  5, 2022'
    },
    {'image':'img/u11-7.webp', 
        'lienPost':'', 
        'tag':'CLEANING', 
        'leinTag':'', 
        'titre':'How to Clean the Bottom of a Fry Pan That’s…Seen Some Things', 
        'lienTitre':'', 
        'sousTitre':'They’ll be display-worthy again in no time.', 
        'auteur':' CAROLINE MULLEN', 
        'lienUtilisateur':'', 
        'date':'November 15, 2022'
    },
    {'image':'img/u11-8.webp', 
        'lienPost':'', 
        'tag':'CLEANING', 
        'leinTag':'', 
        'titre':'How to Clean Cookie Sheets (Goodbye Grime!)', 
        'lienTitre':'', 
        'sousTitre':'Bar Keeper\'s Friend is always your friend.', 
        'auteur':' CAROLINE MULLEN', 
        'lienUtilisateur':'', 
        'date':'November 14, 2022'
    },
    {'image':'img/u11-9.webp', 
        'lienPost':'', 
        'tag':'GIFTS', 
        'leinTag':'', 
        'titre':'9 Kitchen Must-Haves That Make Great Holiday Gifts', 
        'lienTitre':'', 
        'sousTitre':'Bonus: Each one of ‘em is $100 or less.', 
        'auteur':' ERIN ALEXANDER', 
        'lienUtilisateur':'', 
        'date':'November  8, 2022'
    },
    {'image':'img/u11-10.webp', 
        'lienPost':'', 
        'tag':'HOME HACKS', 
        'leinTag':'', 
        'titre':'How to Fix Drafty Windows Before Winter Weather Arrives', 
        'lienTitre':'', 
        'sousTitre':'If your energy bills are higher than usual, drafts might be partially to blame.', 
        'auteur':' CAMRYN RABIDEAU', 
        'lienUtilisateur':'', 
        'date':'November  8, 2022'
    }
]

const contentSect1 = {
    'lienSect': '',
    'titreSect': 'Home52',
    'lienImg': '',
    'image': '/img/u11.webp',
    'lienTag': '',
    'tag': 'ORGANIZING',
    'lienTitre': '',
    'titre': '11 Organizers So Clever You’ll Wonder How You Lived Without Them',
    'sousTitre': 'Did we say life-changing? We did.',
    'entete': 'Latest',
    'decorImg': '/img/decor1.svg',
    'articles': [
      { 'lienTag': '', 'tag': 'WHAT TO BUY', 'titreLien': '', 'titre': '11 Cocktail Glasses That Deserve Their Own Toast', 'sousTitre': 'Let\'s raise a glass.' },
      { 'lienTag': '', 'tag': 'WINE', 'titreLien': '', 'titre': 'The Single-Serve Wine That Helped Me Say Goodbye to Wasted Pours', 'sousTitre': 'Say so long to half-empty wine bottles.' },
      { 'lienTag': '', 'tag': 'GIFTS', 'titreLien': '', 'titre': '11 Kitchen & Home Gifts That’ll Arrive in Time for Christmas', 'sousTitre': 'They’ll never know you procrastinated.' }
    ],
    
}

function FragHome52() {
  return (
    <Fragment>
        <div className="fragHome">
            <div className="content--container">
                <div className="img--mobile-full"></div>
            </div>

            <section className="tag--page-section">
                <div className="content--section content--container home52--section">
                    <SFContentSect donnees={contentSect1} />
                </div>
            </section>

            <div className="ad--slot tag--page-ad--slot">

            </div>

            <section className="tag--page-section content--container">
                <TagPageSect donnees={tagPosts} />
            </section>
        </div>
    </Fragment>
  )
}

export default FragHome52