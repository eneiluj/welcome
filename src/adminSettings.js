/* jshint esversion: 6 */

/**
 * Nextcloud - welcome
 *
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2021
 */

import Vue from 'vue'
import './bootstrap'
import AdminSettings from './components/AdminSettings'

// eslint-disable-next-line
'use strict'

// eslint-disable-next-line
new Vue({
	el: '#welcome_prefs',
	render: h => h(AdminSettings),
})