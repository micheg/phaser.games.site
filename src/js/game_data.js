/*global console*/
/* jshint esversion: 6 */
/* jshint browser: true */

const dft_source_msg = 'you are about to leave the site and are about to visit my code on github, feel free to leave a comment.';
const dft_store_msg = 'you are about to leave the site and you are about to be redirected to the google store, all the games are still free.';
const dft_play_msg = 'you are about to leave the site and see a live version of the game, remember that it may not work on all devices but only on desktop browsers.';
const dft_dev_msg = 'the game is still in development.';

const data =
{
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

export default data;