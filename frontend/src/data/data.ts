import listing1 from '../assets/images/listing/1.jpg'
import listing2 from '../assets/images/listing/2.jpg'
import listing3 from '../assets/images/listing/3.jpg'
import listing4 from '../assets/images/listing/4.jpg'
import listing5 from '../assets/images/listing/5.jpg'
import listing6 from '../assets/images/listing/6.jpg'
import listing7 from '../assets/images/listing/7.jpg'
import listing8 from '../assets/images/listing/8.jpg'
import listing9 from '../assets/images/listing/9.jpg'
import listing10 from '../assets/images/listing/10.jpg'
import listing11 from '../assets/images/listing/11.jpg'
import listing12 from '../assets/images/listing/12.jpg'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'
import client6 from '../assets/images/client/06.jpg'
import client7 from '../assets/images/client/07.jpg'

import blog1 from '../assets/images/blog/1.jpg'
import blog2 from '../assets/images/blog/2.jpg'
import blog3 from '../assets/images/blog/3.jpg'
import blog4 from '../assets/images/blog/4.jpg'
import blog5 from '../assets/images/blog/5.jpg'
import blog6 from '../assets/images/blog/6.jpg'
import blog7 from '../assets/images/blog/7.jpg'
import blog8 from '../assets/images/blog/8.jpg'
import blog9 from '../assets/images/blog/9.jpg'

import payment1 from '../assets/images/payments/visa.jpg'
import payment2 from '../assets/images/payments/american-express.jpg'
import payment3 from '../assets/images/payments/discover.jpg'
import payment4 from '../assets/images/payments/mastercard.jpg'

import {FiShoppingCart,FiDribbble, FiLinkedin,FiFacebook,FiInstagram,FiTwitter,FiMail,FiClock,FiActivity, FiUsers, FiGlobe,FiDollarSign,FiYoutube,FiHelpCircle,FiBookmark,FiSettings,FiGithub,FiGitlab} from "react-icons/fi"

export const topDestination = [
    {
        image:listing1,
        place:'France',
        hotels:'International tours'
    },
    {
        image:listing2,
        place:'United Kingdom',
        hotels:'International tours'
    },
    {
        image:listing3,
        place:'Dubai, UAE',
        hotels:'Holiday packages'
    },
    {
        image:listing4,
        place:'Morocco',
        hotels:'Group tours'
    },
    {
        image:listing5,
        place:'South Africa',
        hotels:'Group tours'
    },
    {
        image:listing6,
        place:'Kenya',
        hotels:'Educational tours'
    },
    {
        image:listing7,
        place:'Egypt',
        hotels:'Educational tours'
    },
    {
        image:listing8,
        place:'Ghana',
        hotels:'Regional tours'
    },
]

export const packages = [
    {
        id:1,
        image:listing1,
        tagText:'Popular',
        place:'Dubai, UAE',
        title:'Dubai City & Leisure Escape',
        amount:'Request quote'
    },
    {
        id:2,
        image:listing2,
        place:'United Kingdom & France',
        title:'Education Through Travel',
        amount:'Request quote'
    },
    {
        id:3,
        image:listing3,
        place:'South Africa',
        title:'Culture, City & Safari',
        amount:'Request quote'
    },
    {
        id:4,
        image:listing4,
        place:'Ghana',
        title:'West African Heritage Tour',
        amount:'Request quote'
    },
    {
        id:5,
        image:listing5,
        place:'Kenya',
        title:'Kenya Group Safari',
        amount:'Request quote'
    },
    {
        id:6,
        image:listing6,
        tagText:'International',
        place:'Egypt',
        title:'Cairo & Nile Discovery',
        amount:'Request quote'
    },
    {
        id:7,
        image:listing7,
        place:'Singapore',
        title:'Orca Camp Kayaking Trip',
        amount:'$ 58 / Day'
    },
    {
        id:8,
        image:listing8,
        tagText:'20% Off',
        place:'Thailand',
        title:'Caño Cristales River Trip',
        amount:'$ 58 / Day'
    },
    {
        id:9,
        image:listing9,
        place:'Pattaya',
        title:'Osa Peninsula to Dominical',
        amount:'$ 58 / Day'
    },
    {
        id:10,
        image:listing10,
        place:'Lakshadweep',
        title:'History of The Emporer',
        amount:'$ 58 / Day'
    },
    {
        id:11,
        image:listing11,
        place:'Paris',
        title:'Wildness of Paris',
        amount:'$ 58 / Day'
    },
    {
        id:12,
        image:listing12,
        place:'London',
        title:'The Hills and Mountains',
        amount:'$ 58 / Day'
    },
]

