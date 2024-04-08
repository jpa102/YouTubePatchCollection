// ==UserScript==
// @name         YouTube Patch Collection
// @version      2.1.01
// @description  Allows for changing of yt.config_ values (unofficial update)
// @author       Aubrey Pankow (aubyomori@gmail.com)
// @author       Taniko Yamamoto (kirasicecreamm@gmail.com)
// @author       John Patrick Adem (not an actual author, just placing my name here because i made some changes to this script and i forked it)
// @license      Unlicense
// @updateURL    https://raw.githubusercontent.com/jpa102/YouTubePatchCollection/main/YouTubePatchCollection.user.js
// @match        www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

// ======================================================================
// The comments are pure speculation, i'm just guessing them based on the variable names
// All are set to false by default, it's up to you

/*
    General settings (設定)
*/
let isWatchGrid = false; //                         it can be related to the grids
let disableOldDescription = false; //                bring back the old description from 2021+ layout
let enableChannelPageHeader = false; //             channel page header ??
let isModernSd = false; //                          the hell is this?
let isWatchCommentsPanelButton = false; //          adds a button to the comments ??
let isSmartimationBackground = false; //            the hell is smartimation? maybe it relates to the new animations
let isWebAnimatedActions = false; //                actions are animated
let enableWebModernCollectionsV2 = false; //        related to the modern resources throughout the website (indicated by v2 - version 2)
let isModernTabs = false; //                        modern tabs
let enableYoutab = false; //                        the new "You" tab that appears on the sidebar

let deprecateCSIinfo = false; //                    deprecate the "csi" info in channel page
let isClientRelease = false; //                     sets the flag if the client is in "release - public" or not (maybe "debug") ?
let isSidebarSwipeable = false; //                  set the sidebar if it can be swiped or not
let disableLegacyDesktopRemoteQueue = false; //     disable the legacy desktop remote queue
let enablePolymerResin = false; //                  enable the polymer resin (related to the layout?)
let userExperiment = false; //                      set this to true if you want to be a part of YouTube's "hidden" experiments (can be seen when you're signed out or in private sessions)
let isURLnotDisplayable = false; //                 idk what this is, but it can be related to the rendering of the URLs (maybe making it not clickable)
let ismodernSdKevlar = false; //                    the hell is this?
let isSystemIconsKevlar = false; //                 kevlar system icons (idk what the hell is "kevlar", but it can be found internally. commented out by default)
let commentsDelayTimer = 5000; //                   adds a delay to the comments ?? (5000 milliseconds by default)
let isTypographyUpdate = false; //                  related to the fonts being used throughout the website
let useWilIconsKevlar = false; //                   the hell is this? (commented out by default)
let disableLegacyMetadataUpdates = false; //        prevents the legacy metadata from getting any updates
let hideTeaserComments = false; //                  hide the teaser comments in the watch page ??
let compactViewCountRefreshMetadata = false; //     refresh compact view counts - metadata
let isModernWatchPanels = false; //                 modern watch panels - kevlar
let migrateRemainingAdBadges = false; //            migrate the remaining web ad badges to "innertube" (who likes ads?)
let enableDarkerDarkTheme = false; //               enable the "darker" dark theme
let isWebModernTypography = false; //               toggle the new modern typography throughout the website
let isSegmentedLikeDislikeButton = false; //        segmented like and dislike buttons
let isRoundedPlayer = false; //                     rounded large video player
let forcedInternalCountryCodeDebug = ""; //       forced debug internal country code (two letter string, example is en_US)

let systemIconsKevlar = false; //                   kevlar system icons
let unicodeEmojisAsSmallImages = false; //          render the unicode emojis as small images
let clientUnavailableVideoErrorUi = false; //       the hell is this?
let refreshOnThemeChange = false; //                refresh the page when the theme changes
let watchMetadataRefresh = false; //                refresh the metadata on watch page
let isWatchModernMetapanel = false; //              maybe related to metadata panels ??
let isAmsterdamPlaylists = false; //                the hell is this? themed playlists?
let isAnimatedLike = false; //                      animated like (when you press it, it shows an animation - only on watch page)
let isButtonRework = false; //                      reworked buttons throughout pages
let buttonReworkWithLive = false; //                reworked buttons on live
let isUiRefresh = false; //                         idk if it's supposed to be a "design refresh" or "refresh" the ui everytime it's loaded
let isModernAds = false; //                         web modern ads (who likes ads?)
let isModernButtons = false; //                     modern buttons (referencing the material you rounded design)
let isModernChips = false; //                       modern chips (basically little icons)
let isModernDialogs = false; //                     modern dialogs
let isModernPlaylists = false; //                   modern playlists
let isModernSubscribe = false; //                   modern subscribe
let roundedContainers = false; //                   rounded containers (like in the description at the watch page)
let roundedThumbnails = false; //                   rounded thumbnails
let webSearchbarStyle = "default"; //               searchbar style (string)
let webSheetsUiRefresh = false; //                  css ui refresh ??



