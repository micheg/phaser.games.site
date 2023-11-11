/*global console*/
/* jshint esversion: 6 */
/* jshint browser: true */

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import MicroModal from 'micromodal';

import $ from "cash-dom";

const data =
{
    crazed:
    {
        store: '#',
        online: '#',
        source: '#'
    },
    side:
    {
        store: '#',
        online: '#',
        source: '#'
    },
    cobra:
    {
        store: '#',
        online: '#',
        source: '#'
    },
    ladies:
    {
        store: '#',
        online: '#',
        source: '#'
    },
};

const Controller =
{
    init_ui: evt =>
    {
        MicroModal.init();
        $(document).on('click', 'button.js-store', evt =>
        {
            MicroModal.show('modal-1');
        });
    }
};

$(function () {
    $('html').addClass('dom-loaded');
    Controller.init_ui();
});