export const ClientData = [
    {
        image:client1,
        desc:'“Every detail felt considered. The hotels were beautiful, the transfers were seamless, and we still had enough free time to explore on our own.”',
        name:'Maya & Daniel',
        possition:'Honeymoon in Greece'
    },
    {
        image:client2,
        desc:'“Planning a family trip for six felt overwhelming until Skyways stepped in. The itinerary worked for every age and the support was excellent.”',
        name:'Christa Smith',
        possition:'Family holiday in Italy'
    },
    {
        image:client3,
        desc:'“Our local guides made Morocco unforgettable. We experienced places we would never have found ourselves and felt looked after throughout.”',
        name:'Jemina Cole',
        possition:'Private tour of Morocco'
    },
    {
        image:client4,
        desc:'“The whole journey was beautifully paced. Skyways listened to what we wanted and built a trip that genuinely felt like ours.”',
        name:'Samuel Vodka',
        possition:'Anniversary trip to Bali'
    },
    {
        image:client5,
        desc:'“Fast communication, thoughtful recommendations, and no hidden surprises. I would absolutely book my next solo adventure with them.”',
        name:'Cristina Murphy',
        possition:'Solo traveller in Portugal'
    },
    {
        image:client6,
        desc:'“From airport pickup to our final dinner, everything ran perfectly. It was the most relaxed group trip we have ever taken.”',
        name:'Michael Chen',
        possition:'Friends’ trip to Thailand'
    },
]

export const blogData = [
    {
        id:1,
        image:blog1,
        date:'13 Sep 2025',
        title:'A first-timer’s guide to slow travel in Barcelona',
        desc:'Where to stay, what to see, and how to experience the city beyond the usual checklist.',
        tag:'City Guide'
    },
    {
        id:2,
        image:blog2,
        date:'29 Nov 2025',
        title:'The perfect two-week New Zealand road trip',
        desc:'A scenic route through the South Island’s mountains, lakes, vineyards, and coastal towns.',
        tag:'Road Trips'
    },
    {
        id:3,
        image:blog3,
        date:'18 Dec 2025',
        title:'How to spend four unforgettable days in Rome',
        desc:'A balanced itinerary of ancient icons, neighbourhood gems, and exceptional Italian food.',
        tag:'Itineraries'
    },
    {
        id:4,
        image:blog4,
        date:'13 Mar 2025',
        title:'What to know before your first solo adventure',
        desc:'Practical ways to feel prepared, stay safe, meet people, and enjoy travelling at your own pace.',
        tag:'Travel Tips'
    },
    {
        id:5,
        image:blog5,
        date:'5 May 2025',
        title:'Seven ways to make a family holiday easier',
        desc:'From choosing the right stay to building downtime into your itinerary, small decisions matter.',
        tag:'Family Travel'
    },
    {
        id:6,
        image:blog6,
        date:'19 Jun 2025',
        title:'Three beautiful day trips from San Francisco',
        desc:'Redwood forests, coastal drives, and wine country experiences within easy reach of the city.',
        tag:'Inspiration'
    },
    {
        id:7,
        image:blog7,
        date:'20 Jun 2025',
        title:'When is the best time to visit the Maldives?',
        desc:'A simple month-by-month guide to weather, crowds, marine life, and seasonal value.',
        tag:'Maldives'
    },
    {
        id:8,
        image:blog8,
        date:'31 Aug 2025',
        title:'Australia beyond the cities: six wild escapes',
        desc:'Rainforests, reefs, desert landscapes, and remote lodges for travellers craving more nature.',
        tag:'Nature'
    },
    {
        id:9,
        image:blog9,
        date:'1 Sep 2025',
        title:'Inside Iceland’s extraordinary winter ice caves',
        desc:'How the experience works, what to wear, and why travelling with an expert guide matters.',
        tag:'Adventure'
    },
]

export const footerSocial = [
    {
        icon:FiShoppingCart,
        link:'https://1.envato.market/travosy-react'
    },
    {
        icon:FiDribbble,
        link:'https://dribbble.com/shreethemes'
    },
    {
        icon:FiLinkedin,
        link:'http://linkedin.com/company/shreethemes'
    },
    {
        icon:FiFacebook,
        link:'https://www.facebook.com/shreethemes'
    },
    {
        icon:FiInstagram,
        link:'https://www.instagram.com/shreethemes'
    },
    {
        icon:FiTwitter,
        link:'https://twitter.com/shreethemes'
    },
    {
        icon:FiMail,
        link:'mailto:support@shreethemes.in'
    },
]

