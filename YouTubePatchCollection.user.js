// ==UserScript==
// @name         YouTube Patch Collection
// @version      2.1.2
// @description  Allows for changing of yt.config_ values (unofficial update)
// @author       Aubrey Pankow (aubyomori@gmail.com)
// @author       Taniko Yamamoto (kirasicecreamm@gmail.com)
// @author       John Patrick Adem (not an actual author, just placing my name here because i made some changes to this script and i forked it)
// @license      Unlicense
// @downloadURL  https://raw.githubusercontent.com/jpa102/YouTubePatchCollection/main/YouTubePatchCollection.user.js
// @updateURL    https://raw.githubusercontent.com/jpa102/YouTubePatchCollection/main/YouTubePatchCollection.user.js
// @match        www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

// ======================================================================

/*
	the comments are pure speculation, i'm just guessing them based on the variable names and what they do
	these are set to their default values found in yt.config_.EXPERIMENT_FLAGS, it's up to you to set it to true or false

	note: some flags here may have been removed completely so they may not work anymore
	legend: comments marked with * are removed in the EXPERIMENT_FLAGS list as of 7/13/25 (will be removed by myself at some time)

	the format of the variables are like this:
		* if i (or someone) can fully explain what it does, i will name the variable in a clear way
		* if i can't (or even someone) can not fully explain what it does, i will just follow the key name
*/

/*
	General settings (全般の設定)
*/
let disableOldDescription = true; //                                          disable the old description from 2021+ layout
let enableChannelPageHeader = false; //                                       * channel page header ??
let enableWebModernCollectionsV2 = true; //                                   related to the modern resources throughout the website (indicated by v2 - version 2)
let enableYoutab = true; //                                                   the new "You" tab that appears on the sidebar
let isModernSd = true; //                                                     idk what is this at the moment...
let isModernTabs = true; //                                                   modern tabs
let isSmartimationBackground = true; //                                       the hell is smartimation? maybe it relates to the new animations
let isWatchCommentsPanelButton = false; //                                    * adds a button to the comments ??
let isWatchGrid = false; //                                                   * the watch page layout, setting it to true also shifts the comment section to the right
let isWebAnimatedActions = true; //                                           actions are animated (web)

