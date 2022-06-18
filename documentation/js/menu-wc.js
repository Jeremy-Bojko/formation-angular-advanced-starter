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
                    <a href="index.html" data-type="index-link">formation-angular-advanced-starter documentation</a>
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
                                            'data-target="#components-links-module-AppModule-7a8727d1a083e3a363668242092baa4b69ed9fe9fc1c629d45baf9a72d12ca05123a4e5a2f57b4ca36675f9eb59a52ad05753d3de40b2d4dfaab096771666c6c"' : 'data-target="#xs-components-links-module-AppModule-7a8727d1a083e3a363668242092baa4b69ed9fe9fc1c629d45baf9a72d12ca05123a4e5a2f57b4ca36675f9eb59a52ad05753d3de40b2d4dfaab096771666c6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7a8727d1a083e3a363668242092baa4b69ed9fe9fc1c629d45baf9a72d12ca05123a4e5a2f57b4ca36675f9eb59a52ad05753d3de40b2d4dfaab096771666c6c"' :
                                            'id="xs-components-links-module-AppModule-7a8727d1a083e3a363668242092baa4b69ed9fe9fc1c629d45baf9a72d12ca05123a4e5a2f57b4ca36675f9eb59a52ad05753d3de40b2d4dfaab096771666c6c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-cbf2a497856a1c11cf0bd2bef8e3e312b72bdae38e104ee4c4d8f25cef7ebe6440a102cf11f32714c4b2d737e4dad5062a0c528d865e291f50740c7af5cc136f"' : 'data-target="#xs-components-links-module-ClientsModule-cbf2a497856a1c11cf0bd2bef8e3e312b72bdae38e104ee4c4d8f25cef7ebe6440a102cf11f32714c4b2d737e4dad5062a0c528d865e291f50740c7af5cc136f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-cbf2a497856a1c11cf0bd2bef8e3e312b72bdae38e104ee4c4d8f25cef7ebe6440a102cf11f32714c4b2d737e4dad5062a0c528d865e291f50740c7af5cc136f"' :
                                            'id="xs-components-links-module-ClientsModule-cbf2a497856a1c11cf0bd2bef8e3e312b72bdae38e104ee4c4d8f25cef7ebe6440a102cf11f32714c4b2d737e4dad5062a0c528d865e291f50740c7af5cc136f"' }>
                                            <li class="link">
                                                <a href="components/FormClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-bc1c6b4e18bce6d3ec0567b8e704aa4325494052932add63f8a84283c394f31344b619b47e077ebd1a7bb7ed8fc17a3bb5d5e64d993b2089eed8d9d63a2f218d"' : 'data-target="#xs-components-links-module-CoreModule-bc1c6b4e18bce6d3ec0567b8e704aa4325494052932add63f8a84283c394f31344b619b47e077ebd1a7bb7ed8fc17a3bb5d5e64d993b2089eed8d9d63a2f218d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-bc1c6b4e18bce6d3ec0567b8e704aa4325494052932add63f8a84283c394f31344b619b47e077ebd1a7bb7ed8fc17a3bb5d5e64d993b2089eed8d9d63a2f218d"' :
                                            'id="xs-components-links-module-CoreModule-bc1c6b4e18bce6d3ec0567b8e704aa4325494052932add63f8a84283c394f31344b619b47e077ebd1a7bb7ed8fc17a3bb5d5e64d993b2089eed8d9d63a2f218d"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalMsgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalMsgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"' : 'data-target="#xs-components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"' :
                                            'id="xs-components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-c6e4e72bdd64280bfc0548b5bb90c5f46fdcd743b83ff8507583a9f874d22f29db389307cfd5079252b4aea547f62296e0c1c3e4978a67f779269cb7bf9fa2a9"' : 'data-target="#xs-components-links-module-LoginModule-c6e4e72bdd64280bfc0548b5bb90c5f46fdcd743b83ff8507583a9f874d22f29db389307cfd5079252b4aea547f62296e0c1c3e4978a67f779269cb7bf9fa2a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-c6e4e72bdd64280bfc0548b5bb90c5f46fdcd743b83ff8507583a9f874d22f29db389307cfd5079252b4aea547f62296e0c1c3e4978a67f779269cb7bf9fa2a9"' :
                                            'id="xs-components-links-module-LoginModule-c6e4e72bdd64280bfc0548b5bb90c5f46fdcd743b83ff8507583a9f874d22f29db389307cfd5079252b4aea547f62296e0c1c3e4978a67f779269cb7bf9fa2a9"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-7d859b3c1a3135707fedb3d9f66c4f0d20519ad60eb14049a539155386ca4a113410c18ddf91c6dbe112b36488e448e810e766a3ae5236f578cb5c4ccdf6b16d"' : 'data-target="#xs-components-links-module-OrdersModule-7d859b3c1a3135707fedb3d9f66c4f0d20519ad60eb14049a539155386ca4a113410c18ddf91c6dbe112b36488e448e810e766a3ae5236f578cb5c4ccdf6b16d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-7d859b3c1a3135707fedb3d9f66c4f0d20519ad60eb14049a539155386ca4a113410c18ddf91c6dbe112b36488e448e810e766a3ae5236f578cb5c4ccdf6b16d"' :
                                            'id="xs-components-links-module-OrdersModule-7d859b3c1a3135707fedb3d9f66c4f0d20519ad60eb14049a539155386ca4a113410c18ddf91c6dbe112b36488e448e810e766a3ae5236f578cb5c4ccdf6b16d"' }>
                                            <li class="link">
                                                <a href="components/FormOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' :
                                            'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' : 'data-target="#xs-components-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' :
                                            'id="xs-components-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' : 'data-target="#xs-directives-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' :
                                        'id="xs-directives-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' : 'data-target="#xs-pipes-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' :
                                            'id="xs-pipes-links-module-SharedModule-061ca713eb3e6d431f46b5203ac6df40d218fff288a1eaf869968149ddf173a3ca09b357c16d828238cc6189ac6d0c310570d492a9563854767fff0467e09b79"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' : 'data-target="#xs-components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' :
                                            'id="xs-components-links-module-UiModule-e2e2b6e5e484732dac03c693b64623f96c12e56b25ffb756bf0969d693c67f1539bf2dacbf22879a3d15ede3d1d04b7b7ddebd36434d7f515210157e73b39153"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorHandler.html" data-type="entity-link" >ErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
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
                                    <a href="injectables/ClientsService.html" data-type="entity-link" >ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VersionService.html" data-type="entity-link" >VersionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClientI.html" data-type="entity-link" >ClientI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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