/*
    Player settings (プレイヤーの設定)
*/
let webPlayerMoveAutonavToggle = "false"; //        auto navigation toggle in player ??
let webSettingsMenuIcons = "false"; //              i have no idea what is this
let roundedContainersPlayer = false; //             rounded containers (like in the description at the watch page)
let roundedThumbnailsPlayer = false; //             rounded thumbnails

// ======================================================================

// Attributes to remove from <html>
const ATTRS = [
	"system-icons",
	"typography",
	"typography-spacing"
];

// Regular config keys.
const CONFIGS = {
	BUTTON_REWORK: false
};

// Experiment flags.
const EXPFLAGS = {
	// imported from sapondanaisriwan/AdashimaaTube (Revert the new ui changes)
	kevlar_watch_grid: isWatchGrid,
	kevlar_watch_metadata_refresh_no_old_secondary_data: disableOldDescription,
	enable_channel_page_header_profile_section: enableChannelPageHeader,
	kevlar_modern_sd_v2: isModernSd,
	kevlar_watch_comments_panel_button: isWatchCommentsPanelButton,
	smartimation_background: isSmartimationBackground,
	web_animated_actions: isWebAnimatedActions,
	web_modern_collections_v2: enableWebModernCollectionsV2,
	web_modern_tabs: isModernTabs,
	web_enable_youtab: enableYoutab,

	// custom flags
	deprecate_csi_has_info: deprecateCSIinfo,
	desktop_client_release: isClientRelease,
	desktop_swipeable_guide: isSidebarSwipeable,
	disable_legacy_desktop_remote_queue: disableLegacyDesktopRemoteQueue,
	enable_polymer_resin: enablePolymerResin,
	is_part_of_any_user_engagement_experiment: userExperiment,
	kevlar_clear_non_displayable_url_params: isURLnotDisplayable,
	kevlar_modern_sd: ismodernSdKevlar,
	//kevlar_system_icons: isSystemIconsKevlar,
	kevlar_tuner_default_comments_delay: commentsDelayTimer,
	kevlar_typography_update: isTypographyUpdate,
	//kevlar_use_wil_icons: useWilIconsKevlar,
	kevlar_watch_disable_legacy_metadata_updates: disableLegacyMetadataUpdates,
	kevlar_watch_hide_comments_teaser: hideTeaserComments,
	kevlar_watch_metadata_refresh_compact_view_count: compactViewCountRefreshMetadata,
	kevlar_watch_modern_panels: isModernWatchPanels,
	migrate_remaining_web_ad_badges_to_innertube: migrateRemainingAdBadges,
	web_modern_typography: isWebModernTypography,
	web_segmented_like_dislike_button: isSegmentedLikeDislikeButton,
	web_watch_rounded_player_large: isRoundedPlayer,
	debug_forced_internalcountrycode: forcedInternalCountryCodeDebug,

	kevlar_system_icons: systemIconsKevlar,
	render_unicode_emojis_as_small_images: unicodeEmojisAsSmallImages,
	kevlar_unavailable_video_error_ui_client: clientUnavailableVideoErrorUi,
	kevlar_refresh_on_theme_change: refreshOnThemeChange,
	kevlar_watch_metadata_refresh: watchMetadataRefresh,
	kevlar_watch_modern_metapanel: isWatchModernMetapanel,
	web_amsterdam_playlists: isAmsterdamPlaylists,
	web_animated_like: isAnimatedLike,
	web_button_rework: isButtonRework,
	web_button_rework_with_live: buttonReworkWithLive,
	web_darker_dark_theme: enableDarkerDarkTheme,
	web_guide_ui_refresh: isUiRefresh,
	web_modern_ads: isModernAds,
	web_modern_buttons: isModernButtons,
	web_modern_chips: isModernChips,
	web_modern_dialogs: isModernDialogs,
	web_modern_playlists: isModernPlaylists,
	web_modern_subscribe: isModernSubscribe,
	web_rounded_containers: roundedContainers,
	web_rounded_thumbnails: roundedThumbnails,
	web_searchbar_style: webSearchbarStyle,
	web_sheets_ui_refresh: webSheetsUiRefresh
};