let commentsDelayTimer = 1000; //                                             adds a delay to the comments ?? (5000 milliseconds by default)
let compactViewCountRefreshMetadata = true; //                                refresh compact view counts - metadata
let deprecateCSIinfo = true; //                                               deprecate the "csi" info in channel page
let desktopSparklesLightCTAbutton = false; //                                 idk what is this at the moment...
let disableFrostedGlassEffectOnShorts = false; //                             disable the frosted glass effect on shorts page
let disableLegacyDesktopRemoteQueue = true; //                                disable the legacy desktop remote queue
let disableLegacyMetadataUpdates = false; //                                  * prevents the legacy metadata from getting any updates
let enableBiggerThumbsInDesktopSearch = true; //                              idk, bigger thumb icons in search results?
let enableBiggerThumbsInDesktopSearchSquare = true; //                        idk what is this at the moment...
let enableCairoRefresh = true; //                                             * enable the "cairo" redesign
let enableCairoRefresh_ringo2 = true; //                                      enable the "cairo" redesign (ringo 2)
let enableCairoRefresh_signatureMoments = true; //                            * enable the "cairo" redesign (signature moments?)
let enableDarkerDarkTheme = true; //                                          enable the "darker" dark theme
let enableDarkerDarkTheme_deprecate = true; //                                deprecate the "darker" dark theme (this doesn't make sense)
let enableDarkerDarkTheme_liveChat = true; //                                 enable "darker" dark theme for live chats
let enableDMAPostEnforcement = false; //                                      idk what is this at the moment...
let enableDropdownFix = true; //                                              * enable the dropdown fix
let enableFullyReactiveBadgeShape = true; //                                  idk what is this at the moment...
let enableGuideRefresh = true; //                                             utilizes the new "refreshed" sidebar look
let enableHlpClientIcon = true; //                                            idk what is this at the moment...
let enableJsFixes_Kevlar = true; //                                           enable the js fixes for kevlar
let enableKetoBatchIcons = false; //                                          idk what is this at the moment...
let enableMastheadQuartilePingFix = true; //                                  idk, fix the ping issue in the masthead?
let enableModernChannelPageProfileSection = false; //                         * idk what is this at the moment...
let enablePolymerResin = true; //                                             enable the polymer resin (connected to the layout?)
let enablePolymerResinMigration = true; //                                    idk what is this at the moment...
let enableScrollingFix = true; //                                             * enable the fix for scrolling
let enableShortsReVampedMetadataLayout = true; //                             enable the new revamped shorts player layout design, previously seen on one of my google accounts (A/B testing?)
let enableUpArrow = true; //                                                  enables the up arrow (i don't know where is its intended purpose)
let enableWizIconShape = true; //                                             enables the "wiz icon" shape
let enableYoodle = true; //                                                   enable the "yoodle" feature (youtube doodles?)
let forcedInternalCountryCodeDebug = ""; //                                   forced debug internal country code (two letter string, example is en_US)
let guideBusinessInfoInCountriesList = ['KR']; //                             the list of countries with business info
let guideLegalFooterEnabledInCountriesList = ['NL', 'ES']; //                 the list of countries with legal footer enabled
let hideTeaserComments = true; //                                             hide the teaser comments in the watch page ??
let isClientRelease = true; //                                                sets the flag if the client is in "release - public" or not (maybe "debug") ?
let isKeyboardButtonFocus = true; //                                          make the buttons have focus (tab navigation)
let ismodernSdKevlar = true; //                                               the hell is this?
let isModernWatchPanels = true; //                                            modern watch panels - kevlar
let isLargeRoundedPlayer = true; //                                           large rounded video player
let isLargerThreeDotTap = true; //                                            make the three dots button larger on tapping
let isSegmentedLikeDislikeButton = true; //                                   segmented like and dislike buttons
let isSidebarSwipeable = true; //                                             * set the sidebar if it can be swiped or not
let isSystemIconsKevlar = true; //                                            kevlar system icons (idk what the hell is "kevlar", but it can be found internally
let isTabGesture = false; //                                                  * sets the tab gesture
let isURLnotDisplayable = true; //                                            idk what this is, but it can be related to the rendering of the URLs (maybe making it not clickable)
let isWebModernTypography = true; //                                          toggle the new modern typography throughout the website
let isTypographyUpdate = true; //                                             related to the fonts being used throughout the website
let migrateRemainingAdBadges = true; //                                       migrate the remaining web ad badges to "innertube" (who likes ads?)
let refreshWatchMetadataOnClickableDescription = true; //                     refresh the metadata stuff in the clickable description
let userExperiment = true; //                                                 set this to false if you don't want to be a part of YouTube's "hidden" experiments (can be mostly seen when you're signed out or in private sessions)
let useNewHistoryManager = true; //                                           use the new history manager (desktop)
let useVimioBehavior = true; //                                               apparently, setting this to false disables the loading of profile pictures at the sidebar
let useWilIconsKevlar = true; //                                              if set to false, it doesn't render the icons inside the buttons
let useYtdPlayer = true; //                                                   use the ytd player
let varYoutubeSans = false; //                                                * set the youtube sans font in a variable

let buttonReworkWithLive = true; //                                           reworked buttons on live. setting it to false brings back the old style buttons, noticeable in youtube shorts
let clientUnavailableVideoErrorUi = false; //                                 * the hell is this?
let isWatchModernMetapanel = true; //                                         maybe related to metadata panels ??
let isAmsterdamPlaylists = false; //                                          * the hell is this? themed playlists?
let isAnimatedLike = true; //                                                 animated like (when you press it, it shows an animation - only on watch page)
let isButtonRework = true; //                                                 reworked buttons throughout pages
let isModernAds = true; //                                                    web modern ads (who likes ads?)
let isModernButtons = true; //                                                modern buttons (referencing the material you rounded design)
let isModernButtonsSurvey_bl = false; //                                      idk what is this at the moment...
let isModernChips = true; //                                                  modern chips (basically little icons)
let isModernDialogs = true; //                                                modern dialogs
let isModernPlaylists = true; //                                              modern playlists
let isModernSubscribe = true; //                                              * modern subscribe
let isUiRefresh = true; //                                                    idk if it's supposed to be a "design refresh" or "refresh" the ui everytime it's loaded
let refreshOnThemeChange = false; //                                          * refresh the page when the theme changes
let roundedContainers = true; //                                              * rounded containers (like in the description at the watch page)
let roundedThumbnails = true; //                                              rounded thumbnails
let systemIconsKevlar = false; //                                             kevlar system icons
let unicodeEmojisAsSmallImages = false; //                                    * render the unicode emojis as small images
let useColorPalettesFromModernCollectionsV2 = false; //                       
let watchMetadataRefresh = true; //                                           refresh the metadata on watch page
let webSearchbarStyle = "default"; //                                         searchbar style (string)
let webSheetsUiRefresh = true; //                                             css ui refresh ??



