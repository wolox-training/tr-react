import React, { Fragment } from 'react';

import NavBar from '../NavBar/layout';

import styles from './styles.scss';
/* eslint global-require: "error" */

// all these variations of require() are ok
const reactIcon = require('../../../assets/images/react_icon.svg');
const angularIcon = require('../../../assets/images/angular_icon.svg');
const triangle = require('../../../assets/images/triangle.svg');
const vueIcon = require('../../../assets/images/vue_icon.svg');
const elmIcon = require('../../../assets/images/elm_icon.svg');
const polymerIcon = require('../../../assets/images/polymer_icon.svg');
const railsIcon = require('../../../assets/images/rails_icon.png');
const expressIcon = require('../../../assets/images/express_icon.svg');
const aspNetIcon = require('../../../assets/images/aspnet_icon.png');
const dJangoIcon = require('../../../assets/images/django_icon.svg');

const Maquetado = () => (
  <Fragment>
    <NavBar />
    <section>
      <div className={`${styles.titleDecoration} m-top-12 m-bottom-3`}>
        <img className={styles.titleImage} src={triangle} alt="Front-End Tools" />
        <p className={`${styles.titleText} ${styles.textBig}`}>Front-End Tools</p>
      </div>
      <div className={styles.wrapperTech}>
        <div className={styles.containerTech}>
          <div className={`${styles.tech} ${styles.techPos1}`}>
            <img className={styles.techImg} src={reactIcon} alt="ReactJS" />
            <p className={`${styles.textMedium} m-bottom-1`}>ReactJS</p>
            <p className={`${styles.textMedium} m-bottom-2`}>
              <b>Release: 2013</b>
            </p>
            <p className={styles.textSmall}>
              React is a declarative component-based JavaScript library for building user interfaces.
            </p>
          </div>
          <div className={styles.divisorLine} />
          <div className={`${styles.tech} ${styles.techPos2}`}>
            <img className={styles.techImg} src={angularIcon} alt="AngularJS" />
            <p className={`${styles.textMedium} m-bottom-1`}>AngularJS</p>
            <p className={`${styles.textMedium} m-bottom-2`}>
              <b>Release: 2010</b>
            </p>
            <p className={styles.textSmall}>
              AngularJS(commonly referred to as AngularJS 1.X) is a JavaScript framework for building SPAs
              with an MVC architecture.
            </p>
          </div>
          <div className={`${styles.tech} ${styles.techPos3}`}>
            <img className={styles.techImg} src={vueIcon} alt="VueJS" />
            <p className={`${styles.textMedium} m-bottom-1`}>VueJS</p>
            <p className={`${styles.textMedium} m-bottom-2`}>Release: 2014</p>
            <p className={styles.textSmall}>
              VueJS(pronunced 7vju:/, like view) is an open-source progresive JavaScript framework for
              building user interfaces.
            </p>
          </div>
          <div className={`${styles.tech} ${styles.techPos4}`}>
            <img className={styles.techImg} src={elmIcon} alt="Elm" />
            <p className={`${styles.textMedium} m-bottom-1`}>Elm</p>
            <p className={`${styles.textMedium} m-bottom-2`}>Release: 2016</p>
            <p className={styles.textSmall}>
              Elm is a domain-specific functional programming language for declaratively creating web
              browser-based graphical user interfaces.
            </p>
          </div>
          <div className={`${styles.tech} ${styles.techPos5}`}>
            <img className={styles.techImg} src={polymerIcon} alt="Polymer" />
            <p className={`${styles.textMedium} m-bottom-1`}>Polymer</p>
            <p className={`${styles.textMedium} m-bottom-2`}>Release: 2015</p>
            <p className={styles.textSmall}>
              Polymer is an open-source JavaScript library for building web applications using Web Components.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={`${styles.titleDecoration} m-top-10 m-bottom-3`}>
        <img className={styles.techImg} src={triangle} alt="Front-End Tools" />
        <p className={`${styles.titleText} ${styles.textBig}`}>Back-End Tools</p>
      </div>
      <div className={`${styles.wrapperTech} m-bottom-3`}>
        <div className={styles.containerTech}>
          <div className={`${styles.tech} ${styles.techPos1}`}>
            <img className={styles.techImg} src={railsIcon} alt="Ruby on Rails" />
            <p className={`${styles.textMedium} m-bottom-1`}>Ruby on Rails</p>
            <p className={`${styles.textMedium} m-bottom-2`}>
              <b>Release: 2005</b>
            </p>
            <p className={styles.textSmall}>
              Ruby on Rails, or Rails, is a server-side web application framework written in Ruby. Rails is an
              MVC framework, providing default structures for a database, a web service, and web pages.
            </p>
          </div>
          <div className={styles.divisorLine} />
          <div className={`${styles.tech} ${styles.techPos2}`}>
            <img className={styles.techImg} src={expressIcon} alt="NodeJS" />
            <p className={`${styles.textMedium} m-bottom-1`}>NodeJS</p>
            <p className={`${styles.textMedium} m-bottom-2`}>
              <b>Release: 2009</b>
            </p>
            <p className={styles.textSmall}>
              Node.js is a JavaScript runtime built on Chromes&#96;s V8 JavaScript engine. Uses an
              event-driven, non-blocking I/O model that makes it lightweight and efficient.
            </p>
          </div>
          <div className={`${styles.tech} ${styles.techPos3}`}>
            <img className={styles.techImg} src={aspNetIcon} alt="ASP.NET Core" />
            <p className={`${styles.textMedium} m-bottom-1`}>ASP.NET Core</p>
            <p className={`${styles.textMedium} m-bottom-2`}>Release: 2016</p>
            <p className={styles.textSmall}>
              ASP.NET Core is the next generation of ASP.NET. It is a modular framework that runs on both the
              full .NET Framework, on Windows, and the cross-plataform .NET Core.
            </p>
          </div>
          <div className={`${styles.tech} ${styles.techPos4}`}>
            <img className={styles.techImg} src={dJangoIcon} alt="Django" />
            <p className={`${styles.textMedium} m-bottom-1`}>Django</p>
            <p className={`${styles.textMedium} m-bottom-2`}>Release: 2005</p>
            <p className={styles.textSmall}>
              Django(JANG - goh) is a free open-source web framework, written in Phyton, which follows the
              model-view-template(MVT) architectural pattern.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);
export default Maquetado;
