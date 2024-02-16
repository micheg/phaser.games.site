/*global console*/
/* jshint esversion: 6 */
/* jshint browser: true */

const dft_source_msg = 'you are about to leave the site and are about to visit my code on github, feel free to leave a comment.';
const dft_store_msg = 'you are about to leave the site and you are about to be redirected to the google store, all the games are still free.';
const dft_play_msg = 'you are about to leave the site and see a live version of the game, remember that it may not work on all devices but only on desktop browsers.';
const dft_dev_msg = 'the game is still in development.';

const game_data = [
    {
        title: 'Spiker!',
        desc: 'Have fun, dodge spikes, collect stars, survive in this fast-paced super casual game.',
        subtitle: 'super casual game',
        game: 'spiker',
        cover: '/img/spiker.png',
        store: 'Play Store'
    },
    {
        title: 'Crazed Quadrupedes',
        desc: 'In this game the player must guide a caveman in gathering food, helping him avoid\nthe crazed quadrupeds.\nThe only control system is touch, which reverses the player\'s direction.',
        subtitle: '... in revision',
        game: 'crazed',
        cover: '/img/cq.png',
        store: 'Play Store'
    },
    {
        title: 'on the wrong side',
        desc: 'A game where a race car speeds by while cars from the opposite side enter the road, \nwith one finger you change lanes and play!',
        subtitle: '... in progress',
        game: 'side',
        cover: '/img/code.jpg',
        store: '...'
    },
    {
        title: 'Stairs and Cobra',
        desc: 'a platform game where the player must reach via ladders to the maximum level while\nsnakes are always lurking!',
        subtitle: '... in progress',
        game: 'cobra',
        cover: '/img/code.jpg',
        store: '...'
    },
    {
        title: 'Ladies in a Trouble',
        desc: 'The game is very simple consists in moving between some platforms,\ncollecting as many coins as possible, avoiding the enemies.\nFor this game i used tiled software and a dynamic loading of json and tiles.\nI experimented a lot, publishing the game on a particular platform, KaiOS.',
        subtitle: 'need to be ported?',
        game: 'ladies',
        cover: '/img/ladies.png',
        store: 'KaiOS Store'
    }
];

const data =
{
    spiker:
    {
        store: 'https://play.google.com/store/apps/details?id=com.michelangelog.cq',
        play: 'http://micheg.altervista.org/g/spiker',
        source: 'https://github.com/micheg/spiker',
        more: null,
        title: 'Spiker!',
        text:
        {
            store: dft_store_msg,
            play: dft_play_msg,
            source: dft_source_msg,
            more: '...'
        }
    },
    crazed:
    {
        store: 'https://play.google.com/store/apps/details?id=com.michelangelog.cq',
        play: 'http://michelangelo.altervista.org/cq25/',
        source: 'https://github.com/michegames/13kBC',
        more: null,
        title: 'Crazed Quadrupedes',
        text:
        {
            store: dft_store_msg,
            play: dft_play_msg,
            source: dft_source_msg,
            more: '...'
        }
    },
    side:
    {
        store: null,
        play: null,
        source: null,
        more: null,
        title: 'on the Wrong Side',
        text:
        {
            store: dft_dev_msg,
            play: dft_dev_msg,
            source: dft_dev_msg,
            more: '...'
        }
    },
    cobra:
    {
        store: null,
        play: null,
        source: null,
        more: null,
        title: 'Stairs and Cobra',
        text:
        {
            store: dft_dev_msg,
            play: dft_dev_msg,
            source: dft_dev_msg,
            more: '...'
        }
    },
    ladies:
    {
        store: 'https://kaios.app/apps/WaII-hf9mGdCdh5CUz3d',
        play: 'https://michelangelo.altervista.org/kaios/playable/liab/',
        source: 'https://github.com/micheg/ladies_in_trouble',
        more: null,
        title: 'Ladies in a Box',
        text:
        {
            store: dft_store_msg,
            play: dft_play_msg,
            source: dft_source_msg,
            more: '...'
        }
    },
    more:
    {
        store: null,
        play: null,
        source: null,
        more: null,
        title: 'more...',
        text:
        {
            store: null,
            play: null,
            source: null,
            more: 'evidently there is nothing to show yet'
        }
    }
};

export { data, game_data }