/*
	Player settings (プレイヤーの設定)

	as noted:

		Player flags
		!!! USE STRINGS FOR VALUES !!!
		For example: "true" instead of true
*/
let webPlayerMoveAutonavToggle = "false"; //                                  auto navigation toggle in player ??
let webSettingsMenuIcons = "false"; //                                        i have no idea what is this
let roundedContainersPlayer = false; //                                       rounded containers (like in the description at the watch page)
let roundedThumbnailsPlayer = false; //                                       rounded thumbnails

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
	debug_forced_internalcountrycode: forcedInternalCountryCodeDebug,
	deprecate_csi_has_info: deprecateCSIinfo,
	desktop_client_release: isClientRelease,
	desktop_sparkles_light_cta_button: desktopSparklesLightCTAbutton,
	desktop_swipeable_guide: isSidebarSwipeable,
	desktop_use_new_history_manager: useNewHistoryManager,
	disable_frosted_glass_on_shorts: disableFrostedGlassEffectOnShorts,
	disable_legacy_desktop_remote_queue: disableLegacyDesktopRemoteQueue,
	enable_cairo_refresh_ringo2_web: enableCairoRefresh_ringo2,
	enable_cairo_refresh_signature_moments_web: enableCairoRefresh_signatureMoments,
	enable_cairo_refresh_web: enableCairoRefresh,
	enable_channel_page_modern_profile_section: enableModernChannelPageProfileSection,
	enable_desktop_search_bigger_thumbs: enableBiggerThumbsInDesktopSearch,
	enable_desktop_search_bigger_thumbs_square: enableBiggerThumbsInDesktopSearchSquare,
	enable_dma_post_enforcement: enableDMAPostEnforcement,
	enable_fully_reactive_badge_shape: enableFullyReactiveBadgeShape,
	enable_hlp_client_icon_pick: enableHlpClientIcon,
	enable_masthead_quartile_ping_fix: enableMastheadQuartilePingFix,
	enable_polymer_resin: enablePolymerResin,
	enable_polymer_resin_migration: enablePolymerResinMigration,
	enable_scrolling_fix: enableScrollingFix,
	enable_yoodle: enableYoodle,
	guide_business_info_countries: guideBusinessInfoInCountriesList,
	guide_legal_footer_enabled_countries: guideLegalFooterEnabledInCountriesList,
	is_part_of_any_user_engagement_experiment: userExperiment,
	kevlar_clear_non_displayable_url_params: isURLnotDisplayable,
	kevlar_dropdown_fix: enableDropdownFix,
	kevlar_enable_up_arrow: enableUpArrow,
	kevlar_enable_wiz_icon_shape: enableWizIconShape,
	kevlar_guide_refresh: enableGuideRefresh,
	kevlar_js_fixes: enableJsFixes_Kevlar,
	kevlar_keyboard_button_focus: isKeyboardButtonFocus,
	kevlar_larger_three_dot_tap: isLargerThreeDotTap,
	kevlar_modern_sd: ismodernSdKevlar,
	kevlar_system_icons: isSystemIconsKevlar,
	kevlar_tabs_gesture: isTabGesture,
	kevlar_tuner_default_comments_delay: commentsDelayTimer,
	kevlar_typography_update: isTypographyUpdate,
	kevlar_use_vimio_behavior: useVimioBehavior,
	kevlar_use_wil_icons: useWilIconsKevlar,
	kevlar_use_ytd_player: useYtdPlayer,
	kevlar_variable_youtube_sans: varYoutubeSans,
	kevlar_watch_disable_legacy_metadata_updates: disableLegacyMetadataUpdates,
	kevlar_watch_hide_comments_teaser: hideTeaserComments,
	kevlar_watch_metadata_refresh_clickable_description: refreshWatchMetadataOnClickableDescription,
	kevlar_watch_metadata_refresh_compact_view_count: compactViewCountRefreshMetadata,
	kevlar_watch_modern_panels: isModernWatchPanels,
	migrate_remaining_web_ad_badges_to_innertube: migrateRemainingAdBadges,
	mweb_enable_keto_batch_icons: enableKetoBatchIcons,
	web_enable_flexible_overlay: enableShortsReVampedMetadataLayout,
	web_modern_typography: isWebModernTypography,
	web_segmented_like_dislike_button: isSegmentedLikeDislikeButton,
	web_watch_rounded_player_large: isLargeRoundedPlayer,
	// new
	use_color_palettes_modern_collections_v2: useColorPalettesFromModernCollectionsV2,
	web_animated_actions: isWebAnimatedActions,
	web_animated_actions_v2: isWebAnimatedActionsV2,
	web_animated_like_lazy_load: isAnimatedLikeLazyLoading,
	web_animated_rolling_character_update: enableRollingCharactersUpdate,
	web_avatar_shape_inline_icon: avatarShapeInlineIcon,
	web_bookmark_playlist_save_icon: isSavePlaylistIconBookmark,
	web_cairo_modern_miniplayer: cairoModernMiniplayer,
	web_cairo_modern_miniplayer_infobar: false,
	web_cairo_modern_miniplayer_old_sizing: false,
	web_cairo_modern_miniplayer_transitions: false,
	web_cinematic_light_theme: false,
	web_darker_dark_theme_deprecate: false,
	web_darker_dark_theme_live_chat: false,
	web_defer_shorts_ui: false,
	web_defer_shorts_ui_phase2: false,
	web_disable_vertical_scroll_chips: false,
	web_ep_restyling: false, // new
	web_filled_subscribed_button: false,
	web_fix_fine_scrubbing_false_play: false,
	web_fix_segmented_like_dislike_undefined: true,
	web_move_autoplay_video_under_chip: false,
	web_shorts_badge_migration: false,
	web_shorts_deflate_inactive_slides_aggressive: false,
	web_shorts_scrubber_bar: false,
	web_shorts_scrubber_bar_counterfactual: false,
	web_shorts_scrubber_bar_skip_listeners: false,
	web_shorts_shelf_on_search: false,
	web_shorts_skip_loading_same_index: false,
	web_shorts_small_screen_watch_while: false,
	web_shorts_suggested_action_no_bvm: false,
	web_shorts_surveys: false,
	web_snackbar_ui_refresh: false, // new
	web_use_updated_icon_for_oac_badge: false, // new
	web_yt_searchbox: false,

	kevlar_system_icons: systemIconsKevlar,
	render_unicode_emojis_as_small_images: unicodeEmojisAsSmallImages,
	kevlar_unavailable_video_error_ui_client: clientUnavailableVideoErrorUi,
	kevlar_refresh_on_theme_change: refreshOnThemeChange,
	kevlar_watch_metadata_refresh: watchMetadataRefresh,
	kevlar_watch_modern_metapanel: isWatchModernMetapanel,
	web_amsterdam_playlists: isAmsterdamPlaylists,
	web_animated_like: isAnimatedLike,
	web_button_rework: isButtonRework,
	web_button_rework_with_live: buttonReworkWithLive, // the one yt.config_.EXPERIMENT_FLAGS flag that's responsible for the old style buttons, noticeable in youtube shorts
	web_darker_dark_theme: enableDarkerDarkTheme,
	web_darker_dark_theme_deprecate: enableDarkerDarkTheme_deprecate,
	web_darker_dark_theme_live_chat: enableDarkerDarkTheme_liveChat,
	web_guide_ui_refresh: isUiRefresh,
	web_modern_ads: isModernAds,
	web_modern_buttons: isModernButtons,
	web_modern_buttons_bl_survey: isModernButtonsSurvey_bl,
	web_modern_chips: isModernChips,
	web_modern_collections: false,
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