export const footerCompany = [
    {
        name:'Home',
        link:'/'
    },
    {
        name:'About Us',
        link:'/about-us'
    },
    {
        name:'Services',
        link:'/services'
    },
    {
        name:'Blog',
        link:'/blog'
    },
    {
        name:'Contact Us',
        link:'/contact-us'
    },
]

export const placeImage = [
    listing1,listing2,listing3,listing4,listing5,listing6,listing7,listing8,listing9,listing10,listing11,listing2,listing3,listing4
]

export const faqData = [
    {
        id:1,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:2,
        title:'Do I need a designer to use Travosy ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:3,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:4,
        title:'What happens when I receive an order ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:5,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]

export const tourDetailAbout = [
    {
        icon: FiClock,
        name:'Duration',
        title:'2 day'
    },
    {
        icon: FiActivity,
        name:'Type',
        title:'Adventure'
    },
    {
        icon: FiUsers,
        name:'Group Size:',
        title:'50 Peoples'
    },
    {
        icon: FiGlobe,
        name:'Languages',
        title:'English'
    },
    {
        icon: FiDollarSign,
        name:'$50 / Person',
        title:'1 Day'
    },
]

export const teamData = [
    {
        image:client4,
        name:'Jack John',
        possition:'Agent'
    },
    {
        image:client5,
        name:'Krista John',
        possition:'Agent'
    },
    {
        image:client6,
        name:'Roger Jackson',
        possition:'Agent'
    },
    {
        image:client7,
        name:'Johnny English',
        possition:'Agent'
    },
]

export const paymentData = [
    {
        image:payment1,
        title:'Visa ending in 4578',
        date:'Expires in 13/03/2027'
    },
    {
        image:payment2,
        title:'American Express ending in 4578',
        date:'Expires in 05/05/2027'
    },
    {
        image:payment3,
        title:'Discover ending in 4578',
        date:'Expires in 19/06/2027'
    },
    {
        image:payment4,
        title:'Master Card ending in 4578',
        date:'Expires in 20/06/2027'
    },
]

export const userSocialData = [
    {
        icon:FiTwitter,
        name:'Twitter',
        placeHolder:'Twitter Profile Name',
        desc:'Add your Twitter username (e.g. jesus).'
    },
    {
        icon:FiFacebook,
        name:'Facebook',
        placeHolder:'Facebook Profile Name',
        desc:'Add your Facebook username (e.g. jesus).'
    },
    {
        icon:FiInstagram,
        name:'Instagram',
        placeHolder:'Instagram Profile Name',
        desc:'Add your Instagram username (e.g. jesus).'
    },
    {
        icon:FiLinkedin,
        name:'Linkedin',
        placeHolder:'Linkedin Profile Name',
        desc:'Add your Linkedin username (e.g. jesus).'
    },
    {
        icon:FiYoutube,
        name:'Youtube',
        placeHolder:'Youtube url',
        desc:'Add your Youtube url.'
    },
]

export const helpAbout = [
    {
        icon:FiHelpCircle,
        title:'FAQs',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        link:'/helpcenter-faqs'
    },
    {
        icon:FiBookmark,
        title:'Guides / Support',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        link:'/helpcenter-guides'
    },
    {
        icon:FiSettings,
        title:'Support Request',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        link:'/helpcenter-support'
    },
]

export const guidesData = [
    {
        title:'Getting started',
        subData:[
            'Deciding to purchase','List your space','Landing an experience or adventure','Top uses questions'
        ]
    },
    {
        title:'Your calendar',
        subData:[
            'Pricing & availability','Booking settings','Responding to enquiries & requests','Snoozing or deactivating your listing'
        ]
    },
    {
        title:'Your listings',
        subData:[
            'Updating your listing','Neighbourhoods','Listing photos & photography','Travosy Plus','API-connected software'
        ]
    },
    {
        title:'How payouts work',
        subData:[
            'Getting paid','Adding payout info','Your payout status','Donations','Taxes'
        ]
    },
    {
        title:'Your reservations',
        subData:[
            'Travosy safely','Travosy Experiences and Adventures','Changing a reservation','Cancelling a reservation','Long-term reservations'
        ]
    },
    {
        title:'Reservation help',
        subData:[
            'Help with a reservation or guest','Guest cancellations',
        ]
    },
    {
        title:'Your account',
        subData:[
            'Your profile','Account security','Identification & verifications','Reviews','Superhost status'
        ]
    },
]

export const restrictions = [
    'Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand','Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'
]

export const blogSocial = [
    FiFacebook,FiInstagram,FiTwitter,FiLinkedin,FiGithub,FiYoutube,FiGitlab
]
