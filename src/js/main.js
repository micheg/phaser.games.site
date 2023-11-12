/*global console*/
/* jshint esversion: 6 */
/* jshint browser: true */

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import MicroModal from 'micromodal';

import $ from "cash-dom";

import data from './game_data';

const actions = ['store', 'source', 'play', 'more'];

const Controller =
{
    last_link: null,
    init_ui: evt =>
    {
        // init modal and data for all actions
        MicroModal.init();
        for(let i=0; i<actions.length; i++)
        {
            const cur = actions[i];
            $(document).off('click', 'button.js-' + cur);
            $(document).on('click', 'button.js-' + cur, evt =>
            {
                const tgt = $(evt.target).attr('data-game');
                const game_data = data[tgt];
                $('#modal-1-title').text(game_data.title);
                $('#modal-1-content').text(game_data.text[cur]);
                Controller.last_link = game_data[cur];
                if(Controller.last_link === null) $('#continue').hide();
                if(Controller.last_link !== null) $('#continue').show();
                setTimeout(() =>
                {
                    MicroModal.show('modal-1');
                }, 100)
            });
        }
        // init continua callback
            $(document).off('click', '#continue');
            $(document).on('click', '#continue', evt =>
            {
                MicroModal.close('modal-1');
                if(Controller.last_link !== null) window.open(Controller.last_link, '_blank');
            });
    }
};

$(function ()
{
    $('html').addClass('dom-loaded');
    Controller.init_ui();
});