// Player flags
// !!! USE STRINGS FOR VALUES !!!
// For example: "true" instead of true
const PLYRFLAGS = {
	web_player_move_autonav_toggle: webPlayerMoveAutonavToggle,
	web_settings_menu_icons: webSettingsMenuIcons,
	web_rounded_containers: roundedContainersPlayer,
	web_rounded_thumbnails: roundedThumbnailsPlayer
};

class YTP {
	static observer = new MutationObserver(this.onNewScript);

	static _config = {};

	static isObject(item) {
		return (item && typeof item === "object" && !Array.isArray(item));
	}

	static mergeDeep(target, ...sources) {
		if (!sources.length) return target;
			const source = sources.shift();

		if (this.isObject(target) && this.isObject(source)) {
			for (const key in source) {
				if (this.isObject(source[key])) {
					if (!target[key]) Object.assign(target, { [key]: {} });
						this.mergeDeep(target[key], source[key]);
					} else {
						Object.assign(target, { [key]: source[key] });
					}
				}
			}

		return this.mergeDeep(target, ...sources);
	}


	static onNewScript(mutations) {
		for (var mut of mutations) {
			for (var node of mut.addedNodes) {
				YTP.bruteforce();
			}
		}
	}

	static start() {
		this.observer.observe(document, {childList: true, subtree: true});
	}

	static stop() {
		this.observer.disconnect();
	}

	static bruteforce() {
		if (!window.yt) return;
		if (!window.yt.config_) return;

		this.mergeDeep(window.yt.config_, this._config);
	}

	static setCfg(name, value) {
		this._config[name] = value;
	}

	static setCfgMulti(configs) {
		this.mergeDeep(this._config, configs);
	}

	static setExp(name, value) {
		if (!("EXPERIMENT_FLAGS" in this._config)) this._config.EXPERIMENT_FLAGS = {};

		this._config.EXPERIMENT_FLAGS[name] = value;
	}

	static setExpMulti(exps) {
		if (!("EXPERIMENT_FLAGS" in this._config)) this._config.EXPERIMENT_FLAGS = {};

		this.mergeDeep(this._config.EXPERIMENT_FLAGS, exps);
	}

	static decodePlyrFlags(flags) {
		var obj = {},
		dflags = flags.split("&");

		for (var i = 0; i < dflags.length; i++) {
			var dflag = dflags[i].split("=");
			obj[dflag[0]] = dflag[1];
		}

		return obj;
	}

	static encodePlyrFlags(flags) {
		var keys = Object.keys(flags),
		response = "";

		for (var i = 0; i < keys.length; i++) {
			if (i > 0) {
				response += "&";
			}
			response += keys[i] + "=" + flags[keys[i]];
		}

		return response;
	}

	static setPlyrFlags(flags) {
		if (!window.yt) return;
		if (!window.yt.config_) return;
		if (!window.yt.config_.WEB_PLAYER_CONTEXT_CONFIGS) return;
		var conCfgs = window.yt.config_.WEB_PLAYER_CONTEXT_CONFIGS;
		if (!("WEB_PLAYER_CONTEXT_CONFIGS" in this._config)) this._config.WEB_PLAYER_CONTEXT_CONFIGS = {};

		for (var cfg in conCfgs) {
			var dflags = this.decodePlyrFlags(conCfgs[cfg].serializedExperimentFlags);
			this.mergeDeep(dflags, flags);
			this._config.WEB_PLAYER_CONTEXT_CONFIGS[cfg] = {
				serializedExperimentFlags: this.encodePlyrFlags(dflags)
			}
		}
	}
}

window.addEventListener("yt-page-data-updated", function tmp() {
	YTP.stop();
	for (i = 0; i < ATTRS.length; i++) {
		document.getElementsByTagName("html")[0].removeAttribute(ATTRS[i]);
	}
	window.removeEventListener("yt-page-date-updated", tmp);
});

YTP.start();

YTP.setCfgMulti(CONFIGS);
YTP.setExpMulti(EXPFLAGS);
YTP.setPlyrFlags(PLYRFLAGS);
