// ==UserScript==
// @name         YT Music Patch Collection
// @version      2.1.2
// @description  Allows for changing of yt.config_ values (unofficial update)
// @author       Aubrey Pankow (aubyomori@gmail.com)
// @author       Taniko Yamamoto (kirasicecreamm@gmail.com)
// @author       John Patrick Adem (not an actual author, just placing my name here because i made some changes to this script and i forked it)
// @license      Unlicense
// @downloadURL  https://raw.githubusercontent.com/jpa102/YouTubePatchCollection/main/YTMusicPatchCollection.user.js
// @updateURL    https://raw.githubusercontent.com/jpa102/YouTubePatchCollection/main/YTMusicPatchCollection.user.js
// @match        music.youtube.com/*
// @icon         https://music.youtube.com/favicon.ico
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
let alignTheThreeDotMenuWithTitleDescription = true; //                         self explanatory
let allowSkippingWithoutNetwork = true; //                                      allow to skip with no internet connection
let attributeWebRecordMetrics = true; //                                        idk what is this at the moment...
let buttonReworkWithLive = false; //                                            reworked buttons on live. setting it to false brings back the old style buttons, noticeable in youtube shorts
let bypassThePolymerVersionOfYtIcon = false; //                                 idk what is this at the moment...
let cairo_enableCreateCollabPlaylistToggle = true; //                           enable the toggle to create collab playlist
let cairo_enableNewCollaboratorsListAndActions = true; //                       enable the new collaborators list and actions
let cairo_enablePrivatePlaylistSharing = true; //                               enable the private sharing of playlists
let cairo_enableVoting = true; //                                               enable voting with the new cairo redesign?
let cairo_enableVotingAnimation = true; //                                      enable the voting animation from cairo redesign
let cairo_enableVotingRefreshToast = true; //                                   enable the refresh toast from cairo redesign
let centerAlignTheActionCompanionCenterToDescription = true; //                 idk what is this at the moment...
let cleanupManualAttributionHeader = true; //                                   idk what is this at the moment...
let compressGel = true; //                                                      idk what is this at the moment...
let delayFetchingGuideResponseMobileWeb = true; //                              delay fetching of the guide response in mobile web version?
let deprecateCSIinfo = false; //                                                deprecate the "csi" info in channel page
let disableAudioVideoSwitcherWhenAudioOnly = true; //                           disable audio and video switcher when the track is audio only
let disableAutoFormattedStringsOnChildNode = true; //                           disable the auto-formatting of strings at child node
let disableCachedMastheadData = true; //                                        idk what is this at the moment...
let disableFetchingGuideInWebfe = true; //                                      idk what is this at the moment...
let disableLogToVisitorLayer = true; //                                         idk what is this at the moment...
let disableSignoutRedirect = true; //                                           disable the redirection at sign-out?
let enableAbReportOnErrorscreen = true; //                                      idk what is this at the moment...
let enableAlbumDetailPageRedesign_bauhaus = true; //                            enable the album page details redesign
let enableActiveViewDisplayAdRendererHome = false; //                           enable the active display at home page? (ad renderer, who likes ads?)
let enableDetailPageDownloadButtonsRedesign_bauhaus = true; //                  enable the download buttons redesign
let enablePlaylistDetailPageRedesign_bauhaus = true; //                         enable the playlist page details redesign
let enableAppInstallEntryAppbar = true; //                                      enable the "Install app" at the app bar?
let enableAppInstallEntryProfileMenu = true; //                                 enable the "Install app" at the profile menu
let enableAppInstallEntrySideNav = true; //                                     enable the "Install app" at the side navigation
let enableCastingOnWeb = true; //                                               enable casting
let enableCapriRedesign = true; //                                              enable the "Capri" redesign of yt music layout
let enableClientStreamzOnWeb = true; //                                         idk what is this at the moment...
let enableCreditsInSongs = true; //                                             self explanatory
let enableDragAndDropUpload = true; //                                          enable the ability to drag and drop upload feature
let enableError304 = true; //                                                   enable error 204 (don't know if this refers to the http status code)
let enableExploreTab = true; //                                                 self explanatory
let enableGettingAccountSwitcherEndpointOnWebfe = true; //                      idk what is this at the moment...
let enableHandlesInAccountSwitcher = true; //                                   enable handles in the account switcher
let enableHandlesAndNamesInAccountSwitcher = true; //                           enable handles and names in the account switcher
let enableImproveYourRecommendationsSetting = true; //                          enable the improve your recommendations setting
let enableInappBackgroundMobileWeb = true; //                                   enable in-app background at the mobile web version (noticeable when you collapse the player page)
let enableLiveOverlayFeedInLiveChat = true; //                                  enable the live overlay feed in live chat
let enableLoopInCast = true; //                                                 enable looping in casting
let enableMediaSessionMetadataFix = true; //                                    idk what is this at the moment...
let enableMembershipsAndPurchases = true; //                                    self explanatory
let enableMigrationPlaylistShelfContinuations = true; //                        enable the migration of playlist shelf (continuations?)
let enableMixedDirectionFormattedStrings = true; //                             enable the mixed direction for formatted strings?
let enableModularPlayerPageServer = true; //                                    idk what is this at the moment...
let enableMultiPageMenu = true; //                                              enable the multi-page menu
let enableMultiSelect = true; //                                                enable multi selecting?
let enableMusicCssMss = true; //                                                idk what is this at the moment...
let enableNewIconSet = false; //                                                enable the new set of icons
let enableNewMusicPlayerBarMobileWeb = true; //                                 enable the new player bar on the mobile version of yt music
let enableOpenInNewTabIcon_desktopSearch = true; //                             idk what is this at the moment...
let enablePauseAdsHtml5 = true; //                                              enable the pause ads (who likes ads?)
let enablePaymentsPurchaseManager = true; //                                    enable the payments purchase manager
let enablePlayerPageModernizationMobileWeb = true; //                           enable the modernization of the player page (mobile web version)
let enablePolymerResin = false; //                                              enable the polymer resin (connected to the layout?)
let enableRadioSteeringInQueues = true; //                                      idk what is this at the moment...
let enableRelatedTabCarouslFix = true; //                                       enable the fix for the related tab carousel
let enableResponsiveRadio = true; //                                            self explanatory
let enableResponsiveRadioClient = true; //                                      self explanatory
let enableRtaManager = true; //                                                 idk what is this at the moment...
let enableRtaManagerLiveChat = true; //                                         idk what is this at the moment...
let enableSaveQueueToPlaylist = true; //                                        enable saving the queue to a playlist
let enableServiceWorker_YoutubeMusic = true; //                                 enable the service worker for youtube music
let enableSidenavBauhaus = true; //                                             enable the sidebar? (bauhaus)
let enableSignedOutSearch = true; //                                            enable searching while signed-out
let enableSingleSongQueue = true; //                                            enable queuing a single song
let enableSkipAdGuidancePrompt = true; //                                       enable the skip ad prompt (who likes ads?)
let enableSkippableAdsForUnplugged = true; //                                   enable skippable ads, for "unplugged"? (i have no idea, does this refer to being signed-out?)
let enableSmearingExpansion = true; //                                          idk what is this at the moment...
let enableSponsoredAdBadge = false; //                                          enable the sponsored ad badge (who likes ads?)
let enableThirdPartyInfo = true; //                                             enable 3rd party info (what's this, collecting and sending info to 3rd parties?)
let enableTopLandscapeImageLayoutLevelClick = true; //                          idk what is this at the moment...
let enableVideoDisplayCompactButtonGroupForDesktopSearch = true; //             idk what is this at the moment...
let enableWebUploadSupport = true; //                                           enable the support for uploading
let enableYpcSpinners = true; //                                                enable the ypc spinners
let enableYtIframeAuthuser = true; //                                           enable authenticating the user within an iframe of youtube?
let exportNetworklessOptions = true; //                                         idk what is this at the moment...
let hidePlayerSidebarScreenReaderFullscreen = true; //                          hides the player sidebar from screen readers on fullscreen
let isButtonRework = false; //                                                  reworked buttons throughout pages
let jsonCondensedResponse = true; //                                            json response data is condensed
let migrateRemainingAdBadges = false; //                                        migrate the remaining web ad badges to "innertube" (who likes ads?)
let musicEnableWilIcons = true; //                                              if set to false, it doesn't render the entire ui (similar behavior to useWilIconsKevlar)
let prefetchPreloadVideo = true; //                                             prefetch - preload the video (buffer?)
let useColorPalettesFromModernCollectionsV2 = false; //                         use the color palettes found in modern collections v2
let useVimioBehavior = true; //                                                 apparently, setting this to false disables the loading of profile pictures at the sidebar
let useWilIconsKevlar = true; //                                                if set to false, it doesn't render the icons inside the buttons
let webApiUrl = true; //                                                        web api url, i don't know what will happen if this is set to false
let ytmusic_networklessLogging = true; //                                       networkless logging (offline logs)

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
	ab_det_apm: true,
	ab_det_el_h: true,
	ab_det_em_inj: true,
	ab_l_sig_st: true,
	ab_l_sig_st_e: true,
	ab_sa_ef: true,
	action_companion_center_align_description: centerAlignTheActionCompanionCenterToDescription,
	align_three_dot_menu_with_title_description: alignTheThreeDotMenuWithTitleDescription,
	allow_skip_networkless: allowSkippingWithoutNetwork,
	att_web_record_metrics: attributeWebRecordMetrics,
	clean_up_manual_attribution_header: cleanupManualAttributionHeader,
	clear_user_partitioned_ls: true,
	compress_gel: compressGel,
	cow_optimize_idom_compat: true,
	csi_config_handling_infra: true,
	csi_on_gel: true,
	delay_fetch_guide_response_on_mobile_web: delayFetchingGuideResponseMobileWeb,
	deprecate_csi_has_info: deprecateCSIinfo,
	disable_av_switcher_when_audio_only: disableAudioVideoSwitcherWhenAudioOnly,
	disable_cached_masthead_data: disableCachedMastheadData,
	disable_child_node_auto_formatted_strings: disableAutoFormattedStringsOnChildNode,
	disable_enf_isd: true,
	disable_fetch_guide_in_webfe: disableFetchingGuideInWebfe,
	disable_log_to_visitor_layer: disableLogToVisitorLayer,
	disable_music_web_sign_out_redirect: disableSignoutRedirect,
	disable_pacf_logging_for_memory_limited_tv: true,
	enable_ab_report_on_errorscreen: enableAbReportOnErrorscreen,
	enable_ab_rp_int: true,
	enable_active_view_display_ad_renderer_web_home: enableActiveViewDisplayAdRendererHome,
	enable_async_ab_enf: true,
	enable_cast_on_music_web: enableCastingOnWeb,
	enable_click_target_fix_for_two_row_item_renderer: true,
	enable_client_creator_goal_ticker_bar_revamp: true,
	enable_client_only_wiz_direct_reactions: true,
	enable_client_sli_logging: true,
	enable_client_streamz_web: enableClientStreamzOnWeb,
	enable_client_ve_spec: true,
	enable_continuations_migration_playlist_shelf: enableMigrationPlaylistShelfContinuations,
	enable_dai_sdf_h5_preroll: true,
	enable_datasync_id_header_in_web_vss_pings: true,
	enable_entity_store_from_dependency_injection: true,
	enable_flow_logging_p4e: true,
	enable_fully_reactive_badge_shape: true,
	enable_get_account_switcher_endpoint_on_webfe: enableGettingAccountSwitcherEndpointOnWebfe,
	enable_google_payments_buyflow_material2_style_web: true,
	enable_handles_account_menu_switcher: enableHandlesInAccountSwitcher,
	enable_in_app_backgrounding_mobile_web: enableInappBackgroundMobileWeb,
	enable_live_overlay_feed_in_live_chat: enableLiveOverlayFeedInLiveChat,
	enable_ltc_param_fetch_from_innertube: true,
	enable_memberships_and_purchases: enableMembershipsAndPurchases,
	enable_mixed_direction_formatted_strings: enableMixedDirectionFormattedStrings,
	enable_modular_player_page_server: enableModularPlayerPageServer,
	enable_music_css_mss: enableMusicCssMss,
	enable_music_mweb_app_bar_app_install_entry: enableAppInstallEntryAppbar,
	enable_music_mweb_player_page_modernization: enablePlayerPageModernizationMobileWeb,
	enable_music_mweb_profile_menu_app_install_entry: enableAppInstallEntryProfileMenu,
	enable_music_mweb_side_nav_app_install_entry: enableAppInstallEntrySideNav,
	enable_music_mweb_signed_out_search: enableSignedOutSearch,
	enable_music_web_bauhaus_album_detail_page_redesign_client: enableAlbumDetailPageRedesign_bauhaus,
	enable_music_web_bauhaus_detail_pages_redesign_download_buttons_client: enableDetailPageDownloadButtonsRedesign_bauhaus,
	enable_music_web_bauhaus_playlist_detail_page_redesign_client: enablePlaylistDetailPageRedesign_bauhaus,
	enable_music_web_cairo_new_collaborators_list_and_actions: cairo_enableNewCollaboratorsListAndActions,
	enable_music_web_cairo_private_playlist_sharing: cairo_enablePrivatePlaylistSharing,
	enable_music_web_cairo_voting: cairo_enableVoting,
	enable_music_web_cairo_voting_animation: cairo_enableVotingAnimation,
	enable_music_web_cairo_voting_refresh_toast: cairo_enableVotingRefreshToast,
	enable_music_web_create_cairo_collab_playlist_toggle: cairo_enableCreateCollabPlaylistToggle,
	enable_music_web_song_credits: enableCreditsInSongs,
	enable_names_handles_account_switcher: enableHandlesAndNamesInAccountSwitcher,
	enable_new_music_mweb_player_bar: enableNewMusicPlayerBarMobileWeb,
	enable_observability_logging_web_remix: true,
	enable_open_in_new_tab_icon_for_short_dr_for_desktop_search: enableOpenInNewTabIcon_desktopSearch,
	enable_pacf_slot_asde_infeed_h5: true,
	enable_pacf_slot_asde_player_byte_h5: true,
	enable_pacf_slot_asde_player_byte_h5_TV: true,
	enable_pause_ads_on_ytv_html5: enablePauseAdsHtml5,
	enable_payments_purchase_manager: enablePaymentsPurchaseManager,
	enable_pl_r_c_s: true,
	enable_pl_r_si_fa: true,
	enable_polymer_resin: enablePolymerResin,
	enable_populate_att_psd_in_abe_feedback: true,
	enable_populate_psd_in_abe_feedback: true,
	enable_premium_voluntary_pause: true,
	enable_pv_screen_modern_text: true,
	enable_rta_manager: enableRtaManager,
	enable_sdf_companion_h5: true,
	enable_sdf_dai_h5_midroll: true,
	enable_sdf_h5_endemic_mid_post_roll: true,
	enable_sdf_on_h5_unplugged_vod_midroll: true,
	enable_sdf_shorts_player_bytes_h5: true,
	enable_setting_app_inert_when_buy_flow_opens: true,
	enable_skip_ad_guidance_prompt: enableSkipAdGuidancePrompt,
	enable_skippable_ads_for_unplugged_ad_pod: enableSkippableAdsForUnplugged,
	enable_smearing_expansion_dai: enableSmearingExpansion,
	enable_sponsored_ad_badge_on_ytm: enableSponsoredAdBadge,
	enable_third_party_info: enableThirdPartyInfo,
	enable_track_defined_via_mutable_signal: true,
	enable_video_display_compact_button_group_for_desktop_search: enableVideoDisplayCompactButtonGroupForDesktopSearch,
	enable_web_96_bit_csn: true,
	enable_web_home_top_landscape_image_layout_level_click: enableTopLandscapeImageLayoutLevelClick,
	enable_web_media_session_metadata_fix: enableMediaSessionMetadataFix,
	enable_web_tiered_gel: true,
	enable_web_upload_support: enableWebUploadSupport,
	enable_window_constrained_buy_flow_dialog: true,
	enable_wiz_always_try_logging_info_map: true,
	enable_ypc_spinners: enableYpcSpinners,
	enable_yt_ata_iframe_authuser: enableYtIframeAuthuser,
	err_on_pl_r_c: true,
	export_networkless_options: exportNetworklessOptions,
	fill_single_video_with_notify_to_lasr: true,
	h5_companion_enable_adcpn_macro_substitution_for_click_pings: true,
	h5_inplayer_enable_adcpn_macro_substitution_for_click_pings: true,
	h5_reset_cache_and_filter_before_update_masthead: true,
	high_ccv_client_side_caching_h5: true,
	html5_log_trigger_events_with_debug_data: true,
	il_attach_cache_limit: true,
	il_use_view_model_logging_context: true,
	json_condensed_response: jsonCondensedResponse,
	kev_adb_pg: true,
	kevlar_gel_error_routing: true,
	kevlar_response_processor_allowlist_killswitch: true,
	kevlar_service_command_check: true,
	kevlar_use_vimio_behavior: useVimioBehavior,
	kevlar_use_wil_icons: useWilIconsKevlar,
	kevlar_woffle_fallback_image: true,
	live_chat_enable_controller_extraction: true,
	live_chat_enable_rta_manager: enableRtaManagerLiveChat,
	log_click_with_layer_from_element_in_command_handler: true,
	log_errors_through_nwl_on_retry: true,
	log_gel_compression_latency: true,
	log_heartbeat_with_lifecycles: true,
	main_web_redirect_integration_riot: true,
	migrate_events_to_ts: true,
	migrate_remaining_web_ad_badges_to_innertube: migrateRemainingAdBadges,
	music_enable_explore_tab_on_web: enableExploreTab,
	music_enable_improve_your_recommendations_setting: enableImproveYourRecommendationsSetting,
	music_enable_multi_select: enableMultiSelect,
	music_enable_radio_steering_in_queues: enableRadioSteeringInQueues,
	music_enable_responsive_radio: enableResponsiveRadio,
	music_enable_responsive_radio_client: enableResponsiveRadioClient,
	music_enable_responsive_radio_toast_message: true,
	music_enable_save_queue_to_playlist: enableSaveQueueToPlaylist,
	music_enable_single_song_queue: enableSingleSongQueue,
	music_enable_sticky_playlist_saving: true,
	music_web_cast_enable_loop: enableLoopInCast,
	music_web_cast_set_initial_state: true,
	music_web_delay_watch_next_processing: true,
	music_web_display_av_switcher: true,
	music_web_enable_av_switcher: true,
	music_web_enable_bauhaus_sidenav: enableSidenavBauhaus,
	music_web_enable_bauhaus_style_buttons_and_chips: true,
	music_web_enable_capri_redesign: enableCapriRedesign,
	music_web_enable_drag_drop_upload: enableDragAndDropUpload,
	music_web_enable_icon_wil: musicEnableWilIcons,
	music_web_enable_music_multi_page_menu: enableMultiPageMenu,
	music_web_enable_new_icon_set: enableNewIconSet,
	music_web_enable_persistent_content_warning_flow: true,
	music_web_enable_playback_progress_a11y_fix: true,
	music_web_enable_player_open_on_player_error: true,
	music_web_enable_player_page_up_next_tab_click: true,
	music_web_enable_queue_reflection_polling: true,
	music_web_enable_redux_playing_state_handling: true,
	music_web_enable_related_tab_carousel_fix: enableRelatedTabCarouslFix,
	music_web_enable_reuse_player_queue_item_component: true,
	music_web_enable_select_autoplay_item: true,
	music_web_enable_server_queue_restoration: true,
	music_web_enable_server_queues: true,
	music_web_enable_service_worker: enableServiceWorker_YoutubeMusic,
	music_web_execute_on_response_received_endpoints_on_watch_next_response: true,
	music_web_fix_queue_logging_race_condition: true,
	music_web_handle_sps_reject_failure: true,
	music_web_hide_player_sidebar_from_screen_reader_on_fullscreen: hidePlayerSidebarScreenReaderFullscreen,
	music_web_mark_root_visible: true,
	music_web_ping_ad_start: true,
	music_web_prebuffer_autoplay_items: true,
	music_web_respect_playback_content_mode: true,
	music_web_skip_repeated_player_error_toasts: true,
	mutable_signal_set_skip_unchanged: true,
	mweb_account_linking_noapp: true,
	mweb_deprecate_skip_ve_logging: true,
	mweb_shorts_comments_panel_id_change: true,
	networkless_logging: ytmusic_networklessLogging,
	new_csn_storage_design: true,
	nwl_send_from_memory_when_online: true,
	pageid_as_header_web: true,
	polymer_bad_build_labels: true,
	polymer_verifiy_app_state: true,
	qoe_send_and_write: true,
	read_data_from_web_component_wrapper: true,
	remove_masthead_channel_banner_on_refresh: true,
	remove_slot_id_exited_trigger_for_dai_in_player_slot_expire: true,
	replace_client_url_parsing_with_server_signal: true,
	scheduler_use_raf_by_default: true,
	shared_enable_controller_extraction: true,
	shared_enable_sink_wrapping: true,
	shell_load_gcf: true,
	sink_wrapper_disable_runtime_shadycss: true,
	skip_invalid_ytcsi_ticks: true,
	skip_ls_gel_retry: true,
	skip_setting_info_in_csi_data_object: true,
	smarter_ve_dedupping: true,
	start_client_gcf: true,
	suppress_error_204_logging: true,
	transport_use_scheduler: true,
	use_color_palettes_modern_collections_v2: useColorPalettesFromModernCollectionsV2,
	use_core_sm: true,
	use_csi_stp_handler: true,
	use_event_time_ms_header: true,
	use_fifo_for_networkless: true,
	use_infogel_early_logging: true,
	use_new_in_memory_storage: true,
	use_player_abuse_bg_library: true,
	use_request_time_ms_header: true,
	use_rta_manager_for_async: true,
	use_session_based_sampling: true,
	use_ts_visibilitylogger: true,
	vss_final_ping_send_and_write: true,
	vss_playback_use_send_and_write: true,
	web_api_url: webApiUrl,
	web_button_rework: isButtonRework,
	web_button_rework_with_live: buttonReworkWithLive,
	web_button_vm_refactor_disabled: true,
	web_bypass_polymer_yt_icon: bypassThePolymerVersionOfYtIcon,
	web_csi_action_sampling_enabled: true,
	web_dedupe_ve_grafting: true,
	web_direct_inject_in_select: true,
	web_enable_ab_em_rsp: true,
	web_enable_ab_rsp_cl: true,
	web_enable_abd_ref: true,
	web_enable_course_icon_update: true,
	web_enable_error_204: enableError304,
	web_enable_sink_yt_content_metadata_view_model: true,
	web_gcf_hashes_innertube: true,
	web_gel_timeout_cap: true,
	web_masthead_visited_channel_color_fix: true,
	web_one_platform_error_handling: true,
	web_playback_associated_ve: true,
	web_poly_si_remove_using: true,
	web_prefetch_preload_video: prefetchPreloadVideo,
	web_remix_allow_up_to_3x_playback_rate: true,
	web_rendererstamper_event_listener: true,
	web_resizable_advertiser_banner_on_masthead_safari_fix: true,
	web_scheduler_auto_init: true,
	web_shorts_pivot_button_view_model_reactive: true,
	web_use_cache_for_image_fallback: true,
	webfe_disable_ab_em_plb: true,
	wiz_diff_overwritable: true,
	wiz_memoize_stamper_items: true,
	wiz_use_generic_logging_infra: true,
	woffle_used_state_report: true,
	wpo_gel_strz: true,
	yt_img_shadow_trigger_show_on_visible: true,
	ytcp_paper_tooltip_use_scoped_owner_root: true,
	H5_async_logging_delay_ms: 30000,
	log_window_onerror_fraction: 0.1,
	pbcm_fi_query_decorators_fallback_logging_pct: 0,
	polymer_property_access_logging_percent: 0,
	tv_pacf_logging_sample_rate: 0.01,
	ytidb_transaction_ended_event_rate_limit: 0.02,
	botguard_async_snapshot_timeout_ms: 3000,
	check_navigator_accuracy_timeout_ms: 0,
	client_streamz_web_flush_count: 2,
	client_streamz_web_flush_interval_seconds: 60,
	compression_disable_point: 10,
	custom_active_view_tos_timeout_ms: 3600000,
	gel_min_batch_size: 3,
	gel_queue_timeout_max_ms: 300000,
	hide_cta_for_home_web_video_ads_animate_in_time: 2,
	initial_gel_batch_timeout: 2000,
	max_body_size_to_compress: 500000,
	max_prefetch_window_sec_for_livestream_optimization: 10,
	min_prefetch_offset_sec_for_livestream_optimization: 20,
	music_web_canary_stage: 0,
	music_web_delay_watch_next_ms: 500,
	music_web_list_continuation_prescan_height_px: 3000,
	music_web_session_check_interval_millis: 120000,
	music_web_sidenav_ttl_ms: 14400000,
	network_polling_interval: 30000,
	send_config_hash_timer: 0,
	slow_compressions_before_abandon_count: 4,
	swatcheroo_pbs_max_delay_ms: 3000,
	web_foreground_heartbeat_interval_ms: 28000,
	web_gel_debounce_ms: 20000,
	web_logging_max_batch: 400,
	web_max_tracing_events: 50,
	web_tracing_session_replay: 0,
	wil_icon_max_concurrent_fetches: 9999,
	ytidb_remake_db_retries: 3,
	ytidb_reopen_db_retries: 3,
	debug_forced_promo_id: "",
	il_payload_scraping: "",
	music_web_body_line_height: "1.6",
	music_web_title_line_height: "1.3",
	user_preference_collection_initial_browse_id: "FEmusic_tastebuilder",
	web_client_version_override: "",
	kevlar_command_handler_command_banlist: [],
	web_op_signal_type_banlist: [],
	web_tracing_enabled_spans: [
		"event",
		"command"
	]
}

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
	for (let i = 0; i < ATTRS.length; i++) {
		document.getElementsByTagName("html")[0].removeAttribute(ATTRS[i]);
	}
	window.removeEventListener("yt-page-date-updated", tmp);
});

YTP.start();

YTP.setCfgMulti(CONFIGS);
YTP.setExpMulti(EXPFLAGS);
