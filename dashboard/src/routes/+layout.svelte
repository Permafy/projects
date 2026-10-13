<script>
    import { browser } from "$app/environment";
    import { base } from "$app/paths";

    import { PenguinModAPIError } from "penguinmod";

    // Components
    import PenguinActionIndicator from "$lib/components/PenguinActionIndicator.svelte";
    
    import TranslationLoader from "$lib/resources/localization/translation/loader.js";
    import Authenticator from "$lib/resources/penguinmod/authentication/authenticator.js";

    import StateApplication from "$lib/state/app.svelte";
    import StoreSettings from "$lib/stores/settings.js";
    import StoreSession from "$lib/stores/session.js";

    let { children } = $props();
    
    // Initialize translations by default.
    $effect(() => {
        const activeLanguage = $StoreSettings.appLanguage;
        TranslationLoader.initialize(activeLanguage);
    });
    // Do some checking & processing of the login state, and then telling the other pages that it's safe to touch it
    $effect(async () => {
        // if we are logged in, we: need to check for cache expiry; update cache if so; if cache update failed, see if we got logged out
        if ($StoreSettings.loggedIn) {
            try {
                await Authenticator.updateOutdatedUserInfo();
            } catch (err) {
                // assume we got logged out if Reauthenticate
                if (err instanceof PenguinModAPIError && err.message === "Reauthenticate") {
                    await Authenticator.logout();
                } else {
                    console.error(err);
                }
            }
        }

        // when loggedInProcessed is true, it's safe to start using user cache & user token, likely just any user stuff
        StateApplication.loggedInProcessed = true;
    });
</script>

{#if browser && StateApplication.penguinActionIndicator}
    <PenguinActionIndicator />
{/if}
<main>
    <header class="site-header">
        <nav aria-label="Primary navigation">
            <a class="brand" href={base || "/"} aria-label="Permafy home">
                <img src={`${base}/favicon.png`} alt="" />
            </a>
            <a href="https://studio.permafy.org/">create</a>
            <a href="https://docs.permafy.org/">docs</a>
            <a href="https://projects.permafy.org/">explore</a>
            <a href="https://discord.gg/5xGRpbVrkH" target="_blank" rel="noopener noreferrer">discord</a>
        </nav>
    </header>
    {@render children()}
</main>

<style>
    .site-header {
        position: sticky;
        z-index: 20;
        top: 0;
        height: 46px;
        background: #91b1ff;
        color: #fff;
    }
    .site-header nav {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        gap: 18px;
    }
    .site-header a {
        color: inherit;
        font-size: 16px;
        text-decoration: none;
    }
    .site-header a:hover {
        text-decoration: underline;
    }
    .site-header .brand {
        display: inline-flex;
        width: 30px;
        height: 32px;
        align-items: center;
        justify-content: center;
    }
    .site-header .brand img {
        width: 28px;
        height: 28px;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
    main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        
        /* TODO: The navbar should not be above the scrollbar */
        overflow: auto;
    }
    :global(body.app-theme-dark) main {
        background: #111;
        color: white;
    }
    :global(body.app-theme-amoled) main {
        /* why is black not #000? ive been lied to */
        background: #000;
        color: white;
    }

</style>