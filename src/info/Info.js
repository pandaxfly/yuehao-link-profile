import self from "../img/self.jpg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of how to make this template work best for you! */

export let colors = ["rgb(188, 199, 205)", "rgb(188, 196, 210)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like. These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Yuehao",
    lastName: "Pan",
    initials: "何大山",
    description: "To the sailors in the SEA, appreciated that we meet.",
    quote: "I'm glad that you came, let's gab and keep connect!",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💼',
            id: 'linkedin',
            text: 'LinkedIn',
            tiny: 'https://tinyurl.com/4pxb9fjs',
            link: 'https://www.linkedin.com/in/yuehao-pan'
        },
        {
            emoji: '📕',
            id: 'xhs',
            text: "小红书",
            tiny: 'https://tinyurl.com/3jsyc7dy',
            link: 'https://www.xiaohongshu.com/user/profile/5d0a4df70000000011023a9a'
        },
        {
            emoji: '💬',
            id: 'whatsapp',
            text: 'WhatsApp',
            tiny: 'https://tinyurl.com/4k4rads5',
            link: 'https://api.whatsapp.com/send?phone=6590753719'
        },
        {
            emoji: '✉️',
            id: 'email',
            text: 'Email (yuehao.pan92@gmail.com)',
            tiny: 'https://tinyurl.com/bdhrw4ad',
            link: 'mailto:yuehao.pan92@gmail.com'
        },
        // {
        //     emoji: '🤳',
        //     id: 'instagram',
        //     text: 'Instagram',
        //     tiny: 'https://tinyurl.com/4ej9fyrc',
        //     link: 'https://www.instagram.com/pandaxfly'
        // }
    ],
    socials: [
        // {
        //     link: "mailto:yuehao.pan92@gmail.com",
        //     icon: 'fa fa-envelope-o',
        //     label: 'email'
        // },
        // {
        //     link: "https://api.whatsapp.com/send?phone=6590753719",
        //     icon: 'fa fa-whatsapp',
        //     label: 'whatsapp'
        // }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "Project 1",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
        //     //image: mock1
        // },
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}