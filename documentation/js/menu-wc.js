'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">daily-lunch-order-checker-back-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' : 'data-target="#xs-controllers-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' :
                                            'id="xs-controllers-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' : 'data-target="#xs-injectables-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' :
                                        'id="xs-injectables-links-module-AppModule-6b12585c6a290e815f0b75464dfcc05581b86f89162e24f3fca19ba82bc7583b0fc650cbbf4fe59133ba1637cfdbb746eb89a4048218d97a9607fb4644f1f501"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LunchBoxTypeModule.html" data-type="entity-link" >LunchBoxTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' : 'data-target="#xs-controllers-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' :
                                            'id="xs-controllers-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' }>
                                            <li class="link">
                                                <a href="controllers/LunchBoxTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LunchBoxTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' : 'data-target="#xs-injectables-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' :
                                        'id="xs-injectables-links-module-LunchBoxTypeModule-f7cac775daf12a449b0102594a37e8a413cb9b1c78234a26657dcdac8ee1a0ccccf217ef0653203210da22468a07eec04feb8f40dfe40852569b3b9488656330"' }>
                                        <li class="link">
                                            <a href="injectables/LunchBoxTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LunchBoxTypeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LunchMealMenuModule.html" data-type="entity-link" >LunchMealMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' : 'data-target="#xs-controllers-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' :
                                            'id="xs-controllers-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' }>
                                            <li class="link">
                                                <a href="controllers/LunchMealMenuController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LunchMealMenuController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' : 'data-target="#xs-injectables-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' :
                                        'id="xs-injectables-links-module-LunchMealMenuModule-d3325dd6f2c6f0435fab2e9c7c68d06e356a1e354b4acb488a750d8de1ea2cdc649c157b21ef506bbbe2e930b07f5b1962741e23b2adb39661e3f6b2858ac4f2"' }>
                                        <li class="link">
                                            <a href="injectables/LunchMealMenuService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LunchMealMenuService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderForLunchModule.html" data-type="entity-link" >OrderForLunchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' : 'data-target="#xs-controllers-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' :
                                            'id="xs-controllers-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' }>
                                            <li class="link">
                                                <a href="controllers/OrderForLunchController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderForLunchController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' : 'data-target="#xs-injectables-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' :
                                        'id="xs-injectables-links-module-OrderForLunchModule-c6320969f544747fcfbe04e2fd79db08501ad88aab9dba13eb83b1cda59478db7ef763d83c261b7f475009ef30089e3f82130c722387d3f185b4288a1576d888"' }>
                                        <li class="link">
                                            <a href="injectables/OrderForLunchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderForLunchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' : 'data-target="#xs-controllers-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' :
                                            'id="xs-controllers-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' : 'data-target="#xs-injectables-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' :
                                        'id="xs-injectables-links-module-UserModule-fd9c8cefa1c6e0cd0fa17e6b77fdba6c780538572fc1ab97804e4cfe9aa197be38533b6c662b7c949b6dbd1dfc29bbf1d1706080d802df4b9939dd0935623e64"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LunchBoxTypeController.html" data-type="entity-link" >LunchBoxTypeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LunchMealMenuController.html" data-type="entity-link" >LunchMealMenuController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderForLunchController.html" data-type="entity-link" >OrderForLunchController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/LunchBoxTypeDto.html" data-type="entity-link" >LunchBoxTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LunchMealMenuDto.html" data-type="entity-link" >LunchMealMenuDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderForLunchDto.html" data-type="entity-link" >OrderForLunchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LunchBoxTypeService.html" data-type="entity-link" >LunchBoxTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LunchMealMenuService.html" data-type="entity-link" >LunchMealMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderForLunchService.html" data-type="entity-link" >OrderForLunchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});