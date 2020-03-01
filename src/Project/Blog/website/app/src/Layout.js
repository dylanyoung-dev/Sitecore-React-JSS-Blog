import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import './assets/css/base.css';
import './assets/css/vendor.css';
import './assets/css/main.css';
import './assets/app.css';
import logo from './assets/sc_logo.svg';



// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
let Navigation = ({ t, i18n }) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/" className="text-dark">
        <img src={logo} alt="Sitecore" />
      </NavLink>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a
        className="p-2 text-dark"
        href="https://jss.sitecore.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Documentation')}
      </a>
      <NavLink to="/styleguide" className="p-2 text-dark">
        {t('Styleguide')}
      </NavLink>
      <NavLink to="/graphql" className="p-2 text-dark">
        {t('GraphQL')}
      </NavLink>
    </nav>
  </div>
);

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = withTranslation()(Navigation);

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>
    <VisitorIdentification />

    <section class="s-pageheader">
      <Placeholder name="jss-pageheader" rendering={route} />
    </section>

    <section class="s-content">
      <Placeholder name="jss-main" rendering={route} />
    </section>


    <footer class="s-footer">

      <div class="s-footer__main">
        <div class="row">

          <div class="col-two md-four mob-full s-footer__sitelinks">

            <h4>Quick Links</h4>

            <ul class="s-footer__linklist">
              <li><a href="#0">Home</a></li>
              <li><a href="#0">Blog</a></li>
              <li><a href="#0">Styles</a></li>
              <li><a href="#0">About</a></li>
              <li><a href="#0">Contact</a></li>
              <li><a href="#0">Privacy Policy</a></li>
            </ul>

          </div>

          <div class="col-two md-four mob-full s-footer__social">

            <h4>Social</h4>

            <ul class="s-footer__linklist">
              <li><a href="#0">Facebook</a></li>
              <li><a href="#0">Instagram</a></li>
              <li><a href="#0">Twitter</a></li>
              <li><a href="#0">Pinterest</a></li>
              <li><a href="#0">Google+</a></li>
              <li><a href="#0">LinkedIn</a></li>
            </ul>

          </div>

          <div class="col-five md-full end s-footer__subscribe">

            <h4>Our Newsletter</h4>

            <p>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>

            <div class="subscribe-form">
              <form id="mc-form" class="group" novalidate="true">

                <input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required="" />

                <input type="submit" name="subscribe" value="Send" />

                <label for="mc-email" class="subscribe-message"></label>

              </form>
            </div>

          </div>

        </div>
      </div>

      <div class="s-footer__bottom">
        <div class="row">
          <div class="col-full">
            <div class="s-footer__copyright">
              <span>© Copyright Philosophy 2018</span>
              <span>Site Template by <a href="https://colorlib.com/">Colorlib</a></span>
            </div>

            <div class="go-top">
              <a class="smoothscroll" title="Back to Top" href="#top"></a>
            </div>
          </div>
        </div>
      </div>

    </footer>


    {/* <div id="preloader">
      <div id="loader">
        <div class="line-scale">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div> */}
  </React.Fragment>
);

export default Layout